import { navLinks } from '../../hooks/useHashNavigation';
import type { Href } from '../../hooks/useHashNavigation';

const baseUrl = import.meta.env.BASE_URL;

type FooterProps = {
  activeHref: Href;
  onNavigate: (href: Href) => void;
};

/**
 * Site footer with attribution, navigation links, contact details, and social links.
 * It reuses the app base URL for bundled favicon assets.
 */
function Footer({ activeHref, onNavigate }: FooterProps) {
  const handleNavigation = (href: Href) => {
    onNavigate(href);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2f2f2f] text-[#f5f2eb] text-sm">
      <div className="mx-auto max-w-8xl px-6 py-12 md:px-10 lg:px-16">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {/* Left column */}
          <div className="space-y-8">
            <div>
              <h3 className="text-sm md:text-xl font-semibold text-white">
                Website Designers:
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-200">
                Jakub Początek, Filip Szymanek
              </p>
            </div>

            <div>
              <h3 className="text-sm md:text-xl font-semibold text-white">
                Website Developer:
              </h3>
              <p className="mt-3 text-xs md:text-sm leading-7 text-stone-200">
                Jakub Początek
              </p>
            </div>

            <div>
              <h3 className="text-sm md:text-xl font-semibold text-white">
                Content creators:
              </h3>
              <p className="mt-3 text-xs md:text-sm leading-7 text-stone-200">
                Jakub Początek, Filip Szymanek
              </p>
            </div>
          </div>

          {/* Middle column */}
          <div className="space-y-8">
            <div>
              <button
                type="button"
                onClick={handleScrollTop}
                className="inline-flex items-center gap-2 text-sm md:text-xl font-semibold text-white transition hover:text-stone-300"
              >
                <span aria-hidden="true">⇪</span>
                <span>Back to top</span>
                <span aria-hidden="true">⇪</span>
              </button>
            </div>

            <div>
              <h3 className="text-sm md:text-xl font-semibold text-white">
                Menu
              </h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-xs md:text-sm text-stone-200 marker:text-stone-300">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      type="button"
                      onClick={() => handleNavigation(link.href)}
                      className={`transition hover:text-white hover:cursor-pointer ${
                        activeHref === link.href
                          ? 'text-white font-semibold'
                          : 'text-stone-200'
                      }`}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm md:text-xl font-semibold text-white">
                Terms and conditions and Privacy Policy
              </h3>
              <a
                href="https://github.com/Projekty-programistyczne-Meteo/Convection-parameters-calculator/blob/main/LICENSE"
                target="_blank"
                className="mt-3 inline-block text-xs md:text-sm text-stone-200 underline underline-offset-4 transition hover:text-white hover:cursor-pointer"
              >
                Licence and agreement
              </a>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-8">
            <div>
              <h3 className="text-sm md:text-xl font-semibold text-white">
                Contact:
              </h3>
              <a
                href="mailto:cpc.jpfs.support@gmail.com"
                className="mt-3 inline-block text-xs md:text-sm text-stone-200 underline underline-offset-4 transition hover:text-white hover:cursor-pointer"
              >
                cpc.jpfs.support@gmail.com
              </a>
            </div>

            <div>
              <h3 className="text-sm md:text-xl font-semibold text-white">
                Support us here:
              </h3>
              <a
                href="https://lowcyburz.pl/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-xs md:text-sm text-stone-200 underline underline-offset-4 transition hover:text-white hover:cursor-pointer"
              >
                lowcyburz.pl
              </a>
            </div>

            <div className="flex items-center gap-6 pt-2">
              <a
                href="https://www.facebook.com/lowcyburz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="transition hover:scale-105 hover:cursor-pointer"
              >
                <img
                  src={`${baseUrl}/favicons/facebook.png`}
                  alt="Facebook"
                  className="h-10 w-10 object-contain"
                />
              </a>

              <a
                href="https://github.com/Projekty-programistyczne-Meteo/Convection-parameters-calculator/tree/main"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="transition hover:scale-105 hover:cursor-pointer"
              >
                <img
                  src={`${baseUrl}/favicons/github.png`}
                  alt="GitHub"
                  className="h-11 w-11 object-contain"
                />
              </a>

              <a
                href="https://www.instagram.com/polscylowcyburz/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="transition hover:scale-105 hover:cursor-pointer"
              >
                <img
                  src={`${baseUrl}/favicons/instagram.png`}
                  alt="Instagram"
                  className="h-10 w-10 object-contain"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-[#282828] px-6 py-5 text-center md:px-10">
        <p className="text-sm text-stone-200">
          © 2026 CPC. | ver: alpha-0.1.0 | All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
