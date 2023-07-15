function addSeven(add) {
  let result = add + 7;
  return result;
}

function multiplyTwoNumbers(num1, num2) {
  let result = num1 * num2;
  return result;
}


function capitalize(string) {
  // let stringArray = string.split("");
  // let capitalizedString = stringArray[0].toUpperCase();

  let capitalizedString = string[0].toUpperCase() + string.slice(1).toLowerCase();
  ;
   
  return capitalizedString;
}

function lastLetter(string) {
  let result = string.charAt(string.length - 1);
  return result;
}

console.log(lastLetter("javascript"))
/* console.log(capitalize("hello")); */
// console.log(multiplyTwoNumbers(3, 2));
// console.log(addSeven(3));
