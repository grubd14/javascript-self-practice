let name = "John";
let admin = name;

alert(admin);

let ourPlanet = "Earth";
let currentUser = "John";



let  x = 25;
let y = x ** 5;
//or 

let a = 25;
let b = Math.pow(a, 5);

/* console.log((23+ 34 + 97)/ 79); */

// let a = 10;
// console.log(a);
// let b = 7 * a;
// console.log(b);
//
//
// const max = 57;
// let actaul = max - 13;
// let percentage = actaul / max ;
// console.log();
 

let text = "HelloApple";
let length = text.length;
/* let part = text.slice(0, 5) */
let part = text.substring(5);

let replaceString = text.replace("Apple", "Potato");
let replaceAll = text.replaceAll("Hello", "Apple" );
let lowerCase = text.toLowerCase();
let trimSpace = text.trim();
let padded = text.padStart(5, "H");
let char = text.charAt(1);
let charUnicode = text.charCodeAt(2);
let charPropertyAccess = text[4];


//converting an string into array
let stringArray = text.split("");

console.log(stringArray);


