export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  topicCount: number;
  color: string;
}

export interface Source {
  title: string;
  section: string;
  url?: string;
  type: 'constitution' | 'statute' | 'case-law' | 'regulation' | 'commentary';
}

export interface Topic {
  id: string;
  categoryId: string;
  title: string;
  summary: string;
  simplifiedText: string;
  originalText: string;
  sources: Source[];
  relatedTopicIds: string[];
}

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  sources?: Source[];
  timestamp: Date;
}

export interface ChatResponse {
  answer: string;
  sources: Source[];
}
