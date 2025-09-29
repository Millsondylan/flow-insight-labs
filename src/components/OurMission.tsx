import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Brain, Users, Zap, TrendingUp, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const OurMission = () => {
  const {
    fadeUpAnimation,
    modernStaggerReveal,
    fadeInScale,
    textClipReveal,
    revealBlurAnimation,
    slideInFromLeft,
    slideInFromRight
  } = useScrollAnimations();

  useEffect(() => {
    // Initialize GSAP animations with scroll triggers
    setTimeout(() => {
      // Section badge reveal
      fadeInScale('.mission-badge', { start: "top 90%" });

      // Title clip reveal
      textClipReveal('.mission-title', { start: "top 85%" });

      // Description blur reveal
      revealBlurAnimation('.mission-description', { start: "top 80%" });

      // Mission cards slide in from alternating sides
      slideInFromLeft('.mission-card:nth-child(odd)', { start: "top 75%" });
      slideInFromRight('.mission-card:nth-child(even)', { start: "top 75%" });

      // Stats section
      modernStaggerReveal('.mission-stat', { start: "top 80%" });
    }, 100);
  }, [fadeUpAnimation, modernStaggerReveal, fadeInScale, textClipReveal, revealBlurAnimation, slideInFromLeft, slideInFromRight]);

  const missionPoints = [
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Transform raw business data into actionable intelligence that drives real results and competitive advantages."
    },
    {
      icon: Users,
      title: "Business Empowerment",
      description: "Enable businesses to understand peak demand patterns, optimize operations, and maximize profitability through AI."
    },
    {
      icon: TrendingUp,
      title: "User Enhancement",
      description: "Help individuals and teams make smarter decisions with personalized AI recommendations and data-driven guidance."
    }
  ];

  const stats = [
    { number: "AI-First", label: "Approach to Business Intelligence" },
    { number: "Real-Time", label: "Data Processing & Insights" },
    { number: "Scalable", label: "Solutions for Any Business Size" }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-subtle relative overflow-hidden" id="mission">
      {/* Background animated elements */}
      <div className="absolute top-32 left-16 w-40 h-40 bg-gradient-primary opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-24 w-56 h-56 bg-accent opacity-8 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 sm:mb-20 md:mb-24">
          <div className="mission-badge inline-flex items-center gap-2 bg-gradient-glass px-4 py-2 rounded-full mb-6 shadow-soft">
            <Target className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Our Mission</span>
          </div>
          <h2 className="mission-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent px-2">
            Using AI to Transform Businesses & Users
          </h2>
          <p className="mission-description text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
            We build AI that works for everyone. Our goal is simple: help businesses understand their data better and give their customers smarter tools to succeed.
          </p>
        </div>

        {/* Mission Points */}
        <div className="grid lg:grid-cols-3 gap-8 sm:gap-12 mb-16 sm:mb-20 md:mb-24">
          {missionPoints.map((point, index) => (
            <Card
              key={index}
              className={`mission-card group p-6 sm:p-8 bg-gradient-card border-0 shadow-soft hover:shadow-floating transition-spring cursor-pointer overflow-hidden relative`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-smooth"></div>
              <CardContent className="p-0 relative z-10">
                <div className="flex flex-col items-center text-center gap-6">
                  <div className="p-4 bg-gradient-primary rounded-2xl shadow-glow group-hover:scale-110 transition-spring">
                    <point.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-4 group-hover:text-primary transition-smooth">
                      {point.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                      {point.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-card p-8 sm:p-12 rounded-3xl shadow-floating border border-border/50 backdrop-blur-sm">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Our Commitment
            </h3>
            <p className="text-lg text-muted-foreground">
              Delivering AI solutions that create measurable impact for businesses and meaningful value for users
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 sm:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="mission-stat text-center group">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-spring">
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-sm sm:text-base font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;