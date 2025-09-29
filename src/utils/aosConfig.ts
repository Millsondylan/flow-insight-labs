// Standard AOS configuration to prevent page jumping
export const initAOS = () => {
  import('aos').then(AOS => {
    AOS.default.init({
      duration: 600,
      once: true,
      offset: 30,
      easing: 'ease-out-quart',
      disable: 'mobile', // Disable on mobile to prevent performance issues
      startEvent: 'DOMContentLoaded',
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate',
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      // Prevent initial jumping by starting animations immediately
      delay: 0,
      anchorPlacement: 'top-bottom',
    });
  }).catch(() => {
    // Gracefully handle AOS loading errors
    console.log('AOS failed to load, continuing without animations');
  });
};