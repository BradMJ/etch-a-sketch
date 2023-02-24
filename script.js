const columns = 16;
const rows = 16;

const container = document.getElementById('container');
const createDiv = document.createElement('div');

function randomColor() {
    return Math.floor(Math.random() * 256);
}

const grid = document.createElement('div');
grid.className = 'grid';
for (let c = 0; c < columns; c++) {
    const column = document.createElement('div');
    column.className = 'column';
    for (let r = 0; r < rows; r++) {
        const row = document.createElement('div');
        row.className = 'row';
        // Fill row div with column and row numbers
        //row.textContent = ('c') + (c + 1) + '-' + ('r') + (r + 1);
        row.addEventListener('mouseenter', () => {
            row.style.backgroundColor = "black";
        });
        // Remove background color
        // row.addEventListener('mouseleave', () => {
        //     row.style.backgroundColor = null;
        // });
        column.appendChild(row);
    }
    grid.appendChild(column);
}
container.appendChild(grid);