//while-loop
const cats = ["Pete", "Biggy", "Rami"];

let myFavoriteCats = "My cats are called ";

let index = 0;

while(index < cats.length) {
  if(index === cats.length - 1) {
    myFavoriteCats = myFavoriteCats + ` and ${cats[index]}`;
  } else {
    myFavoriteCats = myFavoriteCats + ` ${cats[index]}`;
  }
  index ++;
}

console.log(myFavoriteCats);

//do-while-loop 

const cats = ["Ram", "Shyam", "Hari"];
let myFavoriteCats = "My cats are called ";

let index = 0;

do {
  if (index === cats.length - 1) {
    myFavoriteCats += `and ${cats[index]}`;
  } else  {
    myFavoriteCats += `${cats[index]}`;
  }

  index++;
} while (index < cats.length);

console.log(myFavoriteCats);

//for-loop
function countDown() {
  for(let index = 10; index >=0; index--) {
    if(index === 10) {
      return "Count down is 10";
    } else if (index === 0) {
      return "Blastoff";
    } else {
   
      return "Count....";
    }
  }
}

function countDown() {
let i = 10;

while (i >= 0 ) {
  if (i === 10) {
    return "Countdown is 10";
  } else if (i === 0) {
    return "Blastoff";
  } else {
    return i;
  }
}
  i--;
}


const output = document.querySelector('.output');
output.innerHTML = '';

let i = 10;

while (i >= 0) {
  const para = document.createElement('p');
  if (i === 10) {
    para.textContent = `Countdown ${i}`;
  } else if (i === 0) {
    para.textContent = 'Blast off!';
  } else {
    para.textContent = i;
  }

  output.appendChild(para);

  i--;
}

const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola',
  'Sam', 'Kay', 'Bruce'];

let admitted = "";
let refused = "";

for(index = 0; index < people.length; index++ ) {
  const person = people[index];
  if(person === 'Phil' || person === 'Lola') {
    refused = refused + `${person}, `; 
  } else {
    admitted = admitted + `${person} `;
  }
}

console.log(refused);
