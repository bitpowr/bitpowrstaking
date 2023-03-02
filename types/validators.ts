export type ValidatorStakeView = {
    id: string;
    vote: string;
    apy: number
}

export type ValidatorInfo = {
    name: string;
    account: string;
    network: string;
    www_url: string;
    avatar_url?: string;
    details: string;
    url: string;
    created_at: string;
    updated_at: string;
    total_score: number;
    active_stake: number;
    commission: number;
    [x: string]: unknown // gracefully handle new api response changes
}