import { motion } from "framer-motion";
import { Network, Brain, Infinity } from "lucide-react";

const NetworkSection = () => {
  return (
    <section className="py-24 bg-dark-lighter relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 swarm-grid"
      />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative"
        >
          <motion.div
            className="absolute -inset-20 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            A Never-Ending Network of{" "}
            <span className="gradient-text">Value Creation</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            SWARM creates an autonomous ecosystem where AI agents collaborate to
            generate continuous value for token holders.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {[
            {
              icon: <Network className="w-12 h-12 mb-6 text-primary" />,
              title: "Network Effects",
              description:
                "As more agents join the network, the value creation potential grows exponentially",
            },
            {
              icon: <Brain className="w-12 h-12 mb-6 text-primary" />,
              title: "Adaptive Intelligence",
              description:
                "AI agents evolve and adapt their strategies to maximize value generation",
            },
            {
              icon: <Infinity className="w-12 h-12 mb-6 text-primary" />,
              title: "Infinite Potential",
              description:
                "The network's capacity for value creation is limitless, growing stronger over time",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              className="relative p-8 rounded-2xl bg-dark border-2 border-primary/10 hover:border-primary/30 transition-all"
            >
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl"
                initial={{ opacity: 0.3 }}
                whileHover={{ opacity: 0.6 }}
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <div className="relative">
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
                  {item.icon}
                </motion.div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Network visualization */}
        <div className="mt-16 relative h-64">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="relative w-48 h-48">
              {[0, 1, 2, 3].map((index) => (
                <motion.div
                  key={index}
                  className={`absolute ${
                    index === 0 ? "inset-0" : index === 1 ? "inset-4" : index === 2 ? "inset-8" : "inset-12"
                  } bg-gradient-to-r from-primary/${20 + index * 10} to-secondary/${20 + index * 10} rounded-full`}
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 4 + index,
                    repeat: Infinity,
                    ease: "linear",
                    delay: index * 0.5,
                  }}
                />
              ))}
              
              {/* Connecting lines */}
              {[45, 135, 225, 315].map((angle, index) => (
                <motion.div
                  key={index}
                  className="absolute top-1/2 left-1/2 w-32 h-0.5 bg-gradient-to-r from-primary/30 to-secondary/30"
                  style={{
                    transformOrigin: "0% 50%",
                    transform: `rotate(${angle}deg)`,
                  }}
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NetworkSection;