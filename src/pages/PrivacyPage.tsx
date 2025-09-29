import Navigation from "@/components/Navigation";
import Privacy from "@/components/Privacy";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const PrivacyPage = () => {
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

      <main id="privacy" className="pt-20">
        <Privacy />
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPage;