import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import MainPage from './components/pages/HomePage';
import CalculatorsPage from './components/pages/CalculatorsPage';
import ConvertersPage from './components/pages/ConvertersPage';
import AboutUsPage from './components/pages/AboutUsPage';
import SupportPage from './components/pages/SupportPage';
import { useHashNavigation } from './hooks/useHashNavigation';

/**
 * Root application component that controls which page is visible from the current hash route.
 * It keeps navigation state in one place and passes the active route down to navigation components.
 */
function App() {
  const { activeHref, navigate } = useHashNavigation();

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
        return <SupportPage onNavigate={navigate} />;
      case '#privacy-policy':
        return <MainPage />;
      default:
        return <MainPage />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-cpc-text-primary">
      <Navbar activeHref={activeHref} onNavigate={(href) => navigate(href, { scrollToTop: true })} />

      <main id="main-content">{renderPage()}</main>

      <Footer
        activeHref={activeHref}
        onNavigate={(href) => navigate(href, { scrollToTop: true })}
      />
    </div>
  );
}

export default App;
