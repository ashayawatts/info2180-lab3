
document.addEventListener("DOMContentLoaded", function () {
    const squares = document.querySelectorAll("#board div");

    let currentPlayer = "X";

    // Exercise 1: Styling the squares
    squares.forEach(function (square) {
        square.classList.add("square");
    });

    // Exercise 2: Adding X or O when a square is clicked
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

   
    // Exercise 3: Highlighting a square on hover
    squares.forEach(function (square) {
        square.addEventListener("mouseover", function () {
            square.classList.add("hover");
        });

        square.addEventListener("mouseout", function () {
            square.classList.remove("hover");
        });
    });
