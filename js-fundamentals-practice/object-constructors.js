// function Book(title, author, pages, read) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.read = read;
//   this.info = function () {
//     console.log(`${title} by ${author}, ${pages}, ${read}`);
//   };
// }

// const bookNo1 = new Book("Experiences", "Sushil Neupane", "267", "not read");
// bookNo1.info();
//
// function Person(name) {
//   this.name = name 
// }

// Person.prototype.sayName = function() {
//   console.log(`Hello, I'm ${this.name}!`)
// }

// function Player(name, marker) {
//   this.name = name 
//   this.marker = marker 
// }

// Player.prototype.getMarker = function() {
//   console.log(`My marker is '${this.marker}`)
// }

// Object.getPrototypeOf(Player.prototype)

// Object.setPrototypeOf(Player.prototype, Person.prototype)
// Object.getPrototypeOf(Player.prototype)


// const player1 = new Player('steve', 'x')
// const player2 = new Player('also steve', 'o')

// player1.sayName()
// player2.sayName()

// player1.getMarker()
// player2.getMarker()

function Hero(name, level) {
  this.name = name;
  this.level = level;
}



Hero.prototype.greet = function () {
  return `${this.name} says Hello.`;
}


function Warrior(name, level, weapon) {
  Hero.call(this, name, level);

  this.weapon = weapon;
}

function Healer(name, level, spell) {
  Hero.call(this, name, level);

  this.spell = spell;
}

Warrior.prototype.attack = function () {
  return `${this.name} attacks with the ${this.weapon}.`;
}

Warrior.prototype.heal = function() {
  return `${this.name} casts ${this.spell}.`;
}
/* const hero = new Hero('Bjorn', 1); */
const hero1 = new Warrior('Bjorn', 1, 'axe');
const hero2 = new Healer('Kotlin', 1, 'cure');

/* hero.greet(); */
/* hero1.attack(); */

Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
Object.setPrototypeOf(Healer.prototype, Hero.prototype );

hero1.greet();
