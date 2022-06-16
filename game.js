// CONSIDER:
// using 0,1,2 instead of r,p,s
// player move index == computer move index -> draw
// player move index == (computer move index + 1) % 3 -> win
// else loss

const MOVES = ["rock", "paper", "scissors"];
let playerName = "Anonymous";

function getComputerMove() {
    return getRandomInt(0,2);
}

function getPlayerMove() {
    while (true) {
        switch (prompt("What's your move?").toLowerCase()) {
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
        return [0, 0];
    } else if (from == (to + 1) % 3) {
        alert(`You win: ${MOVES[from]} beats ${MOVES[to]}.`);
        return [1, 0];
    } else {
        alert(`You lose: ${MOVES[to]} beats ${MOVES[from]}.`);
        return [0, 1];
    }
}

function game(rounds=5) {
    let score = [0, 0];
    for (let i = 0; i < rounds; i++) {
        computerMove = getComputerMove();
        playerMove = getPlayerMove();
        score = scoreUpdate(score, compareMoves(playerMove, computerMove));
    }
    alert(`${rounds} rounds of Rock Paper Scissors are over. Final result:
    Player: ${score[0]} | Computer: ${score[1]}`);
}


// aux functions
function getInputYesNo(msg) {
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

function getInputInteger(msg) {
    let value = prompt(msg);
    while (isNaN(parseInt(value))) {
        value = prompt("Please enter a valid number.")
    }
    return parseInt(value);
}

// Math.random() gives a value between 0 and 1
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// skips NaN values, adds new values to array
function scoreUpdate(arr1, arr2) {
    for (let i = 0; i < arr2.length; i++) {
        if (isNaN(Number(arr2[i]))) {continue};
        arr1[i] += Number(arr2[i]);
    }
    return arr1;
}

console.log("game.js: Floatation device");

// game variables?
let computerMove, playerMove;

// game loop
// let isPlaying = true;
// while (isPlaying) {
//     game(getInputInteger("How many rounds would you like to play?"));
//     isPlaying = getInputYesNo("Would you like to play again?");
// }
// alert("Thanks for playing, come back anytime!");