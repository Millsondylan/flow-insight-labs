import { useEffect } from 'react';
import { logEvent } from 'firebase/analytics';
import { analytics } from '@/lib/firebase';

export const useAnalytics = () => {
  useEffect(() => {
    // Initialize analytics on app load
    if (analytics) {
      logEvent(analytics, 'page_view');
    }
  }, []);

  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (analytics) {
      logEvent(analytics, eventName, parameters);
    }
  };

  const trackPageView = (pageName: string) => {
    if (analytics) {
      logEvent(analytics, 'page_view', {
        page_title: pageName,
        page_location: window.location.href,
      });
    }
  };

  const trackButtonClick = (buttonName: string, location?: string) => {
    if (analytics) {
      logEvent(analytics, 'select_content', {
        content_type: 'button',
        content_id: buttonName,
        location: location || 'unknown',
      });
    }
  };

  const trackFormSubmission = (formName: string) => {
    if (analytics) {
      logEvent(analytics, 'form_submit', {
        form_name: formName,
      });
    }
  };

  return {
    trackEvent,
    trackPageView,
    trackButtonClick,
    trackFormSubmission,
  };
};