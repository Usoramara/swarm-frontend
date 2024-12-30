import { Newspaper } from "lucide-react";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { NewsCard } from "../news/NewsCard";
import { fetchNews, triggerRSSUpdate } from "@/utils/rssUtils";

export const NewsSection = () => {
  const { data: news = [], isError, isLoading, refetch } = useQuery({
    queryKey: ['news'],
    queryFn: fetchNews,
  });

  useEffect(() => {
    console.log('NewsSection mounted, triggering RSS update...');
    triggerRSSUpdate().then((success) => {
      if (success) {
        console.log('RSS update successful, refetching news...');
        refetch();
      }
    }).catch((error) => {
      console.error('Failed to trigger RSS update:', error);
      toast.error("Failed to update RSS feeds", {
        description: error.message
      });
    });

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
      console.log('NewsSection unmounting, cleaning up...');
      supabase.removeChannel(channel);
    };
  }, [refetch]);

  if (isError) {
    console.error("Failed to load news updates");
    toast.error("Failed to load news updates");
  }

  // Show loading state
  if (isLoading) {
    return (
      <section className="py-20 bg-dark">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">
              Latest Updates
            </h2>
            <Newspaper className="w-12 h-12 text-primary animate-pulse" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Array(6).fill(null).map((_, index) => (
              <div key={index} className="bg-dark-lighter p-6 rounded-xl animate-pulse">
                <div className="h-6 bg-gray-700 rounded w-1/3 mb-4"></div>
                <div className="h-4 bg-gray-700 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-700 rounded w-full mb-4"></div>
                <div className="h-4 bg-gray-700 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Show message if no news items
  if (!news || news.length === 0) {
    return (
      <section className="py-20 bg-dark">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">
              Latest Updates
            </h2>
            <Newspaper className="w-12 h-12 text-primary" />
          </div>
          <div className="text-center py-12">
            <p className="text-gray-400">No news articles available at the moment. Please check back later.</p>
          </div>
        </div>
      </section>
    );
  }

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
          {news.slice(0, 6).map((item, index) => (
            <NewsCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};