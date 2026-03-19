export async function rerankDocuments(
  query: string,
  documents: { text: string; [key: string]: any }[],
  topN: number = 5
) {
  const apiKey = process.env.COHERE_API_KEY;
  
  if (!apiKey) {
    console.warn('COHERE_API_KEY is not set. Skipping reranking and returning original top results.');
    return documents.slice(0, topN);
  }

  try {
    const response = await fetch('https://api.cohere.ai/v1/rerank', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'rerank-english-v3.0',
        query: query,
        documents: documents.map(doc => doc.text),
        top_n: topN,
      }),
    });

    if (!response.ok) {
      console.error('Cohere Rerank API error:', await response.text());
      return documents.slice(0, topN); // fallback
    }

    const data = await response.json();
    
    // Cohere returns results sorted by relevance: { results: [{ index, relevance_score }] }
    const rerankedDocs = data.results.map((result: any) => ({
      ...documents[result.index],
      relevanceScore: result.relevance_score,
    }));

    return rerankedDocs;
  } catch (error) {
    console.error('Error during reranking fallback to standard retrieval:', error);
    return documents.slice(0, topN);
  }
}
