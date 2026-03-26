interface CreatePostPayload {
  title: string;
  description: string;
  category: 'job' | 'housing' | 'roommate' | 'service' | 'general';
  location: string;
  budget?: number;
  language?: string;
}

export default async function handler(req: Request, ctx: any) {
  const payload = (await req.json()) as CreatePostPayload;

  if (!payload.title || !payload.description || !payload.location) {
    return new Response(JSON.stringify({ error: 'Missing required fields.' }), { status: 400 });
  }

  const user = await ctx.auth.requireUser();
  const post = await ctx.entities.posts.create({
    ...payload,
    status: 'active',
    createdBy: user.id,
    language: payload.language ?? 'en'
  });

  return Response.json(post, { status: 201 });
}
