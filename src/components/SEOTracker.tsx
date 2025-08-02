import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Google Analytics and GTM tracking component
const SEOTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page views with GA4
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'G-HT5N5FJEZ0', {
        page_path: location.pathname + location.search,
        page_title: document.title,
      });
    }

    // Push to GTM dataLayer for enhanced tracking
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'page_view',
        page_path: location.pathname + location.search,
        page_title: document.title,
        page_location: window.location.href,
      });
    }
  }, [location]);

  return null;
};

// Extend window interface for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export default SEOTracker;