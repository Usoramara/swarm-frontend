import { motion } from "framer-motion";
import { Users, Sparkles, Lock, ArrowRight } from "lucide-react";

const features = [
  {
    icon: <Users className="w-12 h-12 mb-4 text-primary" />,
    title: "Community Driven",
    description: "Join a thriving community of innovators and visionaries shaping the future of AI.",
  },
  {
    icon: <Sparkles className="w-12 h-12 mb-4 text-primary" />,
    title: "Earn Rewards",
    description: "Participate in the ecosystem and earn rewards through various AI-driven initiatives.",
  },
  {
    icon: <Lock className="w-12 h-12 mb-4 text-primary" />,
    title: "Secure & Transparent",
    description: "Built on blockchain technology ensuring security and transparency in all operations.",
  },
];

const JoinSection = () => {
  return (
    <section className="py-24 bg-dark-lighter relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join the <span className="gradient-text">SWARM</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Become part of a revolutionary ecosystem where AI and blockchain converge to create unprecedented value.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-dark p-8 rounded-2xl text-center hover:border-primary/50 border-2 border-transparent transition-colors"
            >
              <div className="flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <button className="bg-primary hover:bg-primary-hover text-dark px-8 py-4 rounded-full font-display font-bold transition-colors inline-flex items-center gap-2 group">
            Get Started
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>

        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-r from-secondary to-primary rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
};

export default JoinSection;