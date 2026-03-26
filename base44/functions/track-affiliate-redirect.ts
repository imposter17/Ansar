const networkBaseUrls: Record<string, string> = {
  indeed: 'https://www.indeed.com',
  glassdoor: 'https://www.glassdoor.com',
  ziprecruiter: 'https://www.ziprecruiter.com',
  zillow: 'https://www.zillow.com',
  airbnb: 'https://www.airbnb.com',
  realtor: 'https://www.realtor.com'
};

function getRate(network: string): number {
  if (network === 'airbnb') return 0.3;
  if (network === 'zillow' || network === 'realtor') return 0.2;
  return 0.1;
}

export default async function handler(req: Request, ctx: any) {
  const { postId, network, q } = await req.json();
  const user = await ctx.auth.getUser();
  const rate = getRate(network);
  const targetUrl = `${networkBaseUrls[network]}?utm_source=masjid_help_board&utm_campaign=${postId}&q=${encodeURIComponent(q ?? '')}`;

  const click = await ctx.entities.affiliate_clicks.create({
    postId,
    userId: user?.id,
    network,
    targetUrl,
    commissionRate: rate,
    conversionStatus: 'clicked'
  });

  return Response.json({ clickId: click.id, targetUrl });
}
