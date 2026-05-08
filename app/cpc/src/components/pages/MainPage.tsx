import Hero from '../layout/Hero';

/**
 * Composes the home page with the shared hero and the current landing content section.
 * This route-level component is the default view when no supported hash route is selected.
 */
function MainPage() {
  return (
    <>
      <Hero />
      <section className="px-4 py-10">
        <h2 className="text-2xl font-bold">Hello mainPage!</h2>
      </section>
    </>
  );
}

export default MainPage;
