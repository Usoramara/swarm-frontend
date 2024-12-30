import { motion } from "framer-motion";
import { Brain, Bot, Shield, Gift, Rocket, ChartLine } from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: <Gift className="w-12 h-12 mb-4 text-primary" />,
      title: "Airdrop Farming",
      description: "AI agents automatically identify and participate in promising airdrops across multiple chains",
    },
    {
      icon: <Rocket className="w-12 h-12 mb-4 text-primary" />,
      title: "Early Opportunities",
      description: "Discover emerging projects and protocols before they gain mainstream attention",
    },
    {
      icon: <ChartLine className="w-12 h-12 mb-4 text-primary" />,
      title: "DeFi Optimization",
      description: "Maximize yields through automated liquidity provision and yield farming strategies",
    },
    {
      icon: <Brain className="w-12 h-12 mb-4 text-primary" />,
      title: "Multi-Agent Cooperation",
      description: "Coordinated actions across different protocols to maximize returns",
    },
    {
      icon: <Bot className="w-12 h-12 mb-4 text-primary" />,
      title: "24/7 Operation",
      description: "Continuous monitoring and execution of opportunities without human intervention",
    },
    {
      icon: <Shield className="w-12 h-12 mb-4 text-primary" />,
      title: "Risk Management",
      description: "Advanced algorithms to assess and mitigate potential risks in real-time",
    },
  ];

  return (
    <section className="py-20 bg-dark-lighter">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center gradient-text">
          AI Swarm Benefits
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-dark p-8 rounded-2xl hover:border-primary/50 border-2 border-transparent transition-colors"
            >
              {feature.icon}
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};