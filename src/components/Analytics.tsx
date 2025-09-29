import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAnalytics } from '@/hooks/useAnalytics';

export const Analytics = () => {
  const location = useLocation();
  const { trackPageView } = useAnalytics();

  useEffect(() => {
    // Track page views on route changes
    const pageName = location.pathname === '/' ? 'Home' :
                    location.pathname.replace('/', '').replace('-', ' ');
    trackPageView(pageName);
  }, [location, trackPageView]);

  return null; // This component doesn't render anything
};

export default Analytics;