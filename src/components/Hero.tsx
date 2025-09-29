import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-ai-bg.jpg";
import { useEffect } from "react";
import { ChevronDown, Sparkles } from "lucide-react";

const Hero = () => {
  useEffect(() => {
    import('aos').then(AOS => {
      AOS.default.init({
        duration: 1200,
        once: true,
        offset: 50,
        easing: 'ease-out-cubic'
      });
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Enhanced background layers */}
      <div className="absolute inset-0 bg-gradient-glass"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-15 transition-smooth"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-accent rounded-full animate-float opacity-60"></div>
      <div className="absolute top-32 right-20 w-3 h-3 bg-primary rounded-full animate-float opacity-40" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-40 left-20 w-1 h-1 bg-accent rounded-full animate-float opacity-50" style={{animationDelay: '2s'}}></div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Enhanced title with staggered animations */}
          <div data-aos="fade-up" data-aos-delay="200">
            <div className="flex items-center justify-center gap-2 mb-4 opacity-80">
              <Sparkles className="w-5 h-5 text-accent animate-shimmer" />
              <span className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
                Next-Generation Business Intelligence
              </span>
              <Sparkles className="w-5 h-5 text-accent animate-shimmer" />
            </div>
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6 leading-tight tracking-tight">
              Insight Flow AI
            </h1>
          </div>
          
          <p 
            className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-4xl mx-auto leading-relaxed font-light"
            data-aos="fade-up" 
            data-aos-delay="400"
          >
            Transform your data into profitable actions with cutting-edge AI tools designed for business optimization and personal productivity enhancement.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center" data-aos="fade-up" data-aos-delay="600">
            <Button 
              variant="soft" 
              size="xl"
              className="group relative overflow-hidden shadow-floating hover:shadow-glow transition-spring"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10">Contact Us Today</span>
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-smooth"></div>
            </Button>
            
            <Button 
              variant="outline" 
              size="xl"
              className="group border-2 border-muted-foreground/20 hover:border-primary/50 transition-spring bg-glass backdrop-blur-sm"
              onClick={() => document.getElementById('apps')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Our Solutions
            </Button>
          </div>
        </div>
      </div>
      
      {/* Enhanced bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
      
      {/* Scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float cursor-pointer"
        onClick={() => document.getElementById('apps')?.scrollIntoView({ behavior: 'smooth' })}
        data-aos="fade-up" 
        data-aos-delay="800"
      >
        <ChevronDown className="w-6 h-6 text-muted-foreground hover:text-primary transition-smooth" />
      </div>
    </section>
  );
};

export default Hero;