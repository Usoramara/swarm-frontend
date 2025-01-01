import { motion } from "framer-motion";
import { Hexagon } from "lucide-react";
import { Link } from "react-router-dom";

interface HeroSectionProps {
  mousePosition: { x: number; y: number };
}

export const HeroSection = ({ mousePosition }: HeroSectionProps) => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

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
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Autonomous AI agents working together to maximize value for token holders
          </p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <a 
              href="https://app.virtuals.io/prototypes/0xD20986Cdde01F72C5cDbDDbe8A044Ee37ff57537"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                if (!navigator.onLine) {
                  e.preventDefault();
                  window.location.href = 'https://aiswarm.ai/';
                }
              }}
            >
              <button className="w-full bg-primary hover:bg-primary-hover text-dark px-8 py-3 rounded-full font-display font-bold transition-colors">
                Buy SWARM
              </button>
            </a>
            <Link to="/learn" onClick={scrollToTop}>
              <button className="w-full border-2 border-primary hover:bg-primary/10 px-8 py-3 rounded-full font-display font-bold transition-colors">
                Learn More
              </button>
            </Link>
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