import Phaser from 'phaser';
import { setInGameBackground } from '../helpers/css.helper';

class Game extends Phaser.Scene {
  private readonly ONE_SECOND_IN_MILISECONDS: nuber = 1000;
  private totalDelta: number = 0;

  constructor() {
    super('Game');
  }

  preload() {
    setInGameBackground();
    this.load.image('sky', '/assets/sky.png');
    this.load.image('bird', '/assets/bird.png');
  }

  create() {
    this.add.image(0, 0, 'sky').setOrigin(0, 0);
    const bird: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody = 
      this.physics.add.sprite(
        this.sys.game.canvas.width / 2,
        this.sys.game.canvas.height / 2,
        'bird'
      ).setOrigin(0);
    bird.body.gravity.y = 200;
  }

  update(_time, delta) {
    this.totalDelta += delta;
    if (this.totalDelta < ONE_SECOND_IN_MILISECONDS) return;
    this.resetTotalDelta();
  }

  resetTotalDelta() { this.totalDelta = 0; }
}

const game = new Game();
export { game };
