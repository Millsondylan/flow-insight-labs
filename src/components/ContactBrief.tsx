import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Phone, ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ContactBrief = () => {
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

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Support",
      description: "Professional consultation via email"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "WhatsApp Chat",
      description: "Instant messaging for quick queries"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Round-the-clock assistance available"
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden" id="contact-brief">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-primary opacity-10 rounded-full blur-3xl wave-float"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent opacity-10 rounded-full blur-3xl wave-float-delay-1"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 bg-gradient-glass px-4 py-2 rounded-full mb-6 shadow-soft">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Get in Touch</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Connect with our team to discuss your project and discover how we can help transform your business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactMethods.map((method, index) => (
            <Card
              key={index}
              className="group text-center shadow-soft hover:shadow-floating transition-spring transform hover:scale-[1.02] bg-gradient-card border-0 overflow-hidden relative shimmer-wave"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-smooth"></div>
              <CardHeader className="relative z-10">
                <div className="mx-auto mb-4 p-4 bg-gradient-primary rounded-2xl w-fit shadow-glow group-hover:scale-110 transition-spring">
                  <div className="text-white">{method.icon}</div>
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-smooth">
                  {method.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground leading-relaxed">
                  {method.description}
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
            onClick={() => navigate('/contact')}
          >
            <div className="flex items-center gap-3">
              <MessageSquare className="w-6 h-6 group-hover:scale-110 transition-spring" />
              <span className="text-lg">Contact Us Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-spring" />
            </div>
            <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-smooth"></div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactBrief;