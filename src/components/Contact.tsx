import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-muted/30" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your platform with AI-powered insights? Contact our team to discuss your integration needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="text-center shadow-soft hover:shadow-strong transition-smooth bg-card border-0">
            <CardHeader>
              <div className="mx-auto mb-4 p-4 bg-gradient-primary rounded-full w-fit">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl">Email Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Get expert assistance with integration and technical questions.
              </p>
              <a 
                href="mailto:Support@insight-flowai.com"
                className="text-primary hover:underline font-semibold"
              >
                Support@insight-flowai.com
              </a>
            </CardContent>
          </Card>

          <Card className="text-center shadow-soft hover:shadow-strong transition-smooth bg-card border-0">
            <CardHeader>
              <div className="mx-auto mb-4 p-4 bg-gradient-primary rounded-full w-fit">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl">Live Chat</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Chat with our AI integration specialists in real-time.
              </p>
              <Button variant="outline" className="w-full">
                Start Live Chat
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center shadow-soft hover:shadow-strong transition-smooth bg-card border-0 md:col-span-2 lg:col-span-1">
            <CardHeader>
              <div className="mx-auto mb-4 p-4 bg-gradient-primary rounded-full w-fit">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl">Schedule Call</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Book a consultation to discuss your specific requirements.
              </p>
              <Button variant="premium" className="w-full">
                Schedule Meeting
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-5 h-5" />
            <span>Serving businesses globally with 24/7 support</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;