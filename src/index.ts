import Phaser from 'phaser';
import config from './config';
import { mochicStudioLogo } from './scenes/mochic-studio-logo.scene';

new Phaser.Game(Object.assign(config, { scene: [mochicStudioLogo] }));
