import Navigation from "@/components/Navigation";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, HelpCircle, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FAQPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    import('aos').then(AOS => {
      AOS.default.init({
        duration: 1200,
        once: true,
        offset: 100,
        easing: 'ease-out-cubic'
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main id="faq" className="pt-20">
        <FAQ />
      </main>

      <Footer />
    </div>
  );
};

export default FAQPage;