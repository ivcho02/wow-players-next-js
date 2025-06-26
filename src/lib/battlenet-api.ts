import { BattleNetAuth } from './battlenet-auth';
import { CharacterProfile } from '@/types/index';

export class BattleNetAPI {
  private battleNetAuth: BattleNetAuth;
  private readonly characterUrl: string;
  constructor() {
    this.battleNetAuth = new BattleNetAuth();
    this.characterUrl = process.env.BATTLENET_CHARACTER_EU_URL || '';

    if (!this.characterUrl) {
      throw new Error('BATTLENET_CHARACTER_EU_URL not found');
    }
  }

  async getCharacterProfile(realm: string, name: string, locale: string): Promise<CharacterProfile> {
    const token = await this.battleNetAuth.getValidToken();
    const characterUrl = `${this.characterUrl}${realm}/${name}?namespace=profile-eu&locale=${locale}`;
    
    const response = await fetch(characterUrl, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('Character not found');
      }
      throw new Error(`Failed to fetch character data: ${response.statusText}`);
    }

    return await response.json();
  }
}

export const battleNetAPI = new BattleNetAPI(); 