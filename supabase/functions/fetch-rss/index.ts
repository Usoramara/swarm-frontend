import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface TTRSSResponse {
  status: number;
  content: {
    title: string;
    link: string;
    content: string;
    published: string;
  }[];
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    console.log('Starting TT-RSS feed processing...');
    
    // Initialize Supabase client
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const TTRSS_URL = Deno.env.get('TTRSS_URL');
    const TTRSS_USER = Deno.env.get('TTRSS_USER');
    const TTRSS_PASSWORD = Deno.env.get('TTRSS_PASSWORD');

    if (!TTRSS_URL || !TTRSS_USER || !TTRSS_PASSWORD) {
      throw new Error('TT-RSS credentials not configured');
    }

    // First, authenticate with TT-RSS
    console.log('Authenticating with TT-RSS...');
    const authResponse = await fetch(`${TTRSS_URL}/api/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        op: 'login',
        user: TTRSS_USER,
        password: TTRSS_PASSWORD,
      }),
    });

    const authData = await authResponse.json();
    if (!authData.session_id) {
      throw new Error('Failed to authenticate with TT-RSS');
    }

    // Get articles from TT-RSS
    console.log('Fetching articles from TT-RSS...');
    const articlesResponse = await fetch(`${TTRSS_URL}/api/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        op: 'getHeadlines',
        sid: authData.session_id,
        feed_id: -4, // All articles
        limit: 20,
        show_content: true,
      }),
    });

    const articlesData = await articlesResponse.json();
    if (!articlesData.content) {
      throw new Error('Failed to fetch articles from TT-RSS');
    }

    // Clear existing news items
    console.log('Clearing existing news items...');
    const { error: deleteError } = await supabaseClient
      .from('news_items')
      .delete()
      .neq('id', '00000000-0000-0000-0000-000000000000');

    if (deleteError) {
      throw new Error(`Failed to clear existing news items: ${deleteError.message}`);
    }

    // Process and insert new articles
    let successfulInserts = 0;
    const categories = ['Development', 'Impact', 'Community'];

    for (const article of articlesData.content) {
      try {
        // Clean and truncate description
        let description = article.content || 'No description available';
        description = description.replace(/<[^>]*>/g, '');
        description = description.substring(0, 200) + (description.length > 200 ? '...' : '');

        const newsItem = {
          title: article.title,
          description: description,
          url: article.link,
          tag: categories[Math.floor(Math.random() * categories.length)], // Randomly assign a category
          published_at: article.published
        };

        console.log(`Inserting news item: ${newsItem.title}`);

        const { error: insertError } = await supabaseClient
          .from('news_items')
          .insert(newsItem);

        if (insertError) {
          console.error('Error inserting news item:', insertError);
          continue;
        }

        successfulInserts++;
        console.log(`Successfully inserted item ${successfulInserts}`);
      } catch (itemError) {
        console.error('Error processing news item:', itemError);
        continue;
      }
    }

    if (successfulInserts === 0) {
      throw new Error('Failed to insert any news items');
    }

    console.log(`TT-RSS feed processing completed. Inserted ${successfulInserts} items.`);

    return new Response(
      JSON.stringify({ 
        success: true,
        message: 'TT-RSS feeds processed successfully',
        itemsInserted: successfulInserts 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    )
  } catch (error) {
    console.error('Error processing TT-RSS feeds:', error);
    return new Response(
      JSON.stringify({ 
        success: false,
        error: error.message,
        details: error.stack 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    )
  }
})