import { BattleNetToken } from '@/types/index';

export class BattleNetAuth {
    private token: BattleNetToken | null = null;
    private readonly clientId: string;
    private readonly clientSecret: string;
    private readonly tokenUrl: string;

    public constructor() {
        // Get credentials from environment variables
        this.clientId = process.env.BATTLENET_CLIENT_ID || '';
        this.clientSecret = process.env.BATTLENET_CLIENT_SECRET || '';
        this.tokenUrl = process.env.BATTLENET_TOKEN_URL || '';

        if (!this.clientId || !this.clientSecret || !this.tokenUrl) {
            throw new Error('Battle.net API credentials not found. Please set BATTLENET_CLIENT_ID and BATTLENET_CLIENT_SECRET in your .env.local file.');
        }
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
        if (this.token && this.token.expires_at > now + 600000) { // 10 minutes buffer
            return this.token.access_token;
        }

        // Get a new token
        this.token = await this.getAccessToken();
        return this.token.access_token;
    }
} 