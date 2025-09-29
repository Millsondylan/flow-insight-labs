import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Target, Zap, Users, BarChart3, CheckCircle, ArrowRight, Sparkles } from "lucide-react";
import { useEffect } from "react";

const AICoach = () => {
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

  const benefits = [
    "Seamless integration into existing platforms",
    "Customizable AI recommendations across industries", 
    "Real-time data analysis and insights",
    "Scalable solution for businesses of all sizes",
    "Enhanced user engagement and retention",
    "Measurable ROI and performance improvements"
  ];

  const features = [
    {
      icon: Brain,
      title: "Smart Data Analysis",
      description: "Our AI meticulously analyzes user-provided data to deliver tailored recommendations, such as optimizing routes for higher earnings or identifying peak demand periods.",
      delay: "200"
    },
    {
      icon: Target,
      title: "Actionable Results",
      description: "These insights are designed to drive measurable results, enhancing user performance and satisfaction while positioning your business as a technology leader.",
      delay: "400"
    },
    {
      icon: Zap,
      title: "Competitive Edge",
      description: "Our solution is fully customizable, scalable across industries, and designed for effortless implementation to give your platform a competitive advantage.",
      delay: "600"
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden" id="ai-coach">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-primary opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-primary opacity-5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 bg-gradient-glass px-4 py-2 rounded-full mb-6 shadow-soft">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">AI Integration</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
            Integrate Our AI Coach
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Elevate your business platform with our cutting-edge AI Coach, transforming user data into actionable insights that drive profitability and sustainable growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Features Section */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="group p-8 bg-gradient-card border-0 shadow-soft hover:shadow-floating transition-spring cursor-pointer overflow-hidden relative"
                data-aos="slide-in-left" 
                data-aos-delay={feature.delay}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-smooth"></div>
                <CardContent className="p-0 relative z-10">
                  <div className="flex items-start gap-6">
                    <div className="p-4 bg-gradient-primary rounded-xl shadow-glow group-hover:scale-110 transition-spring">
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-smooth">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="space-y-8" data-aos="slide-in-right" data-aos-delay="400">
            <div className="bg-gradient-card p-10 rounded-3xl shadow-floating border border-border/50 backdrop-blur-sm">
              <h3 className="text-3xl font-bold mb-8 flex items-center gap-4">
                <div className="p-3 bg-gradient-primary rounded-xl shadow-glow">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                Key Benefits
              </h3>
              <ul className="space-y-6">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-4 group">
                    <div className="p-1 bg-gradient-primary rounded-full group-hover:scale-110 transition-spring">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg group-hover:text-primary transition-smooth">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center space-y-6">
              <p className="text-xl text-muted-foreground font-light">
                Ready to unlock the power of data-driven success?
              </p>
              <Button 
                variant="premium" 
                size="xl" 
                className="group w-full sm:w-auto shadow-floating hover:shadow-glow transition-spring relative overflow-hidden"
                onClick={() => window.location.href = 'mailto:Support@insight-flowai.com?subject=AI Coach Integration Inquiry&body=Hi%2C%0A%0AI%27m interested in integrating your AI Coach into my platform. Could you please provide more information about the integration process and pricing%3F%0A%0AThank you%21'}
              >
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 group-hover:scale-110 transition-spring" />
                  <span>Integrate AI Coach Today</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-spring" />
                </div>
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-smooth"></div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AICoach;