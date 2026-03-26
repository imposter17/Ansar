'use client';

import { useMemo, useState } from 'react';

const demoPosts = [
  { id: '1', title: 'Need warehouse job', category: 'job', location: 'Houston, TX' },
  { id: '2', title: 'Roommate needed', category: 'roommate', location: 'Chicago, IL' },
  { id: '3', title: 'Need moving service', category: 'service', location: 'Phoenix, AZ' }
];

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');

  const filtered = useMemo(
    () => demoPosts.filter((post) => (category === 'all' || post.category === category) && `${post.title} ${post.location}`.toLowerCase().includes(query.toLowerCase())),
    [query, category]
  );

  return (
    <main className="space-y-4">
      <section className="glass-panel rounded-2xl p-6 grid gap-3 md:grid-cols-3">
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search title or location" className="rounded-xl bg-slate-900 border border-white/20 px-3 py-2 md:col-span-2" />
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="rounded-xl bg-slate-900 border border-white/20 px-3 py-2">
          <option value="all">All categories</option>
          <option value="job">Jobs</option>
          <option value="housing">Housing</option>
          <option value="roommate">Roommates</option>
          <option value="service">Services</option>
        </select>
      </section>
      <section className="grid gap-3">
        {filtered.map((item) => (
          <article key={item.id} className="glass-panel rounded-2xl p-4">
            <h2 className="font-semibold">{item.title}</h2>
            <p className="text-sm text-slate-400">{item.category} · {item.location}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
