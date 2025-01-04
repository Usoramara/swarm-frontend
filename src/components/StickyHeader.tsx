import { Twitter } from "lucide-react";

const StickyHeader = () => {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Left side - Buy SWARM button */}
          <a
            href="https://pump.fun/coin/DMiSS8Ziz5RCEFrQozWeZAqjTEjuBzrihzgNVtEpFhat"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[#ACFF00] hover:bg-[#BDFF33] text-black px-6 py-2 rounded-full font-display font-bold transition-colors">
              Buy SWARM
            </button>
          </a>

          {/* Right side - Social icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://dexscreener.com/solana/8kg3pck6xcn328xxa1ahajsmf7vwdghh3vvoorgqtqhz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-primary transition-colors"
            >
              <img
                src="https://dexscreener.com/favicon.png"
                alt="Dexscreener"
                className="w-6 h-6"
              />
            </a>
            <a
              href="https://x.com/swarm_agent"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-primary transition-colors"
            >
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default StickyHeader;