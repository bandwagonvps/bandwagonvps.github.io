import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
}

export function useSEO({ title, description }: SEOProps) {
  useEffect(() => {
    const fullTitle = title ? `${title} - 搬瓦工中文网` : '搬瓦工中文网';
    document.title = fullTitle;

    // Helper to update or create meta tags
    const setMetaTag = (selector: string, attribute: string, value: string, contentAttribute = 'content') => {
      let element = document.querySelector(`meta[${attribute}="${value}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, value);
        document.head.appendChild(element);
      }
      element.setAttribute(contentAttribute, description || '');
    };

    if (description) {
      setMetaTag('name="description"', 'name', 'description', 'content');
      setMetaTag('property="og:description"', 'property', 'og:description', 'content');
    }

    setMetaTag('property="og:title"', 'property', 'og:title', 'content');
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', fullTitle);

    // Canonical link
    const canonicalUrl = typeof window !== 'undefined' ? window.location.href : '';
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl.split('?')[0]); // removing query params

  }, [title, description]);
}
