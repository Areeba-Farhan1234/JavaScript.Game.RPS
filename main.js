let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const mesg = document.querySelector("#mesg");

const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  mesg.innerText = "Game was Draw. Play again.";
  mesg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, computerChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    mesg.innerText = `You win! Your ${userChoice} beats ${computerChoice}`;
    mesg.style.backgroundColor = "green";
  } else {
    computerScore++;
    computerScorePara.innerText = computerScore;
    mesg.innerText = `You lost. ${computerChoice} beats your ${userChoice}`;
    mesg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  //Generate computer choice
  const computerChoice = genCompChoice();

  if (userChoice === computerChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors, paper
      userWin = computerChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = computerChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = computerChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, computerChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});