const blue = document.getElementById('blue');
const purple = document.getElementById('purple');
const orange = document.getElementById('orange');
const green = document.getElementById('green');
const btnStart = document.getElementById('btnStart');

class Game {
  constructor() {
    this.init();
    this.createSecuence();
    this.setNextLevel();
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

  setNextLevel() {
    this.lightSequence();
  }

  getColorFromNumber(number) {
    switch (number) {
      case 0:
        return 'blue';
      case 1:
        return 'purple';
      case 2:
        return 'orange';
      case 3:
        return 'green';
    }
  }

  turnOffColor(color) {
    this.colors[color].classList.remove('light');
  }

  lightColor(color) {
    this.colors[color].classList.add('light');
    setTimeout(() => this.turnOffColor(color), 350);
  }

  lightSequence() {
    for (let i = 0; i < this.level; i++) {
      const color = this.getColorFromNumber(this.secuence[i]);
      setTimeout(() => this.lightColor(color), 1000 * i);
    }
  }
}

function startGame() {
  window.game = new Game();
}
