import Phaser from 'phaser';
import { setInGameBackground } from '../helpers/css.helper';

class Game extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  preload() {
    setInGameBackground();
  }
}

const game = new Game();
export { game };
