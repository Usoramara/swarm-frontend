import { motion } from "framer-motion";

const NetworkSection = () => {
  const nodes = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
  }));

  return (
    <section className="py-24 bg-dark-lighter relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center gradient-text"
        >
          Ever-Evolving Network
        </motion.h2>

        <div className="relative h-[600px] rounded-3xl bg-dark overflow-hidden">
          <div className="absolute inset-0 swarm-grid opacity-20" />

          <div className="absolute inset-0">
            {nodes.map((node, index) => (
              <motion.div
                key={node.id}
                className="absolute"
                initial={{ x: `${node.x}%`, y: `${node.y}%` }}
                animate={{
                  x: [
                    `${node.x}%`,
                    `${node.x + Math.random() * 10 - 5}%`,
                    `${node.x}%`,
                  ],
                  y: [
                    `${node.y}%`,
                    `${node.y + Math.random() * 10 - 5}%`,
                    `${node.y}%`,
                  ],
                }}
                transition={{
                  duration: 10 + Math.random() * 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <motion.div
                  className="w-4 h-4 rounded-full bg-primary"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {nodes
                  .filter(
                    (_, i) =>
                      i !== index &&
                      Math.abs(node.x - nodes[i].x) < 30 &&
                      Math.abs(node.y - nodes[i].y) < 30
                  )
                  .map((connectedNode) => (
                    <motion.div
                      key={`${node.id}-${connectedNode.id}`}
                      className="absolute top-2 left-2 w-1 bg-gradient-to-r from-primary/30 to-secondary/30"
                      style={{
                        height: "2px",
                        transformOrigin: "left center",
                        transform: `rotate(${Math.atan2(
                          connectedNode.y - node.y,
                          connectedNode.x - node.x
                        )}rad)`,
                        width: `${Math.sqrt(
                          Math.pow(connectedNode.x - node.x, 2) +
                            Math.pow(connectedNode.y - node.y, 2)
                        )}%`,
                      }}
                      animate={{
                        opacity: [0.2, 0.5, 0.2],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
              </motion.div>
            ))}
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-dark-lighter to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-lighter to-transparent" />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl text-center text-gray-400 mt-8 max-w-2xl mx-auto"
        >
          Watch as our network continuously evolves, adapts, and grows stronger
          through decentralized collaboration and collective intelligence.
        </motion.p>
      </div>
    </section>
  );
};

export default NetworkSection;