import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Configure GSAP for optimal performance
gsap.config({
  force3D: true,
  autoSleep: 60,
  nullTargetWarn: false,
});

// Configure ScrollTrigger for smooth performance
ScrollTrigger.config({
  autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
  ignoreMobileResize: true,
});

// Check for reduced motion preference
const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

interface ScrollAnimationOptions {
  trigger: string;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  pin?: boolean;
  markers?: boolean;
}

import { useAnimation } from '@/contexts/AnimationContext';

export const useScrollAnimations = () => {
  const { animationsEnabled } = useAnimation();
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    // Initialize timeline
    timelineRef.current = gsap.timeline();

    // Cleanup function
    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Apple-style fade up animation
  const fadeUpAnimation = (selector: string, options: Partial<ScrollAnimationOptions> = {}) => {
    if (!animationsEnabled) return;
    if (prefersReducedMotion()) {
      gsap.set(selector, { opacity: 1 });
      return;
    }

    gsap.fromTo(
      selector,
      {
        y: 60,
        opacity: 0,
        force3D: true,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        force3D: true,
        scrollTrigger: {
          trigger: selector,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
          invalidateOnRefresh: true,
          ...options,
        },
      }
    );
  };

  // Stagger animation for multiple elements
  const staggerAnimation = (selector: string, options: Partial<ScrollAnimationOptions> = {}) => {
    if (!animationsEnabled) return;
    if (prefersReducedMotion()) {
      gsap.set(selector, { opacity: 1 });
      return;
    }

    gsap.fromTo(
      selector,
      {
        y: 12,
        opacity: 0,
        force3D: true,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.12,
        force3D: true,
        scrollTrigger: {
          trigger: selector,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
          invalidateOnRefresh: true,
          ...options,
        },
      }
    );
  };

  // Parallax scroll animation
  const parallaxAnimation = (selector: string, yPercent: number = -50, options: Partial<ScrollAnimationOptions> = {}) => {
    if (!animationsEnabled) return;
    gsap.fromTo(
      selector,
      { yPercent: 0, force3D: true },
      {
        yPercent: yPercent,
        ease: "none",
        force3D: true,
        scrollTrigger: {
          trigger: selector,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          invalidateOnRefresh: true,
          ...options,
        },
      }
    );
  };

  // Scale on scroll animation
  const scaleAnimation = (selector: string, options: Partial<ScrollAnimationOptions> = {}) => {
    if (!animationsEnabled) return;
    if (prefersReducedMotion()) {
      gsap.set(selector, { opacity: 1, scale: 1 });
      return;
    }

    gsap.set(selector, { willChange: "transform, opacity" });

    gsap.fromTo(
      selector,
      {
        scale: 0.95,
        opacity: 0,
        force3D: true,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        ease: "power1.out",
        force3D: true,
        onComplete: () => gsap.set(selector, { willChange: "auto" }),
        scrollTrigger: {
          trigger: selector,
          start: "top 80%",
          toggleActions: "play none none reverse",
          fastScrollEnd: true,
          preventOverlaps: true,
          ...options,
        },
      }
    );
  };

  // Slide in from left animation
  const slideInLeftAnimation = (selector: string, options: Partial<ScrollAnimationOptions> = {}) => {
    if (!animationsEnabled) return;
    gsap.fromTo(
      selector,
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: selector,
          start: "top 85%",
          toggleActions: "play reverse play reverse",
          ...options,
        },
      }
    );
  };

  // Slide in from right animation
  const slideInRightAnimation = (selector: string, options: Partial<ScrollAnimationOptions> = {}) => {
    if (!animationsEnabled) return;
    gsap.fromTo(
      selector,
      {
        x: 100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: selector,
          start: "top 85%",
          toggleActions: "play reverse play reverse",
          ...options,
        },
      }
    );
  };

  // Text reveal animation (like Apple)
  const textRevealAnimation = (selector: string, options: Partial<ScrollAnimationOptions> = {}) => {
    if (!animationsEnabled) return;
    gsap.fromTo(
      selector,
      {
        y: "100%",
        opacity: 0,
      },
      {
        y: "0%",
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: selector,
          start: "top 90%",
          toggleActions: "play reverse play reverse",
          ...options,
        },
      }
    );
  };

  // Enhanced card flip animation
  const cardFlipAnimation = (selector: string, options: Partial<ScrollAnimationOptions> = {}) => {
    if (!animationsEnabled) return;
    gsap.fromTo(
      selector,
      {
        rotationY: -90,
        opacity: 0,
        scale: 0.8,
      },
      {
        rotationY: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: selector,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
          ...options,
        },
      }
    );
  };

  // Magnetic hover effect
  const magneticAnimation = (selector: string) => {
    if (!animationsEnabled) return;
    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
      const el = element as HTMLElement;

      el.addEventListener('mouseenter', () => {
        gsap.to(el, {
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out"
        });
      });

      el.addEventListener('mouseleave', () => {
        gsap.to(el, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      });

      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(el, {
          x: x * 0.1,
          y: y * 0.1,
          duration: 0.3,
          ease: "power2.out"
        });
      });

      el.addEventListener('mouseleave', () => {
        gsap.to(el, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "power2.out"
        });
      });
    });
  };

  // Reveal animation with blur effect
  const revealBlurAnimation = (selector: string, options: Partial<ScrollAnimationOptions> = {}) => {
    if (!animationsEnabled) return;
    if (prefersReducedMotion()) {
      gsap.set(selector, { opacity: 1, y: 0, filter: "blur(0px)" });
      return;
    }

    gsap.fromTo(
      selector,
      {
        y: 50,
        opacity: 0,
        filter: "blur(10px)",
      },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: selector,
          start: "top 85%",
          toggleActions: "play reverse play reverse",
          ...options,
        },
      }
    );
  };

  // Advanced slide in from directions (like Apple/Webflow sites)
  const slideInFromLeft = (selector: string, options: Partial<ScrollAnimationOptions> = {}) => {
    if (!animationsEnabled) return;
    if (prefersReducedMotion()) {
      gsap.set(selector, { opacity: 1, x: 0 });
      return;
    }

    gsap.fromTo(
      selector,
      {
        x: -120,
        opacity: 0,
        force3D: true,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.4,
        ease: "power3.out",
        force3D: true,
        scrollTrigger: {
          trigger: selector,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
          ...options,
        },
      }
    );
  };

  const slideInFromRight = (selector: string, options: Partial<ScrollAnimationOptions> = {}) => {
    if (!animationsEnabled) return;
    if (prefersReducedMotion()) {
      gsap.set(selector, { opacity: 1, x: 0 });
      return;
    }

    gsap.fromTo(
      selector,
      {
        x: 120,
        opacity: 0,
        force3D: true,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.4,
        ease: "power3.out",
        force3D: true,
        scrollTrigger: {
          trigger: selector,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
          ...options,
        },
      }
    );
  };

  // Modern stagger reveal (like Apple Watch product pages)
  const modernStaggerReveal = (selector: string, options: Partial<ScrollAnimationOptions> = {}) => {
    if (!animationsEnabled) return;
    if (prefersReducedMotion()) {
      gsap.set(selector, { opacity: 1, scale: 1, y: 0 });
      return;
    }

    gsap.fromTo(
      selector,
      {
        y: 80,
        opacity: 0,
        scale: 0.9,
        force3D: true,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.2,
        force3D: true,
        scrollTrigger: {
          trigger: selector,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
          ...options,
        },
      }
    );
  };

  // Fade in with scale (Apple-style)
  const fadeInScale = (selector: string, options: Partial<ScrollAnimationOptions> = {}) => {
    if (!animationsEnabled) return;
    if (prefersReducedMotion()) {
      gsap.set(selector, { opacity: 1, scale: 1 });
      return;
    }

    gsap.fromTo(
      selector,
      {
        opacity: 0,
        scale: 0.8,
        force3D: true,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1.6,
        ease: "power3.out",
        force3D: true,
        scrollTrigger: {
          trigger: selector,
          start: "top 75%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
          ...options,
        },
      }
    );
  };

  // Text reveal with clip-path (modern effect)
  const textClipReveal = (selector: string, options: Partial<ScrollAnimationOptions> = {}) => {
    if (!animationsEnabled) return;
    if (prefersReducedMotion()) {
      gsap.set(selector, { clipPath: "inset(0% 0 0 0)", y: 0 });
      return;
    }

    gsap.fromTo(
      selector,
      {
        clipPath: "inset(100% 0 0 0)",
        y: 50,
      },
      {
        clipPath: "inset(0% 0 0 0)",
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: selector,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
          ...options,
        },
      }
    );
  };

  // Pin and transform animation
  const pinAnimation = (selector: string, transformSelector: string, options: Partial<ScrollAnimationOptions> = {}) => {
    if (!animationsEnabled) return;
    gsap.timeline({
      scrollTrigger: {
        trigger: selector,
        start: "top top",
        end: "bottom top",
        pin: true,
        scrub: 1,
        ...options,
      }
    })
    .to(transformSelector, {
      scale: 1.2,
      rotation: 5,
      duration: 1,
    });
  };

  return {
    fadeUpAnimation,
    staggerAnimation,
    parallaxAnimation,
    scaleAnimation,
    slideInLeftAnimation,
    slideInRightAnimation,
    textRevealAnimation,
    cardFlipAnimation,
    magneticAnimation,
    revealBlurAnimation,
    slideInFromLeft,
    slideInFromRight,
    modernStaggerReveal,
    fadeInScale,
    textClipReveal,
    pinAnimation,
  };
};

export default useScrollAnimations;