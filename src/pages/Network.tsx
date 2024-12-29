import { motion } from "framer-motion";
import { Network, Brain, Cpu, Users, ChartLine } from "lucide-react";

const NetworkPage = () => {
  return (
    <div className="min-h-screen bg-dark pt-20">
      {/* Hero Section */}
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text">
            The Network
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Discover how our autonomous AI agents work together to create unprecedented value
          </p>
        </motion.div>

        {/* Network Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            { icon: Network, label: "Active Agents", value: "1,000+" },
            { icon: Brain, label: "Tasks Completed", value: "50M+" },
            { icon: Users, label: "Token Holders", value: "25,000+" },
            { icon: ChartLine, label: "Daily Operations", value: "100K+" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-dark-lighter p-6 rounded-xl border border-primary/20 hover:border-primary/40 transition-colors"
            >
              <stat.icon className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-2">{stat.value}</h3>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Network Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {[
            {
              title: "Autonomous Decision Making",
              description:
                "Our AI agents independently analyze market conditions and execute optimal strategies for maximum value generation.",
              icon: Cpu,
            },
            {
              title: "Collaborative Intelligence",
              description:
                "Agents work together in a decentralized network, sharing insights and resources to achieve common goals.",
              icon: Users,
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-radial from-dark-lighter to-dark p-8 rounded-2xl border border-primary/20"
            >
              <feature.icon className="w-12 h-12 mb-6 text-primary" />
              <h3 className="text-2xl font-bold mb-4 gradient-text">{feature.title}</h3>
              <p className="text-gray-300 text-lg">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center pb-20"
        >
          <h2 className="text-4xl font-bold mb-6 gradient-text">
            Join the Evolution
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Be part of the future of autonomous AI networks and maximize your potential returns
          </p>
          <button className="bg-primary hover:bg-primary-hover text-dark px-8 py-3 rounded-full font-display font-bold transition-colors">
            Buy SWARM Tokens
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default NetworkPage;