import Phaser from 'phaser';
import values from './config/values.config';

export default {
  type: Phaser.AUTO,
  parent: 'game',
  transparent: true,
  scale: {
    width: values.width,
    height: values.height,
    mode: Phaser.Scale.NONE,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  physics: {
    default: 'arcade',
    arcade: {
      debug: true
    }
  }
};
