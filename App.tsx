
import React, { useState, useEffect } from 'react';
import Logo from './components/Logo';
import LightWall from './components/LightWall';
import ArchiveTerminal from './components/ArchiveTerminal';
import Atmosphere from './components/Atmosphere';
import Quiz from './components/Quiz';
import Episodes from './components/Episodes';
import Soundtrack from './components/Soundtrack';
import Characters from './components/Characters';
import CharacterCreator from './components/CharacterCreator';
import HawkinsMap from './components/HawkinsMap';
import SecretArchives from './components/SecretArchives';
import { AppMode, Page } from './types';
import { generateTheory } from './services/geminiService';

const App: React.FC = () => {
  const [mode, setMode] = useState<AppMode>('NORMAL');
  const [currentPage, setCurrentPage] = useState<Page>('HOME');
  const [dailyTheory, setDailyTheory] = useState<string>('Loading top secret theories...');
  const [secretsUnlocked, setSecretsUnlocked] = useState(false);

  useEffect(() => {
    const fetchTheory = async () => {
      try {
        const theory = await generateTheory();
        setDailyTheory(theory || 'Something is wrong in Hawkins...');
      } catch (err) {
        setDailyTheory('The static is too loud to hear any theories.');
      }
    };
    fetchTheory();
  }, []);

  const toggleMode = () => {
    setMode(prev => prev === 'NORMAL' ? 'UPSIDE_DOWN' : 'NORMAL');
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'QUIZ':
        return <Quiz onUnlockSecret={() => setSecretsUnlocked(true)} />;
      case 'EPISODES':
        return <Episodes />;
      case 'MUSIC':
        return <Soundtrack />;
      case 'CHARACTERS':
        return <Characters />;
      case 'CREATE_CHARACTER':
        return <CharacterCreator />;
      case 'MAP':
        return <HawkinsMap />;
      case 'SECRET_ARCHIVES':
        return <SecretArchives />;
      default:
        return (
          <div className="space-y-32">
            <section id="communication">
              <LightWall />
            </section>
            <section id="archive">
              <div className="mb-12 text-center">
                <h3 className="text-2xl font-bold uppercase tracking-[0.3em] text-red-600 mb-2">Classified Archives</h3>
                <p className="text-zinc-500 font-mono text-sm">AUTHORIZED PERSONNEL ONLY - HAWKINS NATIONAL LAB</p>
              </div>
              <ArchiveTerminal />
            </section>
            <section id="theories" className="max-w-3xl mx-auto">
              <div className="bg-zinc-900/50 p-12 border-2 border-dashed border-zinc-800 rounded-3xl relative">
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-red-700 text-white flex items-center justify-center font-bold text-2xl rounded-lg transform -rotate-12">
                  ?
                </div>
                <h4 className="text-xl font-mono text-zinc-500 uppercase tracking-widest mb-6">Murray's Theory of the Day</h4>
                <p className={`text-2xl font-serif text-white leading-relaxed ${mode === 'UPSIDE_DOWN' ? 'blur-[1px]' : ''}`}>
                  "{dailyTheory}"
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center overflow-hidden">
                     <img src="https://picsum.photos/seed/conspiracy/100/100" alt="Theorist" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-red-600 uppercase">Murray Bauman</div>
                    <div className="text-xs text-zinc-600">Investigative Journalist</div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
    }
  };

  return (
    <div className="relative min-h-screen font-sans selection:bg-red-500 overflow-x-hidden">
      <Atmosphere mode={mode} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 pb-24">
        {/* Navigation / Header */}
        <nav className="flex flex-col md:flex-row justify-between items-center py-6 border-b border-zinc-900/50 mb-12 gap-6">
          <div className="flex items-center gap-4">
            <div className={`w-3 h-3 rounded-full ${mode === 'NORMAL' ? 'bg-red-600' : 'bg-blue-400 animate-pulse'}`}></div>
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">
              {mode === 'NORMAL' ? 'Hawkins 1984' : 'The Upside Down'}
            </span>
          </div>

          <div className="flex gap-4 md:gap-8 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
            <button onClick={() => setCurrentPage('HOME')} className={`text-xs font-mono uppercase tracking-widest whitespace-nowrap ${currentPage === 'HOME' ? 'text-red-600 font-bold' : 'text-zinc-500 hover:text-white'}`}>Home</button>
            <button onClick={() => setCurrentPage('CHARACTERS')} className={`text-xs font-mono uppercase tracking-widest whitespace-nowrap ${currentPage === 'CHARACTERS' ? 'text-red-600 font-bold' : 'text-zinc-500 hover:text-white'}`}>Characters</button>
            <button onClick={() => setCurrentPage('MAP')} className={`text-xs font-mono uppercase tracking-widest whitespace-nowrap ${currentPage === 'MAP' ? 'text-red-600 font-bold' : 'text-zinc-500 hover:text-white'}`}>Map</button>
            <button onClick={() => setCurrentPage('CREATE_CHARACTER')} className={`text-xs font-mono uppercase tracking-widest whitespace-nowrap ${currentPage === 'CREATE_CHARACTER' ? 'text-red-600 font-bold' : 'text-zinc-500 hover:text-white'}`}>Create Your Own</button>
            <button onClick={() => setCurrentPage('QUIZ')} className={`text-xs font-mono uppercase tracking-widest whitespace-nowrap ${currentPage === 'QUIZ' ? 'text-red-600 font-bold' : 'text-zinc-500 hover:text-white'}`}>Quiz (50 Qs)</button>
            <button onClick={() => setCurrentPage('EPISODES')} className={`text-xs font-mono uppercase tracking-widest whitespace-nowrap ${currentPage === 'EPISODES' ? 'text-red-600 font-bold' : 'text-zinc-500 hover:text-white'}`}>Episodes</button>
            <button onClick={() => setCurrentPage('MUSIC')} className={`text-xs font-mono uppercase tracking-widest whitespace-nowrap ${currentPage === 'MUSIC' ? 'text-red-600 font-bold' : 'text-zinc-500 hover:text-white'}`}>Music</button>
            
            {secretsUnlocked && (
              <button 
                onClick={() => setCurrentPage('SECRET_ARCHIVES')} 
                className={`text-xs font-mono uppercase tracking-widest whitespace-nowrap animate-pulse ${currentPage === 'SECRET_ARCHIVES' ? 'text-red-500 font-bold' : 'text-red-700 hover:text-red-500'}`}
              >
                ⚠ SECRET ARCHIVES
              </button>
            )}
          </div>

          <button 
            onClick={toggleMode}
            className={`px-4 py-2 rounded-full border transition-all duration-500 font-mono text-xs uppercase tracking-tighter whitespace-nowrap
              ${mode === 'NORMAL' 
                ? 'border-red-900 text-red-700 hover:bg-red-900 hover:text-white' 
                : 'border-blue-900 text-blue-400 hover:bg-blue-900 hover:text-white bg-blue-900/20'}`}
          >
            {mode === 'NORMAL' ? 'Enter the Gate' : 'Escape the Gate'}
          </button>
        </nav>

        {/* Dynamic Logo based on page */}
        {currentPage === 'HOME' && <Logo />}
        {currentPage !== 'HOME' && (
           <div className="py-8 mb-12 border-b border-zinc-900/30 flex justify-center">
              <h1 className="benguiat-style text-4xl md:text-5xl tracking-tighter text-center">
                {currentPage === 'CREATE_CHARACTER' ? 'Subject Profiler' : 
                 currentPage === 'MAP' ? 'Hawkins Radar' : 
                 currentPage === 'SECRET_ARCHIVES' ? 'RESTRICTED ACCESS' : currentPage}
              </h1>
           </div>
        )}
        
        {/* Main Content Area */}
        <main className="min-h-[60vh]">
          {renderContent()}
        </main>

        {/* Footer */}
        <footer className="mt-40 pt-12 border-t border-zinc-900/50 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-zinc-600 font-mono text-xs uppercase tracking-widest">
            © 1984 Hawkins Vault Project • All Secrets Reserved
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-zinc-600 hover:text-red-600 transition-colors uppercase font-mono text-xs tracking-widest">About</a>
            <a href="#" className="text-zinc-600 hover:text-red-600 transition-colors uppercase font-mono text-xs tracking-widest">Contact Lab</a>
            <a href="#" className="text-zinc-600 hover:text-red-600 transition-colors uppercase font-mono text-xs tracking-widest">Report Anomaly</a>
          </div>
        </footer>
      </div>
      
      {/* VHS Overlay Effect */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[100] bg-[url('https://media.giphy.com/media/oEI9uWUicGLeE/giphy.gif')] mix-blend-screen"></div>
    </div>
  );
};

export default App;
