function getUserChoice (userInput) {
    userInput = userInput.toLowerCase();
if (userInput === "rock" ||userInput === "paper"||userInput === "scissors" ) {
    return userInput 
} else {console.log("Error!")};
} 

function getComputerChoice () {
    Math.floor(Math.random()* 3);
} 
