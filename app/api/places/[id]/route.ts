import { NextResponse } from 'next/server';
import { getPlaceById } from '@/lib/db';

interface Props {
  params: { id: string };
}

export async function GET(_request: Request, { params }: Props) {
  const place = getPlaceById(params.id);
  if (!place) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(place);
}
