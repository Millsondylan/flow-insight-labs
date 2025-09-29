import { Brain, Mail, Lightbulb } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();
  const { fadeUpAnimation, staggerAnimation } = useScrollAnimations();

  useEffect(() => {
    // Initialize footer animations
    setTimeout(() => {
      fadeUpAnimation('.footer-brand', { start: "top 90%" });
      staggerAnimation('.footer-section', { start: "top 85%" });
      fadeUpAnimation('.footer-bottom', { start: "top 85%" });
    }, 100);
  }, [fadeUpAnimation, staggerAnimation]);

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
        { label: "Contact Us", href: "/contact" },
        { label: "FAQ", href: "/faq" },
      ]
    }
  ];

  return (
    <footer className="bg-gradient-subtle text-foreground">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
          {/* Brand Section */}
          <div className="footer-brand col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-1.5 bg-gradient-primary rounded-lg">
                <img src="/favicon.svg" alt="Insight Flow AI" className="w-5 h-5" />
              </div>
              <span className="text-lg font-bold bg-gradient-primary bg-clip-text text-transparent">
                Insight Flow AI
              </span>
            </div>
            <p className="text-muted-foreground/80 text-sm leading-relaxed mb-4">
              Turning data into smart business decisions with AI that works.
            </p>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="footer-section">
              <h3 className="font-semibold text-foreground mb-2 text-sm">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleNavigation(link.href)}
                      className="text-muted-foreground/80 hover:text-foreground transition-smooth text-left text-sm py-1 min-h-[32px] flex items-center"
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
        <div className="footer-bottom border-t border-border/30 pt-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-muted-foreground/80 text-xs text-center sm:text-left">
              © {currentYear} Insight Flow AI. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs">
              <button
                onClick={() => handleNavigation("/privacy")}
                className="text-muted-foreground/80 hover:text-foreground transition-smooth py-2 px-1 min-h-[32px] flex items-center"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => handleNavigation("mailto:Support@insight-flowai.com")}
                className="text-muted-foreground/80 hover:text-foreground transition-smooth py-2 px-1 min-h-[32px] flex items-center"
              >
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