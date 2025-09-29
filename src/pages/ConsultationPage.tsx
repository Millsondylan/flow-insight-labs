import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Briefcase, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ConsultationPage = () => {
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

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-hero overflow-hidden pt-20">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-primary opacity-10 rounded-full blur-3xl wave-float"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent opacity-10 rounded-full blur-3xl wave-float-delay-1"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-primary opacity-5 rounded-full blur-2xl wave-scroll"></div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div data-aos="fade-up" data-aos-delay="200">
              <div className="flex items-center justify-center gap-2 mb-6 opacity-80">
                <Sparkles className="w-5 h-5 text-accent animate-shimmer" />
                <span className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
                  Expert Guidance
                </span>
                <Sparkles className="w-5 h-5 text-accent animate-shimmer" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6 leading-tight tracking-tight">
                Consultation & Strategy
              </h1>
            </div>

            <p
              className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed font-light"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Get expert guidance on your digital transformation journey. Our strategic planning and technical consulting services help you make informed decisions and achieve your business objectives.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center" data-aos="fade-up" data-aos-delay="600">
              <Button
                variant="outline"
                size="xl"
                className="group border-2 border-muted-foreground/20 hover:border-primary/50 transition-all duration-500 ease-out bg-glass backdrop-blur-sm"
                onClick={() => navigate("/work-with-us")}
              >
                <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
                Back to Services
              </Button>

              <Button
                variant="soft"
                size="xl"
                className="group relative overflow-hidden shadow-floating hover:shadow-glow transition-all duration-500 ease-out"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="relative z-10">Schedule Consultation</span>
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-all duration-700 ease-out"></div>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
      </section>

      <main id="contact">
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default ConsultationPage;