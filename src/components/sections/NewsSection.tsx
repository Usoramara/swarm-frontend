import { motion } from "framer-motion";
import { Newspaper, ArrowRight } from "lucide-react";
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
    .limit(6);

  if (error) {
    console.error("Error fetching news:", error);
    throw error;
  }

  console.log("Fetched news items:", data);
  return data as NewsItem[];
};

export const NewsSection = () => {
  const { data: news = [], isError, isLoading } = useQuery({
    queryKey: ['news'],
    queryFn: fetchNews,
  });

  useEffect(() => {
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
          toast("New update available!", {
            description: "Refresh to see the latest news.",
          });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  if (isError) {
    toast.error("Failed to load news updates");
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? (
            Array(3).fill(0).map((_, index) => (
              <div 
                key={index}
                className="bg-dark-lighter p-6 rounded-xl border-2 border-transparent animate-pulse"
              >
                <div className="h-6 bg-gray-700 rounded w-1/3 mb-4"></div>
                <div className="h-4 bg-gray-700 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-700 rounded w-full mb-4"></div>
                <div className="h-4 bg-gray-700 rounded w-1/2"></div>
              </div>
            ))
          ) : (
            news.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-dark-lighter p-6 rounded-xl border-2 border-transparent hover:border-primary/50 transition-colors"
              >
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
                
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 mb-4">{item.description}</p>
                
                {item.url && (
                  <a 
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-primary hover:text-primary-hover transition-colors"
                  >
                    Read more <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                )}
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};