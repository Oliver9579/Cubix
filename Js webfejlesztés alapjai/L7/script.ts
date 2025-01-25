let isDone: boolean = false;

let decimal: number = 6;
let binary: number = 0b1001;

let color: string = 'red';

let myName = `Cubix`;
const templateString = `Hello ${myName}` + '!';

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

enum Season {
  Winter,
  Spring,
  Summer,
  Autumn
}

enum Color {
  Red = 'Red',
  Green = 'Green',
  Blue = 'Blue'
}

let season: Season = Season.Spring;

let notSure: any = 4;
notSure = 'Alma';
notSure = false;

let u = undefined;

let s = 'apple';

s = s.concat(' tree');

let array = [0, 1, null, false];

const fruit = {name: 'stsrawberry', taste: 5};
fruit.name = 'apple';

// fruit = {name: 'pear', taste: 2}

let unknownVariable: any = 'i am a string';

let x = (unknownVariable as string).charAt(0);

function myFunction(x: number, y: number): number {
  return x + y;
}

const functionTwo = (x: number, y: number): number => {
  return x + y;
};

let functionThree: (x: number, y: number) => number;

functionThree = (x: number, y: number) => x + y;

const f1 = (x = 7) => console.log(x);

f1(11);

const f2 = (x?: number) => console.log(x);

f2(6);

class Animal {
  // private name: string;
  //
  // constructor(name: string) {
  //   this.name = name;
  // }

  accessor _distance = 0;

  // get distance() {
  //   return this._distance;
  // }
  //
  // set distance(distanceInMeters: number) {
  //   this._distance = distanceInMeters;
  // }

  constructor(private name: string) {
  }

  move(distanceInMeters: number) {
    console.log(`${this.name} moved ${distanceInMeters}`);
  }
}

const snake = new Animal('snake');
const horse = new Animal('horse');

snake.move(3);
horse.move(5);

console.log(horse);

let animal: Animal | undefined = undefined;

if (Math.random() > 0.5) {
  animal = new Animal('snake');
}

animal?.move(10);

console.log(animal ? animal : 'No animal');

console.log(animal ?? 'No animal');

const creatName = (name: string | string[]): string => {
  if (typeof name === 'string') {
    return name;
  } else {
    return name.join(' ');
  }
};

const greetingMessage = `Hello, ${creatName('Jane')}`;
const greetingMessage2 = `Hello, ${creatName('John Doe')}`;

console.log(greetingMessage)
console.log(greetingMessage2)