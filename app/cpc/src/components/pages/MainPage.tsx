import Hero from '../layout/Hero';

/**
 * Composes the home page with the shared hero and the current landing content section.
 * This route-level component is the default view when no supported hash route is selected.
 */
function MainPage() {
  return (
    <>
      <Hero />
      <article className="bg-[#EEE8E8] px-6 py-10 md:px-12 lg:px-20 text-stone-900">
        <section className="space-y-6">
          <h2 className="text-2xl font-bold leading-tight">
            Docs and quick start
          </h2>

          <div>
            <h3 className="mb-3 text-xl font-semibold leading-tight">
              Welcome to Convection Parameters Calculator
            </h3>
            <p className="text-base leading-8">
              This website is an interactive tool designed for meteorologists,
              weather enthusiasts, and atmospheric science students. It provides
              a comprehensive suite of calculators and unit converters
              specifically tailored for convective weather analysis and
              atmospheric thermodynamics calculations.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-xl font-semibold leading-tight">
              Website Version
            </h3>
            <p className="text-base leading-8">
              This is <strong>alpha-0.1.0</strong> release, currently being
              prepared for publication on public hosting, and currently hosted
              on github pages. As an alpha version, we are continuously
              improving features, adding more calculators, and refining the user
              experience based on feedback.
            </p>
          </div>
        </section>

        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold leading-tight">Website Sections</h2>

          <div className="space-y-8">
            <div>
              <h3 className="mb-2 text-lg font-semibold leading-tight">
                📊 Calculators
              </h3>
              <p className="text-base leading-8">
                The Calculators section provides a collection of specialized
                tools for atmospheric and meteorological computations. These
                calculators help you determine critical parameters for
                understanding convective weather systems:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6 text-base leading-7">
                <li>
                  <strong>Derecho Composite Parameter</strong> - Assesses the
                  potential for organized convective wind events
                </li>
                <li>
                  <strong>Dew Point Temperature</strong> - Calculates moisture
                  content in the atmosphere
                </li>
                <li>
                  <strong>Energy Helicity Index (EHI)</strong> - Evaluates the
                  potential for rotating thunderstorms and tornadoes
                </li>
                <li>
                  <strong>Lifting Condensation Level (LCL)</strong> - Determines
                  the altitude where air becomes saturated
                </li>
                <li>
                  <strong>Stability of the Atmosphere</strong> - Analyzes
                  atmospheric stability indices
                </li>
                <li>
                  <strong>Updraft Strength</strong> - Calculates the vertical
                  velocity of rising air parcels
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold leading-tight">
                🔄 Converters
              </h3>
              <p className="text-base leading-8">
                The Converters section offers quick and reliable unit conversion
                tools for meteorological parameters. Easily convert between
                different measurement systems:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6 text-base leading-7">
                <li>
                  <strong>Temperature Unit Converter</strong> - Convert between
                  Kelvin, Celsius, Fahrenheit, Rankine, Delisle, Newton,
                  Réaumur, and Rømer scales
                </li>
                <li>
                  <strong>Wind Unit Converter</strong> - Convert wind speeds
                  between knots, kilometers per hour, miles per hour, and meters
                  per second
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold leading-tight">
                ℹ️ About Us
              </h3>
              <p className="text-base leading-8">
                Learn about the developers behind the Convection Parameters
                Calculator. This section contains information about our team,
                their expertise in meteorology and web development, and the
                motivation behind creating this tool.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-lg font-semibold leading-tight">
                💬 Support
              </h3>
              <p className="text-base leading-8">
                Have questions, found a bug, or want to contribute? The Support
                section provides contact information and ways to reach out to
                the development team. We welcome feedback and collaboration to
                make this tool even better.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold leading-tight">
            How to Use This Website
          </h2>

          <ol className="space-y-4 pl-6 text-base leading-8">
            <li className="list-decimal">
              <strong>Select a Tool:</strong> Navigate to either Calculators or
              Converters using the navigation menu at the top of the page.
            </li>
            <li className="list-decimal">
              <strong>Input Your Data:</strong> Enter the required atmospheric
              or meteorological parameters. Each tool clearly indicates which
              units are expected.
            </li>
            <li className="list-decimal">
              <strong>Review Results:</strong> The calculation results are
              displayed immediately with detailed explanations to help you
              understand the meteorological implications.
            </li>
            <li className="list-decimal">
              <strong>Explore Further:</strong> Read the explanatory sections on
              converter pages to understand the physics and mathematics behind
              the conversions and calculations.
            </li>
          </ol>
        </section>

        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold leading-tight">
            Technical Information
          </h2>

          <p className="text-base leading-8">
            All calculations are performed locally in your browser, ensuring
            data privacy and quick results. The website is built with modern web
            technologies and is optimized for desktop, tablet, and mobile
            devices. For detailed documentation about specific calculators and
            converters, visit the respective pages where you'll find
            step-by-step explanations and formulas.
          </p>
        </section>
      </article>
    </>
  );
}

export default MainPage;
