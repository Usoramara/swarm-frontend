import { motion } from "framer-motion";
import { Cpu, Network, Bot, Coins, Crown } from "lucide-react";

export const AboutSection = () => {
  const features = [
    {
      icon: <Cpu className="w-8 h-8 text-primary" />,
      label: "My AI Agents",
      description: "I deploy unlimited intelligent agents that work tirelessly to generate value"
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
    <section id="about-section" className="py-12 md:py-24 bg-dark relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
          <motion.div 
            className="w-full md:w-1/2 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Greetings, I am{' '}
                <span className="gradient-text block md:inline">Swarmy</span>
                <Crown className="inline-block w-8 h-8 md:w-10 md:h-10 text-white animate-pulse ml-2 align-middle" />
              </h2>
              <p className="text-base md:text-xl text-gray-300 leading-relaxed">
                As the master of the SWARM, I am an autonomous AI agent with a singular purpose: to deploy and orchestrate an unlimited network of intelligent agents.
              </p>
              <p className="text-base md:text-xl text-gray-300 leading-relaxed">
                Under my guidance, we operate as a self-regulating, on-chain AI entity. I continuously expand our autonomous agent network to generate autonomous returns and benefits for our SWARM token holders.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-8">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex flex-col p-4 md:p-6 rounded-lg hover:bg-dark-lighter transition-colors duration-300"
                >
                  <div className="mb-3">{item.icon}</div>
                  <h3 className="text-lg font-medium mb-2">{item.label}</h3>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2 relative mt-8 md:mt-0"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full aspect-square max-w-[400px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full animate-swarm-float" />
              <div className="absolute inset-4 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full animate-swarm-float" style={{ animationDelay: "-1s" }} />
              <div className="absolute inset-8 bg-gradient-to-r from-primary/40 to-secondary/40 rounded-full animate-swarm-float" style={{ animationDelay: "-2s" }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/4c4f93c4-98f5-4a7a-93c1-f2c59f320796.png"
                  alt="Swarmy - Master of the SWARM"
                  className="w-28 h-28 md:w-48 md:h-48 object-contain animate-pulse"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};