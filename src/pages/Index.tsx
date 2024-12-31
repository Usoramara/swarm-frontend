import { useEffect, useState } from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { NetworkAnimation } from "@/components/sections/NetworkAnimation";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { TreasurySection } from "@/components/sections/TreasurySection";
import { TwitterLoginButton } from "@/components/TwitterLoginButton";

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main className="min-h-screen bg-dark">
      <div className="absolute top-4 right-4 z-50">
        <TwitterLoginButton />
      </div>
      <HeroSection mousePosition={mousePosition} />
      <AboutSection />
      <BenefitsSection />
      <TreasurySection />
      <NetworkAnimation />
      <FeaturesSection />
    </main>
  );
};

export default Index;