import { fase1 } from "./fase1.js";
import { gameOver } from "./gameOver.js"; 
import { preload } from "./preload.js";
import { mainMenu } from "./mainMenu.js";
import { controls } from "./controls.js";
import { settings } from "./settings.js";
import { creditos } from "./creditos.js";
import { pause } from "./pause.js";
import { dicionario } from "./dicionario.js";

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

    scene: [preload, controls, settings, creditos, mainMenu, fase1, gameOver, pause, dicionario]


}

var game = new Phaser.Game(config);
