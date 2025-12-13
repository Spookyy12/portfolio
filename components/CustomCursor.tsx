import React, { useEffect, useState, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  
  // Use refs for smooth animation loop if needed, but state is okay for simple following
  // For ultra-smoothness, we'd use requestAnimationFrame, but let's keep it React-ish for simplicity
  // unless performance suffers.
  
  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) {
      setIsHidden(true);
      return;
    }

    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      // Check if hovering over clickable elements
      const computedStyle = window.getComputedStyle(target);
      const isClickable = 
        computedStyle.cursor === 'pointer' || 
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') !== null ||
        target.closest('button') !== null;

      setIsPointer(isClickable);
    };

    const handleMouseOut = () => setIsHidden(true);
    const handleMouseOver = () => setIsHidden(false);

    window.addEventListener('mousemove', updateCursor);
    document.body.addEventListener('mouseleave', handleMouseOut);
    document.body.addEventListener('mouseenter', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      document.body.removeEventListener('mouseleave', handleMouseOut);
      document.body.removeEventListener('mouseenter', handleMouseOver);
    };
  }, []);

  if (isHidden) return null;

  return (
    <>
      <div 
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[100] mix-blend-difference transition-transform duration-75 ease-out"
        style={{ 
          transform: `translate(${position.x - 6}px, ${position.y - 6}px) scale(${isPointer ? 0.5 : 1})` 
        }}
      />
      <div 
        className="fixed top-0 left-0 w-10 h-10 border border-white rounded-full pointer-events-none z-[100] mix-blend-difference transition-transform duration-300 ease-out"
        style={{ 
          transform: `translate(${position.x - 20}px, ${position.y - 20}px) scale(${isPointer ? 1.5 : 1})` 
        }}
      />
    </>
  );
};

export default CustomCursor;