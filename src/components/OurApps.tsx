import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Clock } from "lucide-react";
import { useEffect } from "react";

const OurApps = () => {
  useEffect(() => {
    import('aos').then(AOS => {
      AOS.default.init({
        duration: 1000,
        once: true,
        offset: 100
      });
    });
  }, []);
  return (
    <section className="py-20 bg-muted/30" id="apps">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Apps</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our suite of AI-powered applications designed to optimize your business processes and enhance productivity.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto" data-aos="zoom-in" data-aos-delay="300">
          <Card className="shadow-strong hover:shadow-glow transition-smooth transform hover:scale-105 bg-gradient-subtle border-0">
            <CardHeader className="text-center pb-4">
              <div className="flex items-center justify-center gap-3 mb-4">
                <TrendingUp className="w-8 h-8 text-primary" />
                <CardTitle className="text-2xl md:text-3xl bg-gradient-primary bg-clip-text text-transparent">
                  Trading Journal Pro
                </CardTitle>
              </div>
              <Badge variant="outline" className="mx-auto flex items-center gap-2 w-fit">
                <Clock className="w-4 h-4" />
                Coming Soon
              </Badge>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-lg leading-relaxed max-w-2xl mx-auto">
                Revolutionize your trading strategy with our AI-powered journal that analyzes your trading data to deliver personalized insights, optimize entry and exit points, and identify profitable patterns. Transform your trading performance with data-driven recommendations tailored to maximize your returns and minimize risk.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OurApps;