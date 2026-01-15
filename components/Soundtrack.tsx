
import React, { useState } from 'react';

const TRACKS = [
  { id: 1, title: "Running Up That Hill", artist: "Kate Bush", scene: "Max's escape from Vecna", duration: "4:58" },
  { id: 2, title: "Should I Stay or Should I Go", artist: "The Clash", scene: "Will in the Upside Down", duration: "3:08" },
  { id: 3, title: "Master of Puppets", artist: "Metallica", scene: "Eddie's final performance", duration: "8:35" },
  { id: 4, title: "Neverending Story", artist: "Limahl", scene: "Dustin & Suzie's duet", duration: "3:30" },
  { id: 5, title: "Material Girl", artist: "Madonna", scene: "The Mall shopping spree", duration: "4:00" },
  { id: 6, title: "Every Breath You Take", artist: "The Police", scene: "The Snow Ball dance", duration: "4:13" },
  { id: 7, title: "Hazy Shade of Winter", artist: "The Bangles", scene: "Season 1 Credits", duration: "2:47" },
  { id: 8, title: "Pass the Dutchie", artist: "Musical Youth", scene: "The Surfer Boy Pizza van", duration: "3:22" }
];

const Soundtrack: React.FC = () => {
  const [currentTrack, setCurrentTrack] = useState(TRACKS[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="max-w-4xl mx-auto py-12">
      <div className="bg-[#1a1a1a] rounded-3xl p-8 border-t-8 border-zinc-800 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
        {/* Cassette Tape Visual */}
        <div className="mb-12 relative">
          <div className="w-full h-64 bg-zinc-900 rounded-xl border-4 border-zinc-800 p-8 flex flex-col justify-between relative overflow-hidden">
            {/* Cassette Texture */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,_#fff_1px,_transparent_1px)] bg-[size:20px_20px]"></div>
            
            <div className="bg-red-700 h-16 rounded flex items-center px-6 justify-between relative z-10 border-b-4 border-red-900">
               <span className="text-white font-mono text-xs uppercase tracking-widest">Mix Tape #1984</span>
               <span className="text-white font-mono text-xs uppercase">Side A</span>
            </div>
            
            <div className="flex justify-around items-center my-4 relative z-10">
              <div className={`w-24 h-24 rounded-full bg-zinc-800 border-8 border-zinc-700 flex items-center justify-center ${isPlaying ? 'animate-spin-slow' : ''}`}>
                 <div className="w-8 h-8 rounded-full bg-zinc-900"></div>
              </div>
              <div className="w-48 h-12 bg-zinc-800/50 rounded-full border-4 border-zinc-700 overflow-hidden flex items-center px-4">
                 <div className="w-full h-1 bg-zinc-700 rounded-full overflow-hidden">
                   <div className={`h-full bg-red-600 ${isPlaying ? 'w-2/3' : 'w-0'} transition-all duration-1000`}></div>
                 </div>
              </div>
              <div className={`w-24 h-24 rounded-full bg-zinc-800 border-8 border-zinc-700 flex items-center justify-center ${isPlaying ? 'animate-spin-slow' : ''}`}>
                 <div className="w-8 h-8 rounded-full bg-zinc-900"></div>
              </div>
            </div>

            <div className="bg-zinc-800 h-12 rounded flex items-center px-6 relative z-10">
               <span className="text-zinc-400 font-mono text-sm italic overflow-hidden whitespace-nowrap">
                 NOW PLAYING: {currentTrack.title} - {currentTrack.artist}
               </span>
            </div>
          </div>
        </div>

        {/* Player Controls */}
        <div className="flex justify-center gap-4 mb-12">
          {['REW', 'PLAY', 'PAUSE', 'STOP', 'FF'].map(btn => (
            <button
              key={btn}
              onClick={() => {
                if (btn === 'PLAY') setIsPlaying(true);
                if (btn === 'PAUSE' || btn === 'STOP') setIsPlaying(false);
              }}
              className={`px-6 py-4 rounded-lg font-mono text-sm font-bold border-b-4 transition-all active:translate-y-1 active:border-b-0
                ${btn === 'PLAY' && isPlaying ? 'bg-green-700 border-green-900 text-white' : 
                  btn === 'STOP' ? 'bg-zinc-800 border-zinc-900 text-zinc-500' : 'bg-zinc-700 border-zinc-900 text-white hover:bg-zinc-600'}`}
            >
              {btn}
            </button>
          ))}
        </div>

        {/* Track List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {TRACKS.map(track => (
            <button
              key={track.id}
              onClick={() => { setCurrentTrack(track); setIsPlaying(true); }}
              className={`p-4 rounded-xl border-2 text-left flex justify-between items-center transition-all
                ${currentTrack.id === track.id ? 'bg-red-900/20 border-red-600 shadow-lg' : 'bg-zinc-900/50 border-zinc-800 hover:border-zinc-700'}`}
            >
              <div>
                <div className="text-white font-bold">{track.title}</div>
                <div className="text-zinc-500 text-xs uppercase">{track.artist}</div>
                <div className="text-red-500/60 text-[10px] italic mt-1">{track.scene}</div>
              </div>
              <div className="text-zinc-600 font-mono text-xs">{track.duration}</div>
            </button>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Soundtrack;
