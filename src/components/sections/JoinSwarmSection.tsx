import { motion } from "framer-motion";
import { Network, Users, Rocket, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const JoinSwarmSection = () => {
  return (
    <section className="py-24 bg-dark-lighter relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-96 h-96 bg-primary/20 rounded-full blur-3xl -top-48 -left-48" />
        <div className="absolute w-96 h-96 bg-secondary/20 rounded-full blur-3xl -bottom-48 -right-48" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Join the Swarm for Exponential Growth
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Be part of a revolutionary AI-driven ecosystem that grows stronger with every new member
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Network className="w-12 h-12 mb-6 text-primary" />,
              title: "Network Effect",
              description: "Benefit from the collective intelligence of the swarm",
            },
            {
              icon: <Users className="w-12 h-12 mb-6 text-primary" />,
              title: "Community Power",
              description: "Join a thriving community of forward-thinking individuals",
            },
            {
              icon: <Rocket className="w-12 h-12 mb-6 text-primary" />,
              title: "Rapid Growth",
              description: "Experience accelerated value creation through AI synergy",
            },
            {
              icon: <TrendingUp className="w-12 h-12 mb-6 text-primary" />,
              title: "Token Value",
              description: "Participate in the exponential growth of SWARM token",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-dark p-8 rounded-2xl border-2 border-transparent hover:border-primary/50 transition-all duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary-hover text-dark font-bold text-lg px-12"
          >
            Join Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinSwarmSection;