import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Hexagon, Brain, Bot, Shield, Cpu, Network, Coins } from "lucide-react";

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
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              A self-regulating, on-chain AI entity that autonomously generates returns for token holders through intelligent agent deployment
            </p>
            
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <button className="bg-primary hover:bg-primary-hover text-dark px-8 py-3 rounded-full font-display font-bold transition-colors">
                Connect Wallet
              </button>
              <button className="border-2 border-primary hover:bg-primary/10 px-8 py-3 rounded-full font-display font-bold transition-colors">
                View Agents
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

      {/* Features Section */}
      <section className="py-20 bg-dark-lighter">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center gradient-text">
            Autonomous Value Generation
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Cpu className="w-12 h-12 mb-4 text-primary" />,
                title: "AI Agents",
                description: "Self-governing AI agents that autonomously execute value-generating strategies",
              },
              {
                icon: <Network className="w-12 h-12 mb-4 text-primary" />,
                title: "On-Chain Governance",
                description: "Decentralized decision-making through token holder voting",
              },
              {
                icon: <Coins className="w-12 h-12 mb-4 text-primary" />,
                title: "Token Benefits",
                description: "Direct returns and benefits distributed to SWARM token holders",
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
    </div>
  );
};

export default Index;