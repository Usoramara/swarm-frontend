import { motion } from "framer-motion";
import { Bot, Brain, Cpu, LineChart } from "lucide-react";
import { FeatureCard } from "./FeatureCard";

const features = [
  {
    icon: <Brain className="w-12 h-12 text-primary mb-4" />,
    title: "Autonomous Intelligence",
    description: "Self-learning AI agents that identify and capitalize on emerging market opportunities."
  },
  {
    icon: <Bot className="w-12 h-12 text-primary mb-4" />,
    title: "Agent Collaboration",
    description: "Multiple AI agents working together to discover and exploit profitable opportunities across chains."
  },
  {
    icon: <Cpu className="w-12 h-12 text-primary mb-4" />,
    title: "On-Chain Operations",
    description: "Transparent execution of value-generating opportunities directly on the blockchain."
  },
  {
    icon: <LineChart className="w-12 h-12 text-primary mb-4" />,
    title: "Value Generation",
    description: "Automated strategies that identify and act on opportunities to maximize token holder returns."
  }
];

export const CoreFeatures = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-dark-lighter to-dark relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 to-transparent" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <FeatureCard feature={feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};