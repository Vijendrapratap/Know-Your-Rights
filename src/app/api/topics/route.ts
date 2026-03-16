import { NextRequest, NextResponse } from 'next/server';
import { categories } from '@/data/categories';
import { topics } from '@/data/topics';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const categoryId = searchParams.get('category');

  if (categoryId) {
    const category = categories.find((c) => c.id === categoryId);
    if (!category) {
      return NextResponse.json({ error: 'Category not found' }, { status: 404 });
    }
    const categoryTopics = topics.filter((t) => t.categoryId === categoryId);
    return NextResponse.json({ category, topics: categoryTopics });
  }

  return NextResponse.json({ categories, totalTopics: topics.length });
}
