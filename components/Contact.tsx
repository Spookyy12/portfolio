
import React from 'react';
import FadeInSection from './ui/FadeInSection';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="w-screen h-full flex items-center justify-center px-4 md:px-24 flex-shrink-0 bg-black text-white snap-start relative overflow-hidden">
      
      {/* Animated Aurora Background */}
      <div className="absolute inset-0 z-0 opacity-60">
        <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] animate-aurora bg-[conic-gradient(from_0deg,transparent_0deg,#1a1a1a_100deg,#2e1065_180deg,#0f172a_260deg,transparent_360deg)] filter blur-[80px]"></div>
        <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] animate-aurora-reverse bg-[conic-gradient(from_180deg,transparent_0deg,#312e81_100deg,#4c1d95_180deg,#1e1b4b_260deg,transparent_360deg)] filter blur-[100px] mix-blend-screen"></div>
      </div>

      <div className="max-w-4xl w-full text-center relative z-10">
        <FadeInSection>
          <h2 className="text-xs md:text-sm uppercase tracking-widest text-gray-400 mb-6 md:mb-8">Contact</h2>
          <h3 className="text-2xl md:text-5xl font-light mb-8 md:mb-16">Let's work together</h3>
        </FadeInSection>

        <FadeInSection delay="0.1s">
          <a
            href="mailto:alexlavru60@mail.com"
            className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight hover:text-indigo-300 transition-colors duration-300 block mb-12 md:mb-24 break-all md:break-words px-2"
          >
            alexlavru60@mail.com
          </a>
        </FadeInSection>
        
        {/* Footer Info Merged */}
        <FadeInSection delay="0.2s">
            <div className="flex flex-col items-center gap-4 md:gap-6 mt-8 md:mt-12">
                <div className="h-[1px] w-16 md:w-24 bg-white/20"></div>
                <div className="text-[10px] md:text-xs tracking-widest uppercase text-white/40">
                © {new Date().getFullYear()} Alex Lavru. All rights reserved.
                </div>
            </div>
        </FadeInSection>
      </div>

      <style>{`
        @keyframes aurora {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes aurora-reverse {
          0% { transform: rotate(360deg); }
          100% { transform: rotate(0deg); }
        }
        .animate-aurora {
          animation: aurora 20s linear infinite;
        }
        .animate-aurora-reverse {
          animation: aurora-reverse 25s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Contact;
