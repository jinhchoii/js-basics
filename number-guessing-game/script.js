let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget(){
    return Math.floor(Math.random() * 10);
}

function compareGuesses(humanGuess, computerGuess, target){
    if (humanGuess >= 10 || humanGuess < 0){
        alert("Your number is out of range.");
    }
    const humanDiff = Math.abs(target - humanGuess);
    const computerDiff = Math.abs(target - computerGuess);
    return humanDiff <= computerDiff;
}

function updateScore(winner){
    if (winner === 'human') {
        humanScore++;
    } else {
        computerScore++;
    }
}

function advanceRound() {
    currentRoundNumber++;
}