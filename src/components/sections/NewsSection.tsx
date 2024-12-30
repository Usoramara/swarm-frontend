import { motion } from "framer-motion";
import { Newspaper, ArrowRight, ExternalLink } from "lucide-react";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface NewsItem {
  id: string;
  published_at: string;
  title: string;
  description: string;
  tag: "Development" | "Impact" | "Community";
  url?: string;
}

const fetchNews = async () => {
  console.log("Fetching news items...");
  const { data, error } = await supabase
    .from('news_items')
    .select('*')
    .order('published_at', { ascending: false })
    .limit(20);

  if (error) {
    console.error("Error fetching news:", error);
    throw error;
  }

  console.log("Fetched news items:", data);
  return data as NewsItem[];
};

const triggerRSSUpdate = async () => {
  try {
    console.log('Triggering RSS update...');
    const response = await supabase.functions.invoke('fetch-rss', {
      method: 'POST'
    });
    
    if (!response.error) {
      console.log('RSS feeds updated successfully');
      toast.success("RSS feeds updated successfully");
    } else {
      console.error('Error updating RSS feeds:', response.error);
      toast.error("Failed to update RSS feeds");
    }
  } catch (error) {
    console.error('Error updating RSS feeds:', error);
    toast.error("Failed to update RSS feeds");
  }
};

export const NewsSection = () => {
  const { data: news = [], isError, isLoading, refetch } = useQuery({
    queryKey: ['news'],
    queryFn: fetchNews,
  });

  useEffect(() => {
    // Trigger RSS update when component mounts
    triggerRSSUpdate();

    const channel = supabase
      .channel('news_updates')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'news_items'
        },
        (payload) => {
          console.log('Real-time update received:', payload);
          refetch();
          toast.success("News feed updated!", {
            description: "New content is now available.",
          });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [refetch]);

  if (isError) {
    toast.error("Failed to load news updates");
  }

  // Ensure we always have items for display
  const displayNews = isLoading 
    ? Array(6).fill(null) 
    : news.slice(0, 6);

  return (
    <section className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Latest Updates
          </h2>
          <Newspaper className="w-12 h-12 text-primary" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayNews.map((item, index) => (
            <motion.div
              key={item?.id || index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`
                bg-dark-lighter p-6 rounded-xl border-2 border-transparent 
                transition-all duration-300
                ${item?.url ? 'hover:border-primary/50 cursor-pointer' : ''}
              `}
              onClick={() => {
                if (item?.url) {
                  window.open(item.url, '_blank', 'noopener,noreferrer');
                }
              }}
            >
              {isLoading || !item ? (
                <>
                  <div className="h-6 bg-gray-700 rounded w-1/3 mb-4 animate-pulse"></div>
                  <div className="h-4 bg-gray-700 rounded w-3/4 mb-2 animate-pulse"></div>
                  <div className="h-4 bg-gray-700 rounded w-full mb-4 animate-pulse"></div>
                  <div className="h-4 bg-gray-700 rounded w-1/2 animate-pulse"></div>
                </>
              ) : (
                <>
                  <div className="flex justify-between items-start mb-4">
                    <span className={`
                      px-3 py-1 rounded-full text-sm font-medium
                      ${item.tag === 'Development' ? 'bg-primary/20 text-primary' : ''}
                      ${item.tag === 'Impact' ? 'bg-secondary/20 text-secondary' : ''}
                      ${item.tag === 'Community' ? 'bg-purple-500/20 text-purple-500' : ''}
                    `}>
                      {item.tag}
                    </span>
                    <span className="text-sm text-gray-400">
                      {new Date(item.published_at).toLocaleDateString()}
                    </span>
                  </div>
                  
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-400 mb-4">{item.description}</p>
                    </div>
                    {item.url && (
                      <ExternalLink className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    )}
                  </div>
                  
                  {item.url && (
                    <div className="flex items-center text-primary hover:text-primary-hover transition-colors">
                      <span className="text-sm">Read full article</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  )}
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};