import React from 'react';
import SparklesIcon from './icons/SparklesIcon';

interface GeneratorCardProps {
  onGenerate: () => void;
}

const GeneratorCard: React.FC<GeneratorCardProps> = ({ onGenerate }) => {
  return (
    <div 
      className="bg-slate-800/60 backdrop-blur-sm border border-white/10 rounded-xl p-8 text-center"
      style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6)' }}
    >
      <div className="flex justify-center mb-4">
        <div className="w-14 h-14 rounded-full bg-yellow-400/10 flex items-center justify-center">
          <SparklesIcon />
        </div>
      </div>
      <h2 className="text-2xl font-bold text-yellow-400 mb-2" style={{fontFamily: "'Poppins', sans-serif"}}>
        Generador de Diseño
      </h2>
      <p className="text-slate-300 max-w-md mx-auto mb-6">
        Haz clic en el botón para que la IA genere una nueva paleta de colores y tipografía para tu aplicación.
      </p>
      <button
        onClick={onGenerate}
        className="rounded-lg bg-yellow-400 px-8 py-3 text-base font-bold text-slate-900 shadow-lg hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400 transition-all duration-300 transform hover:scale-105 flex items-center justify-center mx-auto"
        style={{ boxShadow: '0 0 20px rgba(250, 204, 21, 0.5)' }}
      >
        Generar Nuevo Diseño
      </button>
    </div>
  );
};

export default GeneratorCard;
