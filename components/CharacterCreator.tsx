
import React, { useState } from 'react';
import { generateCharacterDossier } from '../services/geminiService';

const OPTIONS = {
  roles: ['Paladin', 'Bard', 'Cleric', 'Ranger', 'Mage', 'Thief'],
  hats: ['None', 'Trucker Hat', 'Headband', 'Walkman Headphones', 'Scoops Ahoy Cap', 'Sailor Hat', 'Beanie'],
  tops: ['Hellfire Club Tee', 'Denim Jacket', 'Hawaiian Shirt', 'Lab Gown', 'Striped Polo', 'Leather Jacket', 'Members Only Jacket'],
  bottoms: ['High-waisted Jeans', 'Corduroy Pants', 'Short Shorts', 'Khakis', 'Plaid Skirt', 'Leggings'],
  accessories: ['Slingshot', 'Baseball Bat with Nails', 'Walkie-Talkie', 'Flashlight', 'Box of Eggos', 'D&D Manual', 'Spray Paint']
};

const CharacterCreator: React.FC = () => {
  const [char, setChar] = useState({
    name: 'Subject X',
    role: 'Mage',
    hat: 'None',
    top: 'Hellfire Club Tee',
    bottom: 'High-waisted Jeans',
    accessory: 'Flashlight'
  });
  const [dossier, setDossier] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    setIsGenerating(true);
    try {
      const result = await generateCharacterDossier(char);
      setDossier(result || '');
    } catch (err) {
      setDossier('ERROR: Subject profile corrupted by psionic interference.');
    } finally {
      setIsGenerating(false);
    }
  };

  const renderSelector = (category: keyof typeof OPTIONS, label: string) => (
    <div className="mb-6">
      <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-2">{label}</label>
      <div className="flex flex-wrap gap-2">
        {OPTIONS[category].map(opt => (
          <button
            key={opt}
            onClick={() => setChar({ ...char, [category.slice(0, -1)]: opt })}
            className={`px-3 py-1.5 text-xs font-mono border transition-all ${
              (char as any)[category.slice(0, -1)] === opt 
              ? 'bg-red-700 border-red-500 text-white' 
              : 'bg-zinc-900 border-zinc-800 text-zinc-500 hover:border-zinc-600'
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Customization Panel */}
        <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800">
          <h3 className="text-xl font-bold text-white mb-8 uppercase tracking-widest border-b border-zinc-800 pb-4">Character Customizer</h3>
          
          <div className="mb-8">
            <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-2">Character Name</label>
            <input 
              type="text" 
              value={char.name}
              onChange={(e) => setChar({...char, name: e.target.value})}
              className="bg-black border-2 border-zinc-800 p-3 w-full rounded text-white font-mono focus:border-red-600 outline-none"
            />
          </div>

          {renderSelector('roles', 'D&D Class / Role')}
          {renderSelector('hats', 'Headgear')}
          {renderSelector('tops', 'Upper Body')}
          {renderSelector('bottoms', 'Lower Body')}
          {renderSelector('accessories', 'Held Item')}

          <button 
            onClick={handleGenerate}
            disabled={isGenerating}
            className="w-full mt-8 bg-red-700 hover:bg-red-600 text-white py-4 rounded font-bold uppercase tracking-widest transition-all disabled:opacity-50"
          >
            {isGenerating ? 'Analyzing Subject...' : 'Register Subject & Generate Dossier'}
          </button>
        </div>

        {/* Preview Panel */}
        <div className="relative">
          <div className="sticky top-8 bg-white p-8 pb-12 shadow-2xl rotate-1 transform-gpu group transition-transform hover:rotate-0">
             {/* The "Polaroid" style */}
             <div className="aspect-square bg-zinc-200 mb-6 overflow-hidden relative border-4 border-zinc-300">
                <img 
                  src={`https://picsum.photos/seed/${char.name + char.top}/600/600`} 
                  alt="Character Preview" 
                  className="w-full h-full object-cover grayscale contrast-125"
                />
                <div className="absolute inset-0 bg-red-900/10 mix-blend-multiply"></div>
                {/* Visual Overlay of items labels */}
                <div className="absolute bottom-2 left-2 flex flex-col gap-1">
                   <span className="bg-black text-[8px] text-white px-1 font-mono uppercase">Top: {char.top}</span>
                   <span className="bg-black text-[8px] text-white px-1 font-mono uppercase">Acc: {char.accessory}</span>
                </div>
             </div>
             
             <div className="font-handwritten text-3xl text-zinc-800 mb-2" style={{ fontFamily: '"EB Garamond", serif' }}>
                {char.name}
             </div>
             <div className="text-zinc-500 font-mono text-xs uppercase">ROLE: {char.role}</div>

             <div className="mt-8 pt-6 border-t border-zinc-200 border-dashed">
                <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-4">Laboratory Dossier</div>
                <div className={`text-zinc-800 font-serif italic leading-relaxed min-h-[100px] ${isGenerating ? 'animate-pulse opacity-50' : ''}`}>
                  {dossier || "Aguardando registro do sujeito para processamento de perfil psicocinético..."}
                </div>
                <div className="mt-8 flex justify-between items-end">
                   <div className="w-16 h-16 opacity-30">
                     <svg viewBox="0 0 100 100" fill="currentColor" className="text-zinc-400">
                        <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="2" fill="none" />
                        <path d="M50 10 L50 90 M10 50 L90 50" stroke="black" />
                     </svg>
                   </div>
                   <div className="text-[8px] font-mono text-zinc-300 uppercase">CLASSIFIED • HNL-1984</div>
                </div>
             </div>
          </div>
          
          {/* Visual fluff for "The Other Side" in creator */}
          <div className="absolute -z-10 -bottom-10 -right-10 w-full h-full bg-red-900/20 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default CharacterCreator;
