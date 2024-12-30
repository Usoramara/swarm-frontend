import { motion } from "framer-motion";
import { Milestone, Timer, Zap, Users } from "lucide-react";

export const RoadmapSection = () => {
  const phases = [
    {
      icon: <Milestone className="w-8 h-8 text-primary mb-4" />,
      title: "Phase 1: Automated Airdrop Farming",
      description: "AI agents monitor and participate in high-value airdrops, automatically executing necessary steps to qualify and maximize token distributions.",
      items: [
        "Early opportunity detection",
        "Automated qualification steps",
        "Multi-wallet coordination",
      ]
    },
    {
      icon: <Timer className="w-8 h-8 text-primary mb-4" />,
      title: "Phase 2: Whitelist Acquisition",
      description: "Advanced systems for securing whitelist spots in exclusive project launches and sales events.",
      items: [
        "Automated registration",
        "Task completion automation",
        "Pattern learning for higher success rates",
      ]
    },
    {
      icon: <Zap className="w-8 h-8 text-primary mb-4" />,
      title: "Phase 3: Private Sale Participation",
      description: "Intelligent systems for discovering and participating in early-stage investment opportunities.",
      items: [
        "Exclusive deal discovery",
        "Due diligence automation",
        "Resource pooling coordination",
      ]
    },
    {
      icon: <Users className="w-8 h-8 text-primary mb-4" />,
      title: "Phase 4: Dynamic Portfolio Management",
      description: "Advanced portfolio optimization through collective AI intelligence.",
      items: [
        "Real-time rebalancing",
        "Multi-signal analysis",
        "Personalized strategies",
      ]
    },
  ];

  return (
    <section className="py-24 bg-dark-lighter relative overflow-hidden">
      <div className="absolute inset-0 swarm-grid opacity-20" />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Development Roadmap</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our journey to build the next generation of autonomous AI agents for maximizing token holder value.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-dark p-8 rounded-2xl border-2 border-primary/10 hover:border-primary/30 transition-colors"
            >
              {phase.icon}
              <h3 className="text-2xl font-bold mb-4">{phase.title}</h3>
              <p className="text-gray-300 mb-6">{phase.description}</p>
              <ul className="space-y-2">
                {phase.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center text-gray-400">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};