
import React from 'react';
import FadeInSection from './ui/FadeInSection';

const About: React.FC = () => {
  return (
    <section id="about" className="w-screen h-full flex items-center justify-center px-8 md:px-24 flex-shrink-0 bg-white relative snap-start">
      <div className="max-w-4xl w-full">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
          <div className="md:w-1/3">
             <FadeInSection>
              <h2 className="text-sm uppercase tracking-widest text-gray-400 font-medium mb-4">About Me</h2>
              <div className="h-1 w-12 bg-black mb-8"></div>
            </FadeInSection>
          </div>
          
          <div className="md:w-2/3">
            <FadeInSection delay="0.2s">
              <p className="text-2xl md:text-4xl leading-tight font-medium mb-12 text-primary">
                Hi! I’m Alex Lavru - crafting digital experiences where design meets precision.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl">
                I create intuitive, engaging interfaces that transform complex challenges into simple, elegant solutions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-12 max-w-xl">
                 With React, TypeScript, and modern styling, I build websites and apps that are not just beautiful, but seamless across every device.
              </p>
              
              <button className="group relative inline-flex items-center gap-3 text-lg font-medium hover:text-gray-600 transition-colors">
                <span>Download CV</span>
                <span className="block h-[1px] w-8 bg-current group-hover:w-12 transition-all"></span>
              </button>
            </FadeInSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
