import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Target, Zap, Users, BarChart3, CheckCircle, ArrowRight, Sparkles } from "lucide-react";
import { useEffect } from "react";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const AICoach = () => {
  const {
    fadeUpAnimation,
    slideInFromLeft,
    slideInFromRight,
    modernStaggerReveal,
    fadeInScale,
    textClipReveal,
    revealBlurAnimation
  } = useScrollAnimations();

  useEffect(() => {
    // Section badge
    fadeInScale('.aicoach-badge', { start: "top 90%" });

    // Title clip reveal
    textClipReveal('.aicoach-title', { start: "top 85%" });

    // Description blur reveal
    revealBlurAnimation('.aicoach-description', { start: "top 80%" });

    // Feature cards slide in from alternating sides
    slideInFromLeft('.aicoach-feature:nth-child(odd)', { start: "top 80%" });
    slideInFromRight('.aicoach-feature:nth-child(even)', { start: "top 80%" });

    // Benefits section
    slideInFromRight('.aicoach-benefits', { start: "top 75%" });

    // Use case section
    fadeInScale('.aicoach-usecase', { start: "top 75%" });

    // CTA section
    modernStaggerReveal('.aicoach-cta > *', { start: "top 80%" });
  }, [fadeUpAnimation, slideInFromLeft, slideInFromRight, modernStaggerReveal, fadeInScale, textClipReveal, revealBlurAnimation]);

  const benefits = [
    "Peak demand prediction for optimal business timing",
    "Customer behavior analysis for targeted strategies",
    "Revenue optimization through AI-driven insights",
    "Operational efficiency improvements and cost reduction",
    "Competitive advantage through predictive analytics",
    "User experience personalization that drives loyalty",
    "Real-time performance monitoring and adjustments",
    "Scalable integration across all business platforms"
  ];

  const features = [
    {
      icon: Brain,
      title: "Peak Demand Intelligence",
      description: "Our AI looks at your past data to predict when you'll be busiest. Restaurants can use this to know when to schedule more staff and when to raise prices for higher profits.",
      delay: "200"
    },
    {
      icon: Target,
      title: "Customer Behavior Analytics",
      description: "Learn what your customers really want by understanding their shopping habits. Retail stores can see which products sell best, when customers buy most, and how to create marketing that actually works.",
      delay: "400"
    },
    {
      icon: Zap,
      title: "Operational Optimization",
      description: "Get smart suggestions to run your business better - from managing supplies to using your resources wisely. Manufacturers can predict when machines need fixing, plan production schedules, and cut waste with smart automation.",
      delay: "600"
    }
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-background relative overflow-hidden" id="ai-coach">
      {/* Enhanced background decorative elements with wave animations - hidden on mobile */}
      <div className="hidden sm:block absolute top-0 left-0 w-72 h-72 bg-gradient-primary opacity-10 rounded-full blur-3xl wave-float-delay-1"></div>
      <div className="hidden sm:block absolute bottom-0 right-0 w-96 h-96 bg-gradient-primary opacity-10 rounded-full blur-3xl wave-float"></div>
      <div className="hidden sm:block absolute top-1/3 right-1/4 w-40 h-40 bg-accent opacity-5 rounded-full blur-2xl wave-scroll-reverse"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="aicoach-badge inline-flex items-center gap-2 bg-gradient-glass px-3 sm:px-4 py-2 rounded-full mb-4 sm:mb-6 shadow-soft">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-wider">AI Integration</span>
          </div>
          <h2 className="aicoach-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 bg-gradient-primary bg-clip-text text-transparent px-2">
            Integrate Our AI Coach
          </h2>
          <p className="aicoach-description text-base sm:text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
            Add our AI Coach to your business platform. It turns user data into helpful recommendations that help your customers make better decisions and earn more money.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start max-w-7xl mx-auto">
          {/* Features Section */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            {features.map((feature, index) => (
              <Card
                key={index}
                className={`aicoach-feature group p-4 sm:p-6 md:p-8 bg-gradient-card border-0 shadow-soft hover:shadow-floating transition-spring cursor-pointer overflow-hidden relative shimmer-wave ${index === 0 ? 'wave-float' : index === 1 ? 'wave-scroll' : 'wave-scroll-reverse'}`}
                              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-smooth"></div>
                <CardContent className="p-0 relative z-10">
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                    <div className="p-3 sm:p-4 bg-gradient-primary rounded-xl shadow-glow group-hover:scale-110 transition-spring flex-shrink-0">
                      <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 group-hover:text-primary transition-smooth">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm sm:text-base md:text-lg">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="aicoach-benefits space-y-6 sm:space-y-8 order-1 lg:order-2">
            <div className="bg-gradient-card p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-floating border border-border/50 backdrop-blur-sm wave-float-delay-2 shimmer-wave">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                <div className="p-3 bg-gradient-primary rounded-xl shadow-glow">
                  <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                Key Benefits
              </h3>
              <ul className="space-y-4 sm:space-y-6">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3 sm:gap-4 group">
                    <div className="p-1 bg-gradient-primary rounded-full group-hover:scale-110 transition-spring flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <span className="text-sm sm:text-base md:text-lg group-hover:text-primary transition-smooth leading-relaxed">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center space-y-4 sm:space-y-6">
              <p className="text-lg sm:text-xl text-muted-foreground font-light px-4">
                Ready to see what your data can do for your business?
              </p>
              <Button
                variant="premium"
                size="xl"
                className="group w-full sm:w-auto shadow-floating hover:shadow-glow transition-spring relative overflow-hidden min-h-[44px] px-6 py-3"
                onClick={() => window.location.href = 'mailto:Support@insight-flowai.com?subject=AI Coach Integration Inquiry&body=Hi%2C%0A%0AI%27m interested in integrating your AI Coach into my platform. Could you please provide more information about the integration process and pricing%3F%0A%0AThank you%21'}
              >
                <div className="flex items-center gap-3 justify-center">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-spring" />
                  <span className="text-sm sm:text-base">Integrate AI Coach Today</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-spring" />
                </div>
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-smooth"></div>
              </Button>
            </div>
          </div>
        </div>

        {/* Use Case Example Section */}
        <div className="aicoach-usecase mt-16 sm:mt-20 md:mt-32 max-w-6xl mx-auto">
          <div className="bg-gradient-card p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl shadow-floating border border-border/50 backdrop-blur-sm wave-float-delay-1 shimmer-wave">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-primary bg-clip-text text-transparent px-2">
                Hypothetical Use Case Example
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
                See how our AI Coach could transform raw data into profitable insights across different industries
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">
              <div className="space-y-6">
                <div className="p-4 sm:p-6 bg-gradient-glass rounded-xl sm:rounded-2xl border border-border/30">
                  <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
                    <div className="p-2 bg-gradient-primary rounded-lg">
                      <Target className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    Rideshare Driver Optimization
                  </h4>
                  <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                    In this hypothetical scenario, when a rideshare driver uploads their trip data, our AI could analyze patterns to deliver tailored recommendations:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm sm:text-base">Optimizing routes for higher earnings potential</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm sm:text-base">Identifying peak demand periods to increase fares</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm sm:text-base">Suggesting optimal working hours for maximum profit</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm sm:text-base">Predicting high-demand areas and times</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-4 sm:p-6 bg-gradient-glass rounded-xl sm:rounded-2xl border border-border/30">
                  <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
                    <div className="p-2 bg-gradient-primary rounded-lg">
                      <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    Potential Benefits
                  </h4>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm sm:text-base">Improved operational efficiency through data-driven insights</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm sm:text-base">Enhanced user engagement with personalized recommendations</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm sm:text-base">Optimized resource allocation and time management</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm sm:text-base">Competitive advantage through AI-powered analytics</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="aicoach-cta mt-16 sm:mt-20 text-center">
          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent px-2">
              Unlock the Power of Data-Driven Success
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed px-4 sm:px-0">
              Contact us today to add our AI Coach to your platform and help your users succeed.
            </p>
            <Button
              variant="premium"
              size="xl"
              className="group shadow-floating hover:shadow-glow transition-spring relative overflow-hidden w-full sm:w-auto min-h-[44px] px-6 py-3"
              onClick={() => window.location.href = 'mailto:Support@insight-flowai.com?subject=AI Coach Integration Inquiry - Transform My Platform&body=Hi%2C%0A%0AI%27m interested in integrating your AI Coach into my platform to unlock data-driven success. Could you please provide more information about%3A%0A%0A- Integration process and timeline%0A- Customization options for my industry%0A- Pricing and scalability options%0A- Success metrics and ROI expectations%0A%0AThank you%21'}
            >
              <div className="flex items-center gap-3 justify-center">
                <Brain className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-spring" />
                <span className="text-sm sm:text-base md:text-lg">Start Your AI Integration Today</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-spring" />
              </div>
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-smooth"></div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AICoach;