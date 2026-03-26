import Link from 'next/link';

export default function DashboardPage() {
  return (
    <main className="grid gap-4 md:grid-cols-2">
      <section className="glass-panel rounded-2xl p-6">
        <h1 className="text-2xl font-display mb-2">My posts</h1>
        <p className="text-slate-300">Track statuses: active, in progress, solved.</p>
        <Link href="/create" className="inline-block mt-4 text-cyan-300">Create another post</Link>
      </section>
      <section className="glass-panel rounded-2xl p-6">
        <h2 className="text-2xl font-display mb-2">Saved posts</h2>
        <p className="text-slate-300">Favorites and followed requests appear here.</p>
        <Link href="/favorites" className="inline-block mt-4 text-violet-300">Open favorites</Link>
      </section>
      <section className="glass-panel rounded-2xl p-6 md:col-span-2">
        <h2 className="text-2xl font-display mb-2">Notifications</h2>
        <ul className="text-slate-300 space-y-1 list-disc list-inside">
          <li>New response to your housing request.</li>
          <li>3 external affiliate matches found for your job post.</li>
          <li>Status updated to in progress.</li>
        </ul>
      </section>
    </main>
  );
}
