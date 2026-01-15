
import React from 'react';

const SecretArchives: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto py-12">
      <div className="border-4 border-red-900 bg-black p-8 relative overflow-hidden shadow-[0_0_100px_rgba(220,38,38,0.2)]">
        <div className="absolute top-0 left-0 w-full h-8 bg-[repeating-linear-gradient(45deg,black,black_10px,#450a0a_10px,#450a0a_20px)] border-b border-red-900"></div>
        <div className="absolute bottom-0 left-0 w-full h-8 bg-[repeating-linear-gradient(45deg,black,black_10px,#450a0a_10px,#450a0a_20px)] border-t border-red-900"></div>
        
        <div className="text-center mb-16 mt-8">
          <h1 className="text-5xl md:text-7xl font-mono text-red-700 tracking-tighter font-bold uppercase mb-4 animate-pulse">Top Secret</h1>
          <p className="text-zinc-500 font-mono text-sm uppercase tracking-[0.5em]">Hawkins National Laboratory • Level 5 Clearance</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
           {/* Document 1 */}
           <div className="bg-[#f5f5f5] text-black p-6 transform rotate-1 shadow-xl relative group hover:rotate-0 transition-transform duration-500">
              <div className="absolute top-4 right-4 border-2 border-red-800 text-red-800 px-4 py-1 font-bold text-xl uppercase opacity-80 -rotate-12 transform">Confidential</div>
              <h3 className="font-mono font-bold text-xl underline mb-4">Project MKUltra - Subject 011</h3>
              <div className="font-serif text-sm leading-relaxed space-y-4 opacity-80">
                <p>
                  Initial tests indicate extraordinary <span className="bg-black text-black">REDACTED</span> abilities. Subject demonstrates telekinetic manipulation of matter at a molecular level.
                </p>
                <p>
                  <span className="bg-black text-black">Dr. Brenner</span> reports significant distress during isolation tank procedures. The connection to the alternate dimension appears to be linked to emotional trauma.
                </p>
                <div className="border border-black p-2 mt-4">
                   <div className="text-[10px] font-mono uppercase">Incident Report 1983-A</div>
                   <p className="italic">Breach confirmed. The Gate has been opened. Asset is unresponsive.</p>
                </div>
              </div>
              <div className="mt-8 flex justify-between items-end">
                <div className="w-20 h-20 bg-zinc-300 grayscale filter contrast-150">
                   <img src="https://picsum.photos/seed/eleven_file/200/200" className="w-full h-full object-cover opacity-50 mix-blend-multiply" />
                </div>
                <div className="font-handwritten text-2xl rotate-[-10deg] text-blue-900">Approved</div>
              </div>
           </div>

           {/* Document 2 */}
           <div className="bg-[#1a1a1a] text-green-500 p-6 border-2 border-green-900 font-mono shadow-[0_0_20px_rgba(0,255,0,0.1)] crt-screen">
              <h3 className="text-xl mb-4 border-b border-green-900 pb-2">Intercepted Russian Transmission</h3>
              <div className="space-y-2 text-xs opacity-90">
                 <p>{'>'} FREQUENCY: 14.235 MHz</p>
                 <p>{'>'} ORIGIN: KAMCHATKA</p>
                 <p>{'>'} DECRYPTING...</p>
                 <br/>
                 <p className="text-green-400">"The American keeps talking about 'Hop'. He is strong. The Demodog does not like him."</p>
                 <p className="text-green-400">"Key retrieval failed. The machine needs more power."</p>
                 <br/>
                 <p>{'>'} END TRANSMISSION</p>
              </div>
              <div className="mt-8 border border-green-900 p-2">
                 <div className="text-[10px] uppercase mb-1">Schematic: The Key</div>
                 <div className="h-32 border border-green-900/50 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 grid grid-cols-12 grid-rows-6">
                       {Array.from({length: 72}).map((_,i) => (
                         <div key={i} className={`border-[0.5px] border-green-900/20 ${Math.random() > 0.8 ? 'bg-green-500/20' : ''}`}></div>
                       ))}
                    </div>
                    <div className="w-16 h-16 rounded-full border-4 border-green-500/50 animate-pulse"></div>
                 </div>
              </div>
           </div>

           {/* Document 3 */}
           <div className="md:col-span-2 bg-zinc-900 border border-zinc-700 p-8 flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/3">
                 <div className="aspect-[3/4] bg-black border-4 border-white p-2 shadow-2xl rotate-2">
                    <img src="https://picsum.photos/seed/demogorgon_sketch/400/500" className="w-full h-full object-cover grayscale invert contrast-150" />
                 </div>
              </div>
              <div className="w-full md:w-2/3 text-zinc-300 font-typewriter">
                 <h3 className="text-2xl font-bold text-red-600 mb-4 uppercase tracking-widest">Entity Classification: Demogorgon</h3>
                 <p className="mb-4 text-justify">
                    A predatory humanoid creature originating from Dimension X. Features a flower-like head lined with rows of teeth. No visible eyes. Displays immense strength and durability against small arms fire.
                 </p>
                 <p className="mb-4 text-justify">
                    <span className="text-red-500">WEAKNESS:</span> Fire seems to be the only effective deterrent. The hive mind connection allows shared pain response.
                 </p>
                 <div className="bg-black p-4 font-mono text-xs text-red-500 mt-8">
                    WARNING: BIOLOGICAL CONTAMINATION RISK EXTREME. DO NOT ENGAGE WITHOUT FLAMETHROWER UNIT.
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default SecretArchives;
