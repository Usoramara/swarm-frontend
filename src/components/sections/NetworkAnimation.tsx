import { motion } from "framer-motion";
import { Hexagon } from "lucide-react";

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
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          initial={{ scale: 0, rotate: -30 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <Hexagon className="w-24 h-24 text-primary animate-pulse" />
        </motion.div>

        {/* Inner ring connections */}
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

              {/* Connections to center */}
              <motion.div
                className="absolute left-1/2 top-1/2 h-0.5 bg-gradient-to-r from-secondary/50 to-primary/50"
                style={{
                  width: node.radius,
                  transformOrigin: "left center",
                  rotate: `${node.angle}deg`,
                }}
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                transition={{ delay: node.delay + 0.2, duration: 0.8 }}
              />

              {/* Connections to adjacent inner nodes */}
              {innerNodes.map((targetNode, targetIdx) => {
                if (idx < targetIdx) {
                  const targetPos = getNodePosition(targetNode.angle, targetNode.radius);
                  const dx = targetPos.x - pos.x;
                  const dy = targetPos.y - pos.y;
                  const distance = Math.sqrt(dx * dx + dy * dy);
                  const angle = Math.atan2(dy, dx) * (180 / Math.PI);

                  return (
                    <motion.div
                      key={`${node.id}-to-${targetNode.id}`}
                      className="absolute left-1/2 top-1/2 h-0.5 bg-gradient-to-r from-secondary/30 to-primary/30"
                      style={{
                        width: distance,
                        transformOrigin: "left center",
                        rotate: `${angle}deg`,
                      }}
                      initial={{ scaleX: 0, opacity: 0 }}
                      whileInView={{ scaleX: 1, opacity: 1 }}
                      transition={{ delay: node.delay + 0.4, duration: 0.8 }}
                    />
                  );
                }
                return null;
              })}
            </motion.div>
          );
        })}

        {/* Outer ring */}
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

              {/* Connections to nearest inner nodes */}
              {innerNodes.map((innerNode, innerIdx) => {
                const innerPos = getNodePosition(innerNode.angle, innerNode.radius);
                const dx = innerPos.x - pos.x;
                const dy = innerPos.y - pos.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const angle = Math.atan2(dy, dx) * (180 / Math.PI);

                // Only connect to the two nearest inner nodes
                const angleDiff = Math.abs(node.angle - innerNode.angle) % 360;
                if (angleDiff <= 60 || angleDiff >= 300) {
                  return (
                    <motion.div
                      key={`${node.id}-to-${innerNode.id}`}
                      className="absolute left-1/2 top-1/2 h-0.5 bg-gradient-to-r from-primary/30 to-secondary/30"
                      style={{
                        width: distance,
                        transformOrigin: "left center",
                        rotate: `${angle}deg`,
                      }}
                      initial={{ scaleX: 0, opacity: 0 }}
                      whileInView={{ scaleX: 1, opacity: 1 }}
                      transition={{ delay: node.delay + 0.4, duration: 0.8 }}
                    />
                  );
                }
                return null;
              })}

              {/* Connections to adjacent outer nodes */}
              {outerNodes.map((targetNode, targetIdx) => {
                if (idx < targetIdx && Math.abs(idx - targetIdx) <= 1) {
                  const targetPos = getNodePosition(targetNode.angle, targetNode.radius);
                  const dx = targetPos.x - pos.x;
                  const dy = targetPos.y - pos.y;
                  const distance = Math.sqrt(dx * dx + dy * dy);
                  const angle = Math.atan2(dy, dx) * (180 / Math.PI);

                  return (
                    <motion.div
                      key={`${node.id}-to-${targetNode.id}`}
                      className="absolute left-1/2 top-1/2 h-0.5 bg-gradient-to-r from-primary/20 to-secondary/20"
                      style={{
                        width: distance,
                        transformOrigin: "left center",
                        rotate: `${angle}deg`,
                      }}
                      initial={{ scaleX: 0, opacity: 0 }}
                      whileInView={{ scaleX: 1, opacity: 1 }}
                      transition={{ delay: node.delay + 0.6, duration: 0.8 }}
                    />
                  );
                }
                return null;
              })}
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