const circle = document.getElementById('circle');

const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function changeColor() {
  circle.style.backgroundColor = getRandomColor();
}

circle.addEventListener('click', changeColor);
