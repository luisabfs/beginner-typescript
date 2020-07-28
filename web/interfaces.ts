import { Uid } from './alias';

interface Game {
  id: Uid;
  title: string;
  description: string;
  readonly genre: string;
  platform?: string[];
  getSimilars?: (title: string) => void;
}

const tlou: Game = {
  id: 1,
  title: 'The Last of Us',
  description: "The best game ever",
  genre: "Action",
  platform: ["PS3", "PS4"],
  getSimilars: (title: string) => {
    console.log(`Similar games to ${title}: Uncharted, A Plague Tale, Metro.`);
  },
};

console.log(tlou.genre);

if(tlou.getSimilars) tlou.getSimilars(tlou.title);

interface DLC extends Game {
  originalGame: Game;
  newContent: string[],
};

const leftbehind: DLC = {
  id: 2,
  title: 'The Last of Us - Left Behind',
  description: "You play as Ellie before the original game.",
  genre: 'Action',
  platform: ['PS4'],
  originalGame: tlou,
  newContent: ["3 hour story", "new characters"],
};

class CreateGame implements Game {
  id: Uid;
  title: string;
  description: string;
  genre: string;

  constructor(i: Uid, t: string, d: string, g: string) {
    this.id = i;
    this.title = t;
    this.description = d;
    this.genre = g;
  }
}
