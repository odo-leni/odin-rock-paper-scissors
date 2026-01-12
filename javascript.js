let humanScore = 0;
let computerScore = 0;

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
  let userChoice = parseInt(prompt("Enter a value between 0 to 2 (0: rock, 1: paper, 2: scissors):"));
  return getChoice(userChoice);
}

function playRound(humanChoice, computerChoice) {
  console.log(`Human choice "${humanChoice}" vs computer choice "${computerChoice}":`);
  switch (humanChoice) {
    case "scissors":
      switch (computerChoice) {
        case "scissors":
          console.log("Tie! No one wins.");
          break;
        case "paper":
          console.log("You win! Scissors beats paper.");
          humanScore++;
          break;
        default:
          console.log("You lose! Rock beats scissors.");
          computerScore++;
          break;
      }
      break;
    case "paper":
      switch (computerChoice) {
        case "scissors":
          console.log("You lose! Scissors beats paper.");
          computerScore++;
          break;
        case "paper":
          console.log("Tie! No one wins.");
          break;
        default:
          console.log("You win! Paper beats rock.");
          humanScore++;
          break;
      }
      break;
    default:
      switch (computerChoice) {
        case "scissors":
          console.log("You win! Rock beats scissors.");
          humanScore++;
          break;
        case "paper":
          console.log("You lose! Paper beats rock.");
          computerScore++;
          break;
        default:
          console.log("Tie! No one wins.");
          break;
      }
      break;
  }
}

function displayScore() {
  console.log(`Human score: ${humanScore} - computer score: ${computerScore}`);
}

function playGame() {
  displayScore();

  for (let i = 0; i <= 4; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    displayScore();
  }

  if (humanScore > computerScore) {
    console.log("End game: you win!");
  }
  else if(humanScore > computerScore){
     console.log("End game: a tie! No one wins.");
  }
  else {
    console.log("End game: you lose!");
  }
}

playGame();