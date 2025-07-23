import React from 'react';

const LandingPage: React.FC = () => {
  return (
    <div 
      className="h-full flex-grow flex flex-col items-center justify-center px-4 text-center"
    >
      <div className="max-w-4xl mx-auto w-full flex flex-col items-center">
        
        <p className="text-yellow-400 tracking-widest uppercase text-sm font-semibold mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
          Diseño de paletas de colores con IA
        </p>

        <div className="relative my-4 flex flex-col items-center select-none">
          <h1 
            className="text-8xl sm:text-[10rem] md:text-[12rem] lg:text-[15rem] leading-none text-yellow-400 z-10" 
            style={{ fontFamily: "'Lobster', cursive", textShadow: '4px 4px 0px #dc2626, 6px 6px 10px rgba(0,0,0,0.5)' }}
          >
            Stellar
          </h1>
        </div>
        
        <p className="text-lg leading-8 text-yellow-400/90 max-w-xl mt-8 relative">
            Tu próximo gran diseño comienza aquí. Genera paletas de colores y tipografías únicas con el poder de la IA. Da vida a tus ideas en segundos.
        </p>
        
        <div className="mt-10 relative">
          <button
            onClick={() => window.location.hash = '#/generator'}
            className="rounded-lg bg-yellow-400 px-8 py-4 text-base font-bold text-slate-900 shadow-lg hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400 transition-all duration-300 transform hover:scale-105"
            style={{ boxShadow: '0 0 20px rgba(250, 204, 21, 0.5)' }}
          >
            Empezar a Crear
          </button>
        </div>

      </div>
    </div>
  );
};

export default LandingPage;