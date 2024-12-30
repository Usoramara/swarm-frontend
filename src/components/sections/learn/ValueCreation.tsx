import { motion } from "framer-motion";
import { Gift, Gem, TrendingUp, Clock, Zap, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { FeatureCard } from "./FeatureCard";

const valueCreationFeatures = [
  {
    icon: <Gift className="w-12 h-12 text-primary mb-4" />,
    title: "Airdrop Opportunities",
    description: "Automated discovery and participation in high-value airdrop opportunities across multiple chains.",
    link: "/learn/airdrops"
  },
  {
    icon: <Gem className="w-12 h-12 text-primary mb-4" />,
    title: "Early Project Opportunities",
    description: "First-mover advantage through early detection of promising projects and investment opportunities."
  },
  {
    icon: <TrendingUp className="w-12 h-12 text-primary mb-4" />,
    title: "DeFi Yield Opportunities",
    description: "Continuous identification and capture of the most profitable yield opportunities in DeFi."
  },
  {
    icon: <Clock className="w-12 h-12 text-primary mb-4" />,
    title: "24/7 Opportunity Detection",
    description: "Round-the-clock monitoring to never miss profitable market opportunities."
  },
  {
    icon: <Zap className="w-12 h-12 text-primary mb-4" />,
    title: "MEV Opportunities",
    description: "Intelligent detection and capture of MEV opportunities across multiple chains and protocols."
  },
  {
    icon: <Target className="w-12 h-12 text-primary mb-4" />,
    title: "Token Launch Opportunities",
    description: "Strategic participation in promising token launches and initial offerings across different platforms."
  }
];

export const ValueCreation = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 swarm-grid opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-dark to-dark opacity-90" />
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="gradient-text">Value Creation Through AI Swarms</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Our autonomous agents work together 24/7 to maximize value for token holders through sophisticated blockchain operations and market analysis.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {valueCreationFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              {feature.link ? (
                <Link to={feature.link}>
                  <FeatureCard feature={feature} />
                </Link>
              ) : (
                <FeatureCard feature={feature} />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};