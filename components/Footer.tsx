import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="z-20">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm text-slate-400">
          &copy; {new Date().getFullYear()} Stellar. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;