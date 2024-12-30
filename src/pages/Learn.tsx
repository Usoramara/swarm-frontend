import { motion } from "framer-motion";
import { ArrowLeft, Bot, Brain, Cpu, LineChart, Clock, Zap, Target, GitBranch, Users, Workflow } from "lucide-react";
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

  const roadmapPhases = [
    {
      icon: <Clock className="w-12 h-12 text-primary mb-4" />,
      title: "Phase 1: Automated Airdrop Farming",
      description: "Development of AI agents to monitor social media, on-chain data, and project announcements for airdrop opportunities. Automated qualification and participation systems.",
      status: "In Development"
    },
    {
      icon: <Users className="w-12 h-12 text-primary mb-4" />,
      title: "Phase 2: Whitelist Acquisition System",
      description: "Building intelligent systems to secure whitelist spots in exclusive sales, automating registration processes and engagement requirements.",
      status: "Upcoming"
    },
    {
      icon: <GitBranch className="w-12 h-12 text-primary mb-4" />,
      title: "Phase 3: Private Sale Participation",
      description: "Creating infrastructure for discovering and participating in private sales, including automated eligibility verification and collective investment pools.",
      status: "Planned"
    },
    {
      icon: <Workflow className="w-12 h-12 text-primary mb-4" />,
      title: "Phase 4: Dynamic Portfolio Management",
      description: "Implementing advanced portfolio optimization through specialized AI agents for analytics, trend analysis, and automated rebalancing.",
      status: "Future"
    },
    {
      icon: <Zap className="w-12 h-12 text-primary mb-4" />,
      title: "Phase 5: MEV Opportunities",
      description: "Developing systems for intelligent detection and capture of MEV opportunities across multiple chains and protocols.",
      status: "Future"
    },
    {
      icon: <Target className="w-12 h-12 text-primary mb-4" />,
      title: "Phase 6: Token Launch Optimization",
      description: "Building infrastructure for strategic participation in promising token launches and initial offerings across different platforms.",
      status: "Future"
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
              Our comprehensive development plan to build advanced AI swarm capabilities that will revolutionize value creation in the crypto ecosystem.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roadmapPhases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-dark p-8 rounded-lg border border-primary/20 hover:border-primary/40 transition-colors"
              >
                <div className="flex flex-col items-center text-center">
                  {phase.icon}
                  <h3 className="text-2xl font-bold mb-4">{phase.title}</h3>
                  <p className="text-gray-300 mb-4">{phase.description}</p>
                  <span className={`text-sm px-3 py-1 rounded-full ${
                    phase.status === 'In Development' ? 'bg-green-500/20 text-green-400' :
                    phase.status === 'Upcoming' ? 'bg-blue-500/20 text-blue-400' :
                    phase.status === 'Planned' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-gray-500/20 text-gray-400'
                  }`}>
                    {phase.status}
                  </span>
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