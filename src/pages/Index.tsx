import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import AboutSection from "@/components/sections/AboutSection";
import JoinSection from "@/components/sections/JoinSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-dark">
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <JoinSection />
    </div>
  );
};

export default Index;