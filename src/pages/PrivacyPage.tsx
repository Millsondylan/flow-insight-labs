import Navigation from "@/components/Navigation";
import Privacy from "@/components/Privacy";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { disableAOS } from "@/utils/aosConfig";
import { useEffect } from "react";

import { AnimationProvider } from "@/contexts/AnimationContext";

const PrivacyPage = () => {
  const navigate = useNavigate();

  return (
    <AnimationProvider enabled={false}>
      <div className="min-h-screen bg-background">
        <Navigation />

        <main id="privacy" className="pt-20">
          <Privacy />
        </main>

        <Footer />
      </div>
    </AnimationProvider>
  );
};

export default PrivacyPage;