import { motion } from "framer-motion";
import { Newspaper, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

interface NewsItem {
  id: number;
  date: string;
  title: string;
  description: string;
  tag: "Development" | "Impact" | "Community";
}

export const NewsSection = () => {
  const [news] = useState<NewsItem[]>([
    {
      id: 1,
      date: "2024-03-20",
      title: "SWARM AI Enhances Healthcare Diagnostics",
      description: "Our autonomous agents have achieved 95% accuracy in early disease detection, supporting healthcare professionals worldwide.",
      tag: "Impact"
    },
    {
      id: 2,
      date: "2024-03-18",
      title: "New Collaborative Learning Algorithm",
      description: "Released breakthrough in multi-agent cooperation, enabling faster and more efficient problem-solving capabilities.",
      tag: "Development"
    },
    {
      id: 3,
      date: "2024-03-15",
      title: "Community Governance Milestone",
      description: "SWARM token holders now actively participating in AI development direction through decentralized voting.",
      tag: "Community"
    }
  ]);

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
          {news.map((item, index) => (
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
                <span className="text-sm text-gray-400">{item.date}</span>
              </div>
              
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400 mb-4">{item.description}</p>
              
              <button className="flex items-center text-primary hover:text-primary-hover transition-colors">
                Read more <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};