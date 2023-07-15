//Looping array elements
//
// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// function fruitsArray() {
// let fruitsArrayLength = fruits.length; 
// let string = "I Like ";
// for(let index = 0; index < fruitsArrayLength; index++) {
//    return string = string + fruits[index] + " very much.";
// }
// }

/* console.log(fruitsArray()); */
const fruits = ["Banana", "Orange", "Apple", "Grape"];

let string = "I like ";
fruits.forEach(fruitsArray);

function fruitsArray(value) {
  return string = string + value + " very much.";
}

console.log(fruitsArray());
