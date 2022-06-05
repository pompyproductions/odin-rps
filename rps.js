console.log("Floatation device");

// CONSIDER:
// using 0,1,2 instead of r,p,s
// player move index == computer move index -> draw
// player move index == (computer move index + 1) % 3 -> win
// else loss

const MOVES = ["rock", "paper", "scissors"];

// Math.random() gives a value between 0 and 1
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function getComputerMove() {
    return getRandomInt(0,2);
}

function getPlayerMove() {
    while (true) {
        switch (prompt("What's your next move?").toLowerCase()) {
            case "r":
            case "rock":
                return 0;
            case "p":
            case "paper":
                return 1;
            case "s":
            case "scissors":
                return 2;
            default:
                alert("Please enter a valid response.");
        }
    }
}

function compareMoves(from, to) {
    if (from == to) {
        alert(`A draw! You both picked ${MOVES[from]}.`);
    } else if (from == (to + 1) % 3) {
        alert(`You win: ${MOVES[from]} beats ${MOVES[to]}.`);
    } else {
        alert(`You lose: ${MOVES[to]} beats ${MOVES[from]}.`);
    }
}

function getYesNo(msg) {
    while (true) {
        switch (prompt(msg).toLowerCase()) {
            case "yes":
            case "y":
            case "ok":
            case "yup":
            case "yep":
                return true;
            case "nope":
            case "no":
            case "n":
                return false;
            default:
                alert("Please enter a valid response.");
        }
    }
}

let computerMove, playerMove;
let isPlaying = true;
while (isPlaying) {
    computerMove = getComputerMove();
    playerMove = getPlayerMove();
    compareMoves(playerMove, computerMove);
    isPlaying = getYesNo("Do you want to play again?")
}