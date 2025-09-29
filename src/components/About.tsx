import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Globe, Heart } from "lucide-react";
import { useEffect } from "react";

const About = () => {
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

  const values = [
    {
      icon: <Target className="w-8 h-8 text-white" />,
      title: "Mission",
      description: "To empower businesses with AI-driven insights that transform data into profitable actions and sustainable growth."
    },
    {
      icon: <Globe className="w-8 h-8 text-white" />,
      title: "Vision",
      description: "To be the global leader in AI-powered business solutions, enabling companies of all sizes to leverage data intelligently."
    },
    {
      icon: <Heart className="w-8 h-8 text-white" />,
      title: "Values",
      description: "Innovation, transparency, integrity, and dedication to delivering exceptional value to our clients worldwide."
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden" id="about">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-primary opacity-10 rounded-full blur-3xl wave-float-delay-1"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-primary opacity-10 rounded-full blur-3xl wave-float"></div>
      <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-accent opacity-5 rounded-full blur-2xl wave-scroll-reverse"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 bg-gradient-glass px-4 py-2 rounded-full mb-6 shadow-soft">
            <Users className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">About Us</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
            Our Story
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Insight Flow AI is at the forefront of transforming how businesses leverage data to drive profitability and growth. Our team combines deep expertise in artificial intelligence, data science, and business optimization to deliver cutting-edge solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20" data-aos="zoom-in" data-aos-delay="300">
          {values.map((value, index) => (
            <Card 
              key={index} 
              className="group text-center shadow-soft hover:shadow-floating transition-spring transform hover:scale-[1.02] bg-gradient-card border-0 overflow-hidden relative wave-float shimmer-wave"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-smooth"></div>
              <CardHeader className="relative z-10 pt-8">
                <div className="mx-auto mb-6 p-4 bg-gradient-primary rounded-2xl w-fit shadow-glow group-hover:scale-110 transition-spring">
                  {value.icon}
                </div>
                <CardTitle className="text-2xl font-bold group-hover:text-primary transition-smooth">
                  {value.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10 pb-8">
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="500">
          <Card className="shadow-floating border-0 bg-gradient-card backdrop-blur-sm overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-smooth"></div>
            <CardContent className="p-12 relative z-10 text-center">
              <h3 className="text-3xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">Our Commitment</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We are committed to developing solutions that not only meet today's business challenges but also anticipate future needs. Our AI technologies are designed to be scalable, secure, and seamlessly integrated into your existing systems.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-muted-foreground">Innovation-Driven</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                  <span className="text-muted-foreground">Client-Centric</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-muted-foreground">Quality Focused</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;