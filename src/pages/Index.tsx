import { useEffect, useState } from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { NetworkAnimation } from "@/components/sections/NetworkAnimation";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { TreasurySection } from "@/components/sections/TreasurySection";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [tweetText, setTweetText] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handlePostTweet = async () => {
    if (!tweetText.trim()) {
      toast({
        title: "Error",
        description: "Please enter some text to tweet",
        variant: "destructive",
      });
      return;
    }

    setIsPosting(true);
    try {
      const { data, error } = await supabase.functions.invoke('post-tweet', {
        body: { tweet_text: tweetText },
      });

      if (error) throw error;

      toast({
        title: "Success",
        description: "Tweet posted successfully!",
      });
      setTweetText("");
    } catch (error: any) {
      console.error("Error posting tweet:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to post tweet",
        variant: "destructive",
      });
    } finally {
      setIsPosting(false);
    }
  };

  return (
    <main className="min-h-screen bg-dark">
      <HeroSection mousePosition={mousePosition} />
      <div className="container mx-auto px-4 py-8">
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Post a Tweet</h2>
          <Textarea
            value={tweetText}
            onChange={(e) => setTweetText(e.target.value)}
            placeholder="What's happening?"
            className="mb-4"
            maxLength={280}
          />
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-400">
              {280 - tweetText.length} characters remaining
            </span>
            <Button 
              onClick={handlePostTweet} 
              disabled={isPosting || !tweetText.trim()}
            >
              {isPosting ? "Posting..." : "Post Tweet"}
            </Button>
          </div>
        </div>
      </div>
      <AboutSection />
      <BenefitsSection />
      <TreasurySection />
      <NetworkAnimation />
      <FeaturesSection />
    </main>
  );
};

export default Index;