const computerSelection = computerPlay();
const playerSelection = makeSelection();

console.log(playRound(playerSelection, computerSelection));

function playRound(playerSelection, computerSelection) {
    const winMessage = `You win! ${playerSelection} beats ${computerSelection}`;
    const loseMessage = `You lose! ${computerSelection} beats ${playerSelection}`;

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (playerSelection === "Rock") {
        if (computerSelection === "Paper") return loseMessage;
        else if (computerSelection === "Scissors") return winMessage; 
    } else if (playerSelection === "Paper") {
        if (computerSelection === "Scissors") return loseMessage;
        else if (computerSelection === "Rock") return winMessage;
    } else if (playerSelection === "Scissors") {
        if (computerSelection === "Rock") return loseMessage;
        else if (computerSelection === "Paper") return winMessage;
    }
    
}

function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];
    const rand = Math.floor(Math.random() * choices.length);
    
    return choices[rand];
}

function makeSelection() {
    let choice;
    let validChoice = false;

    while (!validChoice) {
        choice = prompt("Rock, Paper or Scissors?");
        if (choice !== null) {
            choice = choice.toLowerCase();
        }

        validChoice = (choice === "rock" || choice === "paper" || choice === "scissors") ? true : false;
    }

    choice = choice[0].toUpperCase() + choice.slice(1).toLowerCase();

    return choice;
}