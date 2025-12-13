
import React from 'react';
import FadeInSection from './ui/FadeInSection';
import { useLanguage } from '../contexts/LanguageContext';
import { Service } from '../types';

const servicesList: Service[] = [
  {
    id: 1,
    title: { en: 'WordPress Development', ru: 'WordPress Разработка' },
    description: { 
      en: 'Custom theme development, ACF Pro flexible layouts, and WooCommerce stores. Pixel-perfect Figma to WP conversion.',
      ru: 'Разработка кастомных тем, гибкие блоки на ACF Pro и магазины на WooCommerce. Идеальная верстка из Figma в WP.'
    },
    tags: ['Custom Themes', 'ACF Pro', 'WooCommerce', 'Speed Optimization']
  },
  {
    id: 2,
    title: { en: 'Frontend (React)', ru: 'Frontend (React)' },
    description: { 
      en: 'Building fast, interactive Single Page Applications (SPA) with React, Next.js, and Tailwind CSS. Complex animations and responsive UI.',
      ru: 'Создание быстрых SPA приложений на React, Next.js и Tailwind CSS. Сложные анимации и адаптивные интерфейсы.'
    },
    tags: ['React', 'Next.js', 'TypeScript', 'GSAP/Framer']
  },
  {
    id: 3,
    title: { en: 'Fullstack Solutions', ru: 'Fullstack Решения' },
    description: { 
      en: 'Connecting frontends to backends. PHP script development, API integrations, and database management.',
      ru: 'Связка фронтенда с бэкендом. Разработка скриптов на PHP, интеграция API и работа с базами данных.'
    },
    tags: ['PHP', 'MySQL', 'REST API', 'Node.js']
  }
];

const Services: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="w-screen h-full flex items-center justify-center bg-gray-50 px-6 md:px-24 flex-shrink-0 snap-start overflow-y-auto">
      <div className="max-w-6xl w-full py-20 md:py-0">
        <FadeInSection>
          <div className="mb-12 md:mb-16 border-b border-gray-200 pb-6 flex justify-between items-end">
             <div>
                <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-2">{t('What I Do', 'Мои Услуги')}</h2>
                <h3 className="text-3xl md:text-5xl font-bold text-primary">{t('Technical Services', 'Компетенции')}</h3>
             </div>
             <div className="hidden md:block text-right text-xs text-gray-400">
               {t('Focus on quality & speed', 'Фокус на качестве и скорости')}
             </div>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {servicesList.map((service, idx) => (
            <FadeInSection key={service.id} delay={`${idx * 0.15}s`} className="h-full">
              <div className="bg-white p-8 h-full border border-gray-100 hover:border-gray-300 transition-colors duration-300 shadow-sm hover:shadow-md flex flex-col">
                <div className="text-3xl font-light text-gray-200 mb-6">0{service.id}</div>
                <h4 className="text-xl font-bold mb-4">{t(service.title.en, service.title.ru)}</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                  {t(service.description.en, service.description.ru)}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {service.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider bg-gray-100 px-2 py-1 text-gray-500 rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
