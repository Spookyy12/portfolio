
import React from 'react';
import { Project } from '../types';
import FadeInSection from './ui/FadeInSection';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Delivery Coffee',
    category: 'E-commerce / Web App',
    imageUrl: '/portfolio/1234.png',        // ← добавил /portfolio/
    link: 'https://deliverycoffee.ru/'
  },
  {
    id: 2,
    title: 'Personal Blog',
    category: 'Development / Portfolio',
    imageUrl: '/portfolio/12345.png',       // ← добавил /portfolio/
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
    <section className="w-full h-full flex items-center justify-center bg-gray-50 px-8 md:px-24">
      <div className="max-w-4xl text-center md:text-left">
        <FadeInSection>
          <h2 className="text-4xl md:text-7xl font-bold mb-6">Selected<br />Work</h2>
          <div className="h-1 w-24 bg-black mb-8 mx-auto md:mx-0"></div>
          <p className="text-gray-500 text-lg md:text-xl max-w-md mx-auto md:mx-0">
            Projects that reflect my approach to web development and design. Scroll to explore.
          </p>
          <div className="mt-12 hidden md:flex items-center gap-4 text-sm font-medium animate-pulse">
            <span>SCROLL TO VIEW</span>
            <span>→</span>
          </div>
        </FadeInSection>
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
          className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105 opacity-90"
          loading="eager" 
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-24 text-white">
        <FadeInSection delay="0.2s">
          <div className="border-l-2 border-white pl-6 md:pl-8">
            <p className="text-sm md:text-base tracking-widest uppercase mb-2 opacity-80">{project.category}</p>
            <h3 className="text-3xl md:text-6xl font-bold mb-6">{project.title}</h3>
            
            {project.link && project.link !== '#' ? (
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm font-semibold uppercase tracking-wider hover:underline decoration-1 underline-offset-4"
              >
                View Project ↗
              </a>
            ) : (
              <span className="text-sm font-semibold uppercase tracking-wider opacity-60">
                Coming Soon
              </span>
            )}
          </div>
        </FadeInSection>
      </div>
      
      {/* Project Counter */}
      <div className="absolute top-24 right-8 md:right-24 text-white/50 font-mono text-xl md:text-2xl">
        0{index + 1} <span className="text-white/20">/ 0{total}</span>
      </div>
    </article>
  );
};
