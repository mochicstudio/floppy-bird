import Phaser from 'phaser';
import { setInGameBackground } from '../helpers/css.helper';

class Game extends Phaser.Scene {
  private readonly ONE_SECOND_IN_MILISECONDS: nuber = 1000;
  private readonly FLAP_VELOCITY: number = 150;

  private bird: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
  private totalDelta: number = 0;

  constructor() { super('Game'); }

  preload() {
    setInGameBackground();
    this.loadAssets();
    this.setListeners();
  }

  create() {
    this.add.image(0, 0, 'sky').setOrigin(0);
    this.bird = this.physics.add.sprite(
      this.sys.game.canvas.width / 2,
      this.sys.game.canvas.height / 2,
      'bird'
    ).setOrigin(0);
  }

  update(_time, delta) {
    this.totalDelta += delta;
    if (this.totalDelta < this.ONE_SECOND_IN_MILISECONDS) return;
    this.resetTotalDelta();
  }

  loadAssets() {
    this.load.image('sky', '/assets/sky.png');
    this.load.image('bird', '/assets/bird.png');
  }

  setListeners() { 
    this.input.keyboard.addKey('SPACE', true).on('down', () => this.flap());
  }

  resetTotalDelta() { this.totalDelta = 0; }

  flap() { this.bird.body.velocity.y = -this.FLAP_VELOCITY; }
}

const game = new Game();
export { game };
