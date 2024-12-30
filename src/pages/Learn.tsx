import { motion } from "framer-motion";
import { ArrowLeft, Brain, Bot, Cpu, LineChart, Network, Rocket, Shield } from "lucide-react";
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

  const roadmapFeatures = [
    {
      icon: <Network className="w-12 h-12 text-primary mb-4" />,
      title: "Autonomous Network Formation",
      description: "Development of self-organizing AI agent networks that collaborate to identify and execute opportunities."
    },
    {
      icon: <Brain className="w-12 h-12 text-primary mb-4" />,
      title: "Advanced Pattern Recognition",
      description: "Implementation of sophisticated market analysis capabilities across multiple chains and protocols."
    },
    {
      icon: <Bot className="w-12 h-12 text-primary mb-4" />,
      title: "Multi-Agent Coordination",
      description: "Creation of complex coordination systems enabling agents to work together on sophisticated strategies."
    },
    {
      icon: <Shield className="w-12 h-12 text-primary mb-4" />,
      title: "Automated Value Protection",
      description: "Development of systems to automatically secure and optimize value across market conditions."
    },
    {
      icon: <Rocket className="w-12 h-12 text-primary mb-4" />,
      title: "Opportunity Execution",
      description: "Implementation of high-speed, efficient execution systems across multiple chains and protocols."
    },
    {
      icon: <LineChart className="w-12 h-12 text-primary mb-4" />,
      title: "Portfolio Optimization",
      description: "Creation of advanced portfolio management systems using collective AI intelligence."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

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

      {/* Development Roadmap Section */}
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
              <span className="gradient-text">Development Roadmap</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Our vision for building the next generation of autonomous AI agents, working together to maximize value creation.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {roadmapFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-dark p-8 rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex flex-col items-center text-center">
                  {feature.icon}
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Learn;