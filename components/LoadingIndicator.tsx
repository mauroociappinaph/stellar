import React from 'react';

const LoadingIndicator: React.FC = () => {
  return (
    <div className="flex-grow flex flex-col items-center justify-center text-center p-4">
      <div className="relative w-24 h-24 mb-4">
        <div className="absolute inset-0 rounded-full border-4 border-yellow-400/20"></div>
        <div 
          className="absolute inset-0 rounded-full border-t-4 border-b-4 border-yellow-400 animate-spin"
          style={{ animationDuration: '1.5s' }}
        ></div>
      </div>
      <h2 
        className="text-2xl font-bold text-yellow-400 mt-6" 
        style={{fontFamily: "'Poppins', sans-serif"}}
      >
        Creando Magia...
      </h2>
      <p className="text-slate-300 max-w-sm mt-2">
        Nuestra IA está buscando la combinación perfecta de colores y tipografía para tu próximo gran proyecto.
      </p>
    </div>
  );
};

export default LoadingIndicator;
