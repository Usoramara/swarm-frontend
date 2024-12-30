import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";

interface NewsItem {
  id: string;
  published_at: string;
  title: string;
  description: string;
  tag: "Development" | "Impact" | "Community";
  url?: string;
}

interface NewsCardProps {
  item: Omit<NewsItem, 'tag'> & { tag: string };
  index: number;
}

// Helper function to validate tag
const validateTag = (tag: string): NewsItem['tag'] => {
  const validTags = ['Development', 'Impact', 'Community'] as const;
  return validTags.includes(tag as any) ? (tag as NewsItem['tag']) : 'Development';
};

export const NewsCard = ({ item, index }: NewsCardProps) => {
  const validatedTag = validateTag(item.tag);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`
        bg-dark-lighter p-6 rounded-xl border-2 border-transparent 
        transition-all duration-300
        ${item.url ? 'hover:border-primary/50 cursor-pointer' : ''}
      `}
      onClick={() => {
        if (item.url) {
          window.open(item.url, '_blank', 'noopener,noreferrer');
        }
      }}
    >
      <div className="flex justify-between items-start mb-4">
        <span className={`
          px-3 py-1 rounded-full text-sm font-medium
          ${validatedTag === 'Development' ? 'bg-primary/20 text-primary' : ''}
          ${validatedTag === 'Impact' ? 'bg-secondary/20 text-secondary' : ''}
          ${validatedTag === 'Community' ? 'bg-purple-500/20 text-purple-500' : ''}
        `}>
          {validatedTag}
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
    </motion.div>
  );
};