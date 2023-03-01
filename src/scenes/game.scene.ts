import Phaser from 'phaser';
import FloppyBird from '../classes/bird';
import { makePipes } from '../classes/pipes';
import { setInGameBackground } from '../helpers/css.helper';

class Game extends Phaser.Scene {
  private readonly WAIT_TIME: number = 3000;
  private readonly FloppyBird: FloopyBir;

  private totalDelta: number = 0;

  constructor() { super('Game'); }

  preload() {
    setInGameBackground();
    this.loadAssets();
    this.setListeners();
  }

  create() {
    this.add.image(0, 0, 'sky').setOrigin(0);
    this.FloppyBird = new FloppyBird(this.physics.add.sprite(
      this.sys.game.canvas.width / 2,
      this.sys.game.canvas.height / 2,
      'floppybird'
    ).setOrigin(0));
  }

  update(_time, delta) {
    this.totalDelta += delta;
    if (this.totalDelta < this.WAIT_TIME) return;
    this.resetTotalDelta();
    makePipes(this.physics.add.group());
  }

  loadAssets() {
    this.load.image('sky', '/assets/sky.png');
    this.load.image('floppybird', '/assets/bird.png');
    this.load.image('pipe', '/assets/pipe.png');
  }

  setListeners() { 
    this.input.keyboard.addKey('SPACE', true).on('down', () => this.FloppyBird.flop());
  }

  resetTotalDelta() { this.totalDelta = 0; }
}

const game = new Game();
export { game };
