import { motion } from "framer-motion";
import { Rocket, Network, Bot, Coins, Gift, Key, LineChart, Zap } from "lucide-react";

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Gift className="w-12 h-12 text-primary mb-4" />,
      title: "Treasury Claims",
      description: "Claim your share of the SWARM treasury based on your token holdings, as value is generated through AI operations"
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
      description: "Value generated from AI-powered arbitrage opportunities flows directly to the treasury for holder claims"
    },
    {
      icon: <Network className="w-12 h-12 text-primary mb-4" />,
      title: "Network Access",
      description: "Utilize our advanced network of AI agents that work to grow the treasury for token holders"
    },
    {
      icon: <Zap className="w-12 h-12 text-primary mb-4" />,
      title: "Growth Potential",
      description: "Benefit from an expanding treasury as our AI network grows and generates more value"
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
            The SWARM's mission is to <span className="gradient-text">benefit its holders</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The SWARM builds and grows a treasury that token holders can claim from based on their holdings
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            SWARM exists to build a sustainable treasury that token holders can claim from through cutting-edge AI technology and decentralized innovation
          </p>
        </motion.div>
      </div>
    </section>
  );
};