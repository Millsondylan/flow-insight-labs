import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Phone, MapPin, ArrowRight, Sparkles } from "lucide-react";
import { useEffect } from "react";

const Contact = () => {
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
    <section className="py-24 bg-gradient-subtle relative overflow-hidden" id="contact">
      {/* Enhanced background decorative elements with wave animations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-primary opacity-10 rounded-full blur-3xl wave-float"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-primary opacity-10 rounded-full blur-3xl wave-float-delay-1"></div>
      <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-accent opacity-5 rounded-full blur-2xl wave-scroll"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 bg-gradient-glass px-4 py-2 rounded-full mb-6 shadow-soft">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Get in Touch</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to transform your platform with AI-powered insights? Contact our team to discuss your integration needs and unlock your business potential.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Email Support Card */}
          <Card
            className="group text-center shadow-soft hover:shadow-floating transition-spring transform hover:scale-[1.02] bg-gradient-card border-0 overflow-hidden relative wave-scroll shimmer-wave"
            data-aos="slide-in-left"
            data-aos-delay="200"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-smooth"></div>
            <CardHeader className="relative z-10">
              <div className="mx-auto mb-6 p-5 bg-gradient-primary rounded-2xl w-fit shadow-glow group-hover:scale-110 transition-spring">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold group-hover:text-primary transition-smooth">
                Email Support
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                Get expert assistance with integration and technical questions from our dedicated support team.
              </p>
              <a 
                href="mailto:Support@insight-flowai.com"
                className="inline-flex items-center gap-2 text-primary hover:text-accent font-semibold text-lg group/link transition-smooth"
              >
                Support@insight-flowai.com
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-smooth" />
              </a>
            </CardContent>
          </Card>

          {/* WhatsApp Contact Card */}
          <Card
            className="group text-center shadow-soft hover:shadow-floating transition-spring transform hover:scale-[1.02] bg-gradient-card border-0 overflow-hidden relative wave-scroll-reverse shimmer-wave"
            data-aos="slide-in-right"
            data-aos-delay="400"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-smooth"></div>
            <CardHeader className="relative z-10">
              <div className="mx-auto mb-6 p-5 bg-gradient-primary rounded-2xl w-fit shadow-glow group-hover:scale-110 transition-spring">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold group-hover:text-primary transition-smooth">
                WhatsApp Support
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                Get instant support and consultation via WhatsApp for immediate assistance.
              </p>
              <Button 
                variant="premium" 
                className="group/btn w-full shadow-soft hover:shadow-glow transition-spring relative overflow-hidden"
                onClick={() => window.open('https://wa.me/27674420379', '_blank')}
              >
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 group-hover/btn:scale-110 transition-spring" />
                  <span>Chat on WhatsApp</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-spring" />
                </div>
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover/btn:opacity-10 transition-smooth"></div>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Global Support Badge */}
        <div className="mt-20 text-center" data-aos="fade-up" data-aos-delay="600">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-glass backdrop-blur-sm rounded-full shadow-soft border border-border/30">
            <MapPin className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-muted-foreground font-medium">
              Serving businesses globally with 24/7 support
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;