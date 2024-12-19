const container = document.querySelector('.container');

let grid = 16;

function createGrid(size = grid) {
  for (let i = 1; i <= size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.setAttribute('style', `min-width: ${660 / size}px`);
    container.appendChild(square);
    square.addEventListener('mouseover', () => {
      r = Math.floor(Math.random() * 256);
      g = Math.floor(Math.random() * 256);
      b = Math.floor(Math.random() * 256);
      square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    });
  }
}

createGrid();

function prompt_grid() {
  grid = prompt('Size of grid\nLimit: 100');
  try {
    grid = Number(grid);
    if (grid > 0 && grid <= 100) {
      document.querySelectorAll('div.square').forEach((value) => {
        value.remove();
      });
      createGrid(grid);
    } else if (isNaN(grid)) {
      alert('Invalid input');
    } else if (grid <= 0 || grid > 100) {
      alert('Size should greater than 0\nbut less than or equal to 100');
    }
  } catch (err) {
    alert('Invalid input');
  }
}

const button = document.querySelector('button.change_size');
button.addEventListener('click', () => {
  prompt_grid();
});

const clear = document.querySelector('button.clear');
clear.addEventListener('click', () => {
  document.querySelectorAll('div.square').forEach((value) => {
    value.remove();
  });
  createGrid(grid);
});
