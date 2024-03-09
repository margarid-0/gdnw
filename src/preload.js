export class preload extends Phaser.Scene{
    constructor() {
        super('preload')
    }

    preload() {

        this.load.image('background', 'assets/fundo_start.png')
        this.load.spritesheet('playButton', 'assets/play_button.png', {
            frameWidth: 128,
            frameHeight: 128
        })
        this.load.image('setas', 'assets/setas.png')

        this.load.image('bgMainMenu', '/assets/fundoMainMenu.png')
        this.load.image('controles', '/assets/controles.PNG')
        this.load.image('configs', '/assets/configs.PNG')
        this.load.image('newGame', '/assets/newGame.PNG')
        this.load.image('playMain', '/assets/playButton.PNG')
        this.load.image('uniWorld', '/assets/tituloMain.png')



        this.load.image('bg', 'assets/backgroundSi-sheet.png')
        this.load.image('ground', 'assets/mapa/Tilemap_-sheet.png')
        this.load.tilemapTiledJSON('map', 'assets/mapa/grass.json')
        this.load.image('bg', 'assets/backgroundSi-sheet.png')
        this.load.spritesheet('personagem', 'assets/Idle(32x32)-sheet.png', {
            frameWidth: 64,
            frameHeight: 64
        })
        this.load.spritesheet('correndo', 'assets/Run(32x32)-sheet.png', {
            frameWidth: 64,
            frameHeight: 64
        })
        this.load.image('pulando', 'assets/Jump(32x32)-sheet.png')
        this.load.image('caindo', 'assets/Fall(32x32)-sheet.png')
        this.load.spritesheet('moeda', 'assets/moeda.png', {
            frameWidth: 64,
            frameHeight: 64
        })
        this.load.image('letraE', 'assets/letter-E.png') 
            



        this.load.image('gameOver', 'assets/gameOver.png')
        this.load.spritesheet('playButton', 'assets/play_button.png', {
            frameWidth: 128,
            frameHeight: 128
        })
    };

    create() {
        this.scene.start('mainMenu')
    }

}