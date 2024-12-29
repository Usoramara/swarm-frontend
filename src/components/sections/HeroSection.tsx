import { motion } from "framer-motion";
import { Hexagon, Coins, TrendingUp, Shield } from "lucide-react";

interface HeroSectionProps {
  mousePosition: { x: number; y: number };
}

export const HeroSection = ({ mousePosition }: HeroSectionProps) => {
  return (
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
            A revolutionary AI-powered ecosystem where autonomous agents collaborate to
            generate sustainable value and rewards for token holders
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-dark-lighter/50 p-6 rounded-xl backdrop-blur-sm"
            >
              <Coins className="w-8 h-8 text-primary mb-3 mx-auto" />
              <h3 className="text-lg font-bold mb-2">Passive Income</h3>
              <p className="text-gray-400 text-sm">Earn rewards through AI-driven revenue generation and profit sharing</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-dark-lighter/50 p-6 rounded-xl backdrop-blur-sm"
            >
              <TrendingUp className="w-8 h-8 text-primary mb-3 mx-auto" />
              <h3 className="text-lg font-bold mb-2">Value Growth</h3>
              <p className="text-gray-400 text-sm">Benefit from the network's expanding capabilities and market adoption</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-dark-lighter/50 p-6 rounded-xl backdrop-blur-sm"
            >
              <Shield className="w-8 h-8 text-primary mb-3 mx-auto" />
              <h3 className="text-lg font-bold mb-2">Secure & Transparent</h3>
              <p className="text-gray-400 text-sm">Built on blockchain technology ensuring trustless operations</p>
            </motion.div>
          </div>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <button className="bg-primary hover:bg-primary-hover text-dark px-8 py-3 rounded-full font-display font-bold transition-colors">
              Buy SWARM
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
  );
};