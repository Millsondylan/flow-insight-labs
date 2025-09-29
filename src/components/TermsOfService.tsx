import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Shield, Clock, Calendar } from "lucide-react";
import { useEffect } from "react";

const TermsOfService = () => {
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

  const sections = [
    {
      title: "Introduction",
      content: "These Terms of Service govern your use of the Insight Flow AI platform and services. By accessing or using our services, you agree to be bound by these terms and all applicable laws and regulations.",
      delay: "200"
    },
    {
      title: "Use of Service",
      content: "Our services are provided 'as is' for your use. You agree not to misuse our services or help anyone else do so. This includes violating laws, regulations, or using our services to transmit any harmful content.",
      delay: "400"
    },
    {
      title: "Account Security",
      content: "You are responsible for maintaining the security of your account and for any activities that occur under your account. Notify us immediately of any unauthorized use or security breach.",
      delay: "600"
    },
    {
      title: "Privacy Policy",
      content: "Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your information when you use our services.",
      delay: "800"
    },
    {
      title: "Limitation of Liability",
      content: "Insight Flow AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services or any content thereon.",
      delay: "1000"
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden" id="terms">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-primary opacity-10 rounded-full blur-3xl wave-float-delay-1"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-primary opacity-10 rounded-full blur-3xl wave-float"></div>
      <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-accent opacity-5 rounded-full blur-2xl wave-scroll-reverse"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 bg-gradient-glass px-4 py-2 rounded-full mb-6 shadow-soft">
            <FileText className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Legal</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
            Terms of Service
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Please read these terms carefully before using our AI-powered business solutions. These terms outline the rules and regulations for using our services.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8" data-aos="zoom-in" data-aos-delay="300">
          {sections.map((section, index) => (
            <Card 
              key={index} 
              className="group shadow-soft hover:shadow-floating transition-spring transform hover:scale-[1.01] bg-gradient-card border-0 overflow-hidden relative wave-float shimmer-wave"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-smooth"></div>
              <CardHeader className="relative z-10">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-primary rounded-xl shadow-glow group-hover:scale-110 transition-spring">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold group-hover:text-primary transition-smooth">
                    {section.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative z-10 pb-8">
                <p className="text-muted-foreground leading-relaxed">
                  {section.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 text-center max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="500">
          <Card className="shadow-floating border-0 bg-gradient-card backdrop-blur-sm overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-smooth"></div>
            <CardContent className="p-8 relative z-10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold">Last Updated</h3>
              </div>
              <p className="text-muted-foreground flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>Effective Date: September 29, 2025</span>
              </p>
              <p className="text-muted-foreground mt-4">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services constitutes acceptance of any modifications.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TermsOfService;