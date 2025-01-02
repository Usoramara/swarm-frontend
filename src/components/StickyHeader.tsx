import { X } from "lucide-react";

const StickyHeader = () => {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex flex-row gap-4 items-center">
            <a
              href="https://pump.fun/coin/DMiSS8Ziz5RCEFrQozWeZAqjTEjuBzrihzgNVtEpFhat"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-[#ACFF00] hover:bg-[#BDFF33] text-black px-6 py-2 rounded-full font-display font-bold transition-colors">
                Buy SWARM
              </button>
            </a>
            <a
              href="https://x.com/swarm_agent"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-primary transition-colors"
            >
              <X size={24} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default StickyHeader;