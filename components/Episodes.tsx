
import React, { useState } from 'react';

const SEASONS = [
  { id: 1, title: "Season 1", year: "1983", description: "O desaparecimento de Will Byers desencadeia uma série de eventos sobrenaturais." },
  { id: 2, title: "Season 2", year: "1984", description: "Um ano depois, Hawkins enfrenta uma ameaça ainda maior vinda do Mundo Invertido." },
  { id: 3, title: "Season 3", year: "1985", description: "Verão em Hawkins. Um novo shopping e experimentos soviéticos secretos." },
  { id: 4, title: "Season 4", year: "1986", description: "A separação do grupo e a chegada do vilão mais mortal: Vecna." }
];

const Episodes: React.FC = () => {
  const [selectedSeason, setSelectedSeason] = useState(1);

  return (
    <div className="w-full max-w-6xl mx-auto py-12">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Sidebar Seasons */}
        <div className="w-full md:w-1/3 space-y-4">
          <h2 className="text-xl font-mono text-zinc-500 mb-6 uppercase tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-600"></span>
            Hawkins Video Library
          </h2>
          {SEASONS.map(s => (
            <button
              key={s.id}
              onClick={() => setSelectedSeason(s.id)}
              className={`w-full text-left p-6 rounded-lg border-2 transition-all group relative overflow-hidden
                ${selectedSeason === s.id ? 'bg-red-900/10 border-red-700' : 'bg-zinc-900/50 border-zinc-800 grayscale hover:grayscale-0'}`}
            >
              <div className="relative z-10">
                <div className={`text-xs font-mono mb-1 ${selectedSeason === s.id ? 'text-red-500' : 'text-zinc-500'}`}>{s.year}</div>
                <div className="text-2xl font-bold text-white uppercase tracking-tighter">{s.title}</div>
              </div>
              {/* VHS Tape visual detail */}
              <div className="absolute right-[-10px] top-1/2 -translate-y-1/2 opacity-10 group-hover:opacity-30 transition-opacity">
                <svg width="100" height="40" viewBox="0 0 100 40" fill="white"><rect width="100" height="40" rx="4"/></svg>
              </div>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="w-full md:w-2/3 bg-zinc-900/30 p-8 rounded-2xl border border-zinc-800/50 backdrop-blur-sm">
          <div className="mb-12">
            <h3 className="text-4xl font-bold text-white mb-4 uppercase tracking-tighter">
              {SEASONS.find(s => s.id === selectedSeason)?.title}
            </h3>
            <p className="text-zinc-400 font-serif text-lg italic leading-relaxed">
              "{SEASONS.find(s => s.id === selectedSeason)?.description}"
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="aspect-video w-full bg-black rounded-xl overflow-hidden relative group cursor-pointer border-4 border-zinc-800 hover:border-red-600 transition-colors">
              <img 
                src={`https://picsum.photos/seed/stranger-s${selectedSeason}/1280/720`} 
                alt="Trailer" 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" 
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-red-600/90 rounded-full flex items-center justify-center pl-2 shadow-2xl group-hover:scale-110 transition-transform">
                   <svg width="30" height="30" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                <div className="bg-black/80 px-4 py-2 rounded font-mono text-xs text-red-500">PLAYBACK - 00:00:19:84</div>
                <div className="bg-red-600 text-white px-3 py-1 text-xs font-bold rounded">WATCH TRAILER</div>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <h4 className="text-sm font-mono text-zinc-500 uppercase tracking-widest">Capítulos Sugeridos</h4>
              {[1, 2, 3].map(i => (
                <div key={i} className="flex gap-4 items-center p-4 bg-zinc-800/40 rounded-lg border border-zinc-700/50 hover:bg-zinc-800 transition-colors">
                   <div className="text-xl font-bold text-zinc-600">0{i}</div>
                   <div>
                     <div className="text-white font-bold">Chapter {i}: The Secret of {['Hawkins', 'The Gate', 'The Lab'][i-1]}</div>
                     <div className="text-xs text-zinc-500">Duration: 48:00 • Restricted Access</div>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episodes;
