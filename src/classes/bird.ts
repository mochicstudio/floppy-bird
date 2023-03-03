export default class FloppyBird {
  private readonly FLOP_VELOCITY: number = 150;
  private readonly GRAVITY: number = 400;

  sprite: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;

  constructor(sprite: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody) {
    this.sprite = sprite;
    this.sprite.body.gravity.y = this.GRAVITY;
  }
  
  flop() { this.sprite.body.velocity.y = -this.FLOP_VELOCITY; }
}
