export default async function handler(req: Request, ctx: any) {
  const { id, ...updates } = await req.json();
  const user = await ctx.auth.requireUser();
  const existing = await ctx.entities.posts.get(id);

  if (!existing || existing.createdBy !== user.id) {
    return new Response(JSON.stringify({ error: 'Not allowed.' }), { status: 403 });
  }

  const updated = await ctx.entities.posts.update(id, updates);
  return Response.json(updated);
}
