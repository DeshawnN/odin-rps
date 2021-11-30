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

    return choice;
}