import { NextResponse } from 'next/server';
import { filterPlaces } from '@/lib/filters';
import { places } from '@/data/seed';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q') ?? undefined;
  const type = (searchParams.get('type') as any) ?? undefined;
  const verified = searchParams.get('verified') === 'true';
  const city = searchParams.get('city') ?? undefined;
  const state = searchParams.get('state') ?? undefined;
  const results = filterPlaces(places, { query, type, verified, city, state });
  return NextResponse.json({ results });
}
