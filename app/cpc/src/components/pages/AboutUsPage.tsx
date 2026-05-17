import Hero from '../layout/Hero';

/**
 * Composes the About Us page with the shared hero and page-specific content area.
 * This page component is the route-level wrapper for future project or team information.
 */
function AboutUsPage() {
  return (
    <>
      <Hero />
      <article className="bg-cpc-background-main px-6 py-10 md:px-12 lg:px-20 text-cpc-text-primary">
        <section className="space-y-6">
          <h2 className="text-2xl font-bold leading-tight">
            Developers and content creators
          </h2>
          <div>
            <div className="space-y-6">
              <div>
                <h3 className="mb-3 text-lg font-semibold leading-tight">
                  Jakub Początek
                </h3>
                <p className="text-base leading-8">
                  <span>
                    I'm a software engineer with a passion for meteorology and
                    atmospheric sciences. With a background in software
                    development and a keen interest in weather phenomena, I
                    created the Convection Parameters Calculator to provide an
                    accessible tool for meteorologists, weather enthusiasts, and
                    students.{' '}
                  </span>
                  <span className="mt-3 block md:mt-0 md:inline">
                    My goal is to bridge the gap between complex atmospheric
                    calculations and user-friendly interfaces, making it easier
                    for everyone to understand and analyze convective weather
                    patterns.
                  </span>
                </p>
                <p className="text-base leading-8 mt-3">
                  <span>
                    I recently worked with open-source projects related to
                    different IT topics, like web development, desktop
                    applications, data science, networking, system engineering
                    and machine learning.{' '}
                  </span>
                  <span className="mt-3 block md:mt-0 md:inline">
                    I have a strong interest in contributing to projects that
                    combine my software engineering skills with my passion for
                    meteorology, and I'm excited to continue developing tools
                    that help others explore and understand the complexities of
                    the atmosphere.
                  </span>
                  <div className="mt-4">
                    <p className="text-sm text-cpc-text-tertiary">
                      <strong>References:</strong>{' '}
                      <a
                        href="https://github.com/Rorschach-IT"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cpc-text-link hover:text-cpc-text-link-hover underline"
                      >
                        https://github.com/Rorschach-IT
                      </a>
                    </p>
                  </div>
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-lg font-semibold leading-tight">
                  Fiip Szymanek
                </h3>
                <p className="text-base leading-8">
                  <span>
                    I'm a member of the Polish Storm Hunters association and
                    actively work to educate people about storm phenomena and
                    storms themselves. I also forecast storms and work for a
                    newspaper.{' '}
                  </span>
                  <span className="mt-4 block md:mt-0 md:inline">
                    My mission is to promote meteorology and warn people about
                    dangerous weather phenomena.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold leading-tight">
            In cooperation with
          </h2>

          <div>
            <h3 className="mb-3 text-lg font-semibold leading-tight">
              Poland storm hunters - Skywarn Poland
            </h3>
            <p className="text-base leading-8">
              <span>
                <strong>
                  Polscy Łowcy Burz – Skywarn Polska (Poland Storm Hunters -
                  Skywarn Poland)
                </strong>{' '}
                is a Polish meteorological association dedicated to the study,
                monitoring, and forecasting of severe weather phenomena,
                particularly convective storms and extreme atmospheric
                events.{' '}
              </span>
              <span className="mt-4 block md:mt-0 md:inline">
                The organization focuses on providing accurate weather warnings,
                educational content, and scientific analysis of severe weather
                patterns across Poland and Europe.
              </span>
            </p>
            <p className="text-base leading-8 mt-3">
              <span>
                The association operates a comprehensive system for tracking and
                documenting severe weather events, maintains partnerships with
                meteorological institutions, and contributes to the European
                Severe Weather Database.{' '}
              </span>
              <span className="mt-4 block md:mt-0 md:inline">
                They provide specialized forecasts, technical resources, and
                educational materials about convective weather phenomena,
                helping to improve public awareness and safety regarding severe
                storms, tornadoes, and other dangerous atmospheric conditions.
              </span>
            </p>
            <div className="mt-4">
              <p className="text-sm text-cpc-text-tertiary">
                <strong>References:</strong>{' '}
                <a
                  href="https://lowcyburz.pl/ekipa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cpc-text-link hover:text-cpc-text-link-hover underline"
                >
                  https://lowcyburz.pl/ekipa/
                </a>
              </p>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}

export default AboutUsPage;
