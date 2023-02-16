let sign = prompt('Do you want to play "Rock, Paper, Scissors?"');

if (sign.toLowerCase() === "yes") {
  game(getHumanChoice(), getComputerChoice());
} else {
  alert("Maybe next time.")
}

function round() {
  for (i = 1; i < 5; i++) {

  }
}

function game(a , b) {
  if (a === "rock"){  
    switch(a === "rock") {
      case (b === "rock"):
        alert("We have a tie. Redo");
        game(getHumanChoice(), getComputerChoice());
        break;  
      case (b === "paper"):
        alert("Paper beats Rock. You lose.");
        break;  
      case (b === "scissors"):
        alert("Rock beats Scissors. You win.");
        break;  
    }
  } else if (a === "paper") {
    switch(a === "paper") {
      case (b === "paper"):
        alert("We have a tie. Redo");
        game(getHumanChoice(), getComputerChoice());
        break;  
      case (b === "rock"):
        alert("Paper beats Rock. You win.");
        break;  
      case (b === "scissors"):
        alert("Scissors beats paper. You lose.");
        break;  
    }
  } else {
    switch(a === "scissors") {
      case (b === "scissors"):
        alert("We have a tie. Redo");
        game(getHumanChoice(), getComputerChoice());
        break;  
      case (b === "paper"):
        alert("Scissors beats paper. You win.");
        break;  
      case (b === "rock"):
        alert("Rock beats Scissors. You lose.");
        break;  
    }
  }
}

function getHumanChoice() {
  let choice = prompt("Rock, Paper, or Scissors?");
  if (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
    alert("Invalid Answer");
    getHumanChoice();
  }
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
          choice = "scissors";
      }
    return choice; 
}

