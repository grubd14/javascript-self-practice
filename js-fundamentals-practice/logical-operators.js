// ||(OR) , &&(AND), ! (NOT), ??(Nullish)
//

//(true || true)
//(false || true)
//(true || false)
//(false || false)

let hour = 9;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
  return "The office is closed";
}

let firstName = "";
let lastName = "";
let nickName = "Supercoder";

console.log(firstName || lastName || nickName || "Anon");


// // &&(AND)

let timeHour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
  return "Time is 12:30";
}





let age = "14";

if (!(age >= 14 && age <= 90))
if (age < 14 || age > 90)
console.log();


let userName = prompt("Who is there?", '');

if (userName === "Admin") {
  let userPassword = prompt("Enter the password", '');

  if (userPassword === "TheMaster") {
    alert( "Welcome");
  } else if (userPassword === '' || userPassword === null ) {
    alert(" Canceled");
  } else {
    alert('Wrong password');
  }
} else if (userName === '' || userName === null) {
  alert(`Canceled`);
} else {
  alert(`I don't know you!`);
}



function checkAge(age) {
  return (age > 18) || confirm("Did your parents allow you?");
}


function checkLeastNumber(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

function powerOfNumber(a, b) {

  let result = a;

  for (let index = 1; index < b; index++) {
    result = result * a;  
  }
  return result;
}
//here the variable being called inside the for loop 
//is constantly updating the value of the outside variable
console.log(powerOfNumber(2,5));
