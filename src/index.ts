import Phaser from 'phaser';
import config from './config';
import { mochicStudioLogo } from './scenes/mochic-studio-logo.scene';
import { game } from './scenes/game.scene';

const DEV_FLAG: boolean = true;

new Phaser.Game(Object.assign(config, { 
  scene: DEV_FLAG ? [game] : [mochicStudioLogo]
}));
