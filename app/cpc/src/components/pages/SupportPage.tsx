import Hero from '../layout/Hero';
import ContactForm from '../layout/ContactForm';
import type { Href } from '../../hooks/useHashNavigation';

type SupportPageProps = {
  onNavigate: (href: Href) => void;
};

/**
 * Composes the support page with the shared hero and contact form section.
 * This route-level component is ready for contact, help, and troubleshooting details.
 */
function SupportPage({ onNavigate }: SupportPageProps) {
  return (
    <>
      <Hero />
      <section className="bg-[#faf9f7] md:bg-[#EEE8E8] px-10 py-10 md:px-12 lg:px-20 text-stone-900">
        <ContactForm onNavigate={onNavigate} />
      </section>
    </>
  );
}

export default SupportPage;
