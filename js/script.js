function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];
    const rand = Math.floor(Math.random() * choices.length);
    
    return choices[rand];
}