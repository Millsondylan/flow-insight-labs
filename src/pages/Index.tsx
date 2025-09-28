import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import OurApps from "@/components/OurApps";
import AICoach from "@/components/AICoach";
import Contact from "@/components/Contact";
import Privacy from "@/components/Privacy";
import SuggestApp from "@/components/SuggestApp";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <OurApps />
        <AICoach />
        <Contact />
        <Privacy />
        <SuggestApp />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
