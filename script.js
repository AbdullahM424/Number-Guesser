let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Generate Target function
function generateTarget(){
    return Math.floor(Math.random()*10);
};

// Comparison function 
function compareGuesses(humanGuess, computerGuess, targetGuess){
    if(humanGuess === targetGuess){
        return true;
    } 
    else if (computerGuess === targetGuess){
        return false;
    }
    else {
        if (Math.abs(targetGuess - humanGuess) < Math.abs(targetGuess - computerGuess)){
            return true;
        }
        // else if (Math.abs(targetGuess - humanGuess) > Math.abs(targetGuess - computerGuess)){
        //     return true;
        // }
        else {
            return false;
        }
    }
};

// Update score function
function updateScore(winner){
    winner === 'human' ? humanScore++ : computerScore++;
};

function advanceRound(){
    return currentRoundNumber++;
};