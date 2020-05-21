const blue = document.getElementById('blue');
const purple = document.getElementById('purple');
const orange = document.getElementById('orange');
const green = document.getElementById('green');
const btnStart = document.getElementById('btnStart');

class Game {
  constructor() {
    this.init();
    this.createSecuence();
  }

  init() {
    btnStart.classList.add('hide');
    this.level = 1;
    this.colors = {
      blue,
      purple,
      orange,
      green,
    };
  }

  createSecuence() {
    this.secuence = new Array(10).fill(0).map(n => Math.floor(Math.random() * 4));
  }
}

function startGame() {
  window.game = new Game();
}
