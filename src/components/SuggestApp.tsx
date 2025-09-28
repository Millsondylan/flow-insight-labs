import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lightbulb, Send, Sparkles } from "lucide-react";
import { useState } from "react";

const SuggestApp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    appIdea: "",
    industry: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailBody = `Name: ${formData.name}%0AEmail: ${formData.email}%0AIndustry: ${formData.industry}%0A%0AApp Idea:%0A${encodeURIComponent(formData.appIdea)}`;
    window.location.href = `mailto:Support@insight-flowai.com?subject=New App Suggestion from ${formData.name}&body=${emailBody}`;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section className="py-20 bg-muted/30" id="suggest-app">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Lightbulb className="w-12 h-12 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold">Suggest an App</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have an innovative idea for an AI-powered application? We'd love to hear from you! Share your vision and help us build the next breakthrough solution.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-strong border-0 bg-card">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl flex items-center justify-center gap-3">
                <Sparkles className="w-8 h-8 text-accent" />
                Share Your Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">Your Name</Label>
                    <Input
                      id="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@company.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="bg-background"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="industry" className="text-sm font-medium">Target Industry</Label>
                  <Input
                    id="industry"
                    placeholder="e.g., Healthcare, Finance, E-commerce, Education"
                    value={formData.industry}
                    onChange={(e) => handleInputChange("industry", e.target.value)}
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="appIdea" className="text-sm font-medium">Describe Your App Idea</Label>
                  <Textarea
                    id="appIdea"
                    placeholder="Tell us about your app concept, the problems it solves, target audience, key features, and how AI could enhance the user experience. The more details, the better we can understand your vision!"
                    className="min-h-32 bg-background"
                    value={formData.appIdea}
                    onChange={(e) => handleInputChange("appIdea", e.target.value)}
                  />
                </div>

                <div className="bg-muted/50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3 text-center">What happens next?</h4>
                  <div className="grid md:grid-cols-3 gap-4 text-sm text-muted-foreground">
                    <div className="text-center">
                      <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-2 text-xs font-bold">1</div>
                      <p>We review your submission within 48 hours</p>
                    </div>
                    <div className="text-center">
                      <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-2 text-xs font-bold">2</div>
                      <p>Our team evaluates feasibility and market potential</p>
                    </div>
                    <div className="text-center">
                      <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-2 text-xs font-bold">3</div>
                      <p>We reach out to discuss collaboration opportunities</p>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <Button type="submit" variant="premium" size="xl" className="w-full sm:w-auto">
                    <Send className="w-5 h-5 mr-2" />
                    Submit Your Idea
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