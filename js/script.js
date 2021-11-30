game();

function game() {
    let playerScore = 0;
    let cpuScore = 0;
    
    for (let i = 0; i < 5; i++) {
        const playerSelection = makeSelection();
        const computerSelection = computerPlay();

        let result = playRound(playerSelection, computerSelection);
        
        console.log(result);
        alert(result);
        
        if (result.includes("win")) playerScore++;
        else if (result.includes("lose")) cpuScore++;
        
        console.log(`Player Score: ${playerScore}, CPU Score: ${cpuScore}`);
    }

    if (playerScore > cpuScore) console.log("Winner: Player");
    else if (playerScore < cpuScore) console.log("Winner: CPU");
    else console.log("Somehow... that ended in a tie");
}

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