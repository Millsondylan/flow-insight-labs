import Navigation from "@/components/Navigation";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, HelpCircle, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { disableAOS } from "@/utils/aosConfig";
import { useEffect } from "react";

import { AnimationProvider } from "@/contexts/AnimationContext";

const FAQPage = () => {
  const navigate = useNavigate();

  return (
    <AnimationProvider enabled={false}>
      <div className="min-h-screen bg-background">
        <Navigation />

        <main id="faq" className="pt-20">
          <FAQ />
        </main>

        <Footer />
      </div>
    </AnimationProvider>
  );
};

export default FAQPage;