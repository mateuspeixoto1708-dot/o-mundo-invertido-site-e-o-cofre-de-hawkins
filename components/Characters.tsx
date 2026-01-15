
import React, { useState } from 'react';
import { Character } from '../types';

const CHARACTERS: Character[] = [
  {
    id: '011',
    name: 'Jane Hopper',
    alias: 'Eleven',
    status: 'Active / Subject',
    traits: ['Telekinesis', 'Telepathy', 'Eggo Enthusiast'],
    description: 'Nascida com habilidades psíquicas extraordinárias, foi criada no Laboratório de Hawkins sob a supervisão do Dr. Brenner. É o elo principal entre o nosso mundo e o Mundo Invertido.',
    image: 'https://picsum.photos/seed/eleven_stranger/400/500'
  },
  {
    id: '012',
    name: 'Mike Wheeler',
    alias: 'The Paladin',
    status: 'Resident',
    traits: ['Natural Leader', 'Loyal', 'D&D Expert'],
    description: 'O líder do grupo original. Sua determinação em encontrar Will Byers e sua proteção à Eleven foram fundamentais para a sobrevivência de Hawkins.',
    image: 'https://picsum.photos/seed/mike_stranger/400/500'
  },
  {
    id: '013',
    name: 'Dustin Henderson',
    alias: 'The Bard',
    status: 'Resident',
    traits: ['Scientific Mind', 'Diplomat', 'Radio Enthusiast'],
    description: 'O cérebro técnico do grupo. Possui um conhecimento vasto sobre criaturas do Mundo Invertido e é o responsável pela comunicação via rádio.',
    image: 'https://picsum.photos/seed/dustin_stranger/400/500'
  },
  {
    id: '014',
    name: 'Jim Hopper',
    alias: 'The Chief',
    status: 'Law Enforcement',
    traits: ['Combat Training', 'Survivalist', 'Father Figure'],
    description: 'Ex-chefe de polícia de Hawkins. Um sobrevivente nato que passou de um homem amargurado a um protetor heróico de Hawkins e pai adotivo de Eleven.',
    image: 'https://picsum.photos/seed/hopper_stranger/400/500'
  },
  {
    id: '015',
    name: 'Steve Harrington',
    alias: 'The Babysitter',
    status: 'Resident',
    traits: ['Protective', 'Melee Combat (Bat)', 'Excellent Hair'],
    description: 'De rei do colégio a protetor das crianças. Steve provou ser um dos aliados mais valentes e confiáveis na luta contra as ameaças sobrenaturais.',
    image: 'https://picsum.photos/seed/steve_stranger/400/500'
  },
  {
    id: '016',
    name: 'Max Mayfield',
    alias: 'MadMax',
    status: 'Critical',
    traits: ['Skater', 'Arcade Pro', 'Resilient'],
    description: 'Uma garota durona que se juntou ao grupo na 2ª temporada. Sua luta contra o trauma e Vecna mostrou uma força mental incomparável.',
    image: 'https://picsum.photos/seed/max_stranger/400/500'
  },
  {
    id: '017',
    name: 'Eddie Munson',
    alias: 'Dungeon Master',
    status: 'Deceased / Hero',
    traits: ['Metalhead', 'Guitarist', 'Hellfire Leader'],
    description: 'O líder do Hellfire Club. Injustamente acusado, ele provou seu valor ao realizar o concerto de metal mais épico do Mundo Invertido para salvar seus amigos.',
    image: 'https://picsum.photos/seed/eddie_stranger/400/500'
  }
];

