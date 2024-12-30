import { motion } from "framer-motion";
import { Network } from "lucide-react";

export const NetworkAnimation = () => {
  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 swarm-grid opacity-20" />
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent opacity-90" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              An Ever Expanding Network of Value Creation
            </h2>
            <p className="text-xl text-gray-300">
              The SWARM is deployed and on a mission to work 24/7 for its holders, continuously expanding its capabilities to create more value and improve their lives in every way possible
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="w-48 h-48 mx-auto bg-dark-lighter rounded-full flex items-center justify-center border border-primary/20">
              <Network className="w-24 h-24 text-primary animate-swarm-float" />
            </div>
            
            {/* Orbiting circles */}
            <div className="absolute inset-0 animate-spin-slow">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="w-4 h-4 bg-primary rounded-full" />
              </div>
              {/* Add more orbiting elements as needed */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
