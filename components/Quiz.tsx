
import React, { useState, useEffect } from 'react';
import { QuizQuestion } from '../types';

const QUESTIONS: QuizQuestion[] = [
  { id: 1, question: "Qual é o nome real da Eleven?", options: ["Jane", "Sarah", "Nancy", "Max"], answer: 0 },
  { id: 2, question: "Em qual cidade a série se passa?", options: ["Derry", "Hawkins", "Riverdale", "Castle Rock"], answer: 1 },
  { id: 3, question: "Qual jogo os meninos jogam no porão?", options: ["Monopoly", "Dungeons & Dragons", "Chess", "Risk"], answer: 1 },
  { id: 4, question: "Qual é a comida favorita da Eleven?", options: ["Pizza", "Burger King", "Eggo Waffles", "Ice Cream"], answer: 2 },
  { id: 5, question: "Quem desaparece no primeiro episódio da 1ª temporada?", options: ["Dustin", "Lucas", "Mike", "Will"], answer: 3 },
  { id: 6, question: "Qual é o nome do monstro da 1ª temporada?", options: ["Mind Flayer", "Demogorgon", "Vecna", "Spider Monster"], answer: 1 },
  { id: 7, question: "Onde Joyce coloca as luzes de Natal?", options: ["No jardim", "Na parede da sala", "No teto", "No quarto do Will"], answer: 1 },
  { id: 8, question: "Qual é o nome da irmã de Lucas?", options: ["Erica", "Tina", "Holly", "Stacy"], answer: 0 },
  { id: 9, question: "Qual personagem trabalha na sorveteria Scoops Ahoy?", options: ["Nancy", "Steve", "Jonathan", "Billy"], answer: 1 },
  { id: 10, question: "Quem é o pai biológico da Eleven?", options: ["Jim Hopper", "Dr. Brenner", "Lonnie Byers", "Bob Newby"], answer: 1 },
  { id: 11, question: "Qual música salvou Max do Vecna?", options: ["Should I Stay or Should I Go", "Running Up That Hill", "Master of Puppets", "Dream a Little Dream of Me"], answer: 1 },
  { id: 12, question: "Qual é o apelido do Dr. Brenner?", options: ["Father", "Papa", "Dad", "Chief"], answer: 1 },
  { id: 13, question: "Como Eleven chama o Mike?", options: ["Mickey", "Mike", "Bf", "Brother"], answer: 1 },
  { id: 14, question: "Qual o nome do shopping na 3ª temporada?", options: ["Hawkins Center", "Starcourt Mall", "The Plaza", "Outlet Mall"], answer: 1 },
  { id: 15, question: "Quem sacrificou-se no final da 3ª temporada?", options: ["Hopper", "Billy", "Alexei", "Todos acima"], answer: 3 },
  { id: 16, question: "Qual é a profissão de Joyce na 1ª temporada?", options: ["Policial", "Caixa de Loja", "Professora", "Médica"], answer: 1 },
  { id: 17, question: "Qual é o nome do grupo de amigos?", options: ["The Losers", "The Party", "The Hawkins Crew", "The Nerds"], answer: 1 },
  { id: 18, question: "Qual é o número de laboratório de Kali?", options: ["001", "008", "010", "012"], answer: 1 },
  { id: 19, question: "Quem criou a série?", options: ["Duffer Brothers", "Steven Spielberg", "Stephen King", "J.J. Abrams"], answer: 0 },
  { id: 20, question: "Qual é a cor do boné do Dustin?", options: ["Vermelho, Branco e Azul", "Verde e Amarelo", "Preto e Vermelho", "Azul e Laranja"], answer: 0 },
  { id: 21, question: "Qual personagem é interpretado por Winona Ryder?", options: ["Nancy", "Karen", "Joyce", "Barb"], answer: 2 },
  { id: 22, question: "O que Bob Newby fundou na escola?", options: ["Clube de Xadrez", "AV Club", "Clube de Corrida", "Clube de Informática"], answer: 1 },
  { id: 23, question: "Qual é o nome do animal de estimação que Dustin encontra?", options: ["Dart", "Puff", "Slimer", "Gummy"], answer: 0 },
  { id: 24, question: "Em qual década a série se passa?", options: ["70s", "80s", "90s", "60s"], answer: 1 },
  { id: 25, question: "Quem é o vilão da 4ª temporada?", options: ["Vecna", "Mind Flayer", "Demodog", "Russian General"], answer: 0 },
  { id: 26, question: "Qual é o nome do clube de D&D de Eddie Munson?", options: ["The Dragon Club", "Hellfire Club", "Fireball Club", "The Outcasts"], answer: 1 },
  { id: 27, question: "Qual é a cidade na Rússia onde Hopper é levado?", options: ["Kamchatka", "Moscow", "Chernobyl", "Siberia"], answer: 0 },
  { id: 28, question: "O que Eleven usa para potencializar seus poderes?", options: ["Água salgada", "Fogo", "Eletricidade", "Sangue"], answer: 0 },
  { id: 29, question: "Qual é o nome do jornal onde Nancy e Jonathan trabalham?", options: ["Hawkins Post", "Hawkins Gazette", "Daily Hawkins", "The Ledger"], answer: 0 },
  { id: 30, question: "Quem morre na piscina na 1ª temporada?", options: ["Nancy", "Barb", "Stacy", "Carol"], answer: 1 },
  { id: 31, question: "Qual o nome do restaurante onde Eleven come pela primeira vez?", options: ["Benny's Burgers", "McDonalds", "Hawkins Diner", "Big Burger"], answer: 0 },
  { id: 32, question: "Qual é o sobrenome do Steve?", options: ["Harrington", "Henderson", "Wheeler", "Byers"], answer: 0 },
  { id: 33, question: "Quem é o xerife de Hawkins?", options: ["Jim Hopper", "Calvin Powell", "Phil Callahan", "Daniel Hopper"], answer: 0 },
  { id: 34, question: "Qual é o nome da mãe da Eleven?", options: ["Terry Ives", "Becky Ives", "Sarah Hopper", "Karen Wheeler"], answer: 0 },
  { id: 35, question: "O que significa 'Friends don't lie'?", options: ["Amigos não mentem", "Amigos não lutam", "Amigos são para sempre", "Amigos ajudam"], answer: 0 },
  { id: 36, question: "Qual instrumento Eddie toca?", options: ["Bateria", "Baixo", "Guitarra", "Teclado"], answer: 2 },
  { id: 37, question: "Qual o nome da namorada do Dustin?", options: ["Suzy", "Max", "El", "Tammy"], answer: 0 },
  { id: 38, question: "Em qual estado fica Hawkins?", options: ["Ohio", "Indiana", "Illinois", "Michigan"], answer: 1 },
  { id: 39, question: "Qual é a cor do portal para o Mundo Invertido?", options: ["Azul", "Verde", "Vermelho/Brilhante", "Preto"], answer: 2 },
  { id: 40, question: "Quem é 001?", options: ["Eleven", "Henry Creel", "Brenner", "Billy"], answer: 1 },
  { id: 41, question: "Qual é o nome do gato do Dustin que o Dart come?", options: ["Mews", "Snowball", "Garfield", "Whiskers"], answer: 0 },
  { id: 42, question: "Onde o grupo de Hawkins se esconde no final da 4ª temporada?", options: ["Escola", "Trailer Park", "Creel House", "Laboratório"], answer: 2 },
  { id: 43, question: "O que Eleven faz quando usa muito poder?", options: ["Desmaia", "Sangra pelo nariz", "Cresce o cabelo", "Muda a cor dos olhos"], answer: 1 },
  { id: 44, question: "Como Will se comunica do Mundo Invertido na 1ª temporada?", options: ["Rádio", "Luzes", "Telefone", "Escrita na parede"], answer: 1 },
  { id: 45, question: "Quem é o irmão da Max?", options: ["Steve", "Billy", "Jonathan", "Eddie"], answer: 1 },
  { id: 46, question: "Qual é o nome do jogo que Dustin e Suzie cantam juntos?", options: ["Neverending Story", "Total Eclipse of the Heart", "Material Girl", "Should I Stay or Should I Go"], answer: 0 },
  { id: 47, question: "Qual o nome do Dr. que substitui Brenner na 2ª temporada?", options: ["Dr. Sam Owens", "Dr. Alexei", "Dr. Richardson", "Dr. Smith"], answer: 0 },
  { id: 48, question: "Qual o nome da sorveteria da 3ª temporada?", options: ["Scoops Ahoy", "Dairy Queen", "Frosty's", "Hawkins Ice"], answer: 0 },
  { id: 49, question: "Qual é o medo de Max na 4ª temporada?", options: ["Vecna", "Culpa pela morte de Billy", "Ficar cega", "Aranhas"], answer: 1 },
  { id: 50, question: "Quantos episódios tem a 1ª temporada?", options: ["8", "9", "10", "12"], answer: 0 },
];

