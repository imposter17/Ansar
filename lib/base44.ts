import { createClient } from '@base44/sdk';

const appId = process.env.NEXT_PUBLIC_BASE44_APP_ID || 'masjid-help-board-dev';

export const base44 = createClient({
  appId,
  apiKey: process.env.NEXT_PUBLIC_BASE44_PUBLIC_KEY
});

export type PostCategory = 'job' | 'housing' | 'roommate' | 'service' | 'general';
export type PostStatus = 'active' | 'in_progress' | 'solved';

export interface HelpPost {
  id: string;
  title: string;
  description: string;
  category: PostCategory;
  location: string;
  budget?: number;
  status: PostStatus;
  language: string;
  createdBy: string;
  createdAt: string;
}

export async function getFeed(language: string) {
  const result = await base44.entities.posts.list({
    sort: [{ field: 'createdAt', direction: 'desc' }],
    limit: 50
  });

  return result.items.map((item: any) => ({
    ...item,
    translatedTitle: item.translations?.[language]?.title ?? item.title,
    translatedDescription: item.translations?.[language]?.description ?? item.description
  }));
}
