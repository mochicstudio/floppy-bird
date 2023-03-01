import Phaser from 'phaser';
import values from '../config/values.config';

class Pipes {
  private readonly VELOCITY: number = -125;
  private readonly PIPE_GAP_RANGE: Array<number> = [100, 200];
  private readonly PIPE_GAP: number = Phaser.Math.Between(...this.PIPE_GAP_RANGE);
  private readonly PIPE_POSITION_RANGE: Array<number> = [20, 580 - this.PIPE_GAP];
  private readonly PIPE_POSITION: number = Phaser.Math.Between(...this.PIPE_POSITION_RANGE);
  
  public readonly sprites: any;

  private upperSprite: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
  private lowerSprite: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;

  constructor(sprites: any) {
    this.sprites = sprites;
    this.upperSprite = this.sprites.create(
      values.outCanvas,
      this.PIPE_POSITION,
      'pipe').setOrigin(0, 1);
    this.lowerSprite = this.sprites.create(
      values.outCanvas,
      this.upperSprite.y + this.PIPE_GAP,
      'pipe').setOrigin(0);
    this.move();
  }

  private move() { this.sprites.setVelocityX(this.VELOCITY); }
}

const makePipes = (sprites: any): Pipes => new Pipes(sprites);

export { makePipes };
