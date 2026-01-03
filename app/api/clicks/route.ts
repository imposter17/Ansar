import { NextResponse } from 'next/server';
import { logJobClick } from '@/lib/jobs';

export async function POST(request: Request) {
  const body = await request.json();
  const { partnerId, entityType, entityId, outboundUrl, userId } = body;
  const entry = logJobClick({ partnerId, entityType, entityId, outboundUrl, userId });
  return NextResponse.json({ entry }, { status: 201 });
}
