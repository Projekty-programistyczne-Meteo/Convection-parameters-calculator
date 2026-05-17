import { useState } from 'react';
import { navLinks } from '../../hooks/useHashNavigation';
import type { Href } from '../../hooks/useHashNavigation';

const baseUrl = import.meta.env.BASE_URL;

type NavbarProps = {
  activeHref: Href;
  onNavigate: (href: Href) => void;
};

/**
 * Renders the responsive top navigation and highlights the currently active page link.
 * It updates browser history, closes the mobile menu after navigation, and reports route changes upward.
 */
function Navbar({ activeHref, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = (href: Href) => {
    onNavigate(href);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-300 bg-cpc-background-navbar backdrop-blur">
      <div className="mx-auto grid min-h-16 max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => handleNavigation('#')}
          className="text-left text-3xl font-black tracking-tight text-cpc-text-primary"
        >
          <img
            src={`${baseUrl}logo.svg`}
            alt="CPC Logo"
            className="h-20 w-20 hover:cursor-pointer"
          />
        </button>

        <nav className="hidden md:block">
          <ul className="flex items-center justify-center gap-6 lg:gap-10">
            {navLinks.map((link) => (
              <li key={link.label}>
                <button
                  type="button"
                  onClick={() => handleNavigation(link.href)}
                  className={`text-sm font-medium transition hover:cursor-pointer ${
                    activeHref === link.href
                      ? 'text-cpc-text-primary'
                      : 'text-cpc-text-nav-muted hover:text-cpc-text-primary'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center justify-end md:flex">
          <button
            className="group inline-flex h-10 w-10 items-center justify-center rounded-full text-cpc-text-primary transition-colors duration-200 "
            aria-label="Open tools"
            onClick={() => handleNavigation(navLinks[4].href)}
          >
            <span className="flex items-center justify-center">
              <img
                src={`${baseUrl}favicons/technical-support.png`}
                alt="technical support icon"
                className="h-10 w-10 transition hover:scale-110 hover:cursor-pointer object-contain"
              />
            </span>
          </button>
        </div>

        <button
          type="button"
          className="col-start-3 inline-flex h-10 w-10 items-center justify-center justify-self-end rounded-md text-cpc-text-primary transition hover:bg-cpc-background-nav-hover md:hidden"
          aria-label="Open menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="text-2xl leading-none">{isOpen ? '×' : '☰'}</span>
        </button>
      </div>

      {isOpen && (
        <nav className="border-t border-slate-300 bg-cpc-background-main md:hidden">
          <ul className="mx-auto grid max-w-7xl gap-1 px-4 py-3 sm:px-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <button
                  type="button"
                  onClick={() => handleNavigation(link.href)}
                  className={`block w-full rounded-md px-3 py-3 text-left text-sm font-medium transition ${
                    activeHref === link.href
                      ? 'bg-cpc-background-nav-active text-cpc-text-primary'
                      : 'text-cpc-text-nav hover:bg-cpc-background-nav-hover hover:text-cpc-text-primary'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
