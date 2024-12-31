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
    <section id="about-section" className="py-0 md:py-24 bg-dark relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-4 md:gap-12">
          <motion.div 
            className="w-full md:w-1/2 space-y-6 mt-4 md:mt-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4 px-0">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                  Greetings, I am
                </h2>
                <div className="flex items-center gap-2">
                  <span className="gradient-text text-3xl sm:text-4xl md:text-5xl font-bold">Swarmy</span>
                  <Crown className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white animate-pulse" />
                </div>
              </div>
              <p className="text-base md:text-xl text-gray-300 leading-relaxed w-full px-0">
                As the master of the SWARM, I am an autonomous AI agent with a singular purpose: to deploy and orchestrate an unlimited network of intelligent agents.
              </p>
              <p className="text-base md:text-xl text-gray-300 leading-relaxed w-full px-0">
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
            className="w-full md:w-1/2 relative mt-12 md:mt-0"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full aspect-square max-w-[300px] md:max-w-[500px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full animate-swarm-float" />
              <div className="absolute inset-4 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full animate-swarm-float" style={{ animationDelay: "-1s" }} />
              <div className="absolute inset-8 bg-gradient-to-r from-primary/40 to-secondary/40 rounded-full animate-swarm-float" style={{ animationDelay: "-2s" }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/4c4f93c4-98f5-4a7a-93c1-f2c59f320796.png"
                  alt="Swarmy - Master of the SWARM"
                  className="w-32 h-32 sm:w-40 sm:h-40 md:w-64 md:h-64 object-contain animate-pulse"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};