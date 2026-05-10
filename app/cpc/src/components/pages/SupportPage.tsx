import Hero from '../layout/Hero';
import ContactForm from '../layout/ContactForm';

/**
 * Composes the support page with the shared hero and contact form section.
 * This route-level component is ready for contact, help, and troubleshooting details.
 */
function SupportPage() {
  return (
    <>
      <Hero />
      <section className="bg-[#faf9f7] md:bg-[#EEE8E8] px-10 py-10 md:px-12 lg:px-20 text-stone-900">
        <ContactForm />
      </section>
    </>
  );
}

export default SupportPage;
