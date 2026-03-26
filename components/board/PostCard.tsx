import Link from 'next/link';

export function PostCard({ post }: { post: any }) {
  return (
    <article className="glass-panel rounded-2xl p-5 space-y-3">
      <div className="flex justify-between items-center">
        <span className="text-xs uppercase tracking-widest text-cyan-200">{post.category}</span>
        <span className="text-xs text-slate-300">{post.status.replace('_', ' ')}</span>
      </div>
      <h3 className="text-xl font-semibold">{post.translatedTitle ?? post.title}</h3>
      <p className="text-slate-300">{post.translatedDescription ?? post.description}</p>
      <div className="flex flex-wrap gap-3 text-sm text-slate-400">
        <span>{post.location}</span>
        {post.budget ? <span>${post.budget}</span> : null}
      </div>
      <div className="flex gap-3 text-sm">
        <Link href={`/api/redirect?postId=${post.id}&network=zillow`} className="text-cyan-300 hover:text-cyan-200">Housing matches</Link>
        <Link href={`/api/redirect?postId=${post.id}&network=indeed`} className="text-violet-300 hover:text-violet-200">Job matches</Link>
      </div>
    </article>
  );
}
