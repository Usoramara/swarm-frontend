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
          const nextNode = innerNodes[(idx + 1) % innerNodes.length];
          const nextPos = getNodePosition(nextNode.angle, nextNode.radius);
          
          // Find closest middle node for additional connection
          const closestMiddleNode = middleNodes.reduce((closest, middleNode) => {
            const middlePos = getNodePosition(middleNode.angle, middleNode.radius);
            const distance = Math.sqrt(
              Math.pow(middlePos.x - pos.x, 2) + Math.pow(middlePos.y - pos.y, 2)
            );
            return distance < closest.distance ? { node: middleNode, distance, pos: middlePos } : closest;
          }, { node: middleNodes[0], distance: Infinity, pos: getNodePosition(middleNodes[0].angle, middleNodes[0].radius) });
          
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

              {/* Connection to next node */}
              <motion.div
                className="absolute left-1/2 top-1/2 h-0.5 bg-gradient-to-r from-secondary/40 to-secondary/40"
                style={{
                  width: Math.sqrt(
                    Math.pow(nextPos.x - pos.x, 2) + Math.pow(nextPos.y - pos.y, 2)
                  ),
                  transformOrigin: "left center",
                  rotate: `${Math.atan2(nextPos.y - pos.y, nextPos.x - pos.x) * (180 / Math.PI)}deg`,
                }}
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                transition={{ delay: node.delay + 0.3, duration: 0.8 }}
              />

              {/* Connection to closest middle node */}
              <motion.div
                className="absolute left-1/2 top-1/2 h-0.5 bg-gradient-to-r from-secondary/30 to-primary/30"
                style={{
                  width: closestMiddleNode.distance,
                  transformOrigin: "left center",
                  rotate: `${Math.atan2(closestMiddleNode.pos.y - pos.y, closestMiddleNode.pos.x - pos.x) * (180 / Math.PI)}deg`,
                }}
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                transition={{ delay: node.delay + 0.4, duration: 0.8 }}
              />
            </motion.div>
          );
        })}

        {/* Middle ring nodes and connections */}
        {middleNodes.map((node, idx) => {
          const pos = getNodePosition(node.angle, node.radius);
          const nextNode = middleNodes[(idx + 1) % middleNodes.length];
          const nextPos = getNodePosition(nextNode.angle, nextNode.radius);
          
          // Find closest outer node for additional connection
          const closestOuterNode = outerNodes.reduce((closest, outerNode) => {
            const outerPos = getNodePosition(outerNode.angle, outerNode.radius);
            const distance = Math.sqrt(
              Math.pow(outerPos.x - pos.x, 2) + Math.pow(outerPos.y - pos.y, 2)
            );
            return distance < closest.distance ? { node: outerNode, distance, pos: outerPos } : closest;
          }, { node: outerNodes[0], distance: Infinity, pos: getNodePosition(outerNodes[0].angle, outerNodes[0].radius) });
          
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

              {/* Connection to next node */}
              <motion.div
                className="absolute left-1/2 top-1/2 h-0.5 bg-gradient-to-r from-primary/40 to-primary/40"
                style={{
                  width: Math.sqrt(
                    Math.pow(nextPos.x - pos.x, 2) + Math.pow(nextPos.y - pos.y, 2)
                  ),
                  transformOrigin: "left center",
                  rotate: `${Math.atan2(nextPos.y - pos.y, nextPos.x - pos.x) * (180 / Math.PI)}deg`,
                }}
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                transition={{ delay: node.delay + 0.3, duration: 0.8 }}
              />

              {/* Connection to closest outer node */}
              <motion.div
                className="absolute left-1/2 top-1/2 h-0.5 bg-gradient-to-r from-primary/30 to-primary/30"
                style={{
                  width: closestOuterNode.distance,
                  transformOrigin: "left center",
                  rotate: `${Math.atan2(closestOuterNode.pos.y - pos.y, closestOuterNode.pos.x - pos.x) * (180 / Math.PI)}deg`,
                }}
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                transition={{ delay: node.delay + 0.4, duration: 0.8 }}
              />
            </motion.div>
          );
        })}

        {/* Outer ring nodes and connections */}
        {outerNodes.map((node, idx) => {
          const pos = getNodePosition(node.angle, node.radius);
          const nextNode = outerNodes[(idx + 1) % outerNodes.length];
          const nextPos = getNodePosition(nextNode.angle, nextNode.radius);
          
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

              {/* Connection to next node */}
              <motion.div
                className="absolute left-1/2 top-1/2 h-0.5 bg-gradient-to-r from-primary/30 to-primary/30"
                style={{
                  width: Math.sqrt(
                    Math.pow(nextPos.x - pos.x, 2) + Math.pow(nextPos.y - pos.y, 2)
                  ),
                  transformOrigin: "left center",
                  rotate: `${Math.atan2(nextPos.y - pos.y, nextPos.x - pos.x) * (180 / Math.PI)}deg`,
                }}
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                transition={{ delay: node.delay + 0.3, duration: 0.8 }}
              />
            </motion.div>
          );
        })}

        {/* Animated background glow */}
        <motion.div
          className="absolute inset-0 bg-gradient-radial from-primary/10 via-secondary/5 to-transparent rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
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