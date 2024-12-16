const container = document.querySelector('.container');

function createGrid(size = 5) {
  for (let i = 1; i <= size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.setAttribute('style', `min-width: ${160 / size}px`);
    container.append(square);
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
  let grid = prompt('Size of grid\nLimit: 100');
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

const button = document.querySelector('button');
button.addEventListener('click', () => {
  prompt_grid();
});

console.log(Math.floor(Math.random() * 256));
