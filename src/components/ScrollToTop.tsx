import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Multiple approaches to ensure reliable scroll-to-top
    const scrollToTop = () => {
      // Immediately set scroll position
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;

      // Also use smooth API as backup
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
    };

    // Execute immediately
    scrollToTop();

    // Also execute after a brief delay to handle any async content loading
    requestAnimationFrame(() => {
      scrollToTop();

      // Final backup after next frame
      setTimeout(scrollToTop, 100);
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;