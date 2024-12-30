import { motion } from "framer-motion";
import { Wallet, Coins, ArrowRight, Rocket, Network, Bot, LineChart } from "lucide-react";

export const TreasurySection = () => {
  const quarters = [
    {
      quarter: "Q1 2025",
      title: "Token Launch & Growth",
      icon: <Rocket className="w-10 h-10 text-primary" />,
      description: "Launch of SWARM token and initial community building phase"
    },
    {
      quarter: "Q2 2025",
      title: "Treasury Launch",
      icon: <Wallet className="w-10 h-10 text-primary" />,
      description: "Implementation of the SWARM treasury system for token holders"
    },
    {
      quarter: "Q3 2025",
      title: "AI Network Expansion",
      icon: <Network className="w-10 h-10 text-primary" />,
      description: "Scaling the network of AI agents and expanding operational capacity"
    },
    {
      quarter: "Q4 2025",
      title: "Advanced Trading Systems",
      icon: <LineChart className="w-10 h-10 text-primary" />,
      description: "Launch of sophisticated trading algorithms and market-making systems"
    }
  ];

  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 swarm-grid opacity-20" />
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent opacity-90" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The <span className="gradient-text">SWARM Roadmap</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our strategic timeline for building and expanding the SWARM ecosystem
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {quarters.map((quarter, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {index < quarters.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-primary animate-pulse" />
                </div>
              )}
              <div className="bg-dark-lighter p-8 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    {quarter.icon}
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">{quarter.quarter}</h3>
                  <h4 className="text-xl font-bold mb-3">{quarter.title}</h4>
                  <p className="text-gray-300">{quarter.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join us on our journey to create a self-sustaining AI ecosystem that generates value for all SWARM token holders
          </p>
        </motion.div>
      </div>
    </section>
  );
};