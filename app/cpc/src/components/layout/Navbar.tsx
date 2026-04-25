import { useState } from 'react';

const links = [
  { label: 'Home', href: '#' },
  { label: 'All tools', href: '#tools' },
  { label: 'Calculators', href: '#calculators' },
  { label: 'Converters', href: '#converters' },
  { label: 'About Us', href: '#about' },
  { label: 'Support', href: '#support' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-300 bg-sky-100/95 backdrop-blur">
      <div className="mx-auto grid min-h-16 max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-4 sm:px-6 lg:px-8">
        <a
          href="#"
          className="text-3xl font-black tracking-tight text-stone-900"
        >
          CPC
        </a>

        <nav className="hidden md:block">
          <ul className="flex items-center justify-center gap-6 lg:gap-10">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-stone-800 transition hover:text-black"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center justify-end md:flex">
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-stone-900 transition hover:bg-sky-200"
            aria-label="Open tools"
          >
            <span className="text-xl">🛠</span>
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
                <a
                  href={link.href}
                  className="block rounded-md px-3 py-3 text-sm font-medium text-stone-800 transition hover:bg-sky-200 hover:text-black"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
