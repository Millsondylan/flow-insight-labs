import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Target, Zap, Users, BarChart3, CheckCircle } from "lucide-react";
import { useEffect } from "react";

const AICoach = () => {
  useEffect(() => {
    import('aos').then(AOS => {
      AOS.default.init({
        duration: 1000,
        once: true,
        offset: 100
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

  return (
    <section className="py-20 bg-background" id="ai-coach" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Integrate Our AI Coach
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Elevate your business platform with our cutting-edge AI Coach, transforming user data into actionable insights that drive profitability and growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div className="space-y-8" data-aos="fade-right" data-aos-delay="200">
            <Card className="p-6 bg-gradient-subtle border-0 shadow-soft">
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-primary rounded-lg">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Smart Data Analysis</h3>
                    <p className="text-muted-foreground">
                      Our AI meticulously analyzes user-provided data to deliver tailored recommendations, such as optimizing routes for higher earnings or identifying peak demand periods.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 bg-gradient-subtle border-0 shadow-soft">
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-primary rounded-lg">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Actionable Results</h3>
                    <p className="text-muted-foreground">
                      These insights are designed to drive measurable results, enhancing user performance and satisfaction while positioning your business as a technology leader.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 bg-gradient-subtle border-0 shadow-soft">
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-primary rounded-lg">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Competitive Edge</h3>
                    <p className="text-muted-foreground">
                      Our solution is fully customizable, scalable across industries, and designed for effortless implementation to give your platform a competitive advantage.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8" data-aos="fade-left" data-aos-delay="400">
            <div className="bg-card p-8 rounded-2xl shadow-strong">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <BarChart3 className="w-8 h-8 text-primary" />
                Key Benefits
              </h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center">
              <p className="text-lg text-muted-foreground mb-6">
                Ready to unlock the power of data-driven success?
              </p>
              <Button 
                variant="premium" 
                size="xl" 
                className="w-full sm:w-auto"
                onClick={() => window.location.href = 'mailto:Support@insight-flowai.com?subject=AI Coach Integration Inquiry&body=Hi%2C%0A%0AI%27m interested in integrating your AI Coach into my platform. Could you please provide more information about the integration process and pricing%3F%0A%0AThank you%21'}
              >
                <Users className="w-5 h-5 mr-2" />
                Integrate AI Coach Today
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AICoach;