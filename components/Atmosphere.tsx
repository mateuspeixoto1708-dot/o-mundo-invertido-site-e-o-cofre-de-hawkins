
import React from 'react';

const Atmosphere: React.FC<{ mode: 'NORMAL' | 'UPSIDE_DOWN' }> = ({ mode }) => {
  // Generate random particles
  const particles = Array.from({ length: 40 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    size: `${Math.random() * 4 + 1}px`,
    duration: `${Math.random() * 10 + 10}s`,
    delay: `${Math.random() * 20}s`,
  }));

  return (
    <div className={`fixed inset-0 pointer-events-none z-0 transition-colors duration-1000 ${mode === 'UPSIDE_DOWN' ? 'bg-[#1a1a2e]' : 'bg-black'}`}>
      {mode === 'UPSIDE_DOWN' && (
        <>
          {/* Overlay scanlines */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-30"></div>
          
          {/* Floating particles */}
          {particles.map(p => (
            <div 
              key={p.id}
              className="particle"
              style={{
                left: p.left,
                width: p.size,
                height: p.size,
                animationDuration: p.duration,
                animationDelay: p.delay,
                bottom: '-20px'
              }}
            />
          ))}
          
          {/* Vignette */}
          <div className="absolute inset-0 bg-radial-gradient(circle, transparent 40%, rgba(0,0,0,0.8) 100%)"></div>
        </>
      )}
    </div>
  );
};

export default Atmosphere;
