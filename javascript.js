function getComputerChoice() {
  const randomValue = Math.floor(Math.random() * 3);
  return getChoice(randomValue);
}

function getChoice(value) {
  if (value === 2) {
    return "scissors";
  }
  else if (value === 1) {
    return "paper"
  }
  else {
    return "rock";
  }
}

function getHumanChoice() {
  let userChoice = parseInt(prompt("Enter a value between 0 to 2:"));
  return getChoice(userChoice);
}