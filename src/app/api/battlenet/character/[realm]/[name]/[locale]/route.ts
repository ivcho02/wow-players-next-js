import { NextRequest, NextResponse } from 'next/server';
import { CharacterProfile } from '@/types/battlenet';
import { battleNetAuth } from '@/lib/battlenet-auth';

const CHARACTER_URL = "https://eu.api.blizzard.com/profile/wow/character/";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ realm: string; name: string; locale: string }> }
) {
  try {
    const { realm, name, locale } = await params;
    const token = await battleNetAuth.getValidToken();
    
    const characterUrl = `${CHARACTER_URL}${realm}/${name}?namespace=profile-eu&locale=${locale}`;
    
    const response = await fetch(characterUrl, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      if (response.status === 404) {
        return NextResponse.json(
          { success: false, error: 'Character not found' },
          { status: 404 }
        );
      }
      throw new Error(`Failed to fetch character data: ${response.statusText}`);
    }

    const characterData: CharacterProfile = await response.json();
    
    return NextResponse.json({ 
      success: true, 
      character: characterData 
    });
  } catch {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch character data' },
      { status: 500 }
    );
  }
} 