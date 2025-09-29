import Navigation from "@/components/Navigation";
import AICoach from "@/components/AICoach";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { initAOS } from "@/utils/aosConfig";

const AICoachPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    initAOS();
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