const rockButton = document.querySelector(".rock");
const scissorsButton = document.querySelector(".scissors");
const paperButton = document.querySelector(".paper");
const outcome = document.querySelector(".outcome");
const roundResult = document.querySelector(".round-result");
const score = document.querySelector(".score");
const endResult = document.querySelector(".end-result")

let playerWin = 0;
let computerWin = 0;

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerChoice) {
    if (playerWin === 0 && computerWin === 0) {
        endResult.innerText = "";
    }
    let computerChoice = getComputerChoice();
    
    if (playerChoice === computerChoice) {
        roundResult.innerText = "It's a tie!";
    }
    else if (playerChoice === "rock" && computerChoice === "paper") {
        roundResult.innerText = "You lose! Paper beats Rock";
        addComputerWin();
    }
    else if (playerChoice === "scissors" && computerChoice === "rock") {
        roundResult.innerText = "You lose! Rock beats Scissors";
        addComputerWin();
    }
    else if (playerChoice === "paper" && computerChoice === "scissors") {
        roundResult.innerText = "You lose! Scissors beats Paper";
        addComputerWin();
    }
    else if (playerChoice === "rock" && computerChoice === "scissors") {
        roundResult.innerText = "You win! Rock beats Scissors";
        addPlayerWin()
    }
    else if (playerChoice === "paper" && computerChoice === "rock") {
        roundResult.innerText = "You win! Paper beats Rock";
        addPlayerWin()
    }
    else if (playerChoice === "scissors" && computerChoice === "paper") {
        roundResult.innerText = "You win! Scissors beats Paper";
        addPlayerWin()
    }
}

function addPlayerWin() {
    playerWin += 1;
}

function addComputerWin() {
    computerWin += 1;
}

function scoreCount() {
    score.innerText = `Player ${playerWin} - ${computerWin} Computer`;

    if (playerWin + computerWin === 5) {
        if (playerWin > computerWin) {
            endResult.innerText = "Player Wins!"
        }
        else if (computerWin > playerWin) {
            endResult.innerText = "Computer Wins!"
        }

        reset();
    }
}

function reset() {
    playerWin = 0;
    computerWin = 0;
}

rockButton.addEventListener('click', () => {
    let playerChoice = "rock";
    playRound(playerChoice);
    scoreCount();
});

scissorsButton.addEventListener('click', () => {
    let playerChoice = "scissors";
    playRound(playerChoice);
    scoreCount();
});

paperButton.addEventListener('click', () => {
    let playerChoice = "paper";
    playRound(playerChoice);
    scoreCount();
});