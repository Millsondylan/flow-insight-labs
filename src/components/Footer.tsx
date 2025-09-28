import { Brain, Mail, MessageSquare, Lightbulb } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Solutions",
      links: [
        { label: "AI Coach Integration", href: "#ai-coach" },
        { label: "Trading Journal Pro", href: "#apps" },
        { label: "Custom Development", href: "#contact" },
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#" },
        { label: "Privacy Policy", href: "#privacy" },
        { label: "Terms of Service", href: "#" },
      ]
    },
    {
      title: "Support",
      links: [
        { label: "Contact Support", href: "mailto:Support@insight-flowai.com" },
        { label: "Documentation", href: "#" },
        { label: "FAQ", href: "#" },
      ]
    }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-white/10 rounded-lg">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Insight Flow AI
              </span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              Transforming data into profitable actions with cutting-edge AI solutions for business optimization and personal productivity.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="mailto:Support@insight-flowai.com"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-smooth"
              >
                <Mail className="w-5 h-5" />
              </a>
              <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-smooth">
                <MessageSquare className="w-5 h-5" />
              </button>
              <a 
                href="#suggest-app"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-smooth"
              >
                <Lightbulb className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-white transition-smooth"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/80 text-sm">
              © {currentYear} Insight Flow AI. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#privacy" className="text-primary-foreground/80 hover:text-white transition-smooth">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-white transition-smooth">
                Terms of Service
              </a>
              <a href="mailto:Support@insight-flowai.com" className="text-primary-foreground/80 hover:text-white transition-smooth">
                Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;