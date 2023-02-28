import Phaser from 'phaser';
import values from '../config/values.config';

class Pipes {
  private readonly VELOCITY: number = -125;
  private readonly PIPE_GAP_RANGE: Array<number> = [100, 200];
  private readonly PIPE_GAP: number = Phaser.Math.Between(...this.PIPE_GAP_RANGE);
  private readonly PIPE_POSITION_RANGE: Array<number> = [20, 580 - this.PIPE_GAP];
  private readonly PIPE_POSITION: number = Phaser.Math.Between(...this.PIPE_POSITION_RANGE);
  private upperSprite: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
  private lowerSprite: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;

  constructor(sprites: Array<Phaser.Types.Physics.Arcade.SpriteWithDynamicBody>) {
    this.upperSprite = sprites[0];
    this.lowerSprite = sprites[1];
    this.setPosition();
    this.setOrigin();
    this.move();
    this.setVisible();
  }

  private setPosition() {
    this.upperSprite.setPosition(values.width, this.PIPE_POSITION);
    this.lowerSprite.setPosition(values.width, this.upperSprite.y + this.PIPE_GAP);
  }

  private setOrigin() {
    this.upperSprite.setOrigin(0, 1);
    this.lowerSprite.setOrigin(0);
  }

  private move() {
    this.upperSprite.setVelocityX(this.VELOCITY);
    this.lowerSprite.setVelocityX(this.VELOCITY);
  }

  private setVisible() {
    this.upperSprite.setVisible(true);
    this.lowerSprite.setVisible(true);
  }
}

const makePipes = (
  sprites: Array<Phaser.Types.Physics.Arcade.SpriteWithDynamicBody>): Pipes => {
    new Pipes(sprites);
};

export { makePipes };
