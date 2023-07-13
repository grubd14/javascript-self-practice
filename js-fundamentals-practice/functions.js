//Callback functions 
//
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert( "You agreed." );
}

function showCancel() {
  alert( "You canceled the execution." );
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);

//here showOk is the call back for yes
//showCancel is the Callback for no 


//Arrow functions 

// let func = (arg1. arg2, argN) => expression;
// //is the shorter version of 

// let func2 = function(arg1, arg2, argN) {
//   return expression;
// };
//

//example 
let sum = (a, b) => a +b;

sum(1,2);
//is the shorter form of 

let multiply = function(a, b) {
  return a * b;
} 


function ask(question, yes, no) {
  if(question) yes();
  else no();
}

ask(
  "Do you agree?",
  () => "You agreed",
  () => "You canceled the execution.",
);
