abstract class UserAccount {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  logDetails(): void {
    console.log(`The player ${this.name} is ${this.age} years old.`);
  }
}

class CharAccount extends UserAccount {
  nickname: string;
  level: number;

  get getLevel() {
    return this.level;
  }

  set setLevel(level: number) {
    console.log('----LEVEL UP!----');
    this.level = level;
  }

  constructor(name: string, age: number, nickname: string, level: number) {
    super(name, age);
    this.nickname = nickname;
    this.level = level;
  }
}

const lu = new CharAccount("Luísa", 22, "lully", 149);
lu.setLevel = 150;
console.log(lu.getLevel);
lu.logDetails();
