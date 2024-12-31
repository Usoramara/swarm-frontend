import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const CallToActionSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with grid and gradient overlay */}
      <div className="absolute inset-0 swarm-grid opacity-20" />
      <div className="absolute inset-0 bg-gradient-radial from-dark-lighter via-dark to-dark opacity-90" />
      
      {/* Content */}
      <div className="relative container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          <span className="gradient-text">Join the SWARM</span>
        </h2>
        
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12">
          Be part of the future of autonomous AI agents working together to maximize value for token holders.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="https://app.virtuals.io/prototypes/0xD20986Cdde01F72C5cDbDDbe8A044Ee37ff57537"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              if (!navigator.onLine) {
                e.preventDefault();
                window.location.href = 'https://aiswarm.ai/';
              }
            }}
            className="w-full sm:w-auto"
          >
            <Button 
              size="lg"
              className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-dark font-semibold px-8 py-6 h-auto text-lg"
            >
              Buy SWARM
              <ArrowRight className="ml-2" />
            </Button>
          </a>
          
          <Link to="/learn" className="w-full sm:w-auto">
            <Button 
              variant="outline" 
              size="lg"
              className="w-full border-primary text-primary hover:bg-primary/10 px-8 py-6 h-auto text-lg"
            >
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};