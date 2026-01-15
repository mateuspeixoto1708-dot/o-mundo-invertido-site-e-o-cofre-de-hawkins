
import React, { useState } from 'react';

interface Location {
  id: string;
  name: string;
  description: string;
  intel: string;
  coordinates: { x: number; y: number };
}

const LOCATIONS: Location[] = [
  {
    id: 'lab',
    name: 'Hawkins National Laboratory',
    description: 'Instalação do Departamento de Energia dos EUA.',
    intel: 'Localização do Portal original. Experimentos MKUltra confirmados. Acesso estritamente proibido.',
    coordinates: { x: 75, y: 25 }
  },
  {
    id: 'mall',
    name: 'Starcourt Mall',
    description: 'O shopping mais popular de Hawkins (1985).',
    intel: 'Fachada para operação soviética subterrânea. Epicentro da Batalha de Starcourt.',
    coordinates: { x: 30, y: 40 }
  },
  {
    id: 'quarry',
    name: 'Sattler Quarry',
    description: 'Pedreira local abandonada.',
    intel: 'Onde o corpo falso de Will Byers foi recuperado. Profundidade desconhecida.',
    coordinates: { x: 80, y: 60 }
  },
  {
    id: 'arcade',
    name: 'Palace Arcade',
    description: 'Ponto de encontro da "The Party".',
    intel: 'Local onde Max Mayfield estabeleceu o recorde no Dig Dug. Atividade sísmica detectada abaixo do piso.',
    coordinates: { x: 20, y: 70 }
  },
  {
    id: 'creel',
    name: 'Creel House',
    description: 'Residência abandonada da família Creel.',
    intel: 'Ponto focal da atividade de Vecna. Distorções temporais e espaciais registradas no sótão.',
    coordinates: { x: 55, y: 85 }
  },
  {
    id: 'byers',
    name: 'Byers House',
    description: 'Residência na periferia de Hawkins.',
    intel: 'Primeiro local de comunicação via luzes de Natal. Atividade paranormal frequente.',
    coordinates: { x: 10, y: 30 }
  }
];

const HawkinsMap: React.FC = () => {
  const [selectedLoc, setSelectedLoc] = useState<Location | null>(null);

  return (
    <div className="max-w-6xl mx-auto py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Map Visualization Area */}
        <div className="lg:col-span-2 relative bg-[#0a0a0a] border-4 border-zinc-800 rounded-2xl overflow-hidden aspect-video shadow-2xl crt-screen">
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]"></div>
          
          {/* Blueprint-style grid */}
          <div className="absolute inset-0 grid grid-cols-10 grid-rows-10 pointer-events-none opacity-20">
            {Array.from({ length: 100 }).map((_, i) => (
              <div key={i} className="border-[0.5px] border-zinc-700"></div>
            ))}
          </div>

          {/* Map Content (Stylized SVG) */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
            {/* Roads */}
            <path d="M0,30 Q50,40 100,20" fill="none" stroke="#222" strokeWidth="2" />
            <path d="M30,0 Q25,50 40,100" fill="none" stroke="#222" strokeWidth="2" />
            <path d="M0,80 L100,70" fill="none" stroke="#222" strokeWidth="1" />
            
            {/* Interactive Points */}
            {LOCATIONS.map((loc) => (
              <g 
                key={loc.id} 
                className="cursor-pointer group"
                onClick={() => setSelectedLoc(loc)}
              >
                <circle 
                  cx={loc.coordinates.x} 
                  cy={loc.coordinates.y} 
                  r="2" 
                  className={`transition-all duration-300 ${selectedLoc?.id === loc.id ? 'fill-red-600 r-3 animate-pulse' : 'fill-zinc-600 group-hover:fill-red-500'}`} 
                />
                <circle 
                  cx={loc.coordinates.x} 
                  cy={loc.coordinates.y} 
                  r="4" 
                  className={`fill-none stroke-red-600/30 stroke-1 ${selectedLoc?.id === loc.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                >
                  <animate attributeName="r" from="4" to="8" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" from="0.5" to="0" dur="2s" repeatCount="indefinite" />
                </circle>
                <text 
                  x={loc.coordinates.x + 3} 
                  y={loc.coordinates.y + 1} 
                  className={`text-[3px] font-mono fill-zinc-500 pointer-events-none uppercase transition-opacity ${selectedLoc?.id === loc.id ? 'opacity-100 fill-white' : 'opacity-0 group-hover:opacity-100'}`}
                >
                  {loc.name}
                </text>
              </g>
            ))}
          </svg>

          {/* Compass/Legend Overlay */}
          <div className="absolute bottom-4 right-4 text-zinc-600 font-mono text-[10px] space-y-1">
            <div>RADAR: ACTIVE</div>
            <div>SCAN: SECTOR 7-B</div>
            <div>[RESTRICTED VIEW]</div>
          </div>
        </div>

        {/* Info Panel Area */}
        <div className="space-y-6">
          <div className="bg-zinc-900/50 p-6 border border-zinc-800 rounded-xl">
            <h3 className="text-sm font-mono text-red-600 uppercase tracking-[0.3em] mb-4">Location Intel</h3>
            
            {selectedLoc ? (
              <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                <div className="text-2xl font-bold text-white uppercase mb-2 leading-tight">{selectedLoc.name}</div>
                <p className="text-zinc-400 font-serif text-lg italic mb-6 leading-relaxed">
                  "{selectedLoc.description}"
                </p>
                
                <div className="p-4 bg-black border-l-4 border-red-700 font-mono text-xs text-zinc-300 leading-relaxed">
                  <div className="text-red-600 mb-2 font-bold tracking-widest">CLASSIFIED DATA:</div>
                  {selectedLoc.intel}
                </div>

                <div className="mt-8 flex gap-4">
                  <button className="flex-1 bg-red-700/20 border border-red-700 text-red-500 py-2 rounded text-xs font-mono uppercase hover:bg-red-700 hover:text-white transition-all">
                    View Sub-Levels
                  </button>
                </div>
              </div>
            ) : (
              <div className="py-12 text-center">
                <div className="w-12 h-12 border-2 border-zinc-800 border-dashed rounded-full flex items-center justify-center mx-auto mb-4 text-zinc-700">?</div>
                <p className="text-zinc-600 font-mono text-xs uppercase tracking-widest">Select a coordinate to view classified files</p>
              </div>
            )}
          </div>

          {/* Quick List */}
          <div className="bg-zinc-900/20 p-4 border border-zinc-800/50 rounded-xl overflow-y-auto max-h-[300px] scrollbar-hide">
            <div className="text-[10px] font-mono text-zinc-600 uppercase mb-4">Points of Interest</div>
            <div className="space-y-2">
              {LOCATIONS.map(loc => (
                <button 
                  key={loc.id}
                  onClick={() => setSelectedLoc(loc)}
                  className={`w-full text-left p-3 rounded text-xs font-mono uppercase tracking-tighter transition-all ${selectedLoc?.id === loc.id ? 'bg-red-900/20 text-white border border-red-900/50' : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/30'}`}
                >
                  {loc.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-12 p-6 border border-zinc-800/50 rounded-lg text-center bg-black/40">
        <span className="text-xs font-mono text-zinc-600 uppercase tracking-[0.5em]">Warning: Surveillance systems active across all Hawkins sectors.</span>
      </div>
    </div>
  );
};

export default HawkinsMap;
