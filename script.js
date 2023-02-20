const columns = 16;
const rows = 16;

const container = document.getElementById('container');
const createDiv = document.createElement('div');

const grid = document.createElement('div');
grid.className = 'grid';
for (let c = 0; c < columns; c++) {
    const column = document.createElement('div');
    column.className = 'column';
    for (let r = 0; r < rows; r++) {
        const row = document.createElement('div');
        row.className = 'row';
        row.textContent = ('c') + (c + 1) + '-' + ('r') + (r + 1);
        column.appendChild(row);
    }
    grid.appendChild(column);
}
container.appendChild(grid);