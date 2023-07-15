function getComputerChoice() {
  let choice = ["Rock", "Paper", "Scissor"];
  return choice[Math.floor(Math.random() * choice.length)];
}

/* console.log(getComputerChoice()); */
const playerSelection ="Rock";
const computerSelection = getComputerChoice();


function playRound(playerSelection, computerSelection) {
  if(playerSelection === "Rock" && computerSelection === "Paper") {
    return "You Lose Paper beats Rock!!";
  } else if(playerSelection === "Paper" && computerSelection === "Rock") {
    return "You win Paper beats Rock!";
  } else if(playerSelection === "Scissor" && computerSelection === "Rock") {
    return "You Lose Rock beats Scissor";
  } else if(playerSelection === "Rock" && computerSelection === "Scissor") {
    return "You win Rock beats Scissor";
  } else if(playerSelection === "Paper" && computerSelection == "Scissor") {
    return "You Lose Scissor beats Paper";
  } else {
    return "You win Scissor beats Paper";
  }
}


console.log(playRound(playerSelection, computerSelection));

