function getComputerChoice() {
  const result = Math.floor(Math.random() * 3);
  if (result === 2) {
    return "scissors";
  }
  else if (result === 1) {
    return "paper"
  }
  else {
    return "rock";
  }
}

console.log(getComputerChoice());