
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="w-screen h-full flex flex-col justify-center items-center flex-shrink-0 relative px-4 sm:px-6 bg-white snap-start overflow-hidden">
      
      <div className="max-w-5xl w-full text-center z-10 mt-[-10vh] md:mt-0">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight pointer-events-none">
          <span className="line-mask mb-2 sm:mb-4">
            <span className="block animate-slideUp [animation-delay:0.1s]">
              Modern web,
            </span>
          </span>
          <span className="line-mask mb-2 sm:mb-4">
            <span className="block animate-slideUp [animation-delay:0.2s]">
              written with
            </span>
          </span>
          <span className="line-mask">
            <span className="block animate-slideUp [animation-delay:0.3s] text-gray-400">
              precision.
            </span>
          </span>
        </h1>
      </div>

      <div className="absolute bottom-safe-pb right-6 md:bottom-12 md:right-12 flex items-center gap-3 md:gap-4 text-xs md:text-sm text-gray-500 animate-[fadeInRight_1s_ease-out_1.5s_forwards] opacity-0 z-10 pb-6 md:pb-0">
        <span className="uppercase tracking-widest text-[10px] md:text-xs">Scroll</span>
        <div className="h-[1px] w-8 md:w-12 bg-gray-300 relative overflow-hidden">
          <div className="absolute top-0 left-0 h-full w-full bg-black animate-[slideRight_2s_infinite]"></div>
        </div>
      </div>
      
      <style>{`
        @keyframes slideRight {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .bottom-safe-pb {
          bottom: env(safe-area-inset-bottom, 24px);
        }
      `}</style>
    </section>
  );
};

export default Hero;
