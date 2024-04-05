function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function checkInput(playerChoice) {
    if (playerChoice === "rock" || playerChoice === "scissors" || playerChoice === "paper") {
        return true;
    }
    else {
        return false;
    }
}

function playRound() {
    let playerChoice = prompt("Rock, Paper, or Scissors?");
    let computerChoice = getComputerChoice();
    playerChoice = playerChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    while (checkInput(playerChoice) != true) {
        playerChoice = prompt("Pick a valid option");
        playerChoice = playerChoice.toLowerCase();
    }

    if (playerChoice === computerChoice) {
        return "It's a tie!";
    }
    else if (playerChoice === "rock" && computerChoice === "paper") {
        return "You lose! Paper beats Rock";
    }
    else if (playerChoice === "scissors" && computerChoice === "rock") {
        return "You lose! Rock beats Scissors";
    }
    else if (playerChoice === "paper" && computerChoice === "scissors") {
        return "You lose! Scissors beats Paper";
    }
    else if (playerChoice === "rock" && computerChoice === "scissors") {
        return "You win! Rock beats Scissors";
    }
    else if (playerChoice === "paper" && computerChoice === "rock") {
        return "You win! Paper beats Rock";
    }
    else if (playerChoice === "scissors" && computerChoice === "paper") {
        return "You win! Scissors beats Paper";
    }
}

function playGame() {
    let playerWin = 0;
    let computerWin = 0;
    for (let i = 0; i < 5; i++) {
        let outcome = playRound();
        console.log(outcome);
        if (outcome.includes("win")) {
            playerWin += 1;
        }
        else if (outcome.includes("lose")) {
            computerWin += 1;
        }
        else if (outcome.includes("tie")) {
            i -= 1;
        }
    }

    if (playerWin > computerWin) {
        return `Player wins ${playerWin} - ${computerWin}`;
    }
    else if (computerWin > playerWin) {
        return `Computer wins ${computerWin} - ${playerWin}`;
    }
    else if (playerWin === computerWin) {
        return "It's a best of 5. How."
    }
}
