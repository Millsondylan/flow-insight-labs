import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import OurMission from "@/components/OurMission";
import AICoach from "@/components/AICoach";
import OurApps from "@/components/OurApps";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <OurMission />
        <AICoach />
        <OurApps />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
