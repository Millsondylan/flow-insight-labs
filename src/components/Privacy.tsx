import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Eye, FileText } from "lucide-react";

const Privacy = () => {
  return (
    <section className="py-20 bg-background" id="privacy">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your data security and privacy are our top priorities. Learn how we protect and handle your information.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          <Card className="shadow-soft border-0 bg-gradient-subtle">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Shield className="w-8 h-8 text-primary" />
                <CardTitle className="text-2xl">Data Protection</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                We implement enterprise-grade security measures including end-to-end encryption, secure data transmission, and strict access controls to safeguard your information at all times.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-soft border-0 bg-gradient-subtle">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Lock className="w-8 h-8 text-primary" />
                <CardTitle className="text-2xl">Secure Processing</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                All data processing occurs within secure, compliant environments. We never store sensitive information longer than necessary and follow industry best practices for data handling.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-soft border-0 bg-gradient-subtle">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Eye className="w-8 h-8 text-primary" />
                <CardTitle className="text-2xl">Transparency</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                We maintain full transparency about data collection, usage, and retention. You have complete control over your data with options to access, modify, or delete your information anytime.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-soft border-0 bg-gradient-subtle">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <FileText className="w-8 h-8 text-primary" />
                <CardTitle className="text-2xl">Compliance</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Our privacy practices comply with GDPR, CCPA, and other major privacy regulations. We regularly audit our systems and update policies to maintain the highest standards.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            For detailed information about our privacy practices, please review our complete privacy policy or contact our privacy team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:Support@insight-flowai.com?subject=Privacy Policy Questions"
              className="inline-flex items-center justify-center h-11 rounded-md px-8 bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-smooth"
            >
              Contact Privacy Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Privacy;