import Phaser from 'phaser';

export default {
  type: Phaser.AUTO,
  parent: 'game',
  transparent: true,
  scale: {
    width: 800,
    height: 600,
    mode: Phaser.Scale.NONE,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 400 },
      debug: true
    }
  }
};
