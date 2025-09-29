import { Brain, Mail, Lightbulb } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (href: string) => {
    if (href.startsWith("mailto:")) {
      window.location.href = href;
    } else if (href.startsWith("/#")) {
      // Navigate to home page and scroll to section
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const element = document.querySelector(href.substring(1));
          element?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        const element = document.querySelector(href.substring(1));
        element?.scrollIntoView({ behavior: "smooth" });
      }
    } else if (href.startsWith("#")) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    } else if (href.startsWith("/")) {
      // Navigate to page and scroll to top
      navigate(href);
      window.scrollTo(0, 0);
    } else {
      // Handle other links
      window.open(href, '_blank');
    }
  };

  const footerSections = [
    {
      title: "Solutions",
      links: [
        { label: "AI Coach Integration", href: "/ai-coach" },
        { label: "Custom Development", href: "/work-with-us" },
      ]
    },
    {
      title: "Support",
      links: [
        { label: "Contact Support", href: "mailto:Support@insight-flowai.com" },
        { label: "Contact Us", href: "/contact" },
        { label: "FAQ", href: "/faq" },
      ]
    }
  ];

  return (
    <footer className="bg-gradient-subtle text-foreground">
      <div className="container mx-auto px-4 py-4">
        <div className="grid md:grid-cols-3 gap-6 mb-3">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-2">
              <div className="p-1.5 bg-gradient-primary rounded-lg">
                <img src="/favicon.svg" alt="Insight Flow AI" className="w-5 h-5" />
              </div>
              <span className="text-lg font-bold bg-gradient-primary bg-clip-text text-transparent">
                Insight Flow AI
              </span>
            </div>
            <p className="text-muted-foreground/80 text-sm leading-relaxed mb-3">
              Transforming data into profitable actions with cutting-edge AI solutions.
            </p>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-foreground mb-2 text-sm">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleNavigation(link.href)}
                      className="text-muted-foreground/80 hover:text-foreground transition-smooth text-left text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/30 pt-3">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <p className="text-muted-foreground/80 text-xs">
              © {currentYear} Insight Flow AI. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs">
              <button onClick={() => handleNavigation("/privacy")} className="text-muted-foreground/80 hover:text-foreground transition-smooth">
                Privacy Policy
              </button>
              <button onClick={() => handleNavigation("mailto:Support@insight-flowai.com")} className="text-muted-foreground/80 hover:text-foreground transition-smooth">
                Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;