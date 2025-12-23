import { useEffect } from 'react';
import { seoPages, SEOConfig } from './seoConfig';

export const useSeo = (page: string) => {
  useEffect(() => {
    const seoData = seoPages[page] || seoPages.home;
    
    // Update title
    document.title = seoData.title;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', seoData.description);
    
    // Update canonical tag
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag && seoData.canonical) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    if (seoData.canonical) {
      canonicalTag?.setAttribute('href', seoData.canonical);
    }
    
    // Update Open Graph meta tags
    updateMetaTag('og:title', seoData.title);
    updateMetaTag('og:description', seoData.description);
    updateMetaTag('og:url', seoData.canonical || window.location.href);
    updateMetaTag('og:type', 'website');
    
    // Update Twitter meta tags
    updateMetaTag('twitter:title', seoData.title);
    updateMetaTag('twitter:description', seoData.description);
    updateMetaTag('twitter:card', 'summary_large_image');
    
  }, [page]);
};

const updateMetaTag = (property: string, content: string) => {
  let tag = document.querySelector(`meta[property="${property}"], meta[name="${property}"]`);
  
  if (!tag) {
    tag = document.createElement('meta');
    if (property.startsWith('og:') || property.startsWith('twitter:')) {
      tag.setAttribute('property', property);
    } else {
      tag.setAttribute('name', property);
    }
    document.head.appendChild(tag);
  }
  
  tag.setAttribute('content', content);
};

// Update static meta tag in head
export const setSeoData = (seoConfig: SEOConfig) => {
  document.title = seoConfig.title;
  
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute('content', seoConfig.description);
  
  if (seoConfig.canonical) {
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', seoConfig.canonical);
  }
};
