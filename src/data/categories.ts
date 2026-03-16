import { Category } from '@/types';

export const categories: Category[] = [
  {
    id: 'fundamental-rights',
    name: 'Fundamental Rights',
    description: 'Core rights guaranteed to every citizen under the Constitution of India, including equality, freedom, and protection against exploitation.',
    icon: '⚖️',
    topicCount: 6,
    color: '#f59e0b',
  },
  {
    id: 'criminal-law',
    name: 'Criminal Law',
    description: 'Understanding your rights when dealing with police, arrests, bail, and the criminal justice system.',
    icon: '🛡️',
    topicCount: 4,
    color: '#ef4444',
  },
  {
    id: 'consumer-rights',
    name: 'Consumer Rights',
    description: 'Your rights as a consumer — warranties, refunds, unfair trade practices, and how to file complaints.',
    icon: '🛒',
    topicCount: 3,
    color: '#10b981',
  },
  {
    id: 'labor-rights',
    name: 'Labor & Employment',
    description: 'Workplace protections including minimum wages, working hours, workplace safety, and termination rights.',
    icon: '👷',
    topicCount: 4,
    color: '#3b82f6',
  },
  {
    id: 'digital-rights',
    name: 'Digital & Privacy Rights',
    description: 'Data protection, online privacy, cyber laws, and your rights in the digital world.',
    icon: '🔐',
    topicCount: 3,
    color: '#8b5cf6',
  },
  {
    id: 'property-rights',
    name: 'Property Rights',
    description: 'Land ownership, tenant rights, inheritance laws, and property dispute resolution.',
    icon: '🏠',
    topicCount: 3,
    color: '#06b6d4',
  },
];
