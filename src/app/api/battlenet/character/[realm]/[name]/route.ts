import { NextRequest, NextResponse } from 'next/server';
import { CharacterProfile } from '@/types/battlenet';
import { battleNetAuth } from '@/lib/battlenet-auth';

export async function GET(
  request: NextRequest,
  { params }: { params: { realm: string; name: string } }
) {
  try {
    const { realm, name } = params;
    const token = await battleNetAuth.getValidToken();
    
    const characterUrl = `https://eu.api.blizzard.com/profile/wow/character/${realm}/${name}?namespace=profile-eu&locale=en_US`;
    
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
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch character data' },
      { status: 500 }
    );
  }
} 