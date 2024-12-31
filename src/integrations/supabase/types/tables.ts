export type NewsItem = {
  created_at: string | null;
  description: string;
  id: string;
  published_at: string | null;
  tag: string;
  title: string;
  url: string | null;
}

export type Profile = {
  avatar_url: string | null;
  created_at: string;
  id: string;
  username: string | null;
  twitter_access_token: string | null;
  twitter_refresh_token: string | null;
}

export type Proposal = {
  created_at: string;
  creator_id: string | null;
  description: string;
  end_date: string;
  id: string;
  proposal_id: number;
  start_date: string;
  status: string;
  title: string;
}

export type TokenStats = {
  circulating_supply: number;
  holder_count: number;
  id: string;
  last_updated: string;
  price_usd: number | null;
  total_supply: number;
}

export type WhitelistSignup = {
  id: string;
  email: string;
  created_at: string;
}