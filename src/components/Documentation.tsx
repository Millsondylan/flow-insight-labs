import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Code, Zap, Download, Search, Lightbulb } from "lucide-react";
import { useEffect } from "react";

const Documentation = () => {
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

  const documentationSections = [
    {
      icon: <Code className="w-8 h-8 text-white" />,
      title: "API Documentation",
      description: "Complete reference for our AI Coach API endpoints, request formats, and response structures.",
      href: "#",
      delay: "200"
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: "Quick Start Guide",
      description: "Step-by-step instructions to get your AI Coach integration up and running in minutes.",
      href: "#",
      delay: "400"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-white" />,
      title: "Integration Guide",
      description: "Comprehensive guide for integrating our AI solutions into your existing platform.",
      href: "#",
      delay: "600"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-white" />,
      title: "Best Practices",
      description: "Learn how to maximize the value of your AI Coach integration with proven strategies.",
      href: "#",
      delay: "800"
    }
  ];

  const resources = [
    {
      title: "SDK Downloads",
      description: "Official SDKs for popular programming languages and frameworks",
      icon: <Download className="w-5 h-5 text-primary" />
    },
    {
      title: "Video Tutorials",
      description: "Step-by-step walkthroughs for common implementation scenarios",
      icon: <Zap className="w-5 h-5 text-primary" />
    },
    {
      title: "Code Examples",
      description: "Ready-to-use code snippets for common integration patterns",
      icon: <Code className="w-5 h-5 text-primary" />
    },
    {
      title: "Community Forum",
      description: "Connect with other developers and share implementation experiences",
      icon: <Search className="w-5 h-5 text-primary" />
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden" id="documentation">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-primary opacity-10 rounded-full blur-3xl wave-float-delay-1"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-primary opacity-10 rounded-full blur-3xl wave-float"></div>
      <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-accent opacity-5 rounded-full blur-2xl wave-scroll-reverse"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 bg-gradient-glass px-4 py-2 rounded-full mb-6 shadow-soft">
            <BookOpen className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Resources</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
            Documentation
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Comprehensive guides, API references, and resources to help you successfully integrate and utilize our AI-powered solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20" data-aos="zoom-in" data-aos-delay="300">
          {documentationSections.map((section, index) => (
            <Card 
              key={index} 
              className="group text-center shadow-soft hover:shadow-floating transition-spring transform hover:scale-[1.02] bg-gradient-card border-0 overflow-hidden relative wave-float shimmer-wave cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-smooth"></div>
              <CardHeader className="relative z-10 pt-8">
                <div className="mx-auto mb-6 p-4 bg-gradient-primary rounded-2xl w-fit shadow-glow group-hover:scale-110 transition-spring">
                  {section.icon}
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-smooth">
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10 pb-8">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {section.description}
                </p>
                <a 
                  href={section.href}
                  className="inline-flex items-center gap-2 text-primary hover:text-accent font-medium group/link transition-smooth"
                >
                  <span>Read Guide</span>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-6xl mx-auto" data-aos="fade-up" data-aos-delay="500">
          <Card className="shadow-floating border-0 bg-gradient-card backdrop-blur-sm overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-smooth"></div>
            <CardHeader className="text-center relative z-10 pt-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="p-3 bg-gradient-primary rounded-xl">
                  <Lightbulb className="w-6 h-6 text-white animate-pulse" />
                </div>
                <CardTitle className="text-3xl font-bold">Additional Resources</CardTitle>
              </div>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Need more help? Explore our additional resources and community support options.
              </p>
            </CardHeader>
            <CardContent className="relative z-10 pb-12">
              <div className="grid md:grid-cols-2 gap-6">
                {resources.map((resource, index) => (
                  <div 
                    key={index} 
                    className="p-6 bg-gradient-glass backdrop-blur-sm rounded-2xl border border-border/50 hover:border-primary/30 transition-smooth flex items-start gap-4 group/resource"
                  >
                    <div className="mt-1">
                      {resource.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 group-hover/resource:text-primary transition-smooth">
                        {resource.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {resource.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <a 
                  href="mailto:Support@insight-flowai.com"
                  className="inline-flex items-center gap-2 h-12 rounded-md px-8 bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-smooth"
                >
                  <span>Get Developer Support</span>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Documentation;