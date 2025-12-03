
import React from 'react';
import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Delivery Coffee',
    category: 'E-commerce / Web App',
    imageUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&auto=format&fit=crop',
    link: 'https://deliverycoffee.ru/'
  },
  {
    id: 2,
    title: 'Personal Blog',
    category: 'Development / Portfolio',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&auto=format&fit=crop',
    link: 'https://spookyy12.github.io/blog/#'
  },
  {
    id: 3,
    title: 'Visual Experiments',
    category: 'Creative Coding',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&auto=format&fit=crop',
    link: '#'
  }
];

export const ProjectsIntro: React.FC = () => {
  return (
    <section className="w-full h-full flex items-center justify-center bg-gray-50 px-6 md:px-24">
      <div className="max-w-4xl text-center md:text-left w-full animate-[fadeInRight_0.6s_ease-out]">
        <h2 className="text-4xl md:text-7xl font-bold mb-4 md:mb-6">Selected<br />Work</h2>
        <div className="h-1 w-16 md:w-24 bg-black mb-6 md:mb-8 mx-auto md:mx-0"></div>
        <p className="text-gray-500 text-base md:text-xl max-w-xs md:max-w-md mx-auto md:mx-0 leading-relaxed">
          Projects that reflect my approach to web development and design. Scroll to explore.
        </p>
        <div className="mt-8 md:mt-12 hidden md:flex items-center gap-4 text-sm font-medium animate-pulse">
          <span>SCROLL TO VIEW</span>
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
  // Construct srcset for responsive loading
  // Mobile (600w), Tablet (1200w), Desktop (original/1920w)
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
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105 opacity-80 md:opacity-90"
          loading="eager" 
        />
        {/* Overlay - Darker on mobile for better text readability */}
        <div className="absolute inset-0 bg-black/50 md:bg-black/40 group-hover:bg-black/30 transition-colors duration-500" />
      </div>

      {/* Content - Increased bottom padding for mobile (pb-32) to clear browser bars */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 pb-32 md:p-24 md:pb-24 text-white pointer-events-none">
        <div className="border-l-2 border-white pl-4 md:pl-8 pointer-events-auto animate-[fadeInRight_0.8s_ease-out]">
          <p className="text-xs md:text-base tracking-widest uppercase mb-2 opacity-80">{project.category}</p>
          <h3 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight">{project.title}</h3>
          
          {project.link && project.link !== '#' ? (
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xs md:text-sm font-semibold uppercase tracking-wider hover:bg-white hover:text-black hover:border-transparent transition-colors py-2 px-4 border border-white/50 rounded"
            >
              View Project ↗
            </a>
          ) : (
            <span className="text-xs md:text-sm font-semibold uppercase tracking-wider opacity-60">
              Coming Soon
            </span>
          )}
        </div>
      </div>
      
      {/* Project Counter */}
      <div className="absolute top-24 md:top-24 right-6 md:right-24 text-white/50 font-mono text-lg md:text-2xl">
        0{index + 1} <span className="text-white/20">/ 0{total}</span>
      </div>
    </article>
  );
};
