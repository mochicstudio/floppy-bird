import Phaser from 'phaser';
import { game } from './game.scene';
import { setBootingBackground } from '../helpers/css.helper';

class MochicStudioLogo extends Phaser.Scene {
  constructor() {
    super('MochicStudio');
  }

  preload() {
    setBootingBackground();
    this.load.image('logo', '/assets/mochicstudio.png');
    this.scene.add('Game', game);
  }

  create() {
    const logo = this.add.image(
      this.sys.game.canvas.width / 2,
      180, 
      'logo'
    );

    this.tweens.add({
      targets: logo,
      y: 400,
      duration: 1500,
      ease: Phaser.Math.Easing.Sine.InOut,
      yoyo: true,
      repeat: 0,
      onComplete: this.onCompleteHandler,
      onCompleteScope: this
    });
  }

  onCompleteHandler() { this.scene.start(game); }
}

const mochicStudioLogo = new MochicStudioLogo();
export { mochicStudioLogo };
