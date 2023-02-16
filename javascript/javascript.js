let sign = prompt('Do you want to play "Rock, Paper, Scissors?"');

if (sign.toLowerCase() === "yes") {
    game(getHumanChoice(), getComputerChoice());
} else {
    alert("Maybe next time.")
}

function game(a , b) {
  console.log(a)  
  console.log(b)
}

function getHumanChoice() {
  let choice = prompt("Rock, Paper, or Scissors?");
  return choice.toLowerCase();
}

function getComputerChoice() {
    let choice;
    let randomNum = Math.floor(Math.random() * 3) + 1; 
      if (randomNum === 1) {
          choice = "rock";
      } else if (randomNum === 2) {
          choice = "paper";
      } else {
          choice = "scissor";
      }
    return choice; 
  }

