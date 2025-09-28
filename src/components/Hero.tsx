import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-ai-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-subtle overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6 leading-tight">
            Insight Flow AI
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your data into profitable actions with cutting-edge AI tools designed for business optimization and personal productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">
              Explore Our Solutions
            </Button>
            <Button variant="soft" size="xl">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;