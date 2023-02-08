function getUserChoice (userInput) {
    userInput = userInput.toLowerCase();
if (userInput === "rock" ||userInput === "paper"||userInput === "scissors" ) {
    return userInput 
} else {console.log("Error!")};
} 

function getComputerChoice () {
    var computerNumber = Math.floor(Math.random() * 3);

    if (computerNumber === 0){
        return 'rock';
    } else if (computerNumber === 1) {
        return 'paper';
    } else if (computerNumber === 2) {
        return 'scissors'
    }
};

function determineWinner (userChoice, computerChoice ) {
    if (userChoice === computerChoice) {
        return 'Game was a tie';
    }
}

if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
        return 'The computer won';
    }
}

if (computerChoice === 'scissors'){
    return 'the user won';
}

if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
        return 'The computer won';
    }

    if (computerChoice === 'rock') {
        return 'the user won';
    }
}

if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
        return 'the computer won';
    }

    if (computerChoice === 'paper') {
        return 'the user won';
    }
};

var playGame = function () {
    var userChoice = getComputerChoice('rock');
    var computerChoice = getComputerChoice();

    console.log('user choise', userChoice);
    console.log('computer choice'computerChoice);

    var winner = determineWinner(userChoice, computerChoice);
    console.log(winner);
};

playGame();

