import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Hexagon, Brain, Bot, Shield } from "lucide-react";
import StyleGuide from "../components/StyleGuide";

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
            <h1 className="text-display-large font-display mb-6 gradient-text">
              SWARM
            </h1>
            <p className="text-body-large text-gray-300 mb-8 max-w-2xl mx-auto">
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

      {/* Style Guide */}
      <StyleGuide />
    </div>
  );
};

export default Index;