
let playerWinner = [];
let computerWinner = [];
let winner = 0;



// run buttonCeate()
buttonCreate(); 

// Create a Nodelist then adding the same eventListener to nodes in that list
// Inside forEach, need "selector/element" with arrow function to event listener
// Inside .addEventListener must need 'event' and function to run when event is triggered
// Event listener contains "element" name and .addEventListener('event', function). "e" function represents the object of the action.
const selectbuttons = document.querySelectorAll('button');
const display = document.querySelector('.display');
selectbuttons.forEach(mychoice => mychoice.addEventListener('click', (e) => {
  let result;
  let score;
  const theChoice = e.target.id;
  console.log(theChoice);
  const theComputerChoice = getComputerChoice(); 
  result = game(theChoice, theComputerChoice);
  addPoints(result);
  winner = playerWinner.length + computerWinner.length
  console.log(winner);
  endWinner();
}))

// Creates buttons once the pages loads. Used to have prompt to ask if you want to play. Can make them in HTML instead of DOM.
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

// Converts the results into adding points to the player or computer's array. This makes it possible to track scores. 
function addPoints(result){
  if (result === 1) {
    playerWinner.push(result);
    console.log(playerWinner);
    return;
  } else if (result === 2) {
    computerWinner.push(result); 
    console.log(computerWinner);
    return;
  } else {
    return;
  }
}

// Checks if the total scores add up to 5. When it does, it executes who won. Also clears the arrays so you can play again.
function endWinner() {
  if(winner === 5) {
    if (playerWinner.length < computerWinner.length){
      display.textContent = `You won ${playerWinner.length} games. Computer won ${computerWinner.length} games.
      COMPUTER WINS! Click to play again.`;
      winner = 0;
      playerWinner.length = 0;
      computerWinner.length = 0;
      return;
    } else {
      display.textContent = `You won ${playerWinner.length} games. Computer won ${computerWinner.length} games. 
      YOU WIN! Click to play again.`;
      winner = 0;
      playerWinner.length = 0;
      computerWinner.length = 0;
      return;
    }
  }
  return;
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

