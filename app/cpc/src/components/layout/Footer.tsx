const baseUrl = import.meta.env.BASE_URL;

function Footer() {
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
              <a
                href="#top"
                className="inline-flex items-center gap-2 text-sm md:text-xl font-semibold text-white transition hover:text-stone-300"
              >
                <span aria-hidden="true">⇪</span>
                <span>Back to top</span>
                <span aria-hidden="true">⇪</span>
              </a>
            </div>

            <div>
              <h3 className="text-sm md:text-xl font-semibold text-white">
                Menu
              </h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-xs md:text-sm text-stone-200 marker:text-stone-300">
                <li>
                  <a href="/" className="transition hover:text-white">
                    home
                  </a>
                </li>
                <li>
                  <a
                    href="/#calculators"
                    className="transition hover:text-white"
                  >
                    calculators
                  </a>
                </li>
                <li>
                  <a
                    href="/#converters"
                    className="transition hover:text-white"
                  >
                    converters
                  </a>
                </li>
                <li>
                  <a href="/#about-us" className="transition hover:text-white">
                    about us
                  </a>
                </li>
                <li>
                  <a href="/#support" className="transition hover:text-white">
                    support
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm md:text-xl font-semibold text-white">
                Terms and conditions and Privacy Policy
              </h3>
              <a
                href="/licence-and-agreement"
                className="mt-3 inline-block text-xs md:text-sm text-stone-200 underline underline-offset-4 transition hover:text-white"
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
                className="mt-3 inline-block text-xs md:text-sm text-stone-200 underline underline-offset-4 transition hover:text-white"
              >
                cpc.jpfs.support@gmail.com
              </a>
            </div>

            <div>
              <h3 className="text-sm md:text-xl font-semibold text-white">
                Support us here:
              </h3>
              <a
                href="https://example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-xs md:text-sm text-stone-200 underline underline-offset-4 transition hover:text-white"
              >
                example.com
              </a>
            </div>

            <div className="flex items-center gap-6 pt-2">
              <a
                href="https://www.facebook.com/lowcyburz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="transition hover:scale-105"
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
                className="transition hover:scale-105"
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
                className="transition hover:scale-105"
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
