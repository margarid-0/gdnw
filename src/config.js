import { fase1 } from "./fase1.js";
import { start } from "./start.js";
import { gameOver } from "./gameOver.js";

const config = {
    type: Phaser.AUTO,
    width: 1000,
    height: 640,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 800},
            debug: true
        }
    },

    scene: [start, fase1, gameOver]

}

var game = new Phaser.Game(config);
