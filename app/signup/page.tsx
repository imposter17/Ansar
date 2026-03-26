'use client';

export default function SignupPage() {
  return (
    <main className="glass-panel rounded-2xl p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-display mb-4">Create account</h1>
      <form className="grid gap-3">
        <input placeholder="Name" className="rounded-xl bg-slate-900 border border-white/20 px-3 py-2" />
        <input placeholder="Email" type="email" className="rounded-xl bg-slate-900 border border-white/20 px-3 py-2" />
        <input placeholder="Password" type="password" className="rounded-xl bg-slate-900 border border-white/20 px-3 py-2" />
        <button className="rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 px-4 py-2 font-semibold">Sign up</button>
      </form>
    </main>
  );
}
