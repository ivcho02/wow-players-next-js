import { NextRequest, NextResponse } from 'next/server';
import { battleNetAPI } from '@/lib/battlenet-api';

export const dynamic = 'force-dynamic';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ realm: string; name: string; locale: string }> }
) {
  try {
    const { realm, name, locale } = await params;
    const characterData = await battleNetAPI.getCharacterProfile(realm, name, locale);
    
    return NextResponse.json({ 
      success: true, 
      character: characterData 
    });
  } catch (error) {
    if (error instanceof Error && error.message === 'Character not found') {
      return NextResponse.json(
        { success: false, error: 'Character not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(
      { success: false, error: 'Failed to fetch character data' },
      { status: 500 }
    );
  }
} 