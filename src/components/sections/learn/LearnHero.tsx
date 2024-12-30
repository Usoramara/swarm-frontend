import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const LearnHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center swarm-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-lighter/50 to-dark" />
      <nav className="absolute top-0 left-0 p-6 z-50">
        <Link to="/">
          <Button variant="outline" className="hover:bg-primary/20">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        </Link>
      </nav>
      <div className="container mx-auto px-4 relative z-10">
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
  );
};