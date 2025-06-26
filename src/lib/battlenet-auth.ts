import { BattleNetToken } from '@/types/index';

export class BattleNetAuth {
  private static instance: BattleNetAuth;
  private token: BattleNetToken | null = null;
  private readonly clientId = 'a3bf34fb01ad4b4683b8a767a64ee286';
  private readonly clientSecret = 'oVSFczOKxAopDV7mpBLRnA8N3AaBPgX2';
  private readonly tokenUrl = 'https://oauth.battle.net/token';

  private constructor() {}

  public static getInstance(): BattleNetAuth {
    if (!BattleNetAuth.instance) {
      BattleNetAuth.instance = new BattleNetAuth();
    }
    return BattleNetAuth.instance;
  }

  private async getAccessToken(): Promise<BattleNetToken> {
    const credentials = btoa(`${this.clientId}:${this.clientSecret}`);
    
    const response = await fetch(this.tokenUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${credentials}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'grant_type=client_credentials',
    });

    if (!response.ok) {
      throw new Error(`Failed to get access token: ${response.statusText}`);
    }

    const data = await response.json();
    return {
      ...data,
      expires_at: Date.now() + (data.expires_in * 1000),
    };
  }

  public async getValidToken(): Promise<string> {
    const now = Date.now();
    
    // Check if we have a valid token
    if (this.token && this.token.expires_at > now + 60000) { // 1 minute buffer
      return this.token.access_token;
    }

    // Get a new token
    this.token = await this.getAccessToken();
    return this.token.access_token;
  }

  public clearToken(): void {
    this.token = null;
  }
}

export const battleNetAuth = BattleNetAuth.getInstance(); 