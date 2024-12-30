import { useState, useEffect } from 'react';
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { TokenDistributionSection } from "@/components/sections/TokenDistributionSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { UseCasesSection } from "@/components/sections/UseCasesSection";
import { NetworkAnimation } from "@/components/sections/NetworkAnimation";

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <main className="min-h-screen bg-dark">
      <HeroSection mousePosition={mousePosition} />
      <AboutSection />
      <TokenDistributionSection />
      <FeaturesSection />
      <UseCasesSection />
      <NetworkAnimation />
    </main>
  );
};

export default Index;