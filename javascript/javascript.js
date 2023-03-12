let sign = prompt('Do you want to play "Rock, Paper, Scissors? Yes or No?"');

if (sign.toLowerCase() === "yes") {
  let finalScore = round();
  console.log(finalScore);
  let humanScore = finalScore.charAt(0);
  console.log(humanScore);
  let comScore = finalScore.charAt(1);
  console.log(comScore);
  alert(`Human has ${humanScore} wins. Computer has ${comScore}.`)
} else {
  alert("Maybe next time.")
}

// Create a Nodelist then adding the same eventListener to nodes in that list
// Inside forEach, need "selector/element" with arrow function to event listener
// Inside .addEventListener must need 'event' and function to run when event is triggered
// Event listener contains "element" name and .addEventListener('event', function)
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', round);
}); 

// This takes the game() and loop it 5 times. Then it gives "score" a value based on results.
function round(e) {
  let result;
  let score = 0;
  //for (i = 1; i <= 5; i++){
    result = game(getHumanChoice(), getComputerChoice());
    console.log(result);
    if (result === 1) {
      score += 10;
      console.log(score);
    } else if (result === 2) {
      score += 1;
      console.log(score);
    } else {
      i--
    }
  //}
  return score.toString()
} 

// This takes input and compares them to eachother. Depending on the answer, it will return a set number
function game(a , b) {
  if (a === "rock" && b === "paper") {
    alert("You lose. Rock loses to Paper.");
      return 2;
  } else if (a === "rock" && b === "scissors") {
      alert("You win. Rock beats Scissors.");
      return 1;
  } else if (a === "paper" && b === "rock") {
      alert("You win. Paper beats Rock.");
      return 1;
  } else if (a === "paper" && b === "scissors") {
      alert("You lose. Paper loses to Scissors.");
      return 2;
  } else if (a === "scissors" && b === "paper") {
      alert("You win. Scissors beats Paper.");
      return 1;
  } else if (a === "scissors" && b ==="rock"){
      alert("You lose. Scissors loses to Rock.")
      return 2;
  } else {
      alert("We have a tie.")
      return 0;
  }
}

// This gets an input from the user. They can only chose from "rock", "paper", or "scissors"
function getHumanChoice() {
  let choice = prompt("Rock, Paper, or Scissors?");
  if (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
    alert("Invalid Answer");
    getHumanChoice();
  } else {
    return choice.toLowerCase();
  }
}

// This uses a random number generator to choose an answer for the computer
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

