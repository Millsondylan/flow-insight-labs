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
      description: "Our AI meticulously analyzes user-provided data to deliver tailored recommendations. For example, imagine a rideshare driver uploading their trip data - our AI could optimize routes for higher earnings and identify peak demand periods to increase fares.",
      delay: "200"
    },
    {
      icon: Target,
      title: "Actionable Results",
      description: "These insights are designed to drive measurable results, enhancing user performance and satisfaction. By integrating our AI Coach, your platform gains a competitive edge, offering personalized guidance that fosters user engagement and loyalty.",
      delay: "400"
    },
    {
      icon: Zap,
      title: "Competitive Edge",
      description: "This innovative feature not only positions your business as a leader in technology but also drives retention and revenue growth. Our solution is fully customizable, scalable across industries, and designed for effortless implementation.",
      delay: "600"
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden" id="ai-coach">
      {/* Enhanced background decorative elements with wave animations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-primary opacity-10 rounded-full blur-3xl wave-float-delay-1"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-primary opacity-10 rounded-full blur-3xl wave-float"></div>
      <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-accent opacity-5 rounded-full blur-2xl wave-scroll-reverse"></div>
      
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
            Elevate your business platform with our cutting-edge AI Coach, seamlessly integrated into your website or mobile application. Our solution transforms user-provided data into actionable insights, empowering your customers to maximize their potential and profitability.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Features Section */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className={`group p-8 bg-gradient-card border-0 shadow-soft hover:shadow-floating transition-spring cursor-pointer overflow-hidden relative shimmer-wave ${index === 0 ? 'wave-float' : index === 1 ? 'wave-scroll' : 'wave-scroll-reverse'}`}
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
            <div className="bg-gradient-card p-10 rounded-3xl shadow-floating border border-border/50 backdrop-blur-sm wave-float-delay-2 shimmer-wave">
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

        {/* Use Case Example Section */}
        <div className="mt-32 max-w-6xl mx-auto" data-aos="fade-up" data-aos-delay="800">
          <div className="bg-gradient-card p-12 rounded-3xl shadow-floating border border-border/50 backdrop-blur-sm wave-float-delay-1 shimmer-wave">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                Hypothetical Use Case Example
              </h3>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                See how our AI Coach could transform raw data into profitable insights across different industries
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="p-6 bg-gradient-glass rounded-2xl border border-border/30">
                  <h4 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <div className="p-2 bg-gradient-primary rounded-lg">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    Rideshare Driver Optimization
                  </h4>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    In this hypothetical scenario, when a rideshare driver uploads their trip data, our AI could analyze patterns to deliver tailored recommendations:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Optimizing routes for higher earnings potential</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Identifying peak demand periods to increase fares</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Suggesting optimal working hours for maximum profit</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Predicting high-demand areas and times</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-6 bg-gradient-glass rounded-2xl border border-border/30">
                  <h4 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <div className="p-2 bg-gradient-primary rounded-lg">
                      <BarChart3 className="w-6 h-6 text-white" />
                    </div>
                    Potential Benefits
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>Improved operational efficiency through data-driven insights</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>Enhanced user engagement with personalized recommendations</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>Optimized resource allocation and time management</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>Competitive advantage through AI-powered analytics</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center" data-aos="fade-up" data-aos-delay="1000">
          <div className="max-w-4xl mx-auto space-y-8">
            <h3 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Unlock the Power of Data-Driven Success
            </h3>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Contact us today to integrate our AI Coach and transform your platform into a hub of profitability and innovation.
            </p>
            <Button
              variant="premium"
              size="xl"
              className="group shadow-floating hover:shadow-glow transition-spring relative overflow-hidden"
              onClick={() => window.location.href = 'mailto:Support@insight-flowai.com?subject=AI Coach Integration Inquiry - Transform My Platform&body=Hi%2C%0A%0AI%27m interested in integrating your AI Coach into my platform to unlock data-driven success. Could you please provide more information about%3A%0A%0A- Integration process and timeline%0A- Customization options for my industry%0A- Pricing and scalability options%0A- Success metrics and ROI expectations%0A%0AThank you%21'}
            >
              <div className="flex items-center gap-3">
                <Brain className="w-6 h-6 group-hover:scale-110 transition-spring" />
                <span className="text-lg">Start Your AI Integration Today</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-spring" />
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