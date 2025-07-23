import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import GeneratorPage from './components/GeneratorPage';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [route, setRoute] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash || '#/');
    };

    window.addEventListener('hashchange', handleHashChange, false);
    
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange, false);
    };
  }, []);

  const renderPage = () => {
    switch (route) {
      case '#/generator':
        return <GeneratorPage />;
      default:
        return <LandingPage />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen text-slate-200 bg-slate-900/75">
      <Header />
      <main className="flex-grow flex flex-col z-10">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;