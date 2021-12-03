const buttons = document.querySelectorAll("button")
const scores = [0,0];
buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        const selection = event.target.getAttribute("data-selection");
        const results = document.querySelector(".results .text");
        const resultText = playRound(selection);
        const scoresContainer = document.querySelector(".results .scores");
        
        
        if (resultText.includes("win")) scores[0]++;
        else if (resultText.includes("lose")) scores[1]++;

        results.textContent = `${resultText}`;
        scoresContainer.textContent = `Player: ${scores[0]} | COM: ${scores[1]}`;
        
    });
});

function game() {
    let playerScore = 0;
    let cpuScore = 0;
    
    for (let i = 0; i < 5; i++) {
        let result = playRound();
        
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

function playRound(playerChoice) {
    const playerSelection = makeSelection(playerChoice);
    const computerSelection = computerPlay();
    
    const result = roundValidation(playerSelection, computerSelection);

    if (result === "win") return `You win! ${playerSelection} beats ${computerSelection}`;
    else if (result === "lose") return `You lose! ${computerSelection} beats ${playerSelection}`;
    else return "It was a tie";
}

function roundValidation(playerSelection, computerSelection) {
    const choices = {
        "rock": {"beats": "scissors", "beatenBy": "paper"},
        "paper": {"beats": "rock", "beatenBy": "scissors"},
        "scissors": {"beats": "paper", "beatenBy": "rock"}
    }

    const playerChoice = choices[playerSelection.toLowerCase()];
    const cpuChoice = computerSelection.toLowerCase();
    
    if (playerChoice.beats === cpuChoice) {
        return "win";
    } else if (playerChoice.beatenBy === cpuChoice) {
        return "lose";
    }
    return "tie";
}

function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];
    const rand = Math.floor(Math.random() * choices.length);
    
    return choices[rand];
}

function makeSelection(selection) {
    let choice = selection;
    
    choice = choice[0].toUpperCase() + choice.slice(1).toLowerCase();

    return choice;
}