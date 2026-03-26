export default function AdminPage() {
  return (
    <main className="space-y-4">
      <section className="glass-panel rounded-2xl p-6">
        <h1 className="text-3xl font-display">Admin dashboard</h1>
        <p className="text-slate-300">Moderate posts, manage affiliate partners, and monitor click/conversion revenue.</p>
      </section>
      <section className="grid gap-4 md:grid-cols-3">
        <article className="glass-panel rounded-2xl p-4">
          <h2 className="font-semibold">Pending moderation</h2>
          <p className="text-3xl mt-2">12</p>
        </article>
        <article className="glass-panel rounded-2xl p-4">
          <h2 className="font-semibold">Today clicks</h2>
          <p className="text-3xl mt-2">387</p>
        </article>
        <article className="glass-panel rounded-2xl p-4">
          <h2 className="font-semibold">Projected revenue</h2>
          <p className="text-3xl mt-2">$2,190</p>
        </article>
      </section>
    </main>
  );
}
