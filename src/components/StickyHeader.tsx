import { Twitter } from "lucide-react";

const StickyHeader = () => {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-dark/80 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex justify-end items-center h-20 gap-4">
          <a
            href="https://twitter.com/aiswarm_ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-primary transition-colors"
          >
            <Twitter size={24} />
          </a>
          <a
            href="https://pump.fun/coin/DMiSS8Ziz5RCEFrQozWeZAqjTEjuBzrihzgNVtEpFhat"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[#ACFF00] hover:bg-[#BDFF33] text-black px-6 py-2 rounded-full font-display font-bold transition-colors">
              Buy SWARM
            </button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default StickyHeader;