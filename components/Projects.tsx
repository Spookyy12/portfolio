
import React from 'react';
import { Project } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

export const projects: Project[] = [
  {
    id: 1,
    title: { en: 'E-commerce Coffee Shop', ru: 'Интернет-магазин Кофе' },
    category: 'WordPress / WooCommerce',
    tech: ['WordPress', 'WooCommerce', 'Custom Theme', 'PHP'],
    imageUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&auto=format&fit=crop',
    link: 'https://deliverycoffee.ru/',
    description: {
        en: 'A fully custom WooCommerce theme built for high conversion. Implemented custom checkout fields and payment gateway integration.',
        ru: 'Полностью кастомная тема WooCommerce. Реализованы нестандартные поля чекаута и интеграция платежного шлюза.'
    }
  },
  {
    id: 2,
    title: { en: 'Personal Dev Blog', ru: 'Блог Разработчика' },
    category: 'Frontend / React',
    tech: ['React', 'GitHub Pages', 'Markdown', 'CSS Modules'],
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&auto=format&fit=crop',
    link: 'https://spookyy12.github.io/blog/#',
    description: {
        en: 'A fast, static blog generated with React. Features dark mode, category filtering, and optimized performance scores.',
        ru: 'Быстрый статический блог на React. Темная тема, фильтрация по категориям и высокая производительность.'
    }
  },
  {
    id: 3,
    title: { en: 'Corporate Dashboard', ru: 'Корпоративный Дашборд' },
    category: 'Fullstack / Tooling',
    tech: ['PHP', 'MySQL', 'JavaScript', 'Chart.js'],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&auto=format&fit=crop',
    link: '#',
    description: {
        en: 'Internal tooling for data visualization. Custom PHP backend handling complex SQL queries served to a JS frontend.',
        ru: 'Внутренний инструмент для визуализации данных. Кастомный PHP бэкенд для сложных SQL запросов.'
    }
  }
];

export const ProjectsIntro: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section className="w-full h-full flex items-center justify-center bg-gray-900 text-white px-6 md:px-24">
      <div className="max-w-4xl text-center md:text-left w-full md:animate-[fadeInRight_0.6s_ease-out]">
        <h2 className="text-4xl md:text-7xl font-bold mb-4 md:mb-6 leading-tight">
          {t('Selected', 'Избранные')} <br /> 
          <span className="text-gray-500">{t('Works', 'Проекты')}</span>
        </h2>
        <div className="h-1 w-16 md:w-24 bg-white mb-6 md:mb-8 mx-auto md:mx-0"></div>
        <p className="text-gray-400 text-base md:text-xl max-w-xs md:max-w-md mx-auto md:mx-0 leading-relaxed">
          {t(
            'Real-world applications focusing on business logic, performance, and clean code.',
            'Реальные приложения с упором на бизнес-логику, производительность и чистый код.'
          )}
        </p>
        <div className="mt-8 md:mt-12 hidden md:flex items-center gap-4 text-sm font-medium animate-pulse text-white/60">
          <span>{t('SCROLL TO VIEW', 'ЛИСТАЙТЕ ДЛЯ ПРОСМОТРА')}</span>
          <span>→</span>
        </div>
      </div>
    </section>
  );
};

interface ProjectSlideProps {
  project: Project;
  index: number;
  total: number;
}

export const ProjectSlide: React.FC<ProjectSlideProps> = ({ project, index, total }) => {
  const { t } = useLanguage();
  
  const srcSet = `
    ${project.imageUrl}&w=600 600w,
    ${project.imageUrl}&w=1200 1200w,
    ${project.imageUrl}&w=1920 1920w
  `;

  return (
    <article className="w-full h-full relative group overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-gray-900">
         <img
          src={`${project.imageUrl}&w=1920`}
          srcSet={srcSet}
          sizes="(max-width: 768px) 100vw, 100vw"
          alt={t(project.title.en, project.title.ru)}
          className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105 opacity-40 md:opacity-30"
          loading="lazy" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 pb-24 md:p-24 md:pb-24 text-white pointer-events-none">
        <div className="border-l-2 border-accent pl-4 md:pl-8 pointer-events-auto md:animate-[fadeInRight_0.8s_ease-out]">
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map(tag => (
                <span key={tag} className="text-[10px] md:text-xs font-mono bg-white/10 px-2 py-1 rounded text-accent backdrop-blur-sm">
                    {tag}
                </span>
            ))}
          </div>

          <h3 className="text-3xl md:text-6xl font-bold mb-4 leading-tight">{t(project.title.en, project.title.ru)}</h3>
          
          <p className="text-gray-300 max-w-xl text-sm md:text-lg mb-8 leading-relaxed">
            {t(project.description.en, project.description.ru)}
          </p>

          {project.link && project.link !== '#' ? (
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider bg-white text-black hover:bg-accent hover:text-white transition-colors py-3 px-6 rounded"
            >
              {t('Visit Site', 'Смотреть сайт')} ↗
            </a>
          ) : (
            <span className="text-sm font-semibold uppercase tracking-wider opacity-60">
              {t('Internal Project', 'Внутренний проект')}
            </span>
          )}
        </div>
      </div>
      
      {/* Project Counter */}
      <div className="absolute top-8 right-6 md:top-24 md:right-24 text-white/50 font-mono text-lg md:text-2xl z-20">
        0{index + 1} <span className="text-white/20">/ 0{total}</span>
      </div>
    </article>
  );
};
