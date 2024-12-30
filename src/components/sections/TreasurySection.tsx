import { motion } from "framer-motion";
import { Wallet, Coins, ArrowRight } from "lucide-react";

export const TreasurySection = () => {
  return (
    <section className="py-24 bg-dark relative overflow-hidden">
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
            Claim Your Share of the <span className="gradient-text">SWARM Treasury</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            As the SWARM operates, it continuously builds a treasury through automated value generation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-6">
              <Wallet className="w-10 h-10 text-primary" />
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
              <Coins className="w-10 h-10 text-primary animate-bounce" />
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
              <Wallet className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Claim Rewards</h3>
            <p className="text-gray-300">Claim your proportional share of generated value from the treasury</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The SWARM's autonomous operations continuously generate value, which accumulates in the treasury for token holders to claim
          </p>
        </motion.div>
      </div>
    </section>
  );
};