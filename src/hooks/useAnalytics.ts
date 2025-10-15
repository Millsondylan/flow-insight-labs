import { useEffect } from 'react';
import { logEvent } from 'firebase/analytics';
import { analytics } from '@/lib/firebase';

export const useAnalytics = () => {
  useEffect(() => {
    // Initialize analytics on app load
    if (analytics) {
      try {
        logEvent(analytics, 'page_view');
      } catch (error) {
        console.warn('Firebase analytics failed to log page_view on initialization:', error);
      }
    }
  }, []);

  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (analytics) {
      try {
        logEvent(analytics, eventName, parameters);
      } catch (error) {
        console.warn(`Firebase analytics failed to track event "${eventName}":`, error);
      }
    }
  };

  const trackPageView = (pageName: string) => {
    if (analytics) {
      try {
        logEvent(analytics, 'page_view', {
          page_title: pageName,
          page_location: window.location.href,
        });
      } catch (error) {
        console.warn(`Firebase analytics failed to track page view for "${pageName}":`, error);
      }
    }
  };

  const trackButtonClick = (buttonName: string, location?: string) => {
    if (analytics) {
      try {
        logEvent(analytics, 'select_content', {
          content_type: 'button',
          content_id: buttonName,
          location: location || 'unknown',
        });
      } catch (error) {
        console.warn(`Firebase analytics failed to track button click for "${buttonName}":`, error);
      }
    }
  };

  const trackFormSubmission = (formName: string) => {
    if (analytics) {
      try {
        logEvent(analytics, 'form_submit', {
          form_name: formName,
        });
      } catch (error) {
        console.warn(`Firebase analytics failed to track form submission for "${formName}":`, error);
      }
    }
  };

  return {
    trackEvent,
    trackPageView,
    trackButtonClick,
    trackFormSubmission,
  };
};