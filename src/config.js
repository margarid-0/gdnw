import { fase1 } from "./fase1.js";
// import { start } from "./start.js"; 
import { gameOver } from "./gameOver.js"; 
import { preload } from "./preload.js";
import { mainMenu } from "./mainMenu.js";

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

    scene: [preload, mainMenu, fase1, gameOver]

}

var game = new Phaser.Game(config);
