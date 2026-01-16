let humanScore = 0;
let computerScore = 0;

const divScore = document.createElement("div");
divScore.style.marginTop = "5px";
divScore.style.marginLeft = "5px";
document.body.appendChild(divScore);

const divRound = document.createElement("div");
document.body.appendChild(divRound);

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

function getComputerChoice() {
  const randomValue = Math.floor(Math.random() * 3);
  return getChoice(randomValue);
}

function getHumanChoice() {
  const userChoice = parseInt(prompt("Enter a value between 0 to 2 (0: rock, 1: paper, 2: scissors):"));
  return getChoice(userChoice);
}

function displayScore() {
  const message = `Human score: ${humanScore} - computer score: ${computerScore}`;
  divScore.textContent = message;
}

function addMessage(message) {
  const p = document.createElement("p");
  p.textContent = message;

  divRound.appendChild(p);
}

function displayWinner() {
  if (humanScore === 5) {
    const message = "End game: you win!";
    addMessage(message);
  } else if (computerScore === 5) {
    divRound.textContent = "";
    const message = "End game: you lose!";
    addMessage(message);
  }
}

function playRound(humanChoice, computerChoice) {
  switch (humanChoice) {
    case "scissors":
      switch (computerChoice) {
        case "scissors":
          addMessage(` - human choice "${humanChoice}" vs computer choice "${computerChoice}": tie! No one wins.`);
          break;
        case "paper":
          addMessage(` - human choice "${humanChoice}" vs computer choice "${computerChoice}": you win! Scissors beats paper.`);
          humanScore++;
          break;
        default:
          addMessage(` - human choice "${humanChoice}" vs computer choice "${computerChoice}": you lose! Rock beats scissors.`);
          computerScore++;
          break;
      }
      break;
    case "paper":
      switch (computerChoice) {
        case "scissors":
          addMessage(` - human choice "${humanChoice}" vs computer choice "${computerChoice}": you lose! Scissors beats paper.`);
          computerScore++;
          break;
        case "paper":
          addMessage(` - human choice "${humanChoice}" vs computer choice "${computerChoice}": tie! No one wins.`);
          break;
        default:
          addMessage(` - human choice "${humanChoice}" vs computer choice "${computerChoice}": you win! Paper beats rock.`);
          humanScore++;
          break;
      }
      break;
    default:
      switch (computerChoice) {
        case "scissors":
          addMessage(` - human choice "${humanChoice}" vs computer choice "${computerChoice}": you win! Rock beats scissors.`);
          humanScore++;
          break;
        case "paper":
          addMessage(` - human choice "${humanChoice}" vs computer choice "${computerChoice}": you lose! Paper beats rock.`);
          computerScore++;
          break;
        default:
          addMessage(` - human choice "${humanChoice}" vs computer choice "${computerChoice}": tie! No one wins.`);
          break;
      }
      break;
  }

  displayScore();

  displayWinner();
}

function playGame() {
  displayScore();

  const buttonRock = document.createElement("button");
  buttonRock.textContent = "Rock";
  buttonRock.style.margin = "5px";
  const buttonPaper = document.createElement("button");
  buttonPaper.textContent = "Paper";
  buttonPaper.style.margin = "5px";
  const buttonScissors = document.createElement("button");
  buttonScissors.textContent = "Scissors";
  buttonScissors.style.margin = "5px";

  buttonRock.addEventListener("click", (event) => {
    playRound("rock", getComputerChoice());
  });

  buttonPaper.addEventListener("click", (event) => {
    playRound("paper", getComputerChoice());
  });

  buttonScissors.addEventListener("click", (event) => {
    playRound("scissors", getComputerChoice());
  });

  document.body.insertBefore(buttonRock, divScore);
  document.body.insertBefore(buttonPaper, divScore);
  document.body.insertBefore(buttonScissors, divScore);
}

playGame();