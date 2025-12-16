const board = document.getElementById("sudoku-board");

const puzzle = [
    5,3,"", "",7,"", "", "", "",
    6,"", "", 1,9,5,"", "", "",
    "",9,8,"", "", "", "",6,"",
    8,"", "", "",6,"", "", "",3,
    4,"", "", 8,"",3,"", "",1,
    7,"", "", "",2,"", "", "",6,
    "",6,"", "", "", "", 2,8,"",
    "", "", "", 4,1,9,"", "",5,
    "", "", "", "",8,"", "",7,9
];

function createBoard() {
    puzzle.forEach(value => {
        const input = document.createElement("input");
        input.type = "text";
        input.maxLength = 1;

        if (value !== "") {
            input.value = value;
            input.disabled = true;
        }

        board.appendChild(input);
    });
}

function checkSolution() {
    alert("Nice try! Solution check coming soon 🚀");
}

function resetBoard() {
    board.innerHTML = "";
    createBoard();
}

createBoard();
