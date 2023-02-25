import Phaser from 'phaser';
import { setInGameBackground } from '../helpers/css.helper';

class Game extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  preload() {
    setInGameBackground();
    this.load.image('sky', '/assets/sky.png');
  }

  create() {
    this.add.image(0, 0, 'sky').setOrigin(0, 0);
  }
}

const game = new Game();
export { game };
