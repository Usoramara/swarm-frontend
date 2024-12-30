import { LearnHero } from "@/components/sections/learn/LearnHero";
import { AutonomousWorkforce } from "@/components/sections/learn/AutonomousWorkforce";
import { ValueCreation } from "@/components/sections/learn/ValueCreation";

const Learn = () => {
  return (
    <main className="min-h-screen bg-dark">
      <LearnHero />
      <AutonomousWorkforce />
      <ValueCreation />
    </main>
  );
};

export default Learn;