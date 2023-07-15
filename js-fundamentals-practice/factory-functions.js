//Facotry Function Introduction

const personFactory = (name, age) => {
  const sayHello = () => console.log("hello");
  return { name, age, sayHello };
};

const sushil = personFactory("Sushil", 19);

console.log(sushil.name);

const bookFactory = (name, author, pages) => {
  return { name, author, pages };
};

const book = bookFactory('Java', 'Oracle', 23);
console.log(book.name);


//Object shorthand
const name = "Sushil";
const color = "red";
const number = 34;
const food = "rice";

console.log({ name, color, number, food });

//Scopes and closures 
const a = 17;

const func = x => {
  let a = x;
};

func(99);

console.log(a);


//Exaples of scopes
function myHeight() {
  var height = 156;
  console.log(height);
}
console.log(myHeight());
/* console.log(height); */

let sayHello = function(name) {
  let text = 'Hello,' + name ;
  return function() {
    console.log(text);
  }
}

let helloSushil = sayHello('Sushil');
helloSushil();




// Examples of closures
const FactoryFunction = string => {
  const capitalizeString = () => string.toUpperCase();
  const printString = () => console.log(`----${capitalizeString}----`);
  return {printString};

};


const taco = FactoryFunction('taco');

printString();
capitalizeString();
taco.capitalizeString();
taco.printString();


//Examples of closures in javascript
const counterCreator = () => {
  let count = 0;
  return () =>  {
    console.log(count);
    count++
  };
};

const counter = counterCreator();

counter();
counter();
counter();
counter();

//A really good example to learn about Factory Functions

const Player = (name, level) => {
  let health = level * 2;
  const getLevel = () => level;
  const getName = () => name;
  const die = () => {

  };

  const damage = x => {
    health = health - x;
    if(health <= 0) {
      die();
    }
  };

  const attack = enemy => {
    if (level < enemy.getLevel()) {
      damage(1);
      console.log(`${enemy.getName()} has damaged ${name}`);
    }
    if (level >= enemy.getLevel()) {
      enemy.damage(1);
      console.log(`${name} has damaged ${enemy.getName()}`);
    }
  };
  return { attack, damage, getLevel, getName};
};

const goodGuy = Player('Sushil', 10);
const badGuy = Player('Ramesh`', 5);

goodGuy.attack(badGuy);

//Inheritance with factories 


const Person = function(name) {
  const sayName = () => console.log(`My name is ${name}`);
  return {sayName}
}

const Nerd = function(name) {
  const prototype = Person(name)
  const doSomethingNerdy = () => console.log(`nerd stuff`);
  return Object.assign({}, prototype, {doSomethingNerdy});
}

const Extrovert = (name) => {
  const {sayName} = Person(name);
  const doExtrovertThings = () => console.log(`Talking to people`);
  return {sayName, doExtrovertThings};

}

const sushil = Nerd('Sushil');
const sushila = Extrovert('Sushila');

sushila.sayName();
sushila.doExtrovertThings();


sushil.sayName();
sushil.doSomethingNerdy();

//Object.assign() example---
const target = {
  name: 'Sushil',
  age: 19
};

const source = {
  age: 21,
  profession: 'Software Develpment'
}

const returnedTarget = Object.assign(target, source);

console.log(target);

