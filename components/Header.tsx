import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="z-20 sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <button 
            onClick={() => window.location.hash = '#/'}
            className="bg-transparent border-none p-0 cursor-pointer text-left"
            aria-label="Ir a la página de inicio"
          >
            <span
              className="text-4xl text-yellow-400"
              style={{ fontFamily: "'Lobster', cursive", textShadow: '2px 2px 0px #dc2626' }}
            >
                Stellar
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;