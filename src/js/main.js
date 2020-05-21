const blue = document.getElementById('blue');
const purple = document.getElementById('purple');
const orange = document.getElementById('orange');
const green = document.getElementById('green');
const btnStart = document.getElementById('btnStart');
const LAST_LEVEL = 10;
const FIRST_LEVEL = 1;
const FIRST_SUB_LEVEL = 0;
const BUTTONS_AMOUNT = 4;
const LIGHT_TIME = 350;
const LIGHT_IDLE_TIME = 1000;
const TIME_BETWEEN_LEVELS = 1500;

class Game {
  constructor() {
    this.init();
    this.createSecuence();
    setTimeout(this.setNextLevel, LIGHT_TIME);
  }

  init = () => {
    this.toggleBtnStart();
    this.level = FIRST_LEVEL;
    this.colors = {
      blue,
      purple,
      orange,
      green,
    };
  };

  toggleBtnStart = () => {
    if (btnStart.classList.contains('hide')) {
      btnStart.classList.remove('hide');
    } else {
      btnStart.classList.add('hide');
    }
  };

  createSecuence = () => {
    this.secuence = new Array(LAST_LEVEL).fill(0).map(n => Math.floor(Math.random() * BUTTONS_AMOUNT));
  };

  setNextLevel = () => {
    this.subLevel = FIRST_SUB_LEVEL;
    this.lightSequence();
    this.addClickEvents();
  };

  getColorFromNumber = number => {
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
  };

  getNumberFromColor = color => {
    switch (color) {
      case 'blue':
        return 0;
      case 'purple':
        return 1;
      case 'orange':
        return 2;
      case 'green':
        return 3;
    }
  };

  turnOffColor = color => {
    this.colors[color].classList.remove('light');
  };

  lightColor = color => {
    this.colors[color].classList.add('light');
    setTimeout(() => this.turnOffColor(color), LIGHT_TIME);
  };

  lightSequence = () => {
    for (let i = 0; i < this.level; i++) {
      const color = this.getColorFromNumber(this.secuence[i]);
      setTimeout(() => this.lightColor(color), LIGHT_IDLE_TIME * i);
    }
  };

  addClickEvents = () => {
    this.colors.blue.addEventListener('click', this.pickColor);
    this.colors.purple.addEventListener('click', this.pickColor);
    this.colors.orange.addEventListener('click', this.pickColor);
    this.colors.green.addEventListener('click', this.pickColor);
  };

  removeClickEvents = () => {
    this.colors.blue.removeEventListener('click', this.pickColor);
    this.colors.purple.removeEventListener('click', this.pickColor);
    this.colors.orange.removeEventListener('click', this.pickColor);
    this.colors.green.removeEventListener('click', this.pickColor);
  };

  showNotification = notification => {
    if (notification === 'win') {
      swal('Simon Says', 'You Won!', 'success').then(this.init);
    } else {
      swal('Simon Says', 'Game Over!', 'error').then(() => {
        this.removeClickEvents();
        this.init();
      });
    }
  };

  pickColor = ev => {
    const pickedColorName = ev.target.dataset.color;
    const pickedColorNumber = this.getNumberFromColor(pickedColorName);
    this.lightColor(pickedColorName);
    if (pickedColorNumber === this.secuence[this.subLevel]) {
      this.subLevel++;
      if (this.subLevel === this.level) {
        this.level++;
        this.removeClickEvents();
        if (this.level === LAST_LEVEL + 1) {
          this.showNotification('win');
        } else {
          setTimeout(this.setNextLevel, TIME_BETWEEN_LEVELS);
        }
      }
    } else {
      this.showNotification('gameOver');
    }
  };
}

const startGame = () => {
  window.game = new Game();
};
