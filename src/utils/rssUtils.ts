import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const triggerRSSUpdate = async () => {
  try {
    console.log('Starting RSS feed update...');
    const response = await supabase.functions.invoke('fetch-rss', {
      method: 'POST'
    });
    
    console.log('RSS update response:', response);
    
    if (response.error) {
      console.error('Error from RSS edge function:', response.error);
      toast.error("Failed to update RSS feeds", {
        description: response.error.message
      });
      return false;
    }

    const data = response.data;
    console.log('RSS update data:', data);
    
    if (data?.success) {
      console.log(`Successfully inserted ${data.itemsInserted} news items`);
      toast.success(`RSS feeds updated with ${data.itemsInserted} new articles`);
      return true;
    } else {
      console.error('RSS update failed:', data);
      toast.error("Failed to update RSS feeds");
      return false;
    }
  } catch (error) {
    console.error('Exception during RSS update:', error);
    toast.error("Failed to update RSS feeds", {
      description: error.message
    });
    return false;
  }
};

export const fetchNews = async () => {
  console.log("Fetching news items from database...");
  const { data, error } = await supabase
    .from('news_items')
    .select('*')
    .order('published_at', { ascending: false })
    .limit(20);

  if (error) {
    console.error("Error fetching news:", error);
    throw error;
  }

  if (!data || data.length === 0) {
    console.log("No news items found in the database");
    return [];
  }

  console.log("Successfully fetched news items:", data);
  return data;
};