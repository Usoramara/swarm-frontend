import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { parse } from "https://deno.land/x/rss/mod.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Initialize Supabase client
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // RSS feed URLs from reputable sources
    const feeds = [
      {
        url: 'https://blog.ethereum.org/feed.xml',
        tag: 'Development'
      },
      {
        url: 'https://weekinethereumnews.com/feed/',
        tag: 'Development'
      },
      {
        url: 'https://ethereum.foundation/feed.xml',
        tag: 'Impact'
      },
      {
        url: 'https://blog.ethglobal.com/rss/',
        tag: 'Community'
      },
      {
        url: 'https://consensys.net/blog/feed/',
        tag: 'Development'
      }
    ]

    console.log('Starting RSS feed processing...');

    // Fetch and process each feed
    for (const feed of feeds) {
      console.log(`Fetching feed from: ${feed.url}`);
      try {
        const response = await fetch(feed.url)
        if (!response.ok) {
          console.error(`Failed to fetch ${feed.url}: ${response.statusText}`);
          continue;
        }
        
        const xml = await response.text()
        const rss = await parse(xml)

        // Process only the latest 2 items from each feed to avoid overwhelming
        const items = rss.entries.slice(0, 2)

        for (const item of items) {
          const newsItem = {
            title: item.title?.value || 'Untitled',
            description: item.description?.value || item.content?.value || 'No description available',
            url: item.links[0]?.href || null,
            tag: feed.tag,
            published_at: item.published || new Date().toISOString()
          }

          console.log(`Processing news item: ${newsItem.title}`);

          // Insert or update news items
          const { error } = await supabaseClient
            .from('news_items')
            .upsert(newsItem, {
              onConflict: 'title'
            })

          if (error) {
            console.error('Error inserting news item:', error)
          }
        }
      } catch (feedError) {
        console.error(`Error processing feed ${feed.url}:`, feedError);
        // Continue with other feeds even if one fails
        continue;
      }
    }

    return new Response(
      JSON.stringify({ message: 'RSS feeds processed successfully' }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    )
  } catch (error) {
    console.error('Error processing RSS feeds:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    )
  }
})