import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Code, Send, Sparkles, ArrowRight, CheckCircle, Globe, Rocket, Monitor } from "lucide-react";
import { useState, useEffect } from "react";

const WebsiteDevelopment = () => {
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
    company: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
    features: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.name.trim() || !formData.email.trim() || !formData.description.trim()) {
      alert('Please fill in all required fields.');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    const emailBody = `Name: ${formData.name}%0AEmail: ${formData.email}%0ACompany: ${formData.company}%0APhone: ${formData.phone}%0AProject Type: ${formData.projectType}%0ABudget Range: ${formData.budget}%0ATimeline: ${formData.timeline}%0A%0AProject Description:%0A${encodeURIComponent(formData.description)}%0A%0ARequired Features:%0A${encodeURIComponent(formData.features)}`;
    window.location.href = `mailto:Support@insight-flowai.com?subject=Website Development Request from ${formData.name}&body=${emailBody}`;
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
      title: "Discovery & Planning",
      description: "We analyze your requirements and create a detailed project roadmap",
      delay: "200"
    },
    {
      number: "2",
      title: "Design & Development",
      description: "Our team builds your custom website with cutting-edge technology",
      delay: "400"
    },
    {
      number: "3",
      title: "Launch & Support",
      description: "We deploy your site and provide ongoing maintenance and support",
      delay: "600"
    }
  ];

  const services = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Custom Web Development",
      description: "Tailored websites built with modern technologies"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Performance Optimization",
      description: "Lightning-fast loading times and SEO optimization"
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Responsive Design",
      description: "Perfect display across all devices and screen sizes"
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden" id="website-development">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-primary opacity-5 rounded-full blur-3xl wave-float"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent opacity-5 rounded-full blur-3xl wave-float-delay-1"></div>
      <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-primary opacity-5 rounded-full blur-2xl wave-scroll"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20" data-aos="fade-up">
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-primary rounded-2xl shadow-glow animate-glow">
              <Code className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Website Development
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Transform your digital presence with custom websites that drive results. From concept to launch, we create powerful web solutions that engage users and grow your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group text-center shadow-soft hover:shadow-floating transition-spring transform hover:scale-[1.02] bg-gradient-card border-0 overflow-hidden relative wave-float shimmer-wave"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-smooth"></div>
              <CardHeader className="relative z-10">
                <div className="mx-auto mb-4 p-4 bg-gradient-primary rounded-2xl w-fit shadow-glow group-hover:scale-110 transition-spring">
                  <div className="text-white">{service.icon}</div>
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-smooth">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-5xl mx-auto" data-aos="zoom-in" data-aos-delay="400">
          <Card className="shadow-floating border-0 bg-gradient-card backdrop-blur-sm overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-smooth"></div>

            <CardHeader className="text-center pb-8 relative z-10">
              <CardTitle className="text-3xl font-bold flex items-center justify-center gap-4">
                <div className="p-2 bg-gradient-primary rounded-xl">
                  <Sparkles className="w-6 h-6 text-white animate-pulse" />
                </div>
                Start Your Project
              </CardTitle>
            </CardHeader>

            <CardContent className="relative z-10">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <Label htmlFor="name" className="text-base font-semibold flex items-center gap-2">
                      Full Name
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

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <Label htmlFor="company" className="text-base font-semibold">
                      Company/Organization
                    </Label>
                    <Input
                      id="company"
                      placeholder="Your company name"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      className="bg-background/50 backdrop-blur-sm border-border/50 focus:border-primary/50 h-12 text-base transition-smooth"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="phone" className="text-base font-semibold">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="bg-background/50 backdrop-blur-sm border-border/50 focus:border-primary/50 h-12 text-base transition-smooth"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="space-y-3">
                    <Label htmlFor="projectType" className="text-base font-semibold">
                      Project Type
                    </Label>
                    <Input
                      id="projectType"
                      placeholder="e.g., E-commerce, Portfolio, Corporate"
                      value={formData.projectType}
                      onChange={(e) => handleInputChange("projectType", e.target.value)}
                      className="bg-background/50 backdrop-blur-sm border-border/50 focus:border-primary/50 h-12 text-base transition-smooth"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="budget" className="text-base font-semibold">
                      Budget Range
                    </Label>
                    <Input
                      id="budget"
                      placeholder="e.g., $5K-10K, $10K-25K"
                      value={formData.budget}
                      onChange={(e) => handleInputChange("budget", e.target.value)}
                      className="bg-background/50 backdrop-blur-sm border-border/50 focus:border-primary/50 h-12 text-base transition-smooth"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="timeline" className="text-base font-semibold">
                      Timeline
                    </Label>
                    <Input
                      id="timeline"
                      placeholder="e.g., 4-6 weeks, 2-3 months"
                      value={formData.timeline}
                      onChange={(e) => handleInputChange("timeline", e.target.value)}
                      className="bg-background/50 backdrop-blur-sm border-border/50 focus:border-primary/50 h-12 text-base transition-smooth"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="description" className="text-base font-semibold flex items-center gap-2">
                    Project Description
                    <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your website project, target audience, business goals, and any specific requirements or inspiration you have in mind..."
                    className="min-h-32 bg-background/50 backdrop-blur-sm border-border/50 focus:border-primary/50 text-base transition-smooth resize-none"
                    value={formData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="features" className="text-base font-semibold">
                    Required Features
                  </Label>
                  <Textarea
                    id="features"
                    placeholder="List specific features you need: e.g., online payment, user registration, content management, booking system, integrations with third-party services..."
                    className="min-h-32 bg-background/50 backdrop-blur-sm border-border/50 focus:border-primary/50 text-base transition-smooth resize-none"
                    value={formData.features}
                    onChange={(e) => handleInputChange("features", e.target.value)}
                  />
                </div>

                {/* Process Steps */}
                <div className="bg-gradient-glass backdrop-blur-sm p-8 rounded-2xl border border-border/30">
                  <h4 className="text-2xl font-bold mb-8 text-center">Our Development Process</h4>
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
                      <span className="text-lg">Submit Project Request</span>
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

export default WebsiteDevelopment;