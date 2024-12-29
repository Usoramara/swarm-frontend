import { motion } from "framer-motion";
import { Network, ArrowRight, Infinity } from "lucide-react";

const NetworkSection = () => {
  return (
    <section className="py-24 bg-dark-lighter relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
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
              icon: <ArrowRight className="w-12 h-12 mb-6 text-primary" />,
              title: "Continuous Flow",
              description:
                "Value flows seamlessly through the network, creating a self-sustaining ecosystem",
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
              className="relative p-8 rounded-2xl bg-dark border-2 border-primary/10 hover:border-primary/30 transition-colors"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative">
                {item.icon}
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Network visualization */}
        <div className="mt-16 relative h-64">
          <div className="absolute inset-0 swarm-grid opacity-30" />
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="relative w-48 h-48">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full animate-pulse" />
              <div className="absolute inset-4 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full animate-pulse delay-75" />
              <div className="absolute inset-8 bg-gradient-to-r from-primary/40 to-secondary/40 rounded-full animate-pulse delay-150" />
              <div className="absolute inset-12 bg-gradient-to-r from-primary/50 to-secondary/50 rounded-full animate-pulse delay-300" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NetworkSection;