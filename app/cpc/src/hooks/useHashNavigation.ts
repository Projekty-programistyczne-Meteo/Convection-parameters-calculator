import { useEffect, useState } from 'react';

export const allowedHrefs = [
  '#',
  '#calculators',
  '#converters',
  '#about-us',
  '#support',
  '#privacy-policy',
] as const;

export type Href = (typeof allowedHrefs)[number];

export const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Calculators', href: '#calculators' },
  { label: 'Converters', href: '#converters' },
  { label: 'About Us', href: '#about-us' },
  { label: 'Support', href: '#support' },
] as const;

export const normalizeHref = (href: string): Href => {
  const currentHash = href || '#';
  return allowedHrefs.includes(currentHash as Href)
    ? (currentHash as Href)
    : '#';
};

export const getInitialHref = (): Href => normalizeHref(window.location.hash);

export const pushHref = (href: Href) => {
  if (href === '#') {
    window.history.pushState(null, '', window.location.pathname);
  } else {
    window.history.pushState(null, '', href);
  }
};

export const useHashNavigation = () => {
  const [activeHref, setActiveHref] = useState<Href>(getInitialHref);

  useEffect(() => {
    const handleHashChange = () =>
      setActiveHref(normalizeHref(window.location.hash));
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (href: Href, options?: { scrollToTop?: boolean }) => {
    pushHref(href);
    setActiveHref(href);
    if (options?.scrollToTop) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return { activeHref, navigate };
};
