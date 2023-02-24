import Phaser from 'phaser';

export default {
  type: Phaser.AUTO,
  parent: 'game',
  transparent: true,
  scale: {
    width: 800,
    height: 600,
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
};
