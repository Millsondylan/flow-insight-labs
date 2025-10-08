import Navigation from "@/components/Navigation";
import WebsiteDevelopment from "@/components/WebsiteDevelopment";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Code, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { disableAOS } from "@/utils/aosConfig";
import { useEffect } from "react";

import { AnimationProvider } from "@/contexts/AnimationContext";

const WebsiteDevelopmentPage = () => {
  const navigate = useNavigate();

  return (
    <AnimationProvider enabled={false}>
      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Back Button */}
        <div className="pt-20 pb-4">
          <div className="container mx-auto px-4">
            <Button
              variant="outline"
              size="default"
              className="group border-2 border-muted-foreground/20 hover:border-primary/50 transition-all duration-500 ease-out bg-glass backdrop-blur-sm"
              onClick={() => navigate("/work-with-us")}
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
              Back to Services
            </Button>
          </div>
        </div>

        <main id="website-development">
          <WebsiteDevelopment />
        </main>

        <Footer />
      </div>
    </AnimationProvider>
  );
};

export default WebsiteDevelopmentPage;