// accountInfo
// charInfo

type AccountInfo = {
  id: number;
  name: string;
  email?: string;
};

const account: AccountInfo = {
  id: 123,
  name: 'Luísa',
  email: 'luisa@gmail.com',
};

type CharInfo = {
  nickname: string;
  level: number;
};

const char: CharInfo = {
  nickname: 'luisabfs',
  level: 22,
};

// intersection
type PlayerInfo = AccountInfo & CharInfo;

const player: PlayerInfo = {
  id: 123,
  name: 'Luísa',
  nickname: 'luisabfs',
  level: 33,
};
