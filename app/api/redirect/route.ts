import { NextRequest, NextResponse } from 'next/server';

const links: Record<string, string> = {
  indeed: 'https://www.indeed.com',
  glassdoor: 'https://www.glassdoor.com',
  ziprecruiter: 'https://www.ziprecruiter.com',
  zillow: 'https://www.zillow.com',
  airbnb: 'https://www.airbnb.com',
  realtor: 'https://www.realtor.com'
};

export async function GET(request: NextRequest) {
  const network = request.nextUrl.searchParams.get('network') || 'indeed';
  const target = links[network] || links.indeed;

  // In production this route should call Base44 function `track-affiliate-redirect`.
  return NextResponse.redirect(target);
}
