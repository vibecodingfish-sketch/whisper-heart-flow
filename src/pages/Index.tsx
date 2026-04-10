import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import MenuHighlights from "@/components/MenuHighlights";
import ManifestoStrip from "@/components/ManifestoStrip";
import AmbienceSection from "@/components/AmbienceSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import OrderCTA from "@/components/OrderCTA";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ExperienceSection />
      <MenuHighlights />
      <ManifestoStrip />
      <AmbienceSection />
      <DifferentialsSection />
      <OrderCTA />
      <LocationSection />
      <Footer />
    </div>
  );
};

export default Index;
