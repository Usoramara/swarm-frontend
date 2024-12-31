import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Twitter } from "lucide-react";

const Footer = () => {
  const location = useLocation();
  const isLearnPage = location.pathname.includes('/learn');

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const scrollToAbout = () => {
    setTimeout(() => {
      const aboutSection = document.getElementById('about-section');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <footer className="bg-dark-lighter relative overflow-hidden">
      <div className="absolute inset-0 swarm-grid opacity-20" />
      <div className="absolute inset-0 bg-gradient-radial from-dark-lighter via-dark to-dark opacity-90" />
      
      <div className="container mx-auto px-4 py-24 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Join the <span className="gradient-text">SWARM</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-12">
            Be part of the future of decentralized intelligence. Join our community and help shape the evolution of autonomous AI on the blockchain.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a 
              href="https://app.virtuals.io/prototypes/0xD20986Cdde01F72C5cDbDDbe8A044Ee37ff57537"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-full bg-primary hover:bg-primary-hover text-dark px-8 py-3 rounded-full font-display font-bold transition-colors">
                Buy SWARM
              </button>
            </a>
            {isLearnPage ? (
              <Link to="/" onClick={scrollToAbout}>
                <button 
                  className="w-full border-2 border-primary hover:bg-primary/10 px-8 py-3 rounded-full font-display font-bold transition-colors"
                >
                  Back to Home
                </button>
              </Link>
            ) : (
              <Link to="/learn" onClick={scrollToTop}>
                <button 
                  className="w-full border-2 border-primary hover:bg-primary/10 px-8 py-3 rounded-full font-display font-bold transition-colors"
                >
                  Learn More
                </button>
              </Link>
            )}
          </div>
          <div className="flex justify-center">
            <a 
              href="https://x.com/swarm_agent" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors"
            >
              <Twitter className="w-5 h-5" />
              <span className="text-sm">@swarm_agent</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;