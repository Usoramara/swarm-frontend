import { motion } from "framer-motion";
import { ArrowLeft, Bot, Brain, Cpu, LineChart, Gift, Gem, TrendingUp, Clock, Zap, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Learn = () => {
  const features = [
    {
      icon: <Brain className="w-12 h-12 text-primary mb-4" />,
      title: "Autonomous Intelligence",
      description: "Self-learning AI agents that identify and capitalize on emerging market opportunities."
    },
    {
      icon: <Bot className="w-12 h-12 text-primary mb-4" />,
      title: "Agent Collaboration",
      description: "Multiple AI agents working together to discover and exploit profitable opportunities across chains."
    },
    {
      icon: <Cpu className="w-12 h-12 text-primary mb-4" />,
      title: "On-Chain Operations",
      description: "Transparent execution of value-generating opportunities directly on the blockchain."
    },
    {
      icon: <LineChart className="w-12 h-12 text-primary mb-4" />,
      title: "Value Generation",
      description: "Automated strategies that identify and act on opportunities to maximize token holder returns."
    }
  ];

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

  const FeatureCard = ({ feature }) => {
    const Component = feature.link ? Link : 'div';
    return (
      <Component to={feature.link}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`bg-dark p-8 rounded-lg border border-primary/20 hover:border-primary/40 transition-colors ${feature.link ? 'cursor-pointer hover:bg-dark/80' : ''}`}
        >
          <div className="flex flex-col items-center text-center">
            {feature.icon}
            <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
            <p className="text-gray-300">{feature.description}</p>
          </div>
        </motion.div>
      </Component>
    );
  };

  return (
    <main className="min-h-screen bg-dark">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 p-6 z-50">
        <Link to="/">
          <Button variant="outline" className="hover:bg-primary/20">
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
              Understanding <span className="gradient-text">SWARM</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Discover how our autonomous AI agents work together to create value through decentralized intelligence and blockchain technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-dark-lighter relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
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
              <span className="gradient-text">Value Creation Through AI Swarms</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Our autonomous agents work together 24/7 to maximize value for token holders through sophisticated blockchain operations and market analysis.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valueCreationFeatures.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Learn;