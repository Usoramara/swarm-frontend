import { motion } from "framer-motion";
import { Cpu, Network, Bot, Coins, Hexagon } from "lucide-react";

const features = [
  {
    icon: <Cpu className="w-8 h-8 text-primary mb-2" />,
    label: "AI Agents",
  },
  {
    icon: <Network className="w-8 h-8 text-primary mb-2" />,
    label: "On-Chain",
  },
  {
    icon: <Bot className="w-8 h-8 text-primary mb-2" />,
    label: "Self-Regulating",
  },
  {
    icon: <Coins className="w-8 h-8 text-primary mb-2" />,
    label: "Token Benefits",
  },
];

const AboutSection = () => {
  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What is <span className="gradient-text">SWARM</span>?
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              SWARM is a self-regulating, on-chain AI entity. It deploys AI agents to generate autonomous returns or benefits for the holders of its SWARM token.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-4 rounded-lg bg-dark-lighter"
                >
                  {item.icon}
                  <p className="text-sm font-medium">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full aspect-square">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full animate-swarm-float" />
              <div className="absolute inset-4 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full animate-swarm-float" style={{ animationDelay: "-1s" }} />
              <div className="absolute inset-8 bg-gradient-to-r from-primary/40 to-secondary/40 rounded-full animate-swarm-float" style={{ animationDelay: "-2s" }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <Hexagon className="w-24 h-24 text-primary" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;