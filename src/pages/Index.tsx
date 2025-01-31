import { useEffect, useState } from "react";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { NetworkAnimation } from "@/components/sections/NetworkAnimation";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { TreasurySection } from "@/components/sections/TreasurySection";

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
    <main className="min-h-screen bg-dark pt-24">
      <AboutSection />
      <BenefitsSection />
      <TreasurySection />
      <NetworkAnimation />
      <FeaturesSection />
    </main>
  );
};

export default Index;