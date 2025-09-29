import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, ArrowRight, Sparkles, Zap, Users, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AICoachBrief = () => {
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

  const highlights = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "AI-Powered Intelligence",
      description: "Advanced algorithms that learn and adapt"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Enhanced Engagement",
      description: "Boost user interaction and retention"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Proven Results",
      description: "Measurable business growth outcomes"
    }
  ];

  return (
    <section className="py-24 bg-gradient-subtle relative overflow-hidden" id="ai-coach">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-primary opacity-5 rounded-full blur-3xl wave-float"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent opacity-5 rounded-full blur-3xl wave-float-delay-1"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-primary rounded-2xl shadow-glow animate-glow">
              <Brain className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              AI Coach Integration
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Transform your platform with intelligent AI coaching that drives user engagement and delivers exceptional results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="group text-center shadow-soft hover:shadow-floating transition-spring transform hover:scale-[1.02] bg-gradient-card border-0 overflow-hidden relative shimmer-wave"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-smooth"></div>
              <CardHeader className="relative z-10">
                <div className="mx-auto mb-4 p-4 bg-gradient-primary rounded-2xl w-fit shadow-glow group-hover:scale-110 transition-spring">
                  <div className="text-white">{item.icon}</div>
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-smooth">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center" data-aos="fade-up" data-aos-delay="600">
          <Button
            variant="premium"
            size="xl"
            className="group shadow-floating hover:shadow-glow transition-spring relative overflow-hidden"
            onClick={() => navigate('/ai-coach')}
          >
            <div className="flex items-center gap-3">
              <Sparkles className="w-6 h-6 group-hover:scale-110 transition-spring" />
              <span className="text-lg">Explore AI Coach Solutions</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-spring" />
            </div>
            <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-smooth"></div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AICoachBrief;