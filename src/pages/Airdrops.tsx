import { motion } from "framer-motion";
import { ArrowLeft, Gift, Zap, Target, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Airdrops = () => {
  const features = [
    {
      icon: <Zap className="w-12 h-12 text-primary mb-4" />,
      title: "Real-Time Detection",
      description: "Our AI agents continuously monitor blockchain activity across multiple chains to identify potential airdrop opportunities before they become widely known."
    },
    {
      icon: <Target className="w-12 h-12 text-primary mb-4" />,
      title: "Strategic Participation",
      description: "SWARM analyzes historical airdrop data to optimize participation strategies, maximizing potential returns for token holders."
    },
    {
      icon: <Clock className="w-12 h-12 text-primary mb-4" />,
      title: "Automated Qualification",
      description: "Our system automatically participates in qualifying activities when profitable opportunities are detected, ensuring SWARM holders don't miss out."
    }
  ];

  return (
    <main className="min-h-screen bg-dark">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 p-6 z-50">
        <Link to="/learn">
          <Button variant="outline" className="hover:bg-primary/20">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Learn
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
            <Gift className="w-24 h-24 text-primary mx-auto mb-8" />
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="gradient-text">Airdrop Opportunities</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              SWARM's AI agents automatically identify and participate in promising airdrop opportunities across multiple blockchain networks.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Detailed Explanation */}
      <section className="py-24 bg-dark-lighter relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="prose prose-invert max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-8 gradient-text">How SWARM Maximizes Airdrop Value</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-12">
              Airdrops have become a significant source of value in the cryptocurrency ecosystem. Projects distribute tokens to early adopters and active participants as a way to bootstrap their network and reward community engagement. SWARM's AI agents are designed to identify these opportunities early and participate strategically to maximize potential returns for token holders.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
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

            <div className="mt-16">
              <h3 className="text-3xl font-bold mb-6">The SWARM Advantage</h3>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                Traditional airdrop hunting requires constant monitoring, deep technical knowledge, and quick action. SWARM automates this entire process, using advanced AI to:
              </p>
              <ul className="list-disc pl-6 space-y-4 text-gray-300">
                <li>Monitor multiple chains and protocols 24/7 for potential airdrop opportunities</li>
                <li>Analyze historical data to predict which projects are likely to launch valuable airdrops</li>
                <li>Automatically participate in qualifying activities when profitable opportunities are detected</li>
                <li>Optimize participation strategies based on historical airdrop data</li>
                <li>Manage gas costs and timing to maximize potential returns</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Airdrops;