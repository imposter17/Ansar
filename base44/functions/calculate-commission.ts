export default async function handler(req: Request, ctx: any) {
  const { clickId, conversionValue } = await req.json();
  const click = await ctx.entities.affiliate_clicks.get(clickId);

  if (!click) {
    return new Response(JSON.stringify({ error: 'Click not found' }), { status: 404 });
  }

  const commissionAmount = Number(conversionValue) * Number(click.commissionRate);
  await ctx.entities.affiliate_clicks.update(clickId, {
    conversionStatus: 'converted',
    commissionAmount
  });

  const existing = await ctx.entities.commissions.findOne({ userId: click.userId, platform: click.network });
  if (existing) {
    await ctx.entities.commissions.update(existing.id, {
      clickCount: existing.clickCount + 1,
      conversionCount: existing.conversionCount + 1,
      grossRevenue: existing.grossRevenue + commissionAmount,
      userReward: existing.userReward + commissionAmount * 0.1
    });
  } else {
    await ctx.entities.commissions.create({
      userId: click.userId,
      platform: click.network,
      clickCount: 1,
      conversionCount: 1,
      grossRevenue: commissionAmount,
      userReward: commissionAmount * 0.1
    });
  }

  return Response.json({ success: true, commissionAmount });
}
