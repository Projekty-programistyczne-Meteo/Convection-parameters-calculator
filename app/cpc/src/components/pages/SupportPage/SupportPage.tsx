import Hero from '../../layout/Hero';

/**
 * Composes the support page with the shared hero and support content area.
 * This route-level component is ready for future contact, help, or troubleshooting details.
 */
function SupportPage() {
  return (
    <>
      <Hero />
      <section className="px-4 py-10">
        <h2 className="text-2xl font-bold">Hello supportPage!</h2>
      </section>
    </>
  );
}

export default SupportPage;
