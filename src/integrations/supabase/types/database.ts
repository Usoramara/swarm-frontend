import { NewsItem, Profile, Proposal, TokenStats, WhitelistSignup } from './tables';

export type Database = {
  public: {
    Tables: {
      news_items: {
        Row: NewsItem;
        Insert: Partial<NewsItem>;
        Update: Partial<NewsItem>;
        Relationships: [];
      };
      profiles: {
        Row: Profile;
        Insert: Partial<Profile>;
        Update: Partial<Profile>;
        Relationships: [];
      };
      proposals: {
        Row: Proposal;
        Insert: Partial<Proposal>;
        Update: Partial<Proposal>;
        Relationships: [
          {
            foreignKeyName: "proposals_creator_id_fkey";
            columns: ["creator_id"];
            isOneToOne: false;
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          }
        ];
      };
      token_stats: {
        Row: TokenStats;
        Insert: Partial<TokenStats>;
        Update: Partial<TokenStats>;
        Relationships: [];
      };
      whitelist_signups: {
        Row: WhitelistSignup;
        Insert: Partial<WhitelistSignup>;
        Update: Partial<WhitelistSignup>;
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};