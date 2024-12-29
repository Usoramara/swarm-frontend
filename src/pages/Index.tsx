import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import AboutSection from "@/components/home/AboutSection";
import NetworkSection from "@/components/home/NetworkSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-dark">
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <NetworkSection />
    </div>
  );
};

export default Index;