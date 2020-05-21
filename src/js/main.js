const blue = document.getElementById('blue');
const purple = document.getElementById('purple');
const orange = document.getElementById('orange');
const green = document.getElementById('green');
const btnStart = document.getElementById('btnStart');

class Game {
  constructor() {
    this.init();
  }

  init() {
    btnStart.classList.add('hide');
  }
}

function startGame() {
  var game = new Game();
}
