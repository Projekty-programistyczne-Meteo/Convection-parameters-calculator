import { useState } from 'react';

const links = [
  { label: 'Home', href: '#' },
  { label: 'All tools', href: '#all-tools' },
  { label: 'Calculators', href: '#calculators' },
  { label: 'Converters', href: '#converters' },
  { label: 'About Us', href: '#about-us' },
  { label: 'Support', href: '#support' },
] as const;

type NavbarProps = {
  activeHref: (typeof links)[number]['href'];
  onNavigate: (href: (typeof links)[number]['href']) => void;
};

function Navbar({ activeHref, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = (href: (typeof links)[number]['href']) => {
    if (href === '#') {
      window.history.pushState(null, '', window.location.pathname);
    } else {
      window.history.pushState(null, '', href);
    }

    onNavigate(href);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-300 bg-sky-100/95 backdrop-blur">
      <div className="mx-auto grid min-h-16 max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => handleNavigation('#')}
          className="text-left text-3xl font-black tracking-tight text-stone-900"
        >
          CPC
        </button>

        <nav className="hidden md:block">
          <ul className="flex items-center justify-center gap-6 lg:gap-10">
            {links.map((link) => (
              <li key={link.label}>
                <button
                  type="button"
                  onClick={() => handleNavigation(link.href)}
                  className={`text-sm font-medium transition hover:cursor-pointer ${
                    activeHref === link.href
                      ? 'text-black'
                      : 'text-gray-700 hover:text-black'
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
            className="group inline-flex h-10 w-10 items-center justify-center rounded-full text-stone-900 transition-colors duration-200 "
            aria-label="Open tools"
            onClick={() => handleNavigation(links[5].href)}
          >
            <span className="flex items-center justify-center">
              <img
                src="/favicons/technical-support.png"
                alt="technical support icon"
                className="h-10 w-10 transform-gpu transition-transform duration-200 ease-out group-hover:scale-110 cursor-pointer"
              />
            </span>
          </button>
        </div>

        <button
          type="button"
          className="col-start-3 inline-flex h-10 w-10 items-center justify-center justify-self-end rounded-md text-stone-900 transition hover:bg-sky-200 md:hidden"
          aria-label="Open menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="text-2xl leading-none">{isOpen ? '×' : '☰'}</span>
        </button>
      </div>

      {isOpen && (
        <nav className="border-t border-slate-300 bg-sky-50 md:hidden">
          <ul className="mx-auto grid max-w-7xl gap-1 px-4 py-3 sm:px-6">
            {links.map((link) => (
              <li key={link.label}>
                <button
                  type="button"
                  onClick={() => handleNavigation(link.href)}
                  className={`block w-full rounded-md px-3 py-3 text-left text-sm font-medium transition ${
                    activeHref === link.href
                      ? 'bg-sky-200 text-black'
                      : 'text-stone-800 hover:bg-sky-200 hover:text-black'
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
