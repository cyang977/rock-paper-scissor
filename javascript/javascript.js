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
  return choice 
}
console.log(getComputerChoice());