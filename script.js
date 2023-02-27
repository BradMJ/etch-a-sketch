let color = 'black';

// Color functions
function colorSquare() {
    if (color == 'random') {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = color;
    }
}

function changeColor(choice) {
    color = choice;
}

// Board div generator
function populateBoard(size) {
    const board = document.getElementById('board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;
    for (let i = 0; i < amount; i++) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', colorSquare);
        square.style.background = 'white';
        board.insertAdjacentElement('beforeend', square);
    }
}

populateBoard(16);

function changeBoardSize(input) {
    if (input >= 2 && input <= 100) {
        document.querySelector('.errorText').style.display = 'none';
        populateBoard(input); 
    } else {
        document.querySelector('.errorText').style.display = 'flex';
    }
}

function resetBoard() {
    const board = document.getElementById('board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = 'white');
}