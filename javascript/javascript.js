let sign = prompt('Do you want to play "Rock, Paper, Scissors? Yes or No?"');


if (sign.toLowerCase() === "yes") {
  // Create a Nodelist then adding the same eventListener to nodes in that list
  // Inside forEach, need "selector/element" with arrow function to event listener
  // Inside .addEventListener must need 'event' and function to run when event is triggered
  // Event listener contains "element" name and .addEventListener('event', function)
  buttonCreate(); 
  const buttons = document.querySelectorAll('button');
  buttons.forEach((button) => {
    button.addEventListener('click', round);
  }); 
  /*let finalScore = round();
  console.log(finalScore);
  let humanScore = finalScore.charAt(0);
  console.log(humanScore);
  let comScore = finalScore.charAt(1);
  console.log(comScore);*/
  //alert(`Human has ${humanScore} wins. Computer has ${comScore}.`)
} else {
  alert("Maybe next time.")
}


function buttonCreate() {
  const body = document.querySelector('body');
  const button1 = document.createElement('button');
  button1.textContent = 'Rock';
  button1.id = 'rock';
  console.log(button1.id);
  body.appendChild(button1);
  const button2 = document.createElement('button');
  button2.textContent = 'Paper';
  button2.id = 'paper';
  console.log(button2.id);
  body.appendChild(button2);
  const button3 = document.createElement('button');
  button3.textContent = 'Scissors'; 
  button3.id = 'scissors'
  console.log(button3.id);
  body.appendChild(button3);
}


const display = document.querySelector('.display');

// This takes the game() and loop it 5 times. Then it gives "score" a value based on results.
function round(e) {
  let result;
  let score = 0;
  //for (i = 1; i <= 5; i++){
    result = game(getHumanChoice(e), getComputerChoice());
    console.log(result);
    /*if (result === 1) {
      score += 10;
      console.log(score);
    } else if (result === 2) {
      score += 1;
      console.log(score);
    } else {
      //i--
      return score.toString();
    }
  //}
  return score.toString()*/
} 

// This takes input and compares them to eachother. Depending on the answer, it will return a set number
function game(a , b) {
  const display = document.querySelector('.display');

  if (a === "rock" && b === "paper") {
    display.textContent = "You lose. Rock loses to Paper.";
      return 2;
  } else if (a === "rock" && b === "scissors") {
    display.textContent = "You win. Rock beats Scissors.";
      return 1;
  } else if (a === "paper" && b === "rock") {
    display.textContent = "You win. Paper beats Rock.";
      return 1;
  } else if (a === "paper" && b === "scissors") {
    display.textContent = "You lose. Paper loses to Scissors.";
      return 2;
  } else if (a === "scissors" && b === "paper") {
    display.textContent = "You win. Scissors beats Paper.";
      return 1;
  } else if (a === "scissors" && b ==="rock"){
    display.textContent = "You lose. Scissors loses to Rock.";
      return 2;
  } else {
    display.textContent = "We have a tie.";
      return 0;
  }
}

// This gets an input from the user. They can only chose from "rock", "paper", or "scissors"
function getHumanChoice(click) {
  let choice = click.target.id;
  console.log(choice);
  return choice;
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
  console.log(choice);  
  return choice; 
}

