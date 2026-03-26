const networkByCategory: Record<string, string[]> = {
  job: ['indeed', 'glassdoor', 'ziprecruiter'],
  housing: ['zillow', 'airbnb', 'realtor'],
  roommate: ['zillow', 'airbnb'],
  service: ['indeed'],
  general: ['indeed', 'zillow']
};

export default async function handler(req: Request, ctx: any) {
  const { postId } = await req.json();
  const post = await ctx.entities.posts.get(postId);

  if (!post) {
    return new Response(JSON.stringify({ error: 'Post not found' }), { status: 404 });
  }

  const relatedPosts = await ctx.entities.posts.list({
    filter: {
      category: post.category,
      location: post.location,
      status: 'active'
    },
    limit: 8
  });

  const external = networkByCategory[post.category].map((network) => ({
    network,
    keyword: `${post.title} ${post.location}`
  }));

  return Response.json({ internal: relatedPosts.items, external });
}
