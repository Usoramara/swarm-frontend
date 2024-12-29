import { motion } from "framer-motion";
import { Hexagon } from "lucide-react";

export const NetworkAnimation = () => {
  // Generate nodes in a circular pattern
  const nodes = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    angle: (i * 360) / 6, // Distribute evenly in a circle
    delay: i * 0.4,
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
        {/* Central hexagon with continuous pulse and rotation */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            scale: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
            rotate: {
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          <Hexagon className="w-20 h-20 text-primary" />
        </motion.div>

        {/* Orbiting hexagons */}
        {nodes.map((node) => {
          const radius = 180; // Distance from center
          const x = Math.cos((node.angle * Math.PI) / 180) * radius;
          const y = Math.sin((node.angle * Math.PI) / 180) * radius;

          return (
            <motion.div
              key={node.id}
              className="absolute left-1/2 top-1/2"
              initial={{ 
                x: 0, 
                y: 0, 
                scale: 0,
                opacity: 0,
              }}
              animate={{
                x: x,
                y: y,
                scale: [0.8, 1, 0.8],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                x: {
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "reverse",
                },
                y: {
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "reverse",
                },
                scale: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                opacity: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Hexagon className="w-12 h-12 text-secondary" />
              </motion.div>

              {/* Animated connection line */}
              <motion.div
                className="absolute left-1/2 top-1/2 h-0.5 bg-gradient-to-r from-secondary/50 to-primary/50"
                style={{
                  width: radius,
                  transformOrigin: "left center",
                  rotate: `${node.angle}deg`,
                }}
                animate={{ 
                  scaleX: [0.8, 1, 0.8],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Floating particles with random movement */}
              <motion.div
                className="absolute w-2 h-2 rounded-full bg-primary"
                animate={{
                  x: [0, 30, -30, 0],
                  y: [0, -30, 30, 0],
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          );
        })}

        {/* Evolving background glow */}
        <motion.div
          className="absolute inset-0 bg-gradient-radial from-primary/10 via-secondary/5 to-transparent rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      </div>
    </section>
  );
};