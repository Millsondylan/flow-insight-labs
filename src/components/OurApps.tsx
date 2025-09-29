import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Clock, ArrowRight, BarChart3 } from "lucide-react";
import { useEffect } from "react";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const OurApps = () => {
  const {
    fadeUpAnimation,
    scaleAnimation,
    staggerAnimation,
    parallaxAnimation,
    cardFlipAnimation,
    magneticAnimation,
    revealBlurAnimation,
    slideInFromLeft,
    slideInFromRight,
    modernStaggerReveal,
    fadeInScale,
    textClipReveal
  } = useScrollAnimations();

  useEffect(() => {
    // Initialize GSAP animations
    setTimeout(() => {
      // Apple-style section badge reveal
      fadeInScale('.apps-section-badge', { start: "top 90%" });

      // Modern title clip reveal (like modern websites)
      textClipReveal('.apps-title', { start: "top 85%" });

      // Description fade in with blur
      revealBlurAnimation('.apps-description', { start: "top 80%" });

      // Main card slides in from left (Apple-style)
      slideInFromLeft('.apps-main-card', { start: "top 75%" });

      // Feature cards modern stagger reveal (inspired by Apple Watch page)
      modernStaggerReveal('.apps-feature-card', { start: "top 80%" });

      // Enhanced background parallax with rotation
      gsap.to('.apps-bg-element', {
        y: -100,
        rotation: 45,
        scale: 1.2,
        scrollTrigger: {
          trigger: '.apps-bg-element',
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        }
      });

      // Add floating animation to background elements
      gsap.to('.apps-bg-element:first-child', {
        y: "+=15",
        x: "+=10",
        rotation: "+=10",
        duration: 8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to('.apps-bg-element:last-child', {
        y: "-=20",
        x: "-=15",
        rotation: "-=15",
        duration: 10,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 2,
      });

      // Apply magnetic animation to cards for interactivity
      magneticAnimation('.apps-main-card');
      magneticAnimation('.apps-feature-card');
    }, 100);
  }, [fadeUpAnimation, scaleAnimation, staggerAnimation, parallaxAnimation, cardFlipAnimation, magneticAnimation, revealBlurAnimation, slideInFromLeft, slideInFromRight, modernStaggerReveal, fadeInScale, textClipReveal]);

  return (
    <section className="py-6 sm:py-8 md:py-12 bg-gradient-subtle relative overflow-hidden" id="apps">
      {/* Background animated elements */}
      <div className="apps-bg-element absolute top-20 left-10 w-32 h-32 bg-gradient-primary opacity-5 rounded-full blur-2xl"></div>
      <div className="apps-bg-element absolute bottom-40 right-20 w-48 h-48 bg-accent opacity-10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="apps-header text-center mb-12 sm:mb-16 md:mb-20">
          <div className="apps-section-badge inline-flex items-center gap-2 bg-gradient-glass px-3 sm:px-4 py-2 rounded-full mb-4 sm:mb-6 shadow-soft">
            <BarChart3 className="w-4 h-4 text-primary" />
            <span className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-wider">Our Solutions</span>
          </div>
          <h2 className="apps-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 bg-gradient-primary bg-clip-text text-transparent px-2">
            Our Apps
          </h2>
          <p className="apps-description text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Check out our AI-powered apps that help your business run better and get more done.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="apps-main-card group shadow-floating hover:shadow-glow transition-spring transform hover:scale-[1.02] bg-gradient-card border-0 overflow-hidden relative shimmer-wave">
            {/* Enhanced shimmer wave effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
            
            <CardHeader className="text-center pb-4 sm:pb-6 relative z-10 px-4 sm:px-6">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="p-3 sm:p-4 bg-gradient-primary rounded-2xl shadow-glow animate-glow">
                  <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <CardTitle className="text-2xl sm:text-3xl md:text-4xl bg-gradient-primary bg-clip-text text-transparent font-bold text-center sm:text-left">
                  Trading Journal Pro
                </CardTitle>
              </div>
              <Badge variant="outline" className="mx-auto flex items-center gap-2 w-fit px-3 sm:px-4 py-2 bg-gradient-glass backdrop-blur-sm border-primary/20">
                <Clock className="w-4 h-4 animate-pulse" />
                <span className="font-medium text-sm">Coming Soon</span>
              </Badge>
            </CardHeader>
            
            <CardContent className="text-center pb-6 sm:pb-8 relative z-10 px-4 sm:px-6">
              <CardDescription className="text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-6 sm:mb-8 text-muted-foreground">
                Improve your trading with our smart journal that looks at your trades and gives you personalized tips. It helps you find the best times to buy and sell, spot winning patterns, and make better decisions to earn more while taking less risk.
              </CardDescription>

              {/* Feature highlights with GSAP animations */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8">
                <div className="apps-feature-card flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-gradient-glass backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-smooth shimmer-wave">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse flex-shrink-0"></div>
                  <span className="text-sm font-medium text-left">AI Pattern Recognition</span>
                </div>
                <div className="apps-feature-card flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-gradient-glass backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-smooth">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse flex-shrink-0"></div>
                  <span className="text-sm font-medium text-left">Risk Optimization</span>
                </div>
                <div className="apps-feature-card flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-gradient-glass backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-smooth sm:col-span-2 lg:col-span-1">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse flex-shrink-0"></div>
                  <span className="text-sm font-medium text-left">Performance Analytics</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OurApps;