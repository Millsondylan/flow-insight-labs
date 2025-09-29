import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Clock, ArrowRight, BarChart3 } from "lucide-react";
import { useEffect } from "react";

const OurApps = () => {
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

  return (
    <section className="py-24 bg-gradient-subtle" id="apps">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 bg-gradient-glass px-4 py-2 rounded-full mb-6 shadow-soft">
            <BarChart3 className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Our Solutions</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
            Our Apps
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our suite of AI-powered applications designed to optimize your business processes and enhance productivity with cutting-edge technology.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto" data-aos="zoom-in" data-aos-delay="300">
          <Card className="group shadow-floating hover:shadow-glow transition-spring transform hover:scale-[1.02] bg-gradient-card border-0 overflow-hidden relative">
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
            
            <CardHeader className="text-center pb-6 relative z-10">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="p-4 bg-gradient-primary rounded-2xl shadow-glow animate-glow">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-3xl md:text-4xl bg-gradient-primary bg-clip-text text-transparent font-bold">
                  Trading Journal Pro
                </CardTitle>
              </div>
              <Badge variant="outline" className="mx-auto flex items-center gap-2 w-fit px-4 py-2 bg-gradient-glass backdrop-blur-sm border-primary/20">
                <Clock className="w-4 h-4 animate-pulse" />
                <span className="font-medium">Coming Soon</span>
              </Badge>
            </CardHeader>
            
            <CardContent className="text-center pb-8 relative z-10">
              <CardDescription className="text-lg leading-relaxed max-w-3xl mx-auto mb-8 text-muted-foreground">
                Revolutionize your trading strategy with our AI-powered journal that analyzes your trading data to deliver personalized insights, optimize entry and exit points, and identify profitable patterns. Transform your trading performance with data-driven recommendations tailored to maximize your returns and minimize risk.
              </CardDescription>
              
              {/* Feature highlights */}
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-glass backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-smooth">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">AI Pattern Recognition</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-glass backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-smooth">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <span className="text-sm font-medium">Risk Optimization</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-glass backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-smooth">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                  <span className="text-sm font-medium">Performance Analytics</span>
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