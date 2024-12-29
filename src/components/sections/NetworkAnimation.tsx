import { motion } from "framer-motion";
import { NetworkNode } from "../network/NetworkNode";
import { NetworkConnection } from "../network/NetworkConnection";
import { generateNodes, getNodePosition } from "../network/utils";

export const NetworkAnimation = () => {
  // Generate nodes in multiple circular patterns
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
          Growing Network of AI Agents
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Our autonomous AI agents work together in a decentralized network, continuously learning and evolving to maximize value for token holders.
        </motion.p>
      </div>

      <div className="relative h-[800px] max-w-7xl mx-auto">
        {/* Central node */}
        <NetworkNode
          id="central"
          x={0}
          y={0}
          size={24}
          color="text-primary"
          delay={0}
          rotate={false}
        />

        {/* Inner ring nodes and connections */}
        {innerNodes.map((node) => {
          const pos = getNodePosition(node.angle, node.radius);
          return (
            <>
              <NetworkNode
                key={node.id}
                id={node.id}
                x={pos.x}
                y={pos.y}
                size={16}
                color="text-secondary"
                delay={node.delay}
              />
              
              {/* Connection to center */}
              <NetworkConnection
                startX={0}
                startY={0}
                endX={pos.x}
                endY={pos.y}
                delay={node.delay}
                opacity="60"
              />

              {/* Connections to adjacent inner nodes */}
              {innerNodes.map((targetNode, targetIdx) => {
                const targetPos = getNodePosition(targetNode.angle, targetNode.radius);
                if (node.id < targetNode.id) {
                  return (
                    <NetworkConnection
                      key={`${node.id}-to-${targetNode.id}`}
                      startX={pos.x}
                      startY={pos.y}
                      endX={targetPos.x}
                      endY={targetPos.y}
                      delay={node.delay}
                      opacity="40"
                    />
                  );
                }
                return null;
              })}
            </>
          );
        })}

        {/* Middle ring nodes and connections */}
        {middleNodes.map((node) => {
          const pos = getNodePosition(node.angle, node.radius);
          return (
            <>
              <NetworkNode
                key={node.id}
                id={node.id}
                x={pos.x}
                y={pos.y}
                size={14}
                color="text-primary/90"
                delay={node.delay}
              />
              
              {/* Connections to nearest inner nodes */}
              {innerNodes.map((innerNode) => {
                const innerPos = getNodePosition(innerNode.angle, innerNode.radius);
                const angleDiff = Math.abs(node.angle - innerNode.angle) % 360;
                if (angleDiff <= 60 || angleDiff >= 300) {
                  return (
                    <NetworkConnection
                      key={`${node.id}-to-${innerNode.id}`}
                      startX={pos.x}
                      startY={pos.y}
                      endX={innerPos.x}
                      endY={innerPos.y}
                      delay={node.delay}
                      opacity="30"
                    />
                  );
                }
                return null;
              })}
            </>
          );
        })}

        {/* Outer ring nodes and connections */}
        {outerNodes.map((node) => {
          const pos = getNodePosition(node.angle, node.radius);
          return (
            <>
              <NetworkNode
                key={node.id}
                id={node.id}
                x={pos.x}
                y={pos.y}
                size={12}
                color="text-primary/80"
                delay={node.delay}
              />
              
              {/* Connections to nearest middle nodes */}
              {middleNodes.map((middleNode) => {
                const middlePos = getNodePosition(middleNode.angle, middleNode.radius);
                const angleDiff = Math.abs(node.angle - middleNode.angle) % 360;
                if (angleDiff <= 45 || angleDiff >= 315) {
                  return (
                    <NetworkConnection
                      key={`${node.id}-to-${middleNode.id}`}
                      startX={pos.x}
                      startY={pos.y}
                      endX={middlePos.x}
                      endY={middlePos.y}
                      delay={node.delay}
                      opacity="20"
                    />
                  );
                }
                return null;
              })}
            </>
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