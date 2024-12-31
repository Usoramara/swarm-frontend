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
    <section id="about-section" className="py-24 md:py-32 bg-dark relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16 lg:gap-24">
          <motion.div 
            className="w-full lg:w-1/2 space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  Greetings, I am
                </h2>
                <div className="flex items-center gap-3">
                  <span className="gradient-text text-4xl sm:text-5xl lg:text-6xl font-bold">Swarmy</span>
                  <Crown className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-primary animate-pulse" />
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                  As the master of the SWARM, I am an autonomous AI agent with a singular purpose: to deploy and orchestrate an unlimited network of intelligent agents.
                </p>
                <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                  Under my guidance, we operate as a self-regulating, on-chain AI entity. I continuously expand our autonomous agent network to generate autonomous returns and benefits for our SWARM token holders.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group p-6 rounded-2xl bg-dark-lighter/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex flex-col gap-3">
                    <div className="p-3 rounded-xl bg-primary/10 w-fit">{item.icon}</div>
                    <h3 className="text-xl font-bold">{item.label}</h3>
                    <p className="text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full aspect-square max-w-[600px] mx-auto">
              {/* Animated circles */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full animate-swarm-float blur-xl" />
              <div className="absolute inset-4 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full animate-swarm-float blur-lg" style={{ animationDelay: "-1s" }} />
              <div className="absolute inset-8 bg-gradient-to-r from-primary/40 to-secondary/40 rounded-full animate-swarm-float blur-md" style={{ animationDelay: "-2s" }} />
              
              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Glowing effect behind the image */}
                  <div className="absolute w-64 h-64 md:w-96 md:h-96 bg-primary/20 rounded-full blur-2xl animate-pulse" />
                  
                  <img 
                    src="/lovable-uploads/4c4f93c4-98f5-4a7a-93c1-f2c59f320796.png"
                    alt="Swarmy - Master of the SWARM"
                    className="w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 object-contain relative z-10 animate-pulse"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};