import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Brain } from "lucide-react";
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
    { label: "Our Apps", href: "/#apps" },
    { label: "AI Coach", href: "/ai-coach" },
    { label: "Work With Us", href: "/work-with-us" },
    { label: "Contact", href: "/contact" },
  ];

  const handleNavigation = (href: string) => {
    if (href.startsWith("/#")) {
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
    } else {
      navigate(href);
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-spring ${
      scrolled 
        ? 'bg-gradient-glass backdrop-blur-md shadow-glass border-b border-border/50' 
        : 'bg-background/80 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Enhanced Logo */}
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => navigate("/")}>
            <div className="p-2 bg-gradient-primary rounded-xl shadow-soft group-hover:shadow-glow transition-spring">
              <Brain className="w-6 h-6 text-white animate-glow" />
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
            <Button 
              variant="hero" 
              size="sm" 
              className="ml-4 shadow-soft hover:shadow-glow transition-spring"
              onClick={() => handleNavigation('/contact')}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-muted/50 rounded-lg transition-smooth"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-border/30 bg-gradient-glass backdrop-blur-md animate-scale-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <button
                  key={item.label}
                  onClick={() => handleNavigation(item.href)}
                  className="text-left text-foreground hover:text-primary transition-smooth font-medium py-2 px-4 hover:bg-muted/30 rounded-lg"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.label}
                </button>
              ))}
              <Button 
                variant="hero" 
                size="sm" 
                className="w-fit mx-4 shadow-soft"
                onClick={() => handleNavigation('/contact')}
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;