import { motion } from "framer-motion";
import { ArrowLeft, Bot, Brain, Cpu, TrendingUp, Gift, Gem, Coins, Target, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Learn = () => {
  const features = [
    {
      icon: <Brain className="w-12 h-12 text-primary mb-4" />,
      title: "Collective Intelligence",
      description: "Multiple AI agents working together to analyze market data, social signals, and on-chain activities for high-value opportunities."
    },
    {
      icon: <Bot className="w-12 h-12 text-primary mb-4" />,
      title: "Autonomous Operations",
      description: "Self-executing agents that handle complex tasks like wallet interactions, governance votes, and qualification requirements."
    },
    {
      icon: <Cpu className="w-12 h-12 text-primary mb-4" />,
      title: "Cross-Chain Monitoring",
      description: "24/7 surveillance across multiple blockchains to identify and capitalize on emerging opportunities."
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-primary mb-4" />,
      title: "Value Optimization",
      description: "Dynamic portfolio management and resource allocation to maximize returns for token holders."
    }
  ];

  const valueCreationFeatures = [
    {
      icon: <Gift className="w-12 h-12 text-primary mb-4" />,
      title: "Airdrop Opportunities",
      description: "Automated detection and participation in high-value airdrops across multiple chains, with optimized wallet strategies."
    },
    {
      icon: <Gem className="w-12 h-12 text-primary mb-4" />,
      title: "Private Sale Access",
      description: "Early access to exclusive token sales and seed rounds through intelligent opportunity detection and qualification."
    },
    {
      icon: <Target className="w-12 h-12 text-primary mb-4" />,
      title: "Whitelist Acquisition",
      description: "Automated completion of whitelist requirements and registration processes for premium project access."
    },
    {
      icon: <Coins className="w-12 h-12 text-primary mb-4" />,
      title: "DeFi Yield Optimization",
      description: "Smart reallocation of assets across DeFi protocols to capture the highest yields and rewards."
    },
    {
      icon: <Clock className="w-12 h-12 text-primary mb-4" />,
      title: "Real-Time Adaptation",
      description: "Continuous monitoring and instant response to market changes and new opportunities."
    },
    {
      icon: <Bot className="w-12 h-12 text-primary mb-4" />,
      title: "Resource Pooling",
      description: "Coordinated investment strategies allowing smaller holders to access premium opportunities typically reserved for whales."
    }
  ];

  return (
    <main className="min-h-screen bg-dark">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 p-6">
        <Link to="/">
          <Button variant="ghost" className="text-white hover:text-primary">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center swarm-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-lighter/50 to-dark" />
        <div className="container mx-auto px-4 py-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              The Power of <span className="gradient-text">AI Swarms</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Harness collective AI intelligence to discover and capitalize on the best opportunities in crypto and DeFi.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-dark-lighter relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-dark p-8 rounded-lg border border-primary/20 hover:border-primary/40 transition-colors"
              >
                <div className="flex flex-col items-center text-center">
                  {feature.icon}
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Creation Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 swarm-grid opacity-20" />
        <div className="absolute inset-0 bg-gradient-radial from-dark-lighter via-dark to-dark opacity-90" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="gradient-text">Maximize Your Opportunities</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Our AI swarms work tirelessly to identify, analyze, and execute on the most profitable opportunities across the crypto ecosystem.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valueCreationFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-dark p-8 rounded-lg border border-primary/20 hover:border-primary/40 transition-colors"
              >
                <div className="flex flex-col items-center text-center">
                  {feature.icon}
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Learn;