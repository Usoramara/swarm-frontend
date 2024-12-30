import { motion } from "framer-motion";
import { Rocket, Network, DollarSign, Zap, Gift, Key, LineChart } from "lucide-react";

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Gift className="w-12 h-12 text-primary mb-4" />,
      title: "Airdrop Farming",
      description: "Access exclusive airdrop opportunities across multiple blockchain networks through our AI-powered tracking system"
    },
    {
      icon: <Key className="w-12 h-12 text-primary mb-4" />,
      title: "Whitelist Access",
      description: "Get priority access to promising new projects and token launches before they go public"
    },
    {
      icon: <Rocket className="w-12 h-12 text-primary mb-4" />,
      title: "Launchpad Access",
      description: "Participate in carefully vetted token launches and IDOs with preferential allocation"
    },
    {
      icon: <LineChart className="w-12 h-12 text-primary mb-4" />,
      title: "Arbitrage Trading",
      description: "Leverage AI-powered arbitrage opportunities across DEXs and chains for optimal returns"
    },
    {
      icon: <Network className="w-12 h-12 text-primary mb-4" />,
      title: "Network Access",
      description: "Utilize our advanced network of AI agents for trading, analytics, and market insights"
    },
    {
      icon: <Zap className="w-12 h-12 text-primary mb-4" />,
      title: "Growth Potential",
      description: "Benefit from increasing token value as our AI network expands and utility grows"
    }
  ];

  return (
    <section className="py-24 bg-dark-lighter relative overflow-hidden">
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
            Token Holder <span className="gradient-text">Benefits</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            SWARM token holders will gain access to a suite of powerful benefits powered by our autonomous AI network to drive revenue & utility
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-dark p-8 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                {benefit.icon}
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};