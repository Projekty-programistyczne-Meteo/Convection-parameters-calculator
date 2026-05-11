const baseUrl = import.meta.env.BASE_URL;

/**
 * Displays the shared hero banner with the project title and sky background image.
 * Page components reuse it to keep the app introduction visually consistent.
 */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0f5d93] text-white">
      <div className="absolute inset-0 w-full h-full">
        <img
          src={`${baseUrl}images/clouds_and_sky.png`}
          alt="Clouds and sky"
          className="h-full w-full object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-[#0f5d93]/70" />
      </div>

      <div className="relative mx-auto flex min-h-136 max-w-7xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6 lg:px-8">
        <h1
          className="max-w-5xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl"
          style={{ fontFamily: '"Carter One", cursive' }}
        >
          Convection Parameters Calculator
        </h1>

        <p className="mt-8 max-w-6xl text-lg leading-9 text-white/95 sm:text-xl">
          The convection parameters calculator is a tool under the form of the
          structure of the pages in which you will convert parameters such as
          Cape, Li and other stuff, that is used for weather forecasts. In
          addition, it is possible to convert wind units and temperature.
        </p>
      </div>
    </section>
  );
}

export default Hero;
