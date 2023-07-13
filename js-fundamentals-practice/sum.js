const arrayOfNumbers = [1, 2, 5, 2];


const sum = arrayOfNumbers.reduce(function(total, startingValue) {
  return total = total + startingValue;
}, 0);

/* console.log(sum); */

const powerOfNumbers = function(a, b) {
   return Math.pow(a, b);
};

console.log(powerOfNumbers);
