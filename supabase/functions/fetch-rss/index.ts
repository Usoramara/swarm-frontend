import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { parse } from "https://deno.land/x/rss/mod.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    console.log('Starting RSS feed processing...');
    
    // Initialize Supabase client
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // RSS feed URLs with their corresponding tags
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

    // First, clear existing news items
    console.log('Clearing existing news items...');
    const { error: deleteError } = await supabaseClient
      .from('news_items')
      .delete()
      .neq('id', '00000000-0000-0000-0000-000000000000')

    if (deleteError) {
      console.error('Error clearing existing news items:', deleteError);
      throw new Error(`Failed to clear existing news items: ${deleteError.message}`);
    }

    console.log('Successfully cleared existing news items');

    let successfulInserts = 0;
    const targetArticles = 20;
    const articlesPerFeed = Math.ceil(targetArticles / feeds.length);

    // Process each feed
    for (const feed of feeds) {
      if (successfulInserts >= targetArticles) break;

      console.log(`Fetching feed from: ${feed.url}`);
      
      try {
        const response = await fetch(feed.url, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (compatible; SWARM/1.0; +http://swarm.ai)'
          }
        });
        
        if (!response.ok) {
          console.error(`Failed to fetch ${feed.url}: ${response.statusText}`);
          continue;
        }
        
        const xml = await response.text();
        const rss = await parse(xml);

        // Process items from this feed
        const items = rss.entries.slice(0, articlesPerFeed);

        for (const item of items) {
          if (successfulInserts >= targetArticles) break;

          try {
            // Clean and truncate description
            let description = item.description?.value || item.content?.value || 'No description available';
            description = description.replace(/<[^>]*>/g, ''); // Remove HTML tags
            description = description.substring(0, 200) + (description.length > 200 ? '...' : '');

            const newsItem = {
              title: item.title?.value || 'Untitled',
              description: description,
              url: item.links[0]?.href || null,
              tag: feed.tag,
              published_at: item.published || new Date().toISOString()
            }

            console.log(`Inserting news item: ${newsItem.title}`);

            const { error: insertError } = await supabaseClient
              .from('news_items')
              .insert(newsItem);

            if (insertError) {
              console.error('Error inserting news item:', insertError);
              continue;
            }

            successfulInserts++;
            console.log(`Successfully inserted item ${successfulInserts} of ${targetArticles}`);
          } catch (itemError) {
            console.error('Error processing news item:', itemError);
            continue;
          }
        }
      } catch (feedError) {
        console.error(`Error processing feed ${feed.url}:`, feedError);
        continue;
      }
    }

    if (successfulInserts === 0) {
      throw new Error('Failed to insert any news items');
    }

    console.log(`RSS feed processing completed. Inserted ${successfulInserts} items.`);

    return new Response(
      JSON.stringify({ 
        success: true,
        message: 'RSS feeds processed successfully',
        itemsInserted: successfulInserts 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    )
  } catch (error) {
    console.error('Error processing RSS feeds:', error);
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