const button = document.getElementById('clickMeButton');
const colors = [
  '#FF5733', '#6EFF33', '#3357FF', '#FFD633', '#8E33FF', '#FF9F33', '#FF3369', '#33D4FF',
  '#33FF88', '#3388FF', '#B333FF', '#FF3377', '#3377FF', '#FFB333', '#33FFB3', '#B3FF33',
  '#FF3395', '#33E8FF', '#F933FF', '#FF5733', '#6EFF33', '#3357FF', '#FFD633', '#8E33FF',
  '#FF9F33', '#FF3369', '#33D4FF', '#33FF88', '#3388FF', '#B333FF', '#FF3377', '#3377FF',
  '#FFB333', '#33FFB3', '#B3FF33', '#FF3395', '#33E8FF', '#F933FF', '#33FF00', '#FF3300',
  '#00FF33', '#0033FF', '#FFCC33', '#CC33FF', '#33FFCC', '#FF3333', '#33FF33', '#3333FF',
  '#FF33CC', '#CCFF33', '#33CCFF', '#FF6633', '#33FFFF', '#FF3366', '#3366FF', '#FFCC33',
  '#CC33FF', '#33FFCC', '#FF3333', '#33FF33', '#3333FF', '#FF33CC', '#CCFF33', '#33CCFF',
  '#FF6633', '#33FFFF', '#FF3366', '#3366FF', '#FF3399', '#99FF33', '#3399FF', '#FF9933',
  '#33CC00', '#CC0033', '#0033CC', '#CCFF00', '#CCFFCC', '#00CCFF', '#FFCC00', '#00FFCC'
];

let currentColorIndex = 0;

button.addEventListener('click', function() {
  button.style.display = 'none';
  changeBackgroundColor();
});

function changeBackgroundColor() {
  if (currentColorIndex < colors.length) {
    document.body.style.backgroundColor = colors[currentColorIndex];
    currentColorIndex++;
    setTimeout(changeBackgroundColor, 250);
  } else {
    button.style.display = 'block';
    document.body.style.backgroundColor = 'white';
    currentColorIndex = 0;
  }
}
