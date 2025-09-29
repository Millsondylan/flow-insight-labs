import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import OurApps from "@/components/OurApps";
import AICoach from "@/components/AICoach";
import WebsiteDevelopment from "@/components/WebsiteDevelopment";
import About from "@/components/About";
import TermsOfService from "@/components/TermsOfService";
import Documentation from "@/components/Documentation";
import FAQ from "@/components/FAQ";
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
        <WebsiteDevelopment />
        <About />
        <TermsOfService />
        <Documentation />
        <FAQ />
        <Contact />
        <Privacy />
        <SuggestApp />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
