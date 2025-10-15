import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-ai-bg.jpg";
import { useEffect, useRef } from "react";
import { ChevronDown, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAnalytics } from "@/hooks/useAnalytics";
import useScrollAnimations from "@/hooks/useScrollAnimations";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hero = () => {
  const heroImageRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { trackButtonClick } = useAnalytics();
  const {
    fadeUpAnimation,
    parallaxAnimation,
    textRevealAnimation,
    staggerAnimation,
    magneticAnimation
  } = useScrollAnimations();

  useEffect(() => {
    // Simple entrance animation
    const tl = gsap.timeline({ delay: 0.1 });

    tl.fromTo('.hero-title',
      { y: 15, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
    )
    .fromTo('.hero-subtitle',
      { y: 12, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }, "-=0.4"
    )
    .fromTo('.hero-buttons .btn',
      { y: 8, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", stagger: 0.1 }, "-=0.3"
    );

    // Keep hero content pinned and hidden after wave animation
    ScrollTrigger.create({
      trigger: ".hero-section",
      start: "top top",
      end: "bottom bottom",
      pin: ".hero-content",
      pinSpacing: false,
      anticipatePin: 1,
      onUpdate: (self) => {
        // Animate content fade out smoothly
        if (self.progress > 0.4) {
          // Calculate fade progress from 0.4 to 0.5 (10% range for smooth fade)
          const fadeProgress = Math.min((self.progress - 0.4) / 0.1, 1);
          const opacity = 1 - fadeProgress;
          const yOffset = fadeProgress * 30; // Slight upward movement during fade

          gsap.to('.hero-content', {
            opacity: opacity,
            y: -yOffset,
            duration: 0.3,
            ease: "power2.out"
          });
        } else {
          gsap.to('.hero-content', {
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out"
          });
        }

        // Smart scroll indicator timing - appear when buttons are visible but text is fading
        if (self.progress >= 0.35 && self.progress < 0.85) {
          // Show prominently during wave animation period
          gsap.to('.scroll-indicator', {
            opacity: 1,
            scale: 1.15,
            y: 0,
            duration: 0.6,
            ease: "power2.out"
          });
        } else if (self.progress >= 0.85) {
          // Hide when next section is about to appear
          gsap.to('.scroll-indicator', {
            opacity: 0,
            scale: 0.9,
            y: 20,
            duration: 0.4,
            ease: "power2.in"
          });
        } else {
          // Hidden during text display period
          gsap.to('.scroll-indicator', {
            opacity: 0.3,
            scale: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out"
          });
        }
      }
    });

    // Scroll away background image to reveal content
    if (heroImageRef.current) {
      gsap.to('.hero-bg-image', {
        y: "200%",
        opacity: 0,
        scale: 1.5,
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "+=200vh",
          scrub: true,
          onUpdate: (self) => {
            // Different speeds for up/down scrolling
            const velocity = self.getVelocity();
            const isScrollingUp = velocity < 0;
            const progress = self.progress;

            gsap.to('.hero-bg-image', {
              y: `${200 * progress}%`,
              opacity: 1 - progress,
              scale: 1.5 * (1 + progress * 0.33),
              duration: isScrollingUp ? 0.3 : 1.2, // Half time when scrolling up
              ease: "none"
            });
          }
        }
      });

      // Also fade out the background gradient
      gsap.to('.hero-section .absolute.inset-0.bg-gradient-glass', {
        opacity: 0,
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "+=200vh",
          scrub: 1.0,
        }
      });

      // Continuous floating animation
      gsap.to('.hero-bg-image', {
        y: "+=8",
        x: "+=4",
        duration: 8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 0.5
      });

    }

    // Floating elements scroll away with the background
    gsap.to('.hero-float', {
      y: "-200%",
      opacity: 0,
      rotation: 180,
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "+=200vh",
        scrub: 1.2,
      }
    });

    // Enhanced floating animations (continuous movement)
    gsap.to('.hero-float:nth-child(1)', {
      y: "+=6",
      x: "+=3",
      rotation: "+=10",
      duration: 6,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      delay: 0
    });

    gsap.to('.hero-float:nth-child(2)', {
      y: "+=8",
      x: "-=4",
      rotation: "-=8",
      duration: 7,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      delay: 1
    });

    gsap.to('.hero-float:nth-child(3)', {
      y: "-=5",
      x: "+=2",
      rotation: "+=12",
      duration: 8,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      delay: 2
    });

    gsap.to('.hero-float:nth-child(4)', {
      y: "+=7",
      x: "+=5",
      rotation: "-=6",
      duration: 9,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      delay: 0.5
    });

    gsap.to('.hero-float:nth-child(5)', {
      y: "-=4",
      x: "-=3",
      rotation: "+=15",
      duration: 5,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      delay: 1.5
    });

    // Enhanced scroll indicator with better visibility
    fadeUpAnimation('.scroll-indicator', { start: "top 60%" });

    // Add scroll-triggered fade out for scroll indicator
    gsap.to('.scroll-indicator', {
      opacity: 0,
      y: -20,
      scrollTrigger: {
        trigger: '.scroll-indicator',
        start: "top 80%",
        end: "top 50%",
        scrub: 1,
      }
    });

    // Apply magnetic effect to buttons
    magneticAnimation('.hero-buttons .btn');
  }, [fadeUpAnimation, parallaxAnimation, staggerAnimation, magneticAnimation]);

  return (
    <section className="hero-section relative h-[200vh] hero-mobile-optimized bg-gradient-hero overflow-hidden">
      {/* Enhanced background layers */}
      <div className="absolute inset-0 bg-gradient-glass"></div>
      <div
        ref={heroImageRef}
        className="hero-bg-image absolute inset-0 will-change-transform bg-background"
        style={{
          background: 'hsl(var(--background))',
          transformOrigin: 'center center'
        }}
      ></div>

      {/* Enhanced floating elements with GSAP animations - hidden on small mobile */}
      <div className="hero-float hidden sm:block absolute top-20 left-10 w-3 h-3 bg-accent rounded-full opacity-90 shadow-glow will-change-transform"></div>
      <div className="hero-float hidden sm:block absolute top-32 right-20 w-4 h-4 bg-primary rounded-full opacity-80 shadow-glow will-change-transform"></div>
      <div className="hero-float hidden sm:block absolute bottom-40 left-20 w-2 h-2 bg-accent rounded-full opacity-85 shadow-glow will-change-transform"></div>
      <div className="hero-float hidden sm:block absolute top-1/2 right-10 w-3 h-3 bg-primary rounded-full opacity-75 shadow-glow will-change-transform"></div>
      <div className="hero-float hidden sm:block absolute bottom-60 right-32 w-2.5 h-2.5 bg-accent rounded-full opacity-80 shadow-glow will-change-transform"></div>

      <div className="hero-content relative z-10 container mx-auto px-4 sm:px-6 text-center flex items-center justify-center min-h-screen">
        <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">
          {/* Enhanced title with GSAP animations */}
          <div className="hero-title overflow-hidden">
            <div className="flex items-center justify-center gap-2 mb-4 opacity-80">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-accent animate-shimmer" />
              <span className="text-xs sm:text-sm uppercase tracking-wider text-muted-foreground font-medium text-center">
                Next-Generation Business Intelligence
              </span>
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-accent animate-shimmer" />
            </div>
            <h1 className="hero-title-mobile sm:text-5xl md:text-6xl lg:text-8xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6 leading-tight tracking-tight px-2 sm:px-0">
              Insight Flow AI
            </h1>
          </div>

          <p className="hero-subtitle hero-subtitle-mobile sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed font-light px-4 sm:px-0">
            Turn your business data into profitable decisions with AI tools that help you grow smarter and work more efficiently.
          </p>

          <div className="hero-buttons flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4 sm:px-0">
            <Button
              variant="soft"
              size="xl"
              className="btn w-full sm:w-auto group relative overflow-hidden shadow-floating hover:shadow-glow transition-all duration-500 ease-out min-h-[44px] px-6 py-3"
              onClick={(e) => {
                console.log('Contact button clicked!', e);
                try {
                  trackButtonClick('Contact Us Today', 'hero');
                  navigate('/contact');
                } catch (error) {
                  console.error('Error handling contact button click:', error);
                  navigate('/contact'); // Still navigate even if tracking fails
                }
              }}
            >
              <span className="relative z-10">Contact Us Today</span>
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-all duration-700 ease-out"></div>
            </Button>

            <Button
              variant="outline"
              size="xl"
              className="btn w-full sm:w-auto group border-2 border-muted-foreground/20 hover:border-primary/50 transition-all duration-500 ease-out bg-glass backdrop-blur-sm min-h-[44px] px-6 py-3"
              onClick={(e) => {
                console.log('Work With Us button clicked!', e);
                try {
                  trackButtonClick('Work With Us', 'hero');
                  navigate('/work-with-us');
                } catch (error) {
                  console.error('Error handling work with us button click:', error);
                  navigate('/work-with-us'); // Still navigate even if tracking fails
                }
              }}
            >
              Work With Us
            </Button>
          </div>
        </div>
      </div>
      
      {/* Enhanced bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
      
      {/* Enhanced scroll indicator */}
      <div
        className="scroll-indicator absolute bottom-1/3 left-1/2 transform -translate-x-1/2 animate-float cursor-pointer opacity-70 hover:opacity-100 transition-all duration-300"
        onClick={() => document.getElementById('mission')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="flex flex-col items-center gap-2">
          <div className="w-1 h-8 bg-gradient-to-b from-transparent via-muted-foreground to-transparent rounded-full opacity-50"></div>
          <ChevronDown className="w-6 h-6 text-muted-foreground hover:text-primary transition-smooth animate-bounce" />
          <div className="text-xs text-muted-foreground font-light tracking-wide opacity-60 mt-1">Scroll</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;