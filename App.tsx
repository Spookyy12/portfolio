
import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import { ProjectsIntro, ProjectSlide, projects } from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Final from './components/Final';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const lastScrollTime = React.useRef(0);
  const SCROLL_COOLDOWN = 1200; // ms

  // Define our "Pages" in order
  const pageComponents = [
    <Hero key="hero" />,
    <ProjectsIntro key="projects-intro" />,
    ...projects.map((p, i) => (
      <ProjectSlide key={`project-${p.id}`} project={p} index={i} total={projects.length} />
    )),
    <About key="about" />,
    <Contact key="contact" />,
    <Final key="final" onRestart={() => { setCurrentPage(0); lastScrollTime.current = Date.now(); }} />
  ];

  const totalPages = pageComponents.length;

  const sectionIndices = {
    work: 1,
    about: 2 + projects.length, 
    contact: 3 + projects.length,
  };

  const nextPage = useCallback(() => {
    const now = Date.now();
    if (now - lastScrollTime.current < SCROLL_COOLDOWN) return;
    
    if (currentPage < totalPages - 1) {
      setCurrentPage(prev => prev + 1);
      lastScrollTime.current = now;
    }
  }, [currentPage, totalPages]);

  const prevPage = useCallback(() => {
    const now = Date.now();
    if (now - lastScrollTime.current < SCROLL_COOLDOWN) return;

    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
      lastScrollTime.current = now;
    }
  }, [currentPage]);

  // Keyboard Support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'ArrowDown') {
        e.preventDefault();
        nextPage();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        prevPage();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextPage, prevPage]);

  // Wheel Support
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      // Much lower threshold (5) means it responds to gentle scrolls
      if (Math.abs(e.deltaY) > 5) {
        if (e.deltaY > 0) {
          nextPage();
        } else {
          prevPage();
        }
      }
    };

    // Touch Support
    let touchStartX = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
    };
    
    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndX = e.changedTouches[0].clientX;
      const diff = touchStartX - touchEndX;
      
      const now = Date.now();
      if (now - lastScrollTime.current < SCROLL_COOLDOWN) return;

      if (Math.abs(diff) > 40) { // Sensitive swipe
        if (diff > 0) {
           nextPage();
        } else {
           prevPage();
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [nextPage, prevPage]);

  return (
    <div className="h-full w-full bg-gray-100 overflow-hidden relative">
      <Header 
        onNavigate={(idx) => {
          setCurrentPage(idx);
          lastScrollTime.current = Date.now();
        }} 
        sectionIndices={sectionIndices} 
      />
      
      {/* Main Book Container */}
      <main className="w-full h-full relative perspective-container">
        {pageComponents.map((component, index) => {
          const zIndex = totalPages - index;
          
          let stateClass = '';
          if (index < currentPage) stateClass = 'flipped';
          else if (index === currentPage) stateClass = 'active';
          else stateClass = 'active'; // Future pages wait in the stack

          return (
            <div 
              key={index}
              className={`book-page ${stateClass}`}
              style={{ zIndex }}
            >
              {component}
            </div>
          );
        })}
      </main>
      
      {/* Side Navigation Arrows - Larger on mobile */}
      <button 
        onClick={prevPage}
        disabled={currentPage === 0}
        className={`fixed left-0 md:left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-20 md:w-16 md:h-16 rounded-r-xl md:rounded-full border-y border-r border-white/30 bg-black/10 md:bg-transparent md:border border-white/50 mix-blend-difference text-white flex items-center justify-center hover:bg-white hover:text-black hover:border-transparent transition-all disabled:opacity-0 disabled:cursor-not-allowed cursor-pointer active:scale-95`}
        aria-label="Previous Page"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
      </button>

      <button 
        onClick={nextPage}
        disabled={currentPage === totalPages - 1}
        className={`fixed right-0 md:right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-20 md:w-16 md:h-16 rounded-l-xl md:rounded-full border-y border-l border-white/30 bg-black/10 md:bg-transparent md:border border-white/50 mix-blend-difference text-white flex items-center justify-center hover:bg-white hover:text-black hover:border-transparent transition-all disabled:opacity-0 disabled:cursor-not-allowed cursor-pointer active:scale-95`}
         aria-label="Next Page"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </button>

      {/* Progress Indicator */}
      <div className="fixed top-1/2 right-6 -translate-y-1/2 z-40 mix-blend-difference hidden lg:flex flex-col gap-3 pointer-events-none translate-x-12">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <div 
            key={idx}
            className={`w-1.5 h-1.5 rounded-full bg-white transition-all duration-500 ${idx === currentPage ? 'opacity-100 scale-150' : 'opacity-30'}`}
          />
        ))}
      </div>
      
    </div>
  );
};

export default App;
