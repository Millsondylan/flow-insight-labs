import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import OurApps from "@/components/OurApps";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <OurApps />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
