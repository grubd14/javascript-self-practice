const person = {
  name : ["Bob", "Smith"],
  age : 32,
  bio: function () {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);

  },
  introduceSelf: function () {
    console.log(`Hi! I'm ${this.name[0]}.`);
  },
};

const dogs = {
  name: ["Tommy", "Bin Laden"],
  age: 8,
  properties () {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    
  },
  introduceSelf() {
    console.log(`Hi! I'm ${this.name[0]}.`);
  }
};

const person = {
  name: {
    first: "Bob",
    last: "Smith",
  },
  age: 32,
};

const myDataName = "height";
const myDateValue = "1.75m";
person[myDataName] = myDateValue;

function consoleLogProperty(propertyName) {
  console.log(person[propertyName]);
} 

consoleLogProperty("name");
consoleLogProperty("age");
consoleLogProperty("height");



//we can use this method to create as
//many as objects as we want but there
//is more streamlined process for this
function createPerson(name) {
  const obj = {};
  obj.name = name;
  obj.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
  }
  return obj;
}

const robie = createPerson("Robie");
robie.name;
robie.introduceSelf();

const amos = createPerson("Amos");
amos.name;
amos.introduceSelf();


function Person(name) {
  this.name = name;
  this.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
  };
}


const robie = new Person("Robie");
robie.name;
robie.introduceSelf();

const salva = new Person("Salva");
salva.name;
salva.introduceSelf();

/* const myNotifications = new Notification("Hello!"); */

const cat = {
  name: 'Bertie',
  breed: 'Cymric',
  color: 'white',
  greeting: function() {
    console.log('Meow!');
  }
}

const catName = cat["name"];
cat.greeting();
cat["color"] = "black";

console.log(`${cat["color"]}`);





//exmaple
const favouriteBand = {
  name : "Nepathya",
  nationality: "Nepal",
  genre: "Folk Rock",
  members: "5",
  formed: "1990",
  split: "false",
  albumbs: {
    name: "Resham",
    released: "2001",
  }
}

let bandInfo = `${favouriteBand["name"]} a band of ${favouriteBand["nationality"]} 
. This band produces ${favouriteBand["genre"]} music. This band 
has ${favouriteBand["members"]} and was formed in ${favouriteBand["formed"]}
`;

//exmaple
const cat = {
  name: 'Bertie',
  breed: 'Cymric',
  color: 'white',
  greeting: function() {
    console.log(`Hello, said ${cat["name"]} the ${cat["breed"]}`);
  }
}

const cat1 = {
  name: 'Bin',
  breed: 'Laden',
  color: 'black',
  greeting: function() {
    console.log(`Hello, said ${cat["name"]} the ${cat["breed"]}`);
  }
}

cat.greeting();
cat1.greeting();



//example practice 
function Cat(name, breed, color) {
  this.name = name;
  this.breed = breed;
  this.color = color;
  this.greeting = function () {
    console.log(`Hello, said ${this.name} the ${this.breed}`);
  };
}

const secondCat = new Cat("laden", "bin", "white");
const firstCat = new Cat("bin", "laden", "black");
firstCat.name;
firstCat.breed;
firstCat.color;
firstCat.greeting();
secondCat.greeting();
