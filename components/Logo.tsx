
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 select-none pointer-events-none">
      <div className="relative border-t-4 border-b-4 border-red-700 px-8 py-2 md:px-16 md:py-4">
        {/* Top borders decoration */}
        <div className="absolute -top-1 -left-1 w-4 h-4 border-t-4 border-l-4 border-red-700"></div>
        <div className="absolute -top-1 -right-1 w-4 h-4 border-t-4 border-r-4 border-red-700"></div>
        
        <h1 className="benguiat-style text-4xl md:text-7xl leading-none text-center tracking-tighter">
          Hawkins<br />
          <span className="text-5xl md:text-8xl block mt-2">Vault</span>
        </h1>

        {/* Bottom borders decoration */}
        <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-4 border-l-4 border-red-700"></div>
        <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-4 border-r-4 border-red-700"></div>
      </div>
    </div>
  );
};

export default Logo;
