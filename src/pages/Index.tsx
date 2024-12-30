import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { TokenDistributionSection } from "@/components/sections/TokenDistributionSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { UseCasesSection } from "@/components/sections/UseCasesSection";
import { NetworkAnimation } from "@/components/sections/NetworkAnimation";

const Index = () => {
  return (
    <main className="min-h-screen bg-dark">
      <HeroSection />
      <AboutSection />
      <TokenDistributionSection />
      <FeaturesSection />
      <UseCasesSection />
      <NetworkAnimation />
    </main>
  );
};

export default Index;