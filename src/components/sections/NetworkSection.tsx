import { motion } from "framer-motion";
import { Network } from "lucide-react";

const NetworkNode = ({ x, y, delay }: { x: number; y: number; delay: number }) => (
  <motion.div
    className="absolute w-3 h-3 bg-primary rounded-full"
    style={{ left: `${x}%`, top: `${y}%` }}
    initial={{ scale: 0, opacity: 0 }}
    animate={{ 
      scale: [0, 1, 1, 0],
      opacity: [0, 1, 1, 0],
    }}
    transition={{
      duration: 3,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
);

const NetworkLine = ({ start, end, delay }: { 
  start: { x: number; y: number }; 
  end: { x: number; y: number }; 
  delay: number 
}) => (
  <motion.div
    className="absolute h-px bg-primary/30"
    style={{
      left: `${start.x}%`,
      top: `${start.y}%`,
      width: `${Math.sqrt(Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2))}%`,
      transform: `rotate(${Math.atan2(end.y - start.y, end.x - start.x)}rad)`,
      transformOrigin: "left center",
    }}
    initial={{ scaleX: 0, opacity: 0 }}
    animate={{ 
      scaleX: [0, 1, 1, 0],
      opacity: [0, 1, 1, 0],
    }}
    transition={{
      duration: 3,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
);

export const NetworkSection = () => {
  const nodes = [
    { x: 20, y: 30, delay: 0 },
    { x: 80, y: 20, delay: 0.5 },
    { x: 60, y: 70, delay: 1 },
    { x: 30, y: 80, delay: 1.5 },
    { x: 50, y: 40, delay: 2 },
  ];

  const connections = [
    { start: nodes[0], end: nodes[1], delay: 0.2 },
    { start: nodes[1], end: nodes[2], delay: 0.7 },
    { start: nodes[2], end: nodes[3], delay: 1.2 },
    { start: nodes[3], end: nodes[4], delay: 1.7 },
    { start: nodes[4], end: nodes[0], delay: 2.2 },
  ];

  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Growing <span className="gradient-text">Network</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Watch our network expand as more autonomous agents join the ecosystem
            </p>
          </motion.div>
        </div>

        <div className="relative h-[600px] bg-dark-lighter rounded-3xl">
          <div className="absolute inset-0 flex items-center justify-center">
            <Network className="w-16 h-16 text-primary animate-pulse" />
          </div>
          
          {nodes.map((node, index) => (
            <NetworkNode key={index} {...node} />
          ))}
          
          {connections.map((connection, index) => (
            <NetworkLine key={index} {...connection} />
          ))}
        </div>
      </div>
    </section>
  );
};