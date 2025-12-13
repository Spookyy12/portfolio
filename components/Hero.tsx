
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="w-screen h-full flex flex-col justify-center items-center flex-shrink-0 relative px-4 sm:px-6 bg-white snap-start overflow-hidden">
      
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-gradient-to-b from-gray-100 to-transparent opacity-50 rounded-bl-full -z-10"></div>

      <div className="max-w-7xl w-full z-10 mt-[-5vh] md:mt-0 flex flex-col items-start md:items-center">
        <h1 className="text-[12vw] md:text-[11vw] font-bold leading-[0.85] tracking-tighter text-black pointer-events-none mix-blend-darken whitespace-nowrap">
          <span className="line-mask block">
            <span className="block animate-slideUp [animation-delay:0.1s]">
              WEB
            </span>
          </span>
          <span className="line-mask block text-right w-full md:text-center">
            <span className="block animate-slideUp [animation-delay:0.2s] text-gray-500">
              DEVELOPER
            </span>
          </span>
        </h1>
        
        <div className="mt-8 md:mt-12 flex flex-col md:flex-row gap-6 items-start md:items-center w-full max-w-4xl justify-between animate-[fadeInRight_1s_ease-out_0.8s_forwards] opacity-0">
          <div className="flex flex-col gap-2">
            <p className="text-lg md:text-xl font-medium max-w-md text-gray-800">
              {t(
                "I build high-performance websites and complex integrations.",
                "Я создаю производительные сайты и сложные веб-интеграции."
              )}
            </p>
            <div className="flex gap-3 text-sm font-mono text-gray-500">
              <span className="px-2 py-1 bg-gray-100 rounded">WordPress</span>
              <span className="px-2 py-1 bg-gray-100 rounded">React</span>
              <span className="px-2 py-1 bg-gray-100 rounded">PHP</span>
            </div>
          </div>
          
          <div className="text-xs uppercase tracking-widest text-gray-400 text-right hidden md:block">
            {t("Available for projects", "Открыт к предложениям")} <br />
            Remote / Worldwide
          </div>
        </div>
      </div>

      <div className="absolute bottom-safe-pb left-6 md:bottom-12 md:left-12 flex items-center gap-3 md:gap-4 text-xs md:text-sm text-gray-500 animate-[fadeInRight_1s_ease-out_1.5s_forwards] opacity-0 z-10 pb-6 md:pb-0">
        <div className="h-[1px] w-8 md:w-12 bg-gray-300 relative overflow-hidden">
          <div className="absolute top-0 left-0 h-full w-full bg-black animate-[slideRight_2s_infinite]"></div>
        </div>
        <span className="uppercase tracking-widest text-[10px] md:text-xs">
          {t("Scroll to Explore", "Листайте вниз")}
        </span>
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
