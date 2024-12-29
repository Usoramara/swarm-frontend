import { motion } from "framer-motion";
import { Brain, Bot, Shield, Cpu, Network, Coins } from "lucide-react";

const NetworkSection = () => {
  const features = [
    {
      icon: Brain,
      title: "Adaptive Intelligence",
      description: "Self-evolving AI systems that learn and adapt",
    },
    {
      icon: Bot,
      title: "Swarm Logic",
      description: "Coordinated decision-making through collective intelligence",
    },
    {
      icon: Shield,
      title: "Secure Execution",
      description: "Blockchain-powered security and transparency",
    },
  ];

  return (
    <section className="py-20 bg-dark-lighter relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Network Intelligence
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A decentralized network of AI agents working together to maximize value
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-dark p-8 rounded-2xl border-2 border-transparent hover:border-primary/50 transition-colors relative group"
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
                className="w-12 h-12 mb-4 text-primary"
              >
                <feature.icon className="w-full h-full" />
              </motion.div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Animated circles */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 1,
                repeatType: "reverse",
              }}
              style={{
                width: `${200 + i * 100}px`,
                height: `${200 + i * 100}px`,
                borderRadius: "50%",
                border: "1px solid rgba(172, 255, 0, 0.1)",
                left: `${20 + i * 10}%`,
                top: `${30 + i * 5}%`,
              }}
            />
          ))}

          {/* Network nodes */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-primary/20 rounded-full w-4 h-4"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.5,
                repeatType: "reverse",
              }}
              style={{
                left: `${15 + i * 20}%`,
                top: `${20 + (i % 3) * 25}%`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NetworkSection;