function getComputerChoice() {
  const strings = ["Rock", "Paper", "Scissor"];
  const randomString = Math.floor(Math.random() * strings.length);
  return strings[randomString];
}
// console.log(getComputerChoice());
const playerSelection = "Scissor";
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection ) {
    return "Its a tie!";
  } else if(playerSelection === "Rock" && computerSelection === "Paper") {
    return "You win!";
  } else if (playerSelection === "Scissor" && computerSelection === "Paper") {
    return "You win!";
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    return "You win!";
  } else {
    return "Computer Wins";
  }
}


// console.log(playRound(playerSelection, computerSelection));

function game() {
  return playRound(playerSelection, computerSelection);
}
console.log(game(playRound));

