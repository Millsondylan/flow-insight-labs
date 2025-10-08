import Navigation from "@/components/Navigation";
import AICoach from "@/components/AICoach";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { disableAOS } from "@/utils/aosConfig";

import { AnimationProvider } from "@/contexts/AnimationContext";

const AICoachPage = () => {
  return (
    <AnimationProvider enabled={false}>
      <div className="min-h-screen bg-background">
        <Navigation />

        <main id="ai-coach" className="pt-20">
          <AICoach />
        </main>

        <Footer />
      </div>
    </AnimationProvider>
  );
};

export default AICoachPage;