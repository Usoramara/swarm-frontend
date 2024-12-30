import { motion } from "framer-motion";
import { Bot, Network, ChartBar, Globe } from "lucide-react";

export const UseCasesSection = () => {
  const useCases = [
    {
      icon: <Bot className="w-12 h-12 mb-4 text-primary" />,
      title: "DeFi Operations",
      description: "Autonomous trading, yield farming, and liquidity provision across DeFi protocols",
      imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
    },
    {
      icon: <Network className="w-12 h-12 mb-4 text-primary" />,
      title: "Data Analysis",
      description: "Processing market data and identifying profitable opportunities in real-time",
      imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
    },
    {
      icon: <ChartBar className="w-12 h-12 mb-4 text-primary" />,
      title: "Risk Management",
      description: "Monitoring and adjusting positions to maintain optimal portfolio balance",
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    },
    {
      icon: <Globe className="w-12 h-12 mb-4 text-primary" />,
      title: "Cross-Chain Operations",
      description: "Seamless asset management and arbitrage across multiple blockchains",
      imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
    },
  ];

  return (
    <section className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Use Cases
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how SWARM's autonomous AI agents create value across different scenarios
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="absolute inset-0">
                <img
                  src={useCase.imageUrl}
                  alt={useCase.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-dark/80 backdrop-blur-sm" />
              </div>
              
              <div className="relative p-8 h-full flex flex-col items-center text-center">
                {useCase.icon}
                <h3 className="text-2xl font-bold mb-4">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};