
import React from 'react';
import FadeInSection from './ui/FadeInSection';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="w-screen h-full flex items-center justify-center px-6 md:px-24 flex-shrink-0 bg-white relative snap-start overflow-y-auto md:overflow-hidden">
      <div className="max-w-5xl w-full py-12 md:py-0">
        <div className="flex flex-col md:flex-row gap-6 md:gap-20 items-start">
          
          {/* Left Column: Stats & Intro */}
          <div className="w-full md:w-1/3 border-t-2 border-black pt-6">
             <FadeInSection>
              <h2 className="text-xs md:text-sm uppercase tracking-widest text-gray-500 font-bold mb-6">
                  {t('Profile', 'Профиль')}
              </h2>
              <ul className="space-y-4 text-sm md:text-base">
                  <li className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="text-gray-400">{t('Experience', 'Опыт')}</span>
                      <span className="font-medium">3+ {t('Years', 'Лет')}</span>
                  </li>
                  <li className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="text-gray-400">{t('Stack', 'Стек')}</span>
                      <span className="font-medium">React, WP, PHP</span>
                  </li>
                  <li className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="text-gray-400">{t('Location', 'Локация')}</span>
                      <span className="font-medium">Remote</span>
                  </li>
              </ul>
            </FadeInSection>
          </div>
          
          {/* Right Column: Narrative */}
          <div className="w-full md:w-2/3">
            <FadeInSection delay="0.2s">
              <h3 className="text-2xl md:text-4xl leading-tight font-bold mb-6 text-primary">
                {t(
                    "I help agencies and businesses ship pixel-perfect websites on time.",
                    "Помогаю агентствам и бизнесу запускать идеальные сайты точно в срок."
                )}
              </h3>
              
              <div className="text-gray-600 space-y-4 mb-8 text-sm md:text-lg leading-relaxed">
                <p>
                    {t(
                        "As a Fullstack Developer, I bridge the gap between design and functionality. Whether you need a custom WordPress theme developed from scratch or a high-performance React dashboard, I deliver clean, maintainable code.",
                        "Как Fullstack разработчик, я объединяю дизайн и функциональность. Будь то разработка кастомной темы WordPress с нуля или высокопроизводительный дашборд на React, я пишу чистый и поддерживаемый код."
                    )}
                </p>
                <p>
                    {t(
                        "I specialize in solving complex integration problems and ensuring your website scores high on Core Web Vitals.",
                        "Специализируюсь на сложных интеграциях и обеспечиваю высокие показатели Core Web Vitals для вашего сайта."
                    )}
                </p>
              </div>

              {/* Trust Signals */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-gray-50 p-4 rounded">
                      <h4 className="font-bold mb-1">Pixel Perfect</h4>
                      <p className="text-xs text-gray-500">{t('Exact match to design', 'Точное соответствие макету')}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                      <h4 className="font-bold mb-1">SEO Ready</h4>
                      <p className="text-xs text-gray-500">{t('Semantic markup', 'Семантическая верстка')}</p>
                  </div>
              </div>
              
              <button className="group relative inline-flex items-center gap-3 text-base md:text-lg font-bold text-black border-b-2 border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors">
                <span>{t('Download CV', 'Скачать резюме')}</span>
                <span className="group-hover:translate-x-1 transition-transform">↓</span>
              </button>
            </FadeInSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
