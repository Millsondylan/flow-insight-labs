import Navigation from "@/components/Navigation";
import AICoach from "@/components/AICoach";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Brain, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AICoachPage = () => {
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

      <main id="ai-coach" className="pt-20">
        <AICoach />
      </main>

      <Footer />
    </div>
  );
};

export default AICoachPage;