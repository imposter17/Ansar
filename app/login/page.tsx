'use client';

import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="glass-panel rounded-2xl p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-display mb-4">Login</h1>
      <form className="grid gap-3">
        <input placeholder="Email" type="email" className="rounded-xl bg-slate-900 border border-white/20 px-3 py-2" />
        <input placeholder="Password" type="password" className="rounded-xl bg-slate-900 border border-white/20 px-3 py-2" />
        <button className="rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 px-4 py-2 font-semibold">Login</button>
      </form>
      <p className="text-sm mt-3 text-slate-300">Need an account? <Link href="/signup" className="text-cyan-300">Sign up</Link></p>
    </main>
  );
}
