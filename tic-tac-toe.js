
document.addEventListener("DOMContentLoaded", function () {
    const squares = document.querySelectorAll("#board div");

    squares.forEach(function (square) {
        square.classList.add("square");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const squares = document.querySelectorAll("#board div");

    let currentPlayer = "X";

    // Exercise 1: Style the squares
    squares.forEach(function (square) {
        square.classList.add("square");
    });

    // Exercise 2: Add X or O when a square is clicked
    squares.forEach(function (square) {
        square.addEventListener("click", function () {
            square.textContent = currentPlayer;
            square.classList.add(currentPlayer);

            if (currentPlayer === "X") {
                currentPlayer = "O";
            } else {
                currentPlayer = "X";
            }
        });
    });
});
