const userInput = document.getElementById("user");
const playBtn = document.getElementById("play-btn");
const computerChoiceSpan = document.getElementById("computer-choice");
const resulText = document.getElementById("result-text");
const userScoreSpan = document.getElementById("user-point");
const computerScoreSpan = document.getElementById("computer-point");
const resetBtn = document.getElementById("reset-btn");



let userScore = 0; 
let computerScore = 0; 
const choices = ["rock", "paper", "scissors"];

// Play function
function playGame(){
    const userChoice = userInput.value.toLowerCase();

    if (!choices.includes(userChoice)){
        resulText.textContent = "Invalid choice!";
        return

    }

    // Random number.  Math.floor -> Round to the nearest int , Math.random -> gives a radom number 0.0 -> 1.0 
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    computerChoiceSpan.textContent = computerChoice; 


    //Result
    if (userChoice === computerChoice) {
        resulText.textContent = "It's tie";

    } else if ((userChoice === "rock" && computerChoice === "scissors") || (userChoice === "paper" && computerChoice === "rock") || (userChoice === "scissors" && computerChoice === "paper")) {
        resulText.textContent = "You win!";
        userScore++; 
    } else {
        resulText.textContent = "Computer wins! Hahahahah Loseeeerrr :(";
        computerScore++; 
    }

    //Change scores
    userScoreSpan.textContent = userScore;
    computerScoreSpan.textContent = computerScore;

    userInput.value= ""; //clear whatever the user typed

}

//Reset
function resetGame(){
    userScore = 0;
    computerScore = 0;
    userScoreSpan.textContent = userScore;
    computerScoreSpan.textContent = computerScore;
    computerChoiceSpan.textContent = "?";
    resulText.textContent = "";
    userInput.value= "";
}



// Buttons Activation
playBtn.addEventListener("click", playGame)
resetBtn.addEventListener("click", resetGame)