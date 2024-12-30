import { motion } from "framer-motion";
import { Award, DollarSign, Network, Handshake, Shield, Rocket, Zap } from "lucide-react";

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: <DollarSign className="w-12 h-12 text-primary mb-4" />,
      title: "Passive Income",
      description: "Earn continuous rewards from AI agent operations across multiple blockchain networks"
    },
    {
      icon: <Network className="w-12 h-12 text-primary mb-4" />,
      title: "AI Network Access",
      description: "Get exclusive access to SWARM's advanced network of AI agents for trading and analytics"
    },
    {
      icon: <Zap className="w-12 h-12 text-primary mb-4" />,
      title: "First-Mover Advantage",
      description: "Access new features, strategies, and market opportunities before they go public"
    },
    {
      icon: <Handshake className="w-12 h-12 text-primary mb-4" />,
      title: "DAO Governance",
      description: "Shape the future of SWARM by voting on key protocol decisions and upgrades"
    },
    {
      icon: <Shield className="w-12 h-12 text-primary mb-4" />,
      title: "Risk Management",
      description: "Benefit from AI-powered security protocols and automated risk mitigation"
    },
    {
      icon: <Rocket className="w-12 h-12 text-primary mb-4" />,
      title: "Token Value Growth",
      description: "Participate in the network's expansion as AI capabilities and adoption grow"
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
            Unlock <span className="gradient-text">Exclusive Benefits</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            SWARM token holders gain access to a suite of powerful benefits powered by our autonomous AI network
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