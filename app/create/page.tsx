'use client';

import { useState } from 'react';
import { base44 } from '@/lib/base44';

export default function CreatePage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  async function onSubmit(formData: FormData) {
    setLoading(true);
    setMessage('');
    const payload = {
      title: String(formData.get('title') || ''),
      description: String(formData.get('description') || ''),
      category: String(formData.get('category') || 'general'),
      location: String(formData.get('location') || ''),
      budget: formData.get('budget') ? Number(formData.get('budget')) : null,
      status: 'active',
      language: 'en'
    };

    try {
      await base44.functions.call('create-post', payload);
      setMessage('Post published successfully.');
    } catch {
      setMessage('Unable to publish right now. Verify Base44 keys in .env.local.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="glass-panel rounded-2xl p-6">
      <h1 className="text-3xl font-display mb-4">Create a post</h1>
      <form action={onSubmit} className="grid gap-3 md:grid-cols-2">
        <input name="title" required placeholder="Title" className="rounded-xl bg-slate-900 border border-white/20 px-3 py-2" />
        <input name="location" required placeholder="Location" className="rounded-xl bg-slate-900 border border-white/20 px-3 py-2" />
        <select name="category" className="rounded-xl bg-slate-900 border border-white/20 px-3 py-2">
          <option value="job">Job</option>
          <option value="housing">Housing</option>
          <option value="roommate">Roommate</option>
          <option value="service">Service</option>
          <option value="general">General help</option>
        </select>
        <input name="budget" type="number" placeholder="Budget (optional)" className="rounded-xl bg-slate-900 border border-white/20 px-3 py-2" />
        <textarea name="description" required placeholder="Describe your need or offer" className="md:col-span-2 rounded-xl bg-slate-900 border border-white/20 px-3 py-2 min-h-32" />
        <button disabled={loading} className="md:col-span-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 px-4 py-2 font-semibold">{loading ? 'Publishing…' : 'Publish post'}</button>
      </form>
      {message ? <p className="mt-3 text-sm text-cyan-200">{message}</p> : null}
    </main>
  );
}
