import { useEffect, useState } from 'react';
import Navbar from './components/layout/Navbar';
import MainPage from './components/pages/MainPage/MainPage';
import CalculatorsPage from './components/pages/CalculatorPage/CalculatorsPage';
import ConvertersPage from './components/pages/ConvertersPage/ConvertersPage';
import AboutUsPage from './components/pages/AboutUsPage/AboutUsPage';
import SupportPage from './components/pages/SupportPage/SupportPage';

/**
 * Root application component that controls which page is visible from the current hash route.
 * It keeps navigation state in one place and passes the active route down to the navbar.
 */
function App() {
  const allowedHrefs = [
    '#',
    '#calculators',
    '#converters',
    '#about-us',
    '#support',
  ] as const;

  type Href = (typeof allowedHrefs)[number];

  const getInitialHref = (): Href => {
    const currentHash = window.location.hash as Href;
    return allowedHrefs.includes(currentHash) ? currentHash : '#';
  };

  const [activeHref, setActiveHref] = useState<Href>(getInitialHref);

  useEffect(() => {
    const handleHashChange = () => {
      const currentHash = window.location.hash as Href;
      setActiveHref(allowedHrefs.includes(currentHash) ? currentHash : '#');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (activeHref) {
      case '#':
        return <MainPage />;
      case '#calculators':
        return <CalculatorsPage />;
      case '#converters':
        return <ConvertersPage />;
      case '#about-us':
        return <AboutUsPage />;
      case '#support':
        return <SupportPage />;
      default:
        return <MainPage />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-stone-900">
      <Navbar activeHref={activeHref} onNavigate={setActiveHref} />
      {renderPage()}
    </div>
  );
}

export default App;
