
import React from 'react';
import FadeInSection from './ui/FadeInSection';

interface FinalProps {
  onRestart: () => void;
}

const Final: React.FC<FinalProps> = ({ onRestart }) => {
  return (
    <section className="w-screen h-full flex flex-col items-center justify-center text-white px-8 snap-start relative overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1492571350019-22de08371fd3?q=80&auto=format&fit=crop" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 text-center w-full max-w-4xl">
        <FadeInSection>
          <h2 className="text-4xl md:text-8xl font-bold mb-8 tracking-tighter">
            Thank You
          </h2>
          <div className="h-1 w-24 bg-white mx-auto mb-12"></div>
        </FadeInSection>
        
        <FadeInSection delay="0.2s">
          <button 
            onClick={onRestart}
            className="group relative inline-flex items-center gap-3 text-lg md:text-xl font-medium text-white hover:text-gray-200 transition-colors py-4 px-8 border border-white/30 rounded-full hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm"
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

        <div className="absolute bottom-[-20vh] left-0 right-0 text-center text-xs md:text-sm text-white/40 uppercase tracking-widest">
          Alex Lavru Portfolio
        </div>
      </div>
    </section>
  );
};

export default Final;
