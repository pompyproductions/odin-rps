console.log("Floatation device");

const MOVES = ["rock", "paper", "scissors"];

// Math.random() gives a value between 0 and 1
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function computerMove() {
    let newMove = MOVES[getRandomInt(0,2)];
    console.log(newMove);
}

computerMove();
computerMove();
computerMove();
computerMove();
computerMove();
computerMove();
computerMove();