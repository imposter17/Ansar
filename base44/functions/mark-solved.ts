export default async function handler(req: Request, ctx: any) {
  const { postId } = await req.json();
  const user = await ctx.auth.requireUser();
  const post = await ctx.entities.posts.get(postId);

  if (!post || post.createdBy !== user.id) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 403 });
  }

  const saved = await ctx.entities.posts.update(postId, { status: 'solved' });
  return Response.json(saved);
}
