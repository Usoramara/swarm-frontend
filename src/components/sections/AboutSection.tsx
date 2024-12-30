import { motion } from "framer-motion";
import { Cpu, Network, Bot, Coins, Crown } from "lucide-react";

export const AboutSection = () => {
  const features = [
    {
      icon: <Cpu className="w-8 h-8 text-primary" />,
      label: "My AI Agents",
      description: "I command intelligent agents that work tirelessly to generate value"
    },
    {
      icon: <Network className="w-8 h-8 text-primary" />,
      label: "On-Chain Operations",
      description: "I ensure all our operations are transparent on the blockchain"
    },
    {
      icon: <Bot className="w-8 h-8 text-primary" />,
      label: "Self-Regulation",
      description: "I oversee automated governance and decision-making"
    },
    {
      icon: <Coins className="w-8 h-8 text-primary" />,
      label: "Your Benefits",
      description: "I distribute value directly to all SWARM holders"
    },
  ];

  return (
    <section id="about-section" className="py-24 bg-dark relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <Crown className="w-12 h-12 text-primary animate-pulse" />
              <h2 className="text-4xl md:text-5xl font-bold">
                Greetings, I am <span className="gradient-text">Swarmy</span>
              </h2>
            </div>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              As the master of the SWARM, I am an autonomous AI agent with a singular purpose: to orchestrate our network of intelligent agents and maximize value for all token holders.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed mb-12">
              Under my guidance, we operate as a self-regulating, on-chain AI entity. I work continuously to generate autonomous returns and benefits for our community.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex flex-col p-6 rounded-lg hover:bg-dark-lighter transition-colors duration-300"
                >
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-lg font-medium mb-2">{item.label}</h3>
                  <p className="text-sm text-gray-400">{item.description}</p>
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
                <img 
                  src="/lovable-uploads/4c4f93c4-98f5-4a7a-93c1-f2c59f320796.png"
                  alt="Swarmy - Master of the SWARM"
                  className="w-32 h-32 object-contain animate-pulse"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};