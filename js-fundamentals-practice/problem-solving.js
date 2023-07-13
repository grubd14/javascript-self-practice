// function fizzbuzz(num1, num2) {
//   let result = "";
//   for (let i = 1; i < num2; i++) {
//     return result[i].push("");
//     
//   }
// }

// console.log(fizzbuzz(1, 4));
//
// function fizzbuzz(num) {
//   for(let i = 1; i < num; num++) {

//   }
// }
//

let answer = parseInt(prompt("Please enter the number")); 

for (let i = 1; i <= answer; i++) {
  if ( i % 3 === 0 && i % 5 === 0) {
    console.log("Fizzbuzz");
  } else if (i % 3 === 0) {
    console.log("fizz");
  } else  if (i % 5 === 0) {
    console.log("buzz");
  } else {
    console.log(i);
  }
}
