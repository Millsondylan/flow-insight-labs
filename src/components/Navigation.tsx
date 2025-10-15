import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    const navItems = [
    { label: "Home", href: "/" },
    { label: "AI Coach", href: "/ai-coach" },
    { label: "Work With Us", href: "/work-with-us" },
    { label: "Contact", href: "/contact" },
    { label: "FAQ", href: "/faq" },
    { label: "Privacy", href: "/privacy" },
  ];

  const handleNavigation = (href: string) => {
    console.log('[Navigation] handleNavigation called with href:', href);
    console.log('[Navigation] Current location:', location.pathname);
    console.log('[Navigation] Navigate function:', typeof navigate);

    try {
      if (href.startsWith("/#")) {
        console.log('[Navigation] Handling anchor link to home page:', href);
        // Navigate to home page and scroll to section
        if (location.pathname !== "/") {
          console.log('[Navigation] Not on home page, navigating to home first');
          try {
            navigate("/");
            console.log('[Navigation] Navigation to home successful, setting timeout for scroll');
            setTimeout(() => {
              try {
                const sectionId = href.substring(1); // Remove the '#'
                console.log('[Navigation] Looking for element with selector:', sectionId);
                const element = document.querySelector(sectionId);
                if (element) {
                  console.log('[Navigation] Element found, scrolling into view');
                  element.scrollIntoView({ behavior: "smooth" });
                } else {
                  console.warn('[Navigation] Element not found for selector:', sectionId);
                }
              } catch (scrollError) {
                console.error('[Navigation] Error during delayed scroll:', scrollError);
              }
            }, 100);
          } catch (navError) {
            console.error('[Navigation] Error navigating to home page:', navError);
            // Fallback: try direct window location change
            try {
              console.log('[Navigation] Fallback: using window.location.href');
              window.location.href = href;
            } catch (fallbackError) {
              console.error('[Navigation] Fallback navigation failed:', fallbackError);
            }
          }
        } else {
          console.log('[Navigation] Already on home page, scrolling to section');
          try {
            const sectionId = href.substring(1); // Remove the '#'
            console.log('[Navigation] Looking for element with selector:', sectionId);
            const element = document.querySelector(sectionId);
            if (element) {
              console.log('[Navigation] Element found, scrolling into view');
              element.scrollIntoView({ behavior: "smooth" });
            } else {
              console.warn('[Navigation] Element not found for selector:', sectionId);
            }
          } catch (scrollError) {
            console.error('[Navigation] Error scrolling to section:', scrollError);
          }
        }
      } else if (href.startsWith("#")) {
        console.log('[Navigation] Handling anchor link on current page:', href);
        try {
          console.log('[Navigation] Looking for element with selector:', href);
          const element = document.querySelector(href);
          if (element) {
            console.log('[Navigation] Element found, scrolling into view');
            element.scrollIntoView({ behavior: "smooth" });
          } else {
            console.warn('[Navigation] Element not found for selector:', href);
          }
        } catch (scrollError) {
          console.error('[Navigation] Error scrolling to anchor:', scrollError);
        }
      } else {
        console.log('[Navigation] Handling regular page navigation:', href);
        try {
          // Navigate to page and scroll to top
          navigate(href);
          console.log('[Navigation] Navigation successful, scrolling to top');
          window.scrollTo(0, 0);
        } catch (navError) {
          console.error('[Navigation] Error during page navigation:', navError);
          // Fallback: try direct window location change
          try {
            console.log('[Navigation] Fallback: using window.location.href');
            window.location.href = href;
          } catch (fallbackError) {
            console.error('[Navigation] Fallback navigation failed:', fallbackError);
          }
        }
      }
      
      console.log('[Navigation] Closing mobile menu');
      setIsOpen(false);
    } catch (error) {
      console.error('[Navigation] Unexpected error in handleNavigation:', error);
      console.log('[Navigation] Attempting emergency fallback navigation');
      
      // Emergency fallback - try basic navigation
      try {
        if (href.startsWith("#") || href.startsWith("/#")) {
          console.log('[Navigation] Emergency: treating as anchor, trying window.location.hash');
          window.location.hash = href.replace("/", "");
        } else {
          console.log('[Navigation] Emergency: using window.location.href');
          window.location.href = href;
        }
      } catch (emergencyError) {
        console.error('[Navigation] Emergency fallback failed:', emergencyError);
        // Last resort - show user feedback
        alert(`Navigation failed. Please manually navigate to: ${href}`);
      }
      
      // Always try to close the menu even if navigation fails
      try {
        setIsOpen(false);
      } catch (menuError) {
        console.error('[Navigation] Error closing menu:', menuError);
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-spring ${
      scrolled
        ? 'bg-gradient-glass backdrop-blur-md shadow-glass border-b border-border/50'
        : 'bg-background/80 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Enhanced Logo */}
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => navigate("/")}>
            <div className="p-2 bg-gradient-primary rounded-xl shadow-soft group-hover:shadow-glow transition-spring">
              <img src="/favicon.svg" alt="Insight Flow AI" className="w-6 h-6" />
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent group-hover:scale-105 transition-spring">
              Insight Flow AI
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <button
                key={item.label}
                onClick={() => handleNavigation(item.href)}
                className={`relative text-foreground hover:text-primary transition-spring font-medium group py-2 ${
                  item.href === location.pathname ? "text-primary" : ""
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-primary group-hover:w-full transition-spring ${
                  item.href === location.pathname ? "w-full" : "w-0"
                }`}></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-3 hover:bg-muted/50 rounded-lg transition-smooth min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/30 bg-gradient-glass backdrop-blur-md animate-scale-in">
            <div className="flex flex-col space-y-2">
              {navItems.map((item, index) => (
                <button
                  key={item.label}
                  onClick={() => handleNavigation(item.href)}
                  className="text-left text-foreground hover:text-primary transition-smooth font-medium py-3 px-4 hover:bg-muted/30 rounded-lg min-h-[44px] flex items-center"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;