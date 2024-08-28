


const board = document.getElementById("rows");
const grid = document.getElementsByClassName("block")
const players = ['X', 'O'];
let currentPlayer = 'X';

const winningStates = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

const gameMessage = document.createElement("h1");
gameMessage.textContent = "Player's X Turn";
gameMessage.style.color = "white";
gameMessage.style.fontSize = "20px";
gameMessage.style.textAlign = "center";
const turns = document.getElementById("players");
turns.after(gameMessage);

function win(currentPlayer) {
    for (let i = 0; i < winningStates.length; i++) {
        const [a, b, c] = winningStates[i];
        if (grid[a].textContent === currentPlayer && grid[b].textContent === currentPlayer && grid[c].textContent === currentPlayer) {
            return true;
        }
    }
    return false;
}

function tie() {
    for (let i = 0; i < grid.length; i++) {
        if (grid[i].textContent == '') {
            return false;
        }
    }
    return true;
}


function restart() {
    for (let i = 0; i < grid.length; i++) {
        grid[i].textContent = "";
    }
    gameMessage.textContent = "Player's X Turn";
    currentPlayer = players[0];
}

for (let i = 0; i < grid.length; i++) {
    grid[i].addEventListener('click', () => {
        if (grid[i].textContent !== "") {
            return;
        }
        grid[i].textContent = currentPlayer;
        if (win(currentPlayer)) {
            gameMessage.textContent = `Game over! Player's ${currentPlayer} wins!`;
            return;
        }
        if (tie()) {
            gameMessage.textContent = "Game Tie!";
            return;
        }
        if (currentPlayer == players[0]) {
            currentPlayer = players[1];
        }
        else {
            currentPlayer = players[0];
        }
        if (currentPlayer == players[0]) {
            gameMessage.textContent = "Player's X Turn";
        }
        else {
            gameMessage.textContent = "Player's O Turn";
        }
    })
}