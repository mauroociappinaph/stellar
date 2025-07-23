import React, { useState } from 'react';
import { UIDesign } from '../types';
import DownloadIcon from './icons/DownloadIcon';
import CheckIcon from './icons/CheckIcon';
import CopyIcon from './icons/CopyIcon';


interface DesignOptionCardProps {
  design: UIDesign;
  index: number;
}

const DesignOptionCard: React.FC<DesignOptionCardProps> = ({ design, index }) => {
  const { colors, typography } = design;
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const handleCopy = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  const handleDownload = () => {
    const { colors, typography } = design;

    const downloadableDesign = {
      colors: Object.fromEntries(
        Object.entries(colors).map(([key, { hex, usage }]) => [
          key,
          { value: hex, comment: usage },
        ])
      ),
      typography: {
        heading: {
          value: typography.heading.fontFamily,
          comment: 'Font for headings',
        },
        body: {
          value: typography.body.fontFamily,
          comment: 'Font for body text',
        },
      },
    };

    const jsonString = JSON.stringify(downloadableDesign, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `stellar-design-option-${index + 1}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const colorItems = [
    { name: 'Primario', ...colors.primary },
    { name: 'Secundario', ...colors.secondary },
    { name: 'Acento', ...colors.accent },
    { name: 'Fondo', ...colors.background },
    { name: 'Texto', ...colors.text },
  ];
  
  const headingStyle: React.CSSProperties = { fontFamily: `'${typography.heading.fontFamily}', sans-serif` };
  const bodyStyle: React.CSSProperties = { fontFamily: `'${typography.body.fontFamily}', sans-serif` };

  return (
    <div className="bg-slate-800/70 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl p-6 md:p-8 flex flex-col gap-8">
      {/* Card Header */}
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold text-yellow-400" style={{ fontFamily: "'Poppins', sans-serif" }}>
          Opción {index + 1}
        </h3>
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 text-sm text-slate-300 hover:text-yellow-400 transition-colors duration-200 bg-slate-700/50 hover:bg-slate-700 border border-slate-600 px-3 py-1.5 rounded-lg"
          aria-label="Descargar diseño como JSON"
        >
          <DownloadIcon />
          <span className="hidden sm:inline">Descargar</span>
        </button>
      </div>
      
      {/* Color Palette Section */}
      <div>
        <h4 className="text-sm font-semibold text-slate-300 mb-4" style={{fontFamily: "'Poppins', sans-serif"}}>Paleta de Colores</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-4 gap-y-6">
          {colorItems.map((color) => (
            <div key={color.name}>
              <button
                  onClick={() => handleCopy(color.hex)}
                  className="relative group w-full h-20 rounded-lg shadow-inner border border-slate-200/20 transition-transform duration-200 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-yellow-500 flex items-center justify-center"
                  style={{ backgroundColor: color.hex }}
                  aria-label={`Copiar color ${color.name}: ${color.hex}`}
              >
                <span className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity duration-300 rounded-lg">
                  {copiedHex === color.hex ? 
                    <CheckIcon className="h-7 w-7 text-white" /> : 
                    <CopyIcon className="h-6 w-6 text-white/80" />
                  }
                </span>
              </button>
              <div className="mt-2 text-left">
                <p className="text-sm font-semibold text-slate-100 truncate" title={color.name}>{color.name}</p>
                <p 
                  className="text-xs text-slate-400 font-mono cursor-pointer hover:text-white transition-colors"
                  onClick={() => handleCopy(color.hex)}
                  title={`Copiar ${color.hex}`}
                >
                  {copiedHex === color.hex ? '¡Copiado!' : color.hex.toUpperCase()}
                </p>
                {color.usage && (
                  <p className="text-xs text-slate-300 mt-1" title={color.usage}>{color.usage}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Typography Section */}
      <div className="border-t border-white/10 pt-6">
        <h4 className="text-sm font-semibold text-slate-300 mb-4" style={{fontFamily: "'Poppins', sans-serif"}}>Tipografía</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-slate-400">Encabezado</p>
            <p className="text-3xl font-bold text-slate-100 truncate" style={headingStyle} title={typography.heading.fontFamily}>
              {typography.heading.fontFamily}
            </p>
          </div>
          <div className="sm:text-right">
            <p className="text-xs text-slate-400">Cuerpo</p>
            <p className="text-lg text-slate-200" style={bodyStyle} title={typography.body.fontFamily}>
              {typography.body.fontFamily}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignOptionCard;