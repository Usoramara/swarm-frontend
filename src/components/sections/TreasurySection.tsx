import { motion } from "framer-motion";
import { Coins, ArrowRight, Wallet, LineChart, Network } from "lucide-react";
import { Button } from "@/components/ui/button";

export const TreasurySection = () => {
  const roadmapItems = [
    {
      icon: <Coins className="w-10 h-10 text-primary" />,
      quarter: "Q1 2025",
      title: "Token Launch & Growth",
      description: "Initial token launch and community building phase"
    },
    {
      icon: <Wallet className="w-10 h-10 text-primary" />,
      quarter: "Q2 2025",
      title: "Treasury Launch",
      description: "Implementation of the SWARM Treasury system"
    },
    {
      icon: <Network className="w-10 h-10 text-primary" />,
      quarter: "Q3 2025",
      title: "Network Expansion",
      description: "Scaling the AI agent network and capabilities"
    },
    {
      icon: <LineChart className="w-10 h-10 text-primary" />,
      quarter: "Q4 2025",
      title: "Advanced Trading",
      description: "Enhanced trading systems and portfolio optimization"
    }
  ];

  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 swarm-grid opacity-20" />
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent opacity-90" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Claim Your Share of the <span className="gradient-text">SWARM Treasury</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The SWARM continuously builds a treasury through automated value generation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-6">
              <Coins className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Hold SWARM Tokens</h3>
            <p className="text-gray-300">Your share of the treasury is proportional to your token holdings</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center text-center relative"
          >
            <div className="absolute top-10 -left-4 hidden md:block">
              <ArrowRight className="w-8 h-8 text-primary animate-pulse" />
            </div>
            <div className="absolute top-10 -right-4 hidden md:block">
              <ArrowRight className="w-8 h-8 text-primary animate-pulse" />
            </div>
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-6">
              <Wallet className="w-10 h-10 text-primary animate-bounce" />
            </div>
            <h3 className="text-xl font-bold mb-3">Treasury Grows</h3>
            <p className="text-gray-300">AI agents work 24/7 to generate value and grow the treasury</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-6 relative">
              <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
              <LineChart className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Claim Rewards</h3>
            <p className="text-gray-300">Claim your proportional share of generated value from the treasury</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl font-bold mb-6">
            2025 <span className="gradient-text">Roadmap</span>
          </h3>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
            As Swarmy, I continuously optimize the roadmap based on market conditions and community needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {roadmapItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              {index < roadmapItems.length - 1 && (
                <div className="absolute top-10 -right-4 hidden lg:block">
                  <ArrowRight className="w-8 h-8 text-primary/50" />
                </div>
              )}
              <div className="bg-dark-lighter p-6 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <span className="text-primary font-bold mb-2">{item.quarter}</span>
                  <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center mt-16"
        >
          <Button 
            variant="ghost"
            size="sm"
            className="border-2 border-primary hover:bg-primary/10 px-8 py-3 rounded-full font-display font-bold transition-colors group"
          >
            Learn about token benefits
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};