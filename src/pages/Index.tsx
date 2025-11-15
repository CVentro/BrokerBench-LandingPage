import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import BrokersSection from "@/components/BrokersSection";
import CLIDemoSection from "@/components/CLIDemoSection";
import DashboardSection from "@/components/DashboardSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <FeaturesSection />
      <BrokersSection />
      <CLIDemoSection />
      <DashboardSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
