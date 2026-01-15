
import React, { useState, useEffect } from 'react';

const ALPHABET = [
  ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
  ['I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q'],
  ['R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
];

const COLORS = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ffffff'];

const LightWall: React.FC = () => {
  const [activeLetter, setActiveLetter] = useState<string | null>(null);
  const [message, setMessage] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);

  const playMessage = async () => {
    if (isPlaying || !message) return;
    setIsPlaying(true);
    const chars = message.toUpperCase().split('').filter(c => /[A-Z]/.test(c));
    
    for (const char of chars) {
      setActiveLetter(char);
      await new Promise(resolve => setTimeout(resolve, 800));
      setActiveLetter(null);
      await new Promise(resolve => setTimeout(resolve, 300));
    }
    setIsPlaying(false);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-8 rounded-lg bg-zinc-900/50 border border-zinc-800 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-yellow-400 to-blue-600 opacity-50"></div>
      
      <h2 className="text-xl font-bold mb-8 text-center uppercase tracking-widest text-zinc-400">Joyce's Communication Link</h2>
      
      <div className="space-y-12 mb-12">
        {ALPHABET.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-wrap justify-center gap-6 md:gap-12">
            {row.map((letter, index) => {
              const isActive = activeLetter === letter;
              const color = COLORS[(letter.charCodeAt(0)) % COLORS.length];
              return (
                <div key={letter} className="relative flex flex-col items-center">
                  <div 
                    className={`w-4 h-6 rounded-full transition-all duration-300 ${isActive ? 'scale-150' : 'opacity-40'}`}
                    style={{ 
                      backgroundColor: color,
                      boxShadow: isActive ? `0 0 20px 5px ${color}` : 'none'
                    }}
                  />
                  <span className={`mt-2 font-handwritten text-3xl md:text-5xl select-none ${isActive ? 'text-white' : 'text-zinc-600'}`} style={{ fontFamily: '"EB Garamond", serif' }}>
                    {letter}
                  </span>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
        <input 
          type="text" 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message to the other side..."
          disabled={isPlaying}
          className="bg-black border border-zinc-700 p-3 rounded-md w-full md:w-64 focus:border-red-600 outline-none transition-colors text-white"
        />
        <button 
          onClick={playMessage}
          disabled={isPlaying || !message}
          className="bg-red-700 hover:bg-red-600 disabled:bg-zinc-800 disabled:cursor-not-allowed px-8 py-3 rounded-md font-bold uppercase tracking-widest transition-all"
        >
          {isPlaying ? 'Receiving...' : 'Broadcast'}
        </button>
      </div>
    </div>
  );
};

export default LightWall;