interface QuizProps {
  onUnlockSecret?: () => void;
}

const Quiz: React.FC<QuizProps> = ({ onUnlockSecret }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);

  const handleAnswer = (idx: number) => {
    setSelected(idx);
    setTimeout(() => {
      let newScore = score;
      if (idx === QUESTIONS[currentIdx].answer) {
        newScore = score + 1;
        setScore(newScore);
      }
      
      if (currentIdx + 1 < QUESTIONS.length) {
        setCurrentIdx(currentIdx + 1);
        setSelected(null);
      } else {
        setShowResult(true);
      }
    }, 600);
  };

  useEffect(() => {
    if (showResult && score >= 30 && onUnlockSecret) {
      onUnlockSecret();
    }
  }, [showResult, score, onUnlockSecret]);

  if (showResult) {
    return (
      <div className="max-w-2xl mx-auto p-12 bg-zinc-900 border-4 border-red-700 rounded-lg text-center shadow-[0_0_30px_rgba(185,28,28,0.5)]">
        <h2 className="benguiat-style text-4xl mb-6">Resultado Final</h2>
        <div className="text-6xl font-mono text-white mb-8">{score} / {QUESTIONS.length}</div>
        <p className="text-zinc-400 mb-8 font-serif italic text-lg">
          {score > 45 ? "Você é um verdadeiro habitante de Hawkins! Eleven estaria orgulhosa." : 
           score > 30 ? "Excelente conhecimento! Você desbloqueou os Arquivos Secretos do Laboratório." : 
           "Talvez você precise maratonar a série novamente... se tiver coragem."}
        </p>
        
        {score >= 30 && (
          <div className="mb-8 p-4 bg-red-900/20 border border-red-600 rounded animate-pulse">
            <p className="text-red-500 font-mono text-sm uppercase tracking-widest">
              ⚠ ACCESS GRANTED: SECRET ARCHIVES UNLOCKED ⚠
            </p>
          </div>
        )}

        <button 
          onClick={() => { setCurrentIdx(0); setScore(0); setShowResult(false); setSelected(null); }}
          className="bg-red-700 hover:bg-red-600 text-white px-8 py-3 rounded uppercase tracking-widest font-bold transition-all"
        >
          Reiniciar Desafio
        </button>
      </div>
    );
  }

  const q = QUESTIONS[currentIdx];

  return (
    <div className="max-w-3xl mx-auto p-8 bg-black/80 border-2 border-zinc-800 rounded-2xl shadow-2xl crt-screen">
      <div className="flex justify-between items-center mb-12">
        <span className="text-xs font-mono text-red-600 tracking-tighter uppercase">Questão {currentIdx + 1} de {QUESTIONS.length}</span>
        <div className="h-1 w-48 bg-zinc-900 rounded-full overflow-hidden">
          <div className="h-full bg-red-600 transition-all duration-300" style={{ width: `${((currentIdx + 1) / QUESTIONS.length) * 100}%` }}></div>
        </div>
      </div>

      <h3 className="text-2xl md:text-3xl font-bold text-white mb-12 leading-tight">
        {q.question}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {q.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleAnswer(i)}
            disabled={selected !== null}
            className={`p-5 text-left rounded-xl border-2 transition-all duration-200 text-lg font-mono
              ${selected === i ? (i === q.answer ? 'bg-green-900/40 border-green-500 text-green-400' : 'bg-red-900/40 border-red-500 text-red-400') : 
                'bg-zinc-900/50 border-zinc-800 text-zinc-300 hover:border-red-600 hover:text-white'}`}
          >
            <span className="opacity-40 mr-3">{String.fromCharCode(65 + i)})</span>
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
