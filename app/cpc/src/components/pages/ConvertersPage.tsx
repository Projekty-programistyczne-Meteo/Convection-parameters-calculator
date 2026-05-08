import Hero from '../layout/Hero';
import TemperatureUnitsConverter from '../layout/Converters/TemperatureUnitsConverter';
import WindUnitsConverter from '../layout/Converters/WindUnitsConverter';

const baseUrl = import.meta.env.BASE_URL;

/**
 * Composes the converters page with temperature and wind converters plus explanatory conversion content.
 * It also owns the temperature diagram asset path used in the learning section.
 */
function ConvertersPage() {
  return (
    <>
      <Hero />
      <main>
        {/* <header className="bg-[#EEE8E8] px-6 py-10 md:px-12 lg:px-20">
          <h2 className=" text-center text-base font-bold leading-relaxed text-stone-900">
            This converter down below enables user to convert temperature units
            from one selected unit to all available units (including less
            popular).
          </h2>
        </header> */}
        <TemperatureUnitsConverter />
        <WindUnitsConverter />
        <article className="bg-[#EEE8E8] px-6 py-10 md:px-12 lg:px-20 text-stone-900">
          <section className="space-y-6">
            <h2 className="text-2xl font-bold leading-tight">
              Explanation step by step of how to convert temperature units
              between each other.
            </h2>

            <p className="text-base leading-8">
              In order to convert units that are in different type than Celsius
              (°C), we need to count given unit to degrees Celsius, and then
              from degrees Celsius, count to potential (our goal) unit.
            </p>

            <p className="text-base leading-8">
              For example: if we want to convert unit from degrees Fahrenheit
              (°F), to Kelvin (K), first we convert to degrees Celsius (°C),
              then to degrees Kelvins (K). Fun fact: Kelvin is default unit of
              temperature in SI system.
            </p>

            <p className="text-base leading-8">
              The block schema down below represents example of converting unit
              from Fahrenheit (°F), to Kelvin (K):
            </p>

            <div className="flex justify-center py-4">
              <img
                src={`${baseUrl}diagrams/temperatureExample.svg`}
                alt="Diagram showing conversion from Fahrenheit to Celsius and then to Kelvin"
                className="h-auto w-full max-w-2xl"
              />
            </div>

            <p className="text-base leading-8">
              In those types of conversions we recommend to go through degrees
              Celsius (°C), although there are several ways to speed up
              conversions between some of those units between each other with no
              need to go through degrees Celsius (°C). But for basic purposes,
              at every conversion script on this subpage, we will always use
              degrees Celsius (°C).
            </p>

            <div>
              <p className="mb-3 text-base leading-8">
                Description of each convertion method will contain those
                temperature scales:
              </p>

              <ul className="list-disc space-y-2 pl-6 text-base leading-7">
                <li>Kelvin</li>
                <li>Celsius</li>
                <li>Fahrenheit</li>
                <li>Rankine</li>
                <li>Delisle</li>
                <li>Newton</li>
                <li>Réaumur</li>
                <li>Rømer</li>
              </ul>
            </div>
          </section>

          <section className="mt-14 space-y-8">
            <h2 className="text-2xl font-bold leading-tight">
              Converting degrees Celsius (°C) to other units (x).
            </h2>

            <div className="space-y-6">
              <div className="grid gap-3 md:grid-cols-[1.6fr_1fr] md:items-start">
                <p className="text-base leading-7">
                  1) Degrees Celsius (°C) → Degrees Kelvin (K)
                </p>
                <p className="text-base leading-7 md:text-right">
                  x[°C]=(x+273.15)[K]
                </p>
              </div>

              <div className="grid gap-3 md:grid-cols-[1.6fr_1fr] md:items-start">
                <p className="text-base leading-7">
                  2) Degrees Celsius (°C) → Degrees Fahrenheit (°F)
                </p>
                <p className="text-base leading-7 md:text-right">
                  x[°C]=(x * 9/5+32)[°F]
                </p>
              </div>

              <div className="grid gap-3 md:grid-cols-[1.6fr_1fr] md:items-start">
                <p className="text-base leading-7">
                  3) Degrees Celsius (°C) → Degrees Rankine (°R)
                </p>
                <p className="text-base leading-7 md:text-right">
                  x[°C]=(x+273.15) * 9/5[°R]
                </p>
              </div>

              <div className="grid gap-3 md:grid-cols-[1.6fr_1fr] md:items-start">
                <p className="text-base leading-7">
                  4) Degrees Celsius (°C) → Degrees Delisle (°De)
                </p>
                <p className="text-base leading-7 md:text-right">
                  x[°C]=(100-x) * 3/2[°De]
                </p>
              </div>

              <div className="grid gap-3 md:grid-cols-[1.6fr_1fr] md:items-start">
                <p className="text-base leading-7">
                  5) Degrees Celsius (°C) → Degrees Newton (°N)
                </p>
                <p className="text-base leading-7 md:text-right">
                  x[°C]=(x * 33/100)[°N]
                </p>
              </div>

              <div className="grid gap-3 md:grid-cols-[1.6fr_1fr] md:items-start">
                <p className="text-base leading-7">
                  6) Degrees Celsius (°C) → Degrees Réaumur (°Re)
                </p>
                <p className="text-base leading-7 md:text-right">
                  x[°C]=(x * 4/5)[°Re]
                </p>
              </div>

              <div className="grid gap-3 md:grid-cols-[1.6fr_1fr] md:items-start">
                <p className="text-base leading-7">
                  7) Degrees Celsius (°C) → Degrees Romer (°Rø)
                </p>
                <p className="text-base leading-7 md:text-right">
                  x[°C]=(x * 21/40 + 7.5)[°Rø]
                </p>
              </div>
            </div>
          </section>

          <section className="mt-14 space-y-8">
            <h2 className="text-2xl font-bold leading-tight">
              Converting other units (x) to degrees Celsius (°C)
            </h2>

            <div className="space-y-6">
              <div className="grid gap-3 md:grid-cols-[1.6fr_1fr] md:items-start">
                <p className="text-base leading-7">
                  1) Degrees Kelvin (K) → Degrees Celsius (°C)
                </p>
                <p className="text-base leading-7 md:text-right">
                  x[K]=(x - 273.15)[°C]
                </p>
              </div>

              <div className="grid gap-3 md:grid-cols-[1.6fr_1fr] md:items-start">
                <p className="text-base leading-7">
                  2) Degrees Fahrenheit (°F) → Degrees Celsius (°C)
                </p>
                <p className="text-base leading-7 md:text-right">
                  x[°F]=(x - 32) * 5/9[°C]
                </p>
              </div>

              <div className="grid gap-3 md:grid-cols-[1.6fr_1fr] md:items-start">
                <p className="text-base leading-7">
                  3) Degrees Rankine (°R) → Degrees Celsius (°C)
                </p>
                <p className="text-base leading-7 md:text-right">
                  x[°R]=(x - 491.67) * 5/9[°C]
                </p>
              </div>

              <div className="grid gap-3 md:grid-cols-[1.6fr_1fr] md:items-start">
                <p className="text-base leading-7">
                  4) Degrees Delisle (°De) → Degrees Celsius (°C)
                </p>
                <p className="text-base leading-7 md:text-right">
                  x[°De]=(100 - x) * 2/3[°C]
                </p>
              </div>

              <div className="grid gap-3 md:grid-cols-[1.6fr_1fr] md:items-start">
                <p className="text-base leading-7">
                  5) Degrees Newton (°N) → Degrees Celsius (°C)
                </p>
                <p className="text-base leading-7 md:text-right">
                  x[°N]=(x * 100/33)[°C]
                </p>
              </div>

              <div className="grid gap-3 md:grid-cols-[1.6fr_1fr] md:items-start">
                <p className="text-base leading-7">
                  6) Degrees Réaumur (°Re) → Degrees Celsius (°C)
                </p>
                <p className="text-base leading-7 md:text-right">
                  x[°Re]=(x * 5/4)[°C]
                </p>
              </div>

              <div className="grid gap-3 md:grid-cols-[1.6fr_1fr] md:items-start">
                <p className="text-base leading-7">
                  7) Degrees Romer (°Rø) → Degrees Celsius (°C)
                </p>
                <p className="text-base leading-7 md:text-right">
                  x[°Rø]=(x - 7.5) * 40/21[°C]
                </p>
              </div>
            </div>
          </section>

          <section className="mt-14 space-y-4">
            <h2 className="text-2xl font-bold leading-tight">
              Converting units with no entering into Celsius (°C) scale
            </h2>

            <p className="text-base leading-8">
              Table of transitions between some of the physical quantities (not
              necessarily through degrees Celsius) is located on the website:
            </p>

            <a
              href="https://en.wikipedia.org/wiki/Conversion_of_scales_of_temperature"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block break-all text-sky-800 underline underline-offset-4 transition hover:text-sky-950"
            >
              https://en.wikipedia.org/wiki/Conversion_of_scales_of_temperature
            </a>
          </section>
        </article>
      </main>
    </>
  );
}

export default ConvertersPage;
