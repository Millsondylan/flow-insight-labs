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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submission started');
    console.log('Form data:', formData);
    
    // Clear previous errors and success states
    setSubmitError(null);
    setSubmitSuccess(false);
    setIsSubmitting(true);
    
    try {
      console.log('Starting form validation...');
      
      // Validate required fields
      if (!formData.name.trim() || !formData.email.trim() || !formData.appIdea.trim()) {
        const errorMessage = 'Please fill in all required fields.';
        console.error('Validation failed:', errorMessage);
        setSubmitError(errorMessage);
        return;
      }
      
      console.log('Required fields validation passed');
      
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        const errorMessage = 'Please enter a valid email address.';
        console.error('Email validation failed:', errorMessage);
        setSubmitError(errorMessage);
        return;
      }
      
      console.log('Email validation passed');
      
      // Prepare email content
      const emailBody = `Name: ${formData.name}%0AEmail: ${formData.email}%0AIndustry: ${formData.industry}%0A%0AApp Idea:%0A${encodeURIComponent(formData.appIdea)}`;
      const emailSubject = `New App Suggestion from ${formData.name}`;
      const emailUrl = `mailto:Support@insight-flowai.com?subject=${encodeURIComponent(emailSubject)}&body=${emailBody}`;
      
      console.log('Email URL prepared:', emailUrl);
      
      // Try to open email client
      console.log('Attempting to open email client...');
      window.location.href = emailUrl;
      
      // Set success state
      console.log('Email client opened successfully');
      setSubmitSuccess(true);
      
      // Optional: Clear form after successful submission
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          appIdea: "",
          industry: ""
        });
        setSubmitSuccess(false);
        console.log('Form cleared after successful submission');
      }, 3000);
      
    } catch (error) {
      console.error('Form submission error:', error);
      const errorMessage = error instanceof Error 
        ? `Submission failed: ${error.message}` 
        : 'An unexpected error occurred. Please try again.';
      setSubmitError(errorMessage);
    } finally {
      setIsSubmitting(false);
      console.log('Form submission process completed');
    }
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

                {/* Error Message */}
                {submitError && (
                  <div className="bg-destructive/10 border border-destructive/20 text-destructive px-4 py-3 rounded-lg flex items-center gap-2">
                    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <span>{submitError}</span>
                  </div>
                )}

                {/* Success Message */}
                {submitSuccess && (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Your app suggestion has been sent successfully! We'll review it within 48 hours.</span>
                  </div>
                )}

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
                    disabled={isSubmitting}
                    className="group w-full sm:w-auto shadow-floating hover:shadow-glow transition-spring relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <div className="flex items-center gap-3">
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <Send className="w-6 h-6 group-hover:scale-110 transition-spring" />
                      )}
                      <span className="text-lg">
                        {isSubmitting ? 'Submitting...' : 'Submit Your Idea'}
                      </span>
                      {!isSubmitting && (
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-spring" />
                      )}
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