import Hero from "@/components/sections/Hero";
import DevelopmentServices from "@/components/sections/DevelopmentServices";
import CreativeServices from "@/components/sections/CreativeServices";
import Showcase from "@/components/sections/Showcase";
import PricingCalculator from "@/components/sections/PricingCalculator";
import StrategicCallCTA from "@/components/sections/StrategicCallCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <DevelopmentServices />
      <CreativeServices />
      <PricingCalculator />
      <Showcase />
      <StrategicCallCTA />
    </main>
  );
}
