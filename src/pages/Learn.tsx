import { LearnHero } from "@/components/sections/learn/LearnHero";
import { CoreFeatures } from "@/components/sections/learn/CoreFeatures";
import { AutonomousWorkforce } from "@/components/sections/learn/AutonomousWorkforce";
import { ValueCreation } from "@/components/sections/learn/ValueCreation";

const Learn = () => {
  return (
    <main className="min-h-screen bg-dark">
      <LearnHero />
      <CoreFeatures />
      <AutonomousWorkforce />
      <ValueCreation />
    </main>
  );
};

export default Learn;