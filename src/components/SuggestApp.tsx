import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lightbulb, Send, Sparkles, ArrowRight, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";

const SuggestApp = () => {
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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    appIdea: "",
    industry: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name.trim() || !formData.email.trim() || !formData.appIdea.trim()) {
      alert('Please fill in all required fields.');
      return;
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }
    
    const emailBody = `Name: ${formData.name}%0AEmail: ${formData.email}%0AIndustry: ${formData.industry}%0A%0AApp Idea:%0A${encodeURIComponent(formData.appIdea)}`;
    window.location.href = `mailto:Support@insight-flowai.com?subject=New App Suggestion from ${formData.name}&body=${emailBody}`;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const processSteps = [
    {
      number: "1",
      title: "Review & Analysis",
      description: "We review your submission within 48 hours",
      delay: "200"
    },
    {
      number: "2", 
      title: "Feasibility Study",
      description: "Our team evaluates market potential and technical requirements",
      delay: "400"
    },
    {
      number: "3",
      title: "Collaboration",
      description: "We reach out to discuss partnership opportunities",
      delay: "600"
    }
  ];

  return (
    <section className="py-24 bg-gradient-subtle relative overflow-hidden" id="suggest-app">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-primary opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-primary opacity-5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20" data-aos="fade-up">
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-primary rounded-2xl shadow-glow animate-glow">
              <Lightbulb className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Suggest an App
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Have an innovative idea for an AI-powered application? We'd love to hear from you! Share your vision and help us build the next breakthrough solution that transforms industries.
          </p>
        </div>

        <div className="max-w-5xl mx-auto" data-aos="zoom-in" data-aos-delay="200">
          <Card className="shadow-floating border-0 bg-gradient-card backdrop-blur-sm overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-smooth"></div>
            
            <CardHeader className="text-center pb-8 relative z-10">
              <CardTitle className="text-3xl font-bold flex items-center justify-center gap-4">
                <div className="p-2 bg-gradient-primary rounded-xl">
                  <Sparkles className="w-6 h-6 text-white animate-pulse" />
                </div>
                Share Your Vision
              </CardTitle>
            </CardHeader>
            
            <CardContent className="relative z-10">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <Label htmlFor="name" className="text-base font-semibold flex items-center gap-2">
                      Your Name
                      <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="bg-background/50 backdrop-blur-sm border-border/50 focus:border-primary/50 h-12 text-base transition-smooth"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-base font-semibold flex items-center gap-2">
                      Email Address
                      <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@company.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="bg-background/50 backdrop-blur-sm border-border/50 focus:border-primary/50 h-12 text-base transition-smooth"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="industry" className="text-base font-semibold">
                    Target Industry
                  </Label>
                  <Input
                    id="industry"
                    placeholder="e.g., Healthcare, Finance, E-commerce, Education"
                    value={formData.industry}
                    onChange={(e) => handleInputChange("industry", e.target.value)}
                    className="bg-background/50 backdrop-blur-sm border-border/50 focus:border-primary/50 h-12 text-base transition-smooth"
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="appIdea" className="text-base font-semibold flex items-center gap-2">
                    Describe Your App Idea
                    <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="appIdea"
                    placeholder="Tell us about your app concept, the problems it solves, target audience, key features, and how AI could enhance the user experience. The more details, the better we can understand your vision!"
                    className="min-h-40 bg-background/50 backdrop-blur-sm border-border/50 focus:border-primary/50 text-base transition-smooth resize-none"
                    value={formData.appIdea}
                    onChange={(e) => handleInputChange("appIdea", e.target.value)}
                  />
                </div>

                {/* Process Steps */}
                <div className="bg-gradient-glass backdrop-blur-sm p-8 rounded-2xl border border-border/30">
                  <h4 className="text-2xl font-bold mb-8 text-center">What happens next?</h4>
                  <div className="grid md:grid-cols-3 gap-8">
                    {processSteps.map((step, index) => (
                      <div 
                        key={index}
                        className="text-center group"
                        data-aos="fade-up" 
                        data-aos-delay={step.delay}
                      >
                        <div className="relative mb-6">
                          <div className="w-16 h-16 bg-gradient-primary text-white rounded-2xl flex items-center justify-center mx-auto text-xl font-bold shadow-glow group-hover:scale-110 transition-spring">
                            {step.number}
                          </div>
                          {index < processSteps.length - 1 && (
                            <ArrowRight className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-muted-foreground w-6 h-6" />
                          )}
                        </div>
                        <h5 className="font-bold text-lg mb-3 group-hover:text-primary transition-smooth">
                          {step.title}
                        </h5>
                        <p className="text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-center pt-4">
                  <Button 
                    type="submit" 
                    variant="premium" 
                    size="xl" 
                    className="group w-full sm:w-auto shadow-floating hover:shadow-glow transition-spring relative overflow-hidden"
                  >
                    <div className="flex items-center gap-3">
                      <Send className="w-6 h-6 group-hover:scale-110 transition-spring" />
                      <span className="text-lg">Submit Your Idea</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-spring" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-smooth"></div>
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SuggestApp;