import { base44 } from '@/lib/base44';
import { PostCard } from '@/components/board/PostCard';

async function getPosts() {
  try {
    const { items } = await base44.entities.posts.list({ limit: 30, sort: [{ field: 'createdAt', direction: 'desc' }] });
    return items;
  } catch {
    return [
      {
        id: 'demo-1',
        title: 'Need a 1-bedroom near masjid',
        description: 'Family of 3 looking for halal-friendly apartment near downtown Dallas.',
        category: 'housing',
        status: 'active',
        location: 'Dallas, TX',
        budget: 1600
      }
    ];
  }
}

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <main className="space-y-4">
      <section className="glass-panel rounded-2xl p-6">
        <h1 className="text-4xl font-display font-semibold">Community requests, solved faster.</h1>
        <p className="text-slate-300 mt-2">Post needs, discover internal matches, and route users to affiliate platforms with commission tracking.</p>
      </section>
      <section className="grid gap-4">
        {posts.map((post: any) => <PostCard key={post.id} post={post} />)}
      </section>
    </main>
  );
}
