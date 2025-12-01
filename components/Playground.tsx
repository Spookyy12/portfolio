
import React, { useEffect, useRef } from 'react';

const Playground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    
    interface Shape {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      type: 'circle' | 'square' | 'triangle';
      rotation: number;
      vRotation: number;
    }

    const shapes: Shape[] = [];
    const colors = ['#1a1a1a', '#d4bbb0', '#666666', '#e0e0e0', '#ff6b6b', '#4ecdc4'];

    const createShape = (x: number, y: number) => {
        const types: ('circle' | 'square' | 'triangle')[] = ['circle', 'square', 'triangle'];
        return {
            x,
            y,
            vx: (Math.random() - 0.5) * 25,
            vy: (Math.random() - 0.5) * 25,
            size: Math.random() * 30 + 15,
            color: colors[Math.floor(Math.random() * colors.length)],
            type: types[Math.floor(Math.random() * types.length)],
            rotation: Math.random() * Math.PI * 2,
            vRotation: (Math.random() - 0.5) * 0.3
        };
    };

    const update = () => {
        ctx.clearRect(0, 0, width, height);
        
        shapes.forEach(shape => {
            // Physics
            shape.x += shape.vx;
            shape.y += shape.vy;
            shape.rotation += shape.vRotation;
            
            // Gravity
            shape.vy += 0.8;
            // Friction
            shape.vx *= 0.98;
            shape.vy *= 0.98;

            // Walls
            if (shape.x + shape.size > width) {
                shape.x = width - shape.size;
                shape.vx *= -0.7;
            } else if (shape.x - shape.size < 0) {
                shape.x = shape.size;
                shape.vx *= -0.7;
            }

            if (shape.y + shape.size > height) {
                shape.y = height - shape.size;
                shape.vy *= -0.6; // less bounce on floor
            } else if (shape.y - shape.size < 0) {
                shape.y = shape.size;
                shape.vy *= -0.8;
            }

            // Draw
            ctx.save();
            ctx.translate(shape.x, shape.y);
            ctx.rotate(shape.rotation);
            ctx.fillStyle = shape.color;
            ctx.beginPath();

            if (shape.type === 'circle') {
                ctx.arc(0, 0, shape.size, 0, Math.PI * 2);
            } else if (shape.type === 'square') {
                ctx.rect(-shape.size, -shape.size, shape.size * 2, shape.size * 2);
            } else if (shape.type === 'triangle') {
                ctx.moveTo(0, -shape.size);
                ctx.lineTo(shape.size, shape.size);
                ctx.lineTo(-shape.size, shape.size);
                ctx.closePath();
            }
            
            ctx.fill();
            ctx.restore();
        });

        // Remove stopped/old shapes to keep performance high
        if (shapes.length > 80) shapes.shift();

        requestAnimationFrame(update);
    };

    const handleResize = () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    };

    const handleInteraction = (e: MouseEvent | TouchEvent) => {
        let x, y;
        if ('touches' in e) {
            x = e.touches[0].clientX;
            y = e.touches[0].clientY;
        } else {
            x = (e as MouseEvent).clientX;
            y = (e as MouseEvent).clientY;
        }
        
        // Burst of shapes
        for(let i=0; i<3; i++) {
            shapes.push(createShape(x, y));
        }
    };

    window.addEventListener('resize', handleResize);
    // Use the canvas directly for events
    canvas.addEventListener('mousedown', handleInteraction);
    canvas.addEventListener('touchstart', handleInteraction);
    
    update();

    return () => {
        window.removeEventListener('resize', handleResize);
        canvas.removeEventListener('mousedown', handleInteraction);
        canvas.removeEventListener('touchstart', handleInteraction);
    };
  }, []);

  return (
    <section id="playground" className="w-screen h-full bg-white relative snap-start overflow-hidden cursor-crosshair">
       <canvas ref={canvasRef} className="absolute inset-0 block touch-none" />
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none select-none opacity-20 mix-blend-multiply">
         <h2 className="text-6xl md:text-9xl font-bold mb-4 tracking-tighter">PLAY</h2>
         <p className="text-xl md:text-2xl font-mono">Tap & Click</p>
       </div>
    </section>
  );
};

export default Playground;
