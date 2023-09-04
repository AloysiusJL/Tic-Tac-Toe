let myArray = [
    "", "", "",
    "", "", "",
    "", "", ""
];

let computerArray = [0, 1, 2, 3, 4, 5, 6, 7, 8]

const player1 = "X";
const player2 = "O";
let currentPlayer = player1;

const G0 = document.getElementById('G0')
const G1 = document.getElementById('G1')
const G2 = document.getElementById('G2')
const G3 = document.getElementById('G3')
const G4 = document.getElementById('G4')
const G5 = document.getElementById('G5')
const G6 = document.getElementById('G6')
const G7 = document.getElementById('G7')
const G8 = document.getElementById('G8')
const grid = document.querySelectorAll('.grid')
const nowPlaying = document.querySelector('#isPlaying')
const winner = document.querySelector('#winnerMessage')
const playAgainButton = document.getElementById('playAgainButton')
const modal = document.getElementById('modal')
const playWithPlayerButton = document.getElementById('playWithPlayerButton')
const playWithComputerButton = document.getElementById('playWithComputerButton')

console.log(myArray);

// Initialize game mode (Player vs Player or Player vs Computer)
let isPlayerVsComputer = false;

playWithPlayerButton.addEventListener('click', () => {
    isPlayerVsComputer = false;
    modal.style.display = 'none';
    startGame();
});

playWithComputerButton.addEventListener('click', () => {
    isPlayerVsComputer = true;
    modal.style.display = 'none';
    startGame();
});

function startGame() {
    // Initialize game board
    myArray = ["", "", "", "", "", "", "", "", ""];
    grid.forEach(box => {
        box.textContent = "";
    });
    playAgainButton.style.display = 'none';
    currentPlayer = player1;
    nowPlaying.textContent = 'Now Playing: Player 1 (X)';
    winner.textContent = '';
    winner.style.display = 'none';
}

// Add a function to check if the game is over
function isGameOver() {
    return myArray.every(element => element !== "") || checkWinner(player1) || checkWinner(player2);
}

// Win condition
function checkWinner(player) {
    if (
        (myArray[0] == player && myArray[1] == player && myArray[2] == player) ||
        (myArray[3] == player && myArray[4] == player && myArray[5] == player) ||
        (myArray[6] == player && myArray[7] == player && myArray[8] == player) ||
        (myArray[0] == player && myArray[4] == player && myArray[8] == player) ||
        (myArray[6] == player && myArray[4] == player && myArray[2] == player) ||
        (myArray[0] == player && myArray[3] == player && myArray[6] == player) ||
        (myArray[1] == player && myArray[4] == player && myArray[7] == player) ||
        (myArray[2] == player && myArray[5] == player && myArray[8] == player)
    ) {
        return true;
    }
    return false;
}

function populateArray(index) {
    myArray[index] = currentPlayer;
}

function changePlayer() {
    currentPlayer = currentPlayer === player1 ? player2 : player1;
}

function displayPlayer() {
    if (currentPlayer === player1) nowPlaying.textContent = 'Now Playing: Player 1 (X)';
    else nowPlaying.textContent = 'Now Playing: Player 2 (O)';
}

// Game logic
grid.forEach((box, index) => {
    box.addEventListener('mouseover', () => {
        if (!box.textContent && !isGameOver()) {
            box.classList.add('hover')
        }
    })
    box.addEventListener('mouseleave', () => {
        box.classList.remove('hover')
    })
    box.addEventListener('click', () => {
        if (!box.textContent && !isGameOver()) {
            box.textContent = currentPlayer;
            populateArray(index);
            if (checkWinner(currentPlayer)) {
                winner.textContent = `Player ${currentPlayer} wins!`;
                winner.style.display = 'block';
                playAgainButton.style.display = 'block';
            } else if (myArray.every(element => element !== "")) {
                winner.textContent = `It's a tie!`;
                winner.style.display = 'block';
                playAgainButton.style.display = 'block';
            } else {
                changePlayer();
                displayPlayer();
                if (isPlayerVsComputer && currentPlayer === player2) {
                    computerMove();
                }
            }
        }
    })
})

playAgainButton.addEventListener('click', () => {
    startGame();
    if (isPlayerVsComputer && currentPlayer === player2) {
        computerMove();
    }
});

function computerMove() {
    // Implement the logic for the computer's move here
    // For simplicity, you can randomly select an available empty cell
    const emptyCells = myArray.reduce((acc, value, index) => {
        if (value === "") {
            acc.push(index);
        }
        return acc;
    }, []);

    if (emptyCells.length > 0) {
        const randomIndex = Math.floor(Math.random() * emptyCells.length);
        const computerChoice = emptyCells[randomIndex];
        setTimeout(() => {
            grid[computerChoice].click();
        }, 1000); // Add a delay to make it seem like the computer is "thinking"
    }
}

displayPlayer();
modal.style.display = 'block'; // Display the modal to choose game mode
