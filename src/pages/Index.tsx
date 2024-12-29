import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Hexagon } from "lucide-react";
import NetworkSection from "@/components/sections/NetworkSection";

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-dark">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden swarm-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-lighter/50 to-dark" />
        
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text">
              SWARM
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Autonomous AI agents working together to maximize value for token holders
            </p>
            
            <motion.div 
              className="flex justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <button className="bg-primary hover:bg-primary-hover text-dark px-8 py-3 rounded-full font-display font-bold transition-colors">
                Launch App
              </button>
              <button className="border-2 border-primary hover:bg-primary/10 px-8 py-3 rounded-full font-display font-bold transition-colors">
                Learn More
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Hexagons */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              animate={{
                x: mousePosition.x / (10 * (i + 1)),
                y: mousePosition.y / (10 * (i + 1)),
              }}
              transition={{ type: "spring", stiffness: 50, damping: 20 }}
            >
              <Hexagon
                className="text-primary/20"
                size={100 + i * 50}
                style={{
                  position: "absolute",
                  left: `${30 + i * 20}%`,
                  top: `${20 + i * 15}%`,
                }}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Network Section */}
      <NetworkSection />

      {/* Features Section */}
      <section className="py-20 bg-dark-lighter">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center gradient-text">
            Powered by Collective Intelligence
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
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
            ].map((feature, index) => (
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

      {/* About SWARM Section */}
      <section className="py-24 bg-dark relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left side - Text content */}
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
                {[
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
                ].map((item, index) => (
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
            
            {/* Right side - Visual element */}
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
    </div>
  );
};

export default Index;
