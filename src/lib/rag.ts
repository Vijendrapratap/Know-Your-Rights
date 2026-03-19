import { GoogleGenerativeAI } from '@google/generative-ai';
import { createAdminClient } from './supabase';
import { embedText } from './embeddings';
import { rerankDocuments } from './reranker';
import type { Source } from '@/types';
import type { Jurisdiction, SupportedLanguage } from '@/types/database';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY || '');
const LLM_MODEL = 'gemini-2.0-flash';

interface RAGOptions {
  jurisdiction?: Jurisdiction;
  language?: SupportedLanguage;
  category?: string;
  maxResults?: number;
  similarityThreshold?: number;
}

interface RAGResponse {
  answer: string;
  sources: Source[];
  retrievedDocuments: number;
}

/**
 * Core RAG pipeline:
 * 1. Embed the user's query
 * 2. Search Supabase pgvector for similar legal documents
 * 3. Rerank the matched documents to ensure high precision
 * 4. Build a context-aware prompt
 * 5. Generate an answer with Gemini LLM
 * 6. Return answer with source citations
 */
export async function queryRAG(
  question: string,
  options: RAGOptions = {}
): Promise<RAGResponse> {
  const {
    jurisdiction,
    language = 'en',
    category,
    maxResults = 5,
    similarityThreshold = 0.4,
  } = options;

  // Step 1: Embed the query
  const queryEmbedding = await embedText(question);

  // Step 2: Search for relevant legal documents (fetch extra for reranking)
  const fetchCount = maxResults * 3;
  const supabase = createAdminClient();
  const { data, error } = await (supabase.rpc as any)('match_legal_documents', {
    query_embedding: queryEmbedding as unknown as string,
    match_threshold: similarityThreshold,
    match_count: fetchCount,
    filter_jurisdiction: jurisdiction || null,
    filter_language: language || 'en',
    filter_category: category || null,
  });

  const matches = data as any[] | null;

  if (error) {
    console.error('RAG search error:', error);
    throw new Error('Failed to search legal documents');
  }

  if (!matches || matches.length === 0) {
    return {
      answer: generateFallbackAnswer(question),
      sources: [],
      retrievedDocuments: 0,
    };
  }

  // Step 3: Rerank the documents using Cohere
  const documentsToRerank = (matches as any[]).map((m: any) => ({
    ...m,
    text: m.content
  }));
  const rerankedMatches = await rerankDocuments(question, documentsToRerank, maxResults);

  // Step 4: Build context from retrieved and reranked documents
  const context = rerankedMatches
    .map(
      (doc: any, i: number) =>
        `[Document ${i + 1}] (${doc.source_title}, ${doc.source_section})\n` +
        `Title: ${doc.title}\n` +
        `Simplified: ${doc.simplified_content}\n` +
        `Original: ${doc.content}\n`
    )
    .join('\n---\n');

  // Step 5: Generate answer with Gemini
  const model = genAI.getGenerativeModel({ model: LLM_MODEL });

  const prompt = buildPrompt(question, context, language);
  const result = await model.generateContent(prompt);
  const answer = result.response.text();

  // Step 6: Extract unique sources
  const sourcesMap = new Map<string, Source>();
  for (const doc of rerankedMatches) {
    const key = `${doc.source_title}|${doc.source_section}`;
    if (!sourcesMap.has(key)) {
      sourcesMap.set(key, {
        title: doc.source_title,
        section: doc.source_section,
        type: doc.source_type as Source['type'],
        url: doc.source_url || undefined,
      });
    }
  }

  return {
    answer,
    sources: Array.from(sourcesMap.values()),
    retrievedDocuments: rerankedMatches.length,
  };
}

function buildPrompt(
  question: string,
  context: string,
  language: string
): string {
  const languageInstruction =
    language !== 'en'
      ? `\nIMPORTANT: Respond in the language code "${language}". Use the local script (e.g., Devanagari for Hindi, Bengali script for Bengali, Tamil script for Tamil). Keep legal terms in English where appropriate.`
      : '';

  return `You are a legal information assistant for KnowYourRights. Your role is to explain legal concepts in simple, accessible language that any citizen can understand.

RULES:
1. Answer ONLY based on the retrieved legal documents provided below. Do NOT make up legal provisions.
2. Always mention the exact legal source (Article number, Section number, Act name) in your answer.
3. Use simple language — assume the reader has no legal background.
4. Structure your answer clearly with bullet points or numbered lists.
5. If the retrieved documents don't contain enough information to answer, say so honestly.
6. Add a brief disclaimer that this is general legal information, not legal advice.
7. Use Markdown formatting for readability (bold for key terms, headers for sections).
${languageInstruction}

RETRIEVED LEGAL DOCUMENTS:
${context}

USER QUESTION:
${question}

Provide a comprehensive, well-structured answer based on the legal documents above:`;
}

function generateFallbackAnswer(question: string): string {
  return `I appreciate your question: "${question}"

Unfortunately, I couldn't find specific legal documents in my knowledge base that directly address this query.

**Here's what you can do:**
- Try rephrasing your question with more specific legal terms
- Browse our **[Knowledge Base](/knowledge-base)** for topics related to your question
- For urgent legal matters, contact **NALSA Legal Aid Helpline: 15100** (toll-free)

**Topics I can help with:**
- ⚖️ Fundamental Rights (Articles 14–32)
- 🛡️ Criminal Law (arrest, bail, FIR)
- 🛒 Consumer Rights (complaints, product liability)
- 👷 Labor & Employment (wages, safety, termination)
- 🔐 Digital & Privacy Rights (data protection, cyber crime)
- 🏠 Property Rights (ownership, tenancy, inheritance)

> *This is general legal information, not legal advice. For specific legal situations, consult a qualified lawyer.*`;
}
