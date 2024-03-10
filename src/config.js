import { fase1 } from "./fase1.js";
import { gameOver } from "./gameOver.js"; 
import { preload } from "./preload.js";
import { mainMenu } from "./mainMenu.js";
import { controls } from "./controls.js";
import { settings } from "./settings.js";

const config = {
    type: Phaser.AUTO,
    width: 1000,
    height: 640,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 800 },
            debug: false
        }
    },

    scene: [preload, controls, settings, mainMenu, fase1, gameOver]

}

var game = new Phaser.Game(config);
