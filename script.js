const container = document.getElementById('container');

function randomColor() {
    return Math.floor(Math.random() * 256);
}

function populateBoard(size) {
    const board = document.getElementById('board');
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < 256; i++) {
        let square = document.createElement('div');
        square.style.background = 'blue';
        board.insertAdjacentElement('beforeend', square);
    }
}

populateBoard(16);

