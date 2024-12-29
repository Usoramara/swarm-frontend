import { motion } from "framer-motion";
import { Network } from "lucide-react";

export const NetworkAnimation = () => {
  // Generate random positions for network nodes
  const nodes = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: `${20 + Math.random() * 60}%`,
    y: `${20 + Math.random() * 60}%`,
    delay: i * 0.3,
  }));

  return (
    <section className="py-24 bg-dark-lighter relative overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-16">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-6 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Growing Network
        </motion.h2>
      </div>

      <div className="relative h-[600px] max-w-5xl mx-auto">
        {/* Central node */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Network className="w-16 h-16 text-primary" />
        </motion.div>

        {/* Animated nodes */}
        {nodes.map((node) => (
          <motion.div
            key={node.id}
            className="absolute w-4 h-4 rounded-full bg-secondary"
            style={{ left: node.x, top: node.y }}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ 
              delay: node.delay,
              duration: 0.5,
            }}
          >
            {/* Pulse effect */}
            <motion.div
              className="absolute inset-0 rounded-full bg-secondary"
              initial={{ scale: 1, opacity: 0.5 }}
              animate={{ scale: 2, opacity: 0 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
            
            {/* Connection line to center */}
            <motion.div
              className="absolute left-1/2 top-1/2 h-0.5 bg-gradient-to-r from-secondary to-primary origin-left"
              style={{
                width: "100px",
                transformStyle: "preserve-3d",
              }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ 
                delay: node.delay + 0.2,
                duration: 0.8,
              }}
            />
          </motion.div>
        ))}

        {/* Background glow effect */}
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent rounded-full filter blur-xl" />
      </div>
    </section>
  );
};