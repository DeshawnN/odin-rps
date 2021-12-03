const buttons = document.querySelectorAll("button");
const results = document.querySelector(".results .text");
const scoresContainer = document.querySelector(".results .scores");
let scores = [0,0];
const resetButton = document.querySelector(".results .reset");

resetButton.addEventListener('click', () => {
    scores = [0,0];
    results.textContent = "";
    scoresContainer.textContent = "";
    resetButton.setAttribute("disabled", true);
}, {capture: true});

buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        if (scores[0] === 5 || scores[1] === 5) return;

        const selection = event.target.getAttribute("data-selection");
        
        const resultText = playRound(selection);
        
        if (resultText.includes("win")) scores[0]++;
        else if (resultText.includes("lose")) scores[1]++;

        if (scores[0] === 5 || scores[1] === 5) {
            resetButton.removeAttribute("disabled");
        }

        if (scores[0] === 5) {
            results.textContent = `Player Wins`;
        } else if (scores[1] === 5) {
            results.textContent = `COM Wins`;
        } else {
            results.textContent = `${resultText}`;
        }
        
        scoresContainer.textContent = `Player: ${scores[0]} | COM: ${scores[1]}`;
    });
});

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