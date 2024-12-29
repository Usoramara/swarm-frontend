import { motion } from "framer-motion";
import { Hexagon } from "lucide-react";
import { getNodePosition, generateNodes } from "@/utils/networkUtils";

export const NetworkAnimation = () => {
  const innerNodes = generateNodes(6, 180, 0.4);
  const middleNodes = generateNodes(8, 250, 0.35);
  const outerNodes = generateNodes(12, 320, 0.3);

  return (
    <section className="py-32 bg-dark-lighter relative overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-16">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-6 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          The Ever Evolving Network
        </motion.h2>
        <motion.p
          className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          For Unprecedented Value
        </motion.p>
        <motion.p
          className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Our network of autonomous AI agents continuously grows and evolves, 
          working together to generate and maximize value for token holders
        </motion.p>
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

        {/* Inner ring nodes and connections */}
        {innerNodes.map((node, idx) => {
          const pos = getNodePosition(node.angle, node.radius);
          return (
            <motion.div
              key={node.id}
              className="absolute left-1/2 top-1/2"
              initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
              whileInView={{ x: pos.x, y: pos.y, scale: 1, opacity: 1 }}
              transition={{ delay: node.delay, duration: 1, type: "spring", stiffness: 60 }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Hexagon className="w-16 h-16 text-secondary" />
              </motion.div>

              {/* Connection to center */}
              <motion.div
                className="absolute left-1/2 top-1/2 h-1 bg-gradient-to-r from-secondary/50 to-primary/50"
                style={{
                  width: node.radius,
                  transformOrigin: "left center",
                  rotate: `${node.angle}deg`,
                }}
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                transition={{ delay: node.delay + 0.2, duration: 0.8 }}
              />
            </motion.div>
          );
        })}

        {/* Middle ring nodes and connections */}
        {middleNodes.map((node, idx) => {
          const pos = getNodePosition(node.angle, node.radius);
          return (
            <motion.div
              key={node.id}
              className="absolute left-1/2 top-1/2"
              initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
              whileInView={{ x: pos.x, y: pos.y, scale: 1, opacity: 1 }}
              transition={{ delay: node.delay, duration: 1, type: "spring", stiffness: 55 }}
            >
              <motion.div
                animate={{ rotate: [0, -360] }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              >
                <Hexagon className="w-14 h-14 text-primary/90" />
              </motion.div>
            </motion.div>
          );
        })}

        {/* Outer ring nodes and connections */}
        {outerNodes.map((node, idx) => {
          const pos = getNodePosition(node.angle, node.radius);
          return (
            <motion.div
              key={node.id}
              className="absolute left-1/2 top-1/2"
              initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
              whileInView={{ x: pos.x, y: pos.y, scale: 1, opacity: 1 }}
              transition={{ delay: node.delay, duration: 1, type: "spring", stiffness: 50 }}
            >
              <motion.div
                animate={{ rotate: [0, -360] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              >
                <Hexagon className="w-12 h-12 text-primary/80" />
              </motion.div>
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