const Characters: React.FC = () => {
  const [selectedChar, setSelectedChar] = useState<Character | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCharacters = CHARACTERS.filter(char => 
    char.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    (char.alias && char.alias.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="max-w-6xl mx-auto py-12">
      {/* Search Input */}
      <div className="flex justify-end mb-8">
        <div className="relative w-full max-w-md">
           <input 
             type="text" 
             placeholder="SEARCH SUBJECT DATABASE..." 
             value={searchTerm}
             onChange={(e) => setSearchTerm(e.target.value)}
             className="w-full bg-black/50 border-2 border-zinc-800 text-zinc-300 font-mono px-4 py-3 rounded-lg focus:outline-none focus:border-red-600 focus:text-white transition-colors uppercase tracking-widest text-sm placeholder-zinc-600"
           />
           <div className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-600 pointer-events-none">
             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredCharacters.length > 0 ? (
          filteredCharacters.map((char) => (
          <div 
            key={char.id}
            onClick={() => setSelectedChar(char)}
            className="group cursor-pointer relative bg-zinc-900 border-2 border-zinc-800 rounded-lg overflow-hidden transition-all hover:border-red-600 hover:shadow-[0_0_20px_rgba(226,29,38,0.3)]"
          >
            <div className="aspect-[4/5] overflow-hidden relative">
              <img 
                src={char.image} 
                alt={char.name} 
                className="w-full h-full object-cover transition-all duration-500 grayscale sepia-[0.2] contrast-125 brightness-90 group-hover:grayscale-0 group-hover:sepia-0 group-hover:brightness-100" 
              />
              {/* Scanline Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none opacity-60 group-hover:opacity-30 transition-opacity duration-500"></div>
              {/* Vintage Tint */}
              <div className="absolute inset-0 bg-red-900/10 mix-blend-multiply pointer-events-none group-hover:opacity-0 transition-opacity duration-500"></div>
            </div>
            <div className="p-4 bg-zinc-900 border-t border-zinc-800">
              <div className="text-xs font-mono text-red-600 mb-1">ID: {char.id}</div>
              <div className="text-lg font-bold text-white uppercase tracking-tighter">{char.name}</div>
            </div>
          </div>
        ))
        ) : (
          <div className="col-span-full py-20 text-center">
            <div className="text-zinc-600 font-mono text-xl uppercase tracking-widest mb-2">Subject Not Found</div>
            <div className="text-red-900/50 text-6xl">∅</div>
          </div>
        )}
      </div>

      {/* Detail Modal / Dossier */}
      {selectedChar && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="relative w-full max-w-4xl bg-[#121212] border-4 border-zinc-800 rounded-2xl overflow-hidden shadow-2xl crt-screen">
            <button 
              onClick={() => setSelectedChar(null)}
              className="absolute top-4 right-4 text-zinc-500 hover:text-white z-20 font-mono"
            >
              [X] CLOSE_FILE
            </button>

            <div className="flex flex-col md:flex-row h-full">
              <div className="w-full md:w-1/2 p-8 border-r border-zinc-800 bg-zinc-900/50">
                <div className="relative aspect-[4/5] border-4 border-zinc-800 rounded-lg overflow-hidden shadow-inner bg-black">
                   <img src={selectedChar.image} alt={selectedChar.name} className="w-full h-full object-cover grayscale sepia-[0.1] contrast-125 brightness-75" />
                   
                   {/* Heavy CRT Scanlines for dossier view */}
                   <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.4)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_3px,3px_100%] z-10"></div>
                   
                   {/* Reflection/Glare */}
                   <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-white/5 to-transparent skew-x-12 pointer-events-none z-10"></div>

                   <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-red-900/10 mix-blend-overlay z-10"></div>
                   <div className="absolute top-2 left-2 bg-black/80 px-2 py-1 text-[10px] font-mono text-red-600 border border-red-900/50 z-20">SUBJECT_IDENTIFIED</div>
                </div>
              </div>

              <div className="w-full md:w-1/2 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h2 className="benguiat-style text-3xl text-white mb-1">{selectedChar.name}</h2>
                      <p className="text-red-600 font-mono text-xs uppercase tracking-[0.2em]">{selectedChar.alias || 'NO ALIAS'}</p>
                    </div>
                    <div className="bg-zinc-800 px-3 py-1 rounded text-[10px] font-mono text-zinc-400">STATUS: {selectedChar.status}</div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-3">Core Traits</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedChar.traits.map((trait, i) => (
                        <span key={i} className="px-3 py-1 bg-red-900/20 border border-red-900/50 text-red-500 text-xs font-mono rounded-full italic">
                          {trait}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-3">Field Report</h4>
                    <p className="text-zinc-300 font-serif text-lg leading-relaxed italic">
                      "{selectedChar.description}"
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-zinc-800/50">
                   <div className="text-[8px] font-mono text-zinc-600 uppercase tracking-widest">
                     HAWKINS NATIONAL LABORATORY • PSYCHOLOGICAL EVALUATION v2.0
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Characters;
