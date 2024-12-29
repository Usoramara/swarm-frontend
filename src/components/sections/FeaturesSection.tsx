import { motion } from "framer-motion";
import { Brain, Bot, Shield } from "lucide-react";

const features = [
  {
    icon: <Brain className="w-12 h-12 mb-4 text-primary" />,
    title: "Autonomous AI",
    description: "Self-governing agents that operate independently",
  },
  {
    icon: <Bot className="w-12 h-12 mb-4 text-primary" />,
    title: "Swarm Logic",
    description: "Coordinated decision-making through collective intelligence",
  },
  {
    icon: <Shield className="w-12 h-12 mb-4 text-primary" />,
    title: "Secure Execution",
    description: "Blockchain-powered security and transparency",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-dark-lighter">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center gradient-text">
          Powered by Collective Intelligence
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
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

export default FeaturesSection;