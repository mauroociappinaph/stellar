import React, { useState, useCallback, useEffect } from 'react';
import { UIDesign } from '../types';
import { generateUIDesign } from '../services/geminiService';
import GeneratorCard from './GeneratorCard';
import LoadingIndicator from './LoadingIndicator';
import DesignOptionCard from './DesignOptionCard';

const GeneratorPage: React.FC = () => {
    const [designs, setDesigns] = useState<UIDesign[] | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
  
    const handleGenerate = useCallback(async () => {
      setIsLoading(true);
      setError(null);
      setDesigns(null);
      
      try {
        const newDesigns = await generateUIDesign();
        setDesigns(newDesigns);

      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Falló la generación de sugerencias. Por favor, inténtalo de nuevo.';
        console.error(err);
        setError(errorMessage);
      } finally {
        setIsLoading(false);
      }
    }, []);
  
    useEffect(() => {
      if (designs?.length) {
        const fontFamilies = new Set<string>();
        designs.forEach(design => {
            if (design.typography) {
                fontFamilies.add(design.typography.heading.fontFamily);
                fontFamilies.add(design.typography.body.fontFamily);
            }
        });
        
        fontFamilies.forEach(fontFamily => {
          if (!fontFamily) return;
          const fontId = `font-${fontFamily.replace(/\s+/g, '-')}`;
          if (!document.getElementById(fontId)) {
            const link = document.createElement('link');
            link.id = fontId;
            link.rel = 'stylesheet';
            link.href = `https://fonts.googleapis.com/css2?family=${fontFamily.replace(/\s+/g, '+')}:wght@400;600;700;800&display=swap`;
            document.head.appendChild(link);
          }
        });
      }
    }, [designs]);

    if (isLoading) {
      return <LoadingIndicator />;
    }

    // Initial state or if generation fails
    if (!designs) {
      return (
        <div className="flex-grow flex flex-col justify-center">
            <div className="max-w-5xl mx-auto px-4 sm:px-8 w-full">
                <div className="max-w-3xl mx-auto">
                    <GeneratorCard onGenerate={handleGenerate} />
                </div>
                {error && (
                  <div className="mt-8 max-w-3xl mx-auto bg-red-500/10 border border-red-500/30 text-red-300 px-4 py-3 rounded-lg relative" role="alert">
                      <strong className="font-bold text-red-200">Error: </strong>
                      <span className="block sm:inline whitespace-pre-line">{error}</span>
                  </div>
                )}
            </div>
        </div>
      );
    }

    // Results state
    return (
        <div className="flex-grow flex flex-col justify-start pt-12 sm:pt-16 pb-16">
            <div className="max-w-3xl mx-auto px-4 sm:px-8 w-full">
                <div className="flex flex-col gap-8">
                    {designs.map((design, index) => (
                        <DesignOptionCard key={index} design={design} index={index} />
                    ))}
                </div>

                <div className="flex justify-center mt-12">
                    <button
                        onClick={handleGenerate}
                        className="rounded-lg bg-yellow-400 px-8 py-3 text-base font-bold text-slate-900 shadow-lg hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400 transition-all duration-300 transform hover:scale-105"
                        style={{ boxShadow: '0 0 20px rgba(250, 204, 21, 0.5)' }}
                    >
                        Generar Otro Diseño
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GeneratorPage;