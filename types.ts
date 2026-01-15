
export interface ArchiveEntry {
  id: string;
  title: string;
  category: 'CASE' | 'PERSON' | 'EVENT';
  date: string;
  content: string;
}

export interface ParticleProps {
  left: string;
  size: string;
  duration: string;
  delay: string;
}

export type AppMode = 'NORMAL' | 'UPSIDE_DOWN';

export type Page = 'HOME' | 'QUIZ' | 'EPISODES' | 'MUSIC' | 'CHARACTERS' | 'CREATE_CHARACTER' | 'MAP' | 'SECRET_ARCHIVES';

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  answer: number;
}

export interface Episode {
  season: number;
  number: number;
  title: string;
  description: string;
  thumbnail: string;
}

export interface Track {
  title: string;
  artist: string;
  scene: string;
  youtubeId: string;
}

export interface Character {
  id: string;
  name: string;
  alias?: string;
  status: string;
  traits: string[];
  description: string;
  image: string;
}

export interface CustomCharacter {
  name: string;
  role: string;
  hat: string;
  top: string;
  bottom: string;
  accessory: string;
}
