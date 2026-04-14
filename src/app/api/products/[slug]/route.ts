import { NextRequest, NextResponse } from 'next/server';

type RouteContext = {
  params: Promise<{
    slug: string;
  }>;
};

export async function GET(_request: NextRequest, context: RouteContext) {
  const { slug } = await context.params;

  // Minimal placeholder response so builds succeed.
  // Replace with real lookup logic when you wire up products.
  return NextResponse.json({ slug }, { status: 200 });
}

