import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY || '');

// Gemini text-embedding-004 outputs 768-dimensional vectors
const EMBEDDING_MODEL = 'text-embedding-004';

/**
 * Generate an embedding vector for a single text string.
 * Used for both document ingestion and query-time embedding.
 */
export async function embedText(text: string): Promise<number[]> {
  const model = genAI.getGenerativeModel({ model: EMBEDDING_MODEL });
  const result = await model.embedContent(text);
  return result.embedding.values;
}

/**
 * Generate embeddings for multiple texts in batch.
 * More efficient than calling embedText in a loop.
 */
export async function embedBatch(texts: string[]): Promise<number[][]> {
  const model = genAI.getGenerativeModel({ model: EMBEDDING_MODEL });
  const result = await model.batchEmbedContents({
    requests: texts.map((content) => ({
      content: { parts: [{ text: content }], role: 'user' },
    })),
  });
  return result.embeddings.map((e) => e.values);
}

/**
 * Chunk a long document into smaller pieces for better retrieval.
 * Uses a recursive semantic chunking strategy: splits by paragraphs, then sentences, then words.
 */
export function chunkDocument(
  text: string,
  maxChunkSize: number = 1000,
  overlapSize: number = 200
): string[] {
  // 1. Initial split by double newlines (paragraphs)
  return recursiveSplit(text, maxChunkSize, overlapSize, ['\n\n', '\n', '. ', ' ']);
}

function recursiveSplit(
  text: string,
  maxChunkSize: number,
  overlapSize: number,
  separators: string[]
): string[] {
  const chunks: string[] = [];
  
  if (text.length <= maxChunkSize) {
    return [text];
  }

  const separator = separators[0] || '';
  const nextSeparators = separators.slice(1);
  const splits = separator ? text.split(separator) : [text];
  
  let currentChunk = '';

  for (const split of splits) {
    const piece = currentChunk ? separator + split : split;
    
    if ((currentChunk.length + piece.length) <= maxChunkSize) {
      currentChunk += piece;
    } else {
      if (currentChunk) {
        chunks.push(currentChunk.trim());
      }
      
      // If the piece itself is too long, we need to split it recursively
      if (split.length > maxChunkSize && nextSeparators.length > 0) {
        const subChunks = recursiveSplit(split, maxChunkSize, overlapSize, nextSeparators);
        chunks.push(...subChunks.slice(0, -1)); // Add all but the last
        currentChunk = subChunks[subChunks.length - 1]; // Keep the last for overlap consideration
      } else {
        // Calculate overlap if we just split normally
        const overlapStart = Math.max(0, currentChunk.length - overlapSize);
        let overlapText = currentChunk.substring(overlapStart);
        // Clean overlap to not cut off words
        const firstSpace = overlapText.indexOf(' ');
        if (firstSpace !== -1 && firstSpace < overlapText.length / 2) {
          overlapText = overlapText.substring(firstSpace + 1);
        }
        currentChunk = overlapText + separator + split;
      }
    }
  }

  if (currentChunk.trim()) {
    chunks.push(currentChunk.trim());
  }

  return chunks;
}
