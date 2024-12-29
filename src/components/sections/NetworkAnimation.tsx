import { motion } from "framer-motion";
import { NetworkNode } from "../network/NetworkNode";
import { NetworkConnection } from "../network/NetworkConnection";
import { NetworkBackground } from "../network/NetworkBackground";

export const NetworkAnimation = () => {
  // Generate nodes in multiple circular patterns
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

  // Helper function to calculate node positions
  const getNodePosition = (angle: number, radius: number) => ({
    x: Math.cos((angle * Math.PI) / 180) * radius,
    y: Math.sin((angle * Math.PI) / 180) * radius,
  });

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
        <NetworkNode
          position={{ x: 0, y: 0 }}
          size={24}
          color="text-primary"
          delay={0}
          pulse={true}
        />

        {/* Inner ring nodes */}
        {innerNodes.map((node) => {
          const pos = getNodePosition(node.angle, node.radius);
          return (
            <NetworkNode
              key={node.id}
              position={pos}
              size={16}
              color="text-secondary"
              delay={node.delay}
              rotate={true}
            />
          );
        })}

        {/* Outer ring nodes */}
        {outerNodes.map((node) => {
          const pos = getNodePosition(node.angle, node.radius);
          return (
            <NetworkNode
              key={node.id}
              position={pos}
              size={12}
              color="text-primary/80"
              delay={node.delay}
              rotate={true}
              duration={25}
            />
          );
        })}

        {/* Connections between all nodes */}
        {[...innerNodes, ...outerNodes].map((node, idx) => {
          const startPos = getNodePosition(node.angle, node.radius);
          
          return [...innerNodes, ...outerNodes].map((targetNode, targetIdx) => {
            if (idx < targetIdx) {
              const endPos = getNodePosition(targetNode.angle, targetNode.radius);
              
              return (
                <NetworkConnection
                  key={`${node.id}-to-${targetNode.id}`}
                  start={startPos}
                  end={endPos}
                  delay={node.delay + 0.2}
                  opacity="20"
                />
              );
            }
            return null;
          });
        })}

        {/* Animated background glow */}
        <NetworkBackground />
      </div>
    </section>
  );
};