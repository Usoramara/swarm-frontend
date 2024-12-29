import { motion } from "framer-motion";
import { Hexagon, Brain, Bot, Shield, ChevronDown, Vote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { ethers } from "ethers";

const Index = () => {
  const { toast } = useToast();
  const [wallet, setWallet] = useState<string | null>(null);
  const [proposals, setProposals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Connect wallet function
  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWallet(accounts[0]);
        toast({
          title: "Wallet Connected",
          description: `Connected to ${accounts[0].slice(0, 6)}...${accounts[0].slice(-4)}`,
        });
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to connect wallet",
          variant: "destructive",
        });
      }
    } else {
      toast({
        title: "Error",
        description: "Please install MetaMask",
        variant: "destructive",
      });
    }
  };

  // Fetch proposals
  const fetchProposals = async () => {
    try {
      setIsLoading(true);
      const { data: proposalsData, error } = await supabase
        .from('proposals')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setProposals(proposalsData);
    } catch (error) {
      console.error('Error fetching proposals:', error);
      toast({
        title: "Error",
        description: "Failed to fetch proposals",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Subscribe to real-time updates
  useEffect(() => {
    fetchProposals();

    const channel = supabase
      .channel('proposals-changes')
      .on('postgres_changes', 
        { event: '*', schema: 'public', table: 'proposals' },
        (payload) => {
          console.log('Change received!', payload);
          fetchProposals();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <div className="min-h-screen bg-dark">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-dark/80 backdrop-blur-lg border-b border-primary/10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="text-2xl font-display font-bold gradient-text">SWARM</div>
          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="text-white/70 hover:text-white">About</a>
            <a href="#features" className="text-white/70 hover:text-white">Features</a>
            <a href="#token" className="text-white/70 hover:text-white">Token</a>
            <a href="#governance" className="text-white/70 hover:text-white">Governance</a>
          </nav>
          <Button>Connect Wallet</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden swarm-grid pt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-lighter/50 to-dark" />
        
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-display-large font-display mb-6 gradient-text">
              Autonomous AI Agents<br />Working for You
            </h1>
            <p className="text-body-large text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of holders earning passive rewards through AI-powered decentralized trading
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="text-lg">Join the Swarm</Button>
              <Button size="lg" variant="outline" className="text-lg">Learn More</Button>
            </div>
          </motion.div>
        </div>

        {/* Floating Hexagons */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            >
              <Hexagon
                className="text-primary/20"
                size={100 + i * 50}
                style={{
                  position: "absolute",
                  left: `${30 + i * 20}%`,
                  top: `${20 + i * 15}%`,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <ChevronDown className="text-primary w-8 h-8" />
        </motion.div>
      </section>

      {/* Governance Section */}
      <section id="governance" className="py-20 bg-dark-lighter">
        <div className="container mx-auto px-4">
          <h2 className="text-h2 font-display text-center mb-12 gradient-text">
            Decentralized Governance
          </h2>

          <div className="flex justify-center mb-8">
            <Button
              size="lg"
              onClick={connectWallet}
              className="text-lg"
            >
              {wallet ? `Connected: ${wallet.slice(0, 6)}...${wallet.slice(-4)}` : "Connect Wallet"}
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {proposals.map((proposal) => (
              <Card key={proposal.id} className="glass-card hover-glow">
                <CardContent className="p-6">
                  <h3 className="text-h4 font-display mb-2">{proposal.title}</h3>
                  <p className="text-gray-400 mb-4">{proposal.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-primary">
                      Status: {proposal.status}
                    </span>
                    <Button
                      variant="outline"
                      onClick={() => {
                        if (!wallet) {
                          toast({
                            title: "Error",
                            description: "Please connect your wallet first",
                            variant: "destructive",
                          });
                          return;
                        }
                        // Implement voting logic here
                      }}
                    >
                      <Vote className="w-4 h-4 mr-2" />
                      Vote
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-dark-medium">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: "Total Value Locked", value: "$142M" },
              { label: "Active AI Agents", value: "1,247" },
              { label: "Holder Rewards", value: "$3.2M" },
            ].map((stat, i) => (
              <Card key={i} className="glass-card hover-glow">
                <CardContent className="p-6 text-center">
                  <div className="text-h2 font-display gradient-text mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-h2 font-display text-center mb-12 gradient-text">
            The Future of Autonomous Wealth Generation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Brain, title: "AI Intelligence", desc: "Advanced algorithms working 24/7" },
              { icon: Bot, title: "Autonomous Agents", desc: "Self-managing trading systems" },
              { icon: Shield, title: "Bank-Grade Security", desc: "Your assets, fully protected" },
              { icon: Hexagon, title: "Community Governed", desc: "Power to the token holders" },
            ].map((feature, i) => (
              <Card key={i} className="glass-card hover-glow">
                <CardContent className="p-6 text-center">
                  <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-h4 font-display mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
