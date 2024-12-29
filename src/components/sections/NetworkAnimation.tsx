import { motion } from "framer-motion";
import { Hexagon } from "lucide-react";

export const NetworkAnimation = () => {
  // Generate more nodes in multiple circular patterns
  const innerNodes = Array.from({ length: 6 }, (_, i) => ({
    id: `inner-${i}`,
    angle: (i * 360) / 6,
    delay: i * 0.4,
    radius: 180,
  }));

  const outerNodes = Array.from({ length: 12 }, (_, i) => ({
    id: `outer-${i}`,
    angle: (i * 360) / 12,
    delay: i * 0.3,
    radius: 320,
  }));

  return (
    <section className="py-32 bg-dark-lighter relative overflow-hidden">
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

      <div className="relative h-[800px] max-w-7xl mx-auto">
        {/* Central hexagon */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          initial={{ scale: 0, rotate: -30 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <Hexagon className="w-24 h-24 text-primary animate-pulse" />
        </motion.div>

        {/* Inner ring of hexagons */}
        {innerNodes.map((node) => {
          const x = Math.cos((node.angle * Math.PI) / 180) * node.radius;
          const y = Math.sin((node.angle * Math.PI) / 180) * node.radius;

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
              whileInView={{
                x: x,
                y: y,
                scale: 1,
                opacity: 1,
              }}
              transition={{
                delay: node.delay,
                duration: 1,
                type: "spring",
                stiffness: 60,
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
                <Hexagon className="w-16 h-16 text-secondary" />
              </motion.div>

              {/* Connection line */}
              <motion.div
                className="absolute left-1/2 top-1/2 h-0.5 bg-gradient-to-r from-secondary/50 to-primary/50"
                style={{
                  width: node.radius,
                  transformOrigin: "left center",
                  rotate: `${node.angle}deg`,
                }}
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                transition={{
                  delay: node.delay + 0.2,
                  duration: 0.8,
                }}
              />
            </motion.div>
          );
        })}

        {/* Outer ring of hexagons */}
        {outerNodes.map((node) => {
          const x = Math.cos((node.angle * Math.PI) / 180) * node.radius;
          const y = Math.sin((node.angle * Math.PI) / 180) * node.radius;

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
              whileInView={{
                x: x,
                y: y,
                scale: 1,
                opacity: 1,
              }}
              transition={{
                delay: node.delay,
                duration: 1,
                type: "spring",
                stiffness: 50,
              }}
            >
              <motion.div
                animate={{
                  rotate: [0, -360],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Hexagon className="w-12 h-12 text-primary/80" />
              </motion.div>

              {/* Connection line to nearest inner node */}
              <motion.div
                className="absolute left-1/2 top-1/2 h-0.5 bg-gradient-to-r from-primary/30 to-secondary/30"
                style={{
                  width: 140,
                  transformOrigin: "left center",
                  rotate: `${node.angle}deg`,
                }}
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                transition={{
                  delay: node.delay + 0.2,
                  duration: 0.8,
                }}
              />
            </motion.div>
          );
        })}

        {/* Animated background glow */}
        <motion.div
          className="absolute inset-0 bg-gradient-radial from-primary/10 via-secondary/5 to-transparent rounded-full"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      </div>
    </section>
  );
};