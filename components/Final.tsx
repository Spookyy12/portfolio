
import React from 'react';
import FadeInSection from './ui/FadeInSection';

interface FinalProps {
  onRestart: () => void;
}

const Final: React.FC<FinalProps> = ({ onRestart }) => {
  return (
    <section className="w-screen h-full flex flex-col items-center justify-center bg-white text-primary px-8 snap-start relative">
      <FadeInSection>
        <h2 className="text-4xl md:text-8xl font-bold mb-8 tracking-tighter text-center">
          Thank You
        </h2>
        <div className="h-1 w-24 bg-black mx-auto mb-12"></div>
      </FadeInSection>
      
      <FadeInSection delay="0.2s">
        <button 
          onClick={onRestart}
          className="group relative inline-flex items-center gap-3 text-lg md:text-xl font-medium hover:text-gray-600 transition-colors py-4 px-8 border border-black/10 rounded-full hover:bg-gray-50 hover:border-black/30 transition-all duration-300"
        >
          <span>Back to Top</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="w-5 h-5 group-hover:-translate-y-1 transition-transform"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
          </svg>
        </button>
      </FadeInSection>

      <div className="absolute bottom-12 text-sm text-gray-400 uppercase tracking-widest">
        Alex Lavru Portfolio
      </div>
    </section>
  );
};

export default Final;
