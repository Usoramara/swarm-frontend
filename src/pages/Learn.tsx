import { motion } from "framer-motion";
import { ArrowLeft, Bot, Brain, Cpu, LineChart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Learn = () => {
  const features = [
    {
      icon: <Brain className="w-12 h-12 text-primary mb-4" />,
      title: "Autonomous Intelligence",
      description: "Self-learning AI agents that continuously evolve and adapt to market conditions."
    },
    {
      icon: <Bot className="w-12 h-12 text-primary mb-4" />,
      title: "Agent Collaboration",
      description: "Multiple AI agents working in harmony to achieve optimal outcomes."
    },
    {
      icon: <Cpu className="w-12 h-12 text-primary mb-4" />,
      title: "On-Chain Operations",
      description: "Fully transparent and verifiable operations executed on the blockchain."
    },
    {
      icon: <LineChart className="w-12 h-12 text-primary mb-4" />,
      title: "Value Generation",
      description: "Automated strategies focused on maximizing token holder value."
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

      {/* Technical Overview */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 swarm-grid opacity-20" />
        <div className="absolute inset-0 bg-gradient-radial from-dark-lighter via-dark to-dark opacity-90" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="gradient-text">Technical Overview</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              SWARM leverages cutting-edge AI technology and blockchain infrastructure to create a self-sustaining ecosystem of autonomous agents. Each agent is programmed to perform specific tasks while collaborating with others to achieve optimal outcomes for token holders.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Learn;