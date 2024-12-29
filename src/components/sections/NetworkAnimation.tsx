import { motion } from "framer-motion";
import { NetworkNode } from "../network/NetworkNode";
import { NetworkConnection } from "../network/NetworkConnection";
import { NetworkBackground } from "../network/NetworkBackground";
import { Brain, Network, Cpu } from "lucide-react";

export const NetworkAnimation = () => {
  // Generate nodes in multiple circular patterns for a more complex network
  const innerNodes = Array.from({ length: 6 }, (_, i) => ({
    id: `inner-${i}`,
    angle: (i * 360) / 6,
    delay: i * 0.3,
    radius: 160,
    icon: i % 2 === 0 ? Brain : i % 3 === 0 ? Network : Cpu
  }));

  const middleNodes = Array.from({ length: 8 }, (_, i) => ({
    id: `middle-${i}`,
    angle: (i * 360) / 8,
    delay: i * 0.2,
    radius: 280,
    icon: i % 2 === 0 ? Network : i % 3 === 0 ? Brain : Cpu
  }));

  const outerNodes = Array.from({ length: 12 }, (_, i) => ({
    id: `outer-${i}`,
    angle: (i * 360) / 12,
    delay: i * 0.15,
    radius: 400,
    icon: i % 2 === 0 ? Cpu : i % 3 === 0 ? Network : Brain
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
          Ever-Growing Network
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Watch as our autonomous AI agents form an interconnected neural network,
          collaborating and evolving together to create unprecedented value.
        </motion.p>
      </div>

      <div className="relative h-[800px] max-w-7xl mx-auto">
        {/* Render connections first so they appear behind nodes */}
        {[...innerNodes, ...middleNodes, ...outerNodes].map((node, idx) => {
          const startPos = getNodePosition(node.angle, node.radius);
          
          return [...innerNodes, ...middleNodes, ...outerNodes].map((targetNode, targetIdx) => {
            if (idx < targetIdx) {
              const endPos = getNodePosition(targetNode.angle, targetNode.radius);
              
              return (
                <NetworkConnection
                  key={`${node.id}-to-${targetNode.id}`}
                  start={startPos}
                  end={endPos}
                  delay={node.delay + 0.2}
                  opacity="60"
                />
              );
            }
            return null;
          });
        })}

        {/* Central node */}
        <NetworkNode
          position={{ x: 0, y: 0 }}
          size={24}
          color="text-primary"
          delay={0}
          pulse={true}
          icon={Brain}
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
              icon={node.icon}
            />
          );
        })}

        {/* Middle ring nodes */}
        {middleNodes.map((node) => {
          const pos = getNodePosition(node.angle, node.radius);
          return (
            <NetworkNode
              key={node.id}
              position={pos}
              size={14}
              color="text-primary/90"
              delay={node.delay}
              rotate={true}
              duration={22}
              icon={node.icon}
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
              color="text-secondary/80"
              delay={node.delay}
              rotate={true}
              duration={25}
              icon={node.icon}
            />
          );
        })}

        {/* Animated background glow */}
        <NetworkBackground />
      </div>
    </section>
  );
};