
import React, { useState, useRef, useEffect } from 'react';
import { queryArchive } from '../services/geminiService';

const ArchiveTerminal: React.FC = () => {
  const [history, setHistory] = useState<{ type: 'user' | 'system', text: string }[]>([
    { type: 'system', text: 'HAWKINS NATIONAL LABORATORY - CENTRAL ARCHIVE v4.02' },
    { type: 'system', text: 'RESTRICTED ACCESS ONLY. BIOMETRIC SCAN PENDING...' },
    { type: 'system', text: 'ACCESS GRANTED. COMMAND?' },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setHistory(prev => [...prev, { type: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const response = await queryArchive(userMsg);
      setHistory(prev => [...prev, { type: 'system', text: response || 'NO DATA FOUND.' }]);
    } catch (err) {
      setHistory(prev => [...prev, { type: 'system', text: 'ERROR: CONNECTION INTERRUPTED BY EXTERNAL INTERFERENCE.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto h-[500px] bg-[#0c0c0c] border-4 border-zinc-800 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,1)] relative crt-screen">
      {/* Terminal Header */}
      <div className="bg-zinc-800 px-4 py-1 flex items-center justify-between">
        <span className="text-xs font-mono text-zinc-400">SESSION: CLASSIFIED_B4-1984</span>
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></div>
          <div className="w-2 h-2 rounded-full bg-zinc-600"></div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 h-[400px] overflow-y-auto font-mono text-green-500 scrollbar-hide">
        {history.map((msg, i) => (
          <div key={i} className={`mb-4 ${msg.type === 'user' ? 'text-zinc-300' : 'text-green-500'}`}>
            <span className="opacity-50 mr-2">{msg.type === 'user' ? '>' : '#'}</span>
            {msg.text}
          </div>
        ))}
        {isLoading && (
          <div className="animate-pulse text-green-500">DECRYPTING...</div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input area */}
      <form onSubmit={handleSubmit} className="absolute bottom-0 left-0 w-full p-4 bg-zinc-900/50 border-t border-zinc-800">
        <div className="flex items-center">
          <span className="text-green-500 mr-2 font-mono">{'>'}</span>
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="bg-transparent w-full text-green-500 font-mono outline-none"
            placeholder="Type command (e.g., 'Status of 011', 'The Gate location')..."
            autoFocus
          />
        </div>
      </form>
    </div>
  );
};

export default ArchiveTerminal;
