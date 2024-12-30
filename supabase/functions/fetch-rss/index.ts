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

    // RSS feed URLs from reputable sources with their corresponding tags
    const feeds = [
      {
        url: 'https://news.google.com/rss/search?q=artificial+intelligence+swarm&hl=en-US&gl=US&ceid=US:en',
        tag: 'Development'
      },
      {
        url: 'https://news.google.com/rss/search?q=swarm+intelligence+research&hl=en-US&gl=US&ceid=US:en',
        tag: 'Development'
      },
      {
        url: 'https://news.google.com/rss/search?q=AI+collective+intelligence&hl=en-US&gl=US&ceid=US:en',
        tag: 'Impact'
      },
      {
        url: 'https://news.google.com/rss/search?q=decentralized+AI+systems&hl=en-US&gl=US&ceid=US:en',
        tag: 'Community'
      }
    ]

    console.log('Starting RSS feed processing...');

    // First, clear existing news items to ensure fresh content
    const { error: deleteError } = await supabaseClient
      .from('news_items')
      .delete()
      .neq('id', '00000000-0000-0000-0000-000000000000') // Delete all rows

    if (deleteError) {
      console.error('Error clearing existing news items:', deleteError);
    }

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

        // Process 5 items from each feed to get a total of 20 articles (4 feeds × 5 items)
        const items = rss.entries.slice(0, 5)

        for (const item of items) {
          // Clean and truncate description (remove HTML tags and limit length)
          let description = item.description?.value || item.content?.value || 'No description available'
          description = description.replace(/<[^>]*>/g, '') // Remove HTML tags
          description = description.substring(0, 200) + (description.length > 200 ? '...' : '')

          const newsItem = {
            title: item.title?.value || 'Untitled',
            description: description,
            url: item.links[0]?.href || null,
            tag: feed.tag,
            published_at: item.published || new Date().toISOString()
          }

          console.log(`Processing news item: ${newsItem.title}`);

          // Insert news items
          const { error } = await supabaseClient
            .from('news_items')
            .insert(newsItem)

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