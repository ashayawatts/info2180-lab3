
document.addEventListener("DOMContentLoaded", function () {
    const board = document.querySelector("#board");
    const squares = board.querySelectorAll(":scope > div");
    const status = document.querySelector("#status");
    const newGame = document.querySelector("#reset");

    let currentPlayer = "X";
    let gameOver = false;
    let gameState = ["", "", "", "", "", "", "", "", ""];

    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    // Exercise 1: Style all nine squares
    squares.forEach(function (square) {
        square.classList.add("square");
    });

    // Exercise 2: Place X or O when a square is clicked
    squares.forEach(function (square, index) {
        square.addEventListener("click", function () {
            if (gameOver || gameState[index] !== "") {
                return;
            }

            gameState[index] = currentPlayer;
            square.textContent = currentPlayer;
            square.classList.add(currentPlayer);

            // Exercise 4: Check whether the current player won
            const hasWon = winningCombinations.some(function (combination) {
                return combination.every(function (position) {
                    return gameState[position] === currentPlayer;
                });
            });

            if (hasWon) {
                status.textContent =
                    "Congratulations! " + currentPlayer + " is the Winner!";
                status.classList.add("you-won");
                gameOver = true;
                return;
            }

            currentPlayer = currentPlayer === "X" ? "O" : "X";
        });

        // Exercise 3: Add and remove the hover style
        square.addEventListener("mouseenter", function () {
            if (!gameOver && gameState[index] === "") {
                square.classList.add("hover");
            }
        });

        square.addEventListener("mouseleave", function () {
            square.classList.remove("hover");
        });
    });

    // Exercise 5: Restart the game
    if (newGame) {
        newGame.addEventListener("click", function () {
            gameState = ["", "", "", "", "", "", "", "", ""];
            currentPlayer = "X";
            gameOver = false;

            squares.forEach(function (square) {
                square.textContent = "";
                square.classList.remove("X", "O", "hover");
            });

            status.textContent =
                "Move your mouse over a square and click to play an X or an O.";
            status.classList.remove("you-won");
        });
    }
});

