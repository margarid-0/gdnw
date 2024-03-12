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
            



        this.load.spritesheet('playButton', 'assets/play_button.png', {
            frameWidth: 128,
            frameHeight: 128
        })


        this.load.spritesheet('teclasOutras', '/assets/teclasOutras.png', {
            frameWidth: 320,
            frameHeight: 320
        })

        this.load.image('moveSet', '/assets/moveSet.png')
        this.load.image('dicionario', '/assets/dicionario.png')

        this.load.image('teclasWASD', '/assets/teclasWASD.png')
        this.load.image('teclasSetas', '/assets/teclasSetas.png')
        this.load.image('teclasSpace', '/assets/teclasSpace.png')
        this.load.image('dash', '/assets/dash.png')
        this.load.image('mute', '/assets/mute.png')
        this.load.image('som', '/assets/som.png')
        this.load.image('idioma', '/assets/idioma.png')

        this.load.image('credVitor', '/assets/credVitor.png')
        this.load.image('credLuiza', '/assets/credLuiza.png')
        this.load.image('credDaniel', '/assets/credDaniel.png')
        this.load.image('credCarol', '/assets/credCarol.png')
        this.load.image('credIgor', '/assets/credIgor.png')
        this.load.image('credThalyta', '/assets/credThalyta.png')
        this.load.image('credJoao', '/assets/credJoao.png')
        this.load.image('bgGameOver', '/assets/bgGameOver.png')
        this.load.image('iconDicionario', '/assets/dicionarioIcon.png')

        this.load.image('moedaCount', '/assets/moedaCount.png')
        this.load.spritesheet('vidasCount', '/assets/vidasCount.png', {
            frameWidth: 672,
            frameHeight: 576
        })

        this.load.image('fundoPause', '/assets/fundoPause.png')




        this.load.image('menu', '/assets/mainMenu.png')
        this.load.image('reiniciar', '/assets/reiniciar.png')
        this.load.image('gameOver', 'assets/gameOver.png')
        this.load.image('interacoes', '/assets/interacoes.png')
        this.load.image('creditos', '/assets/creditos.png')
        this.load.spritesheet('checkpoint', '/assets/checkPoint.png', {
            frameWidth: 192,
            frameHeight: 192
        })


        this.load.spritesheet('spriteSom', '/assets/spriteSom.png', {
            frameWidth: 336, 
            frameHeight: 336
        })

        this.load.spritesheet('brFlag', '/assets/brFlag.png', {
            frameWidth: 1024,
            frameHeight: 712
        })

        this.load.spritesheet('usFlag', '/assets/usFlag.png', {
            frameWidth: 1024,
            frameHeight: 712
        })

        this.load.spritesheet('spainFlag', '/assets/spainFlag.png', {
            frameWidth: 1024,
            frameHeight: 712
        })

    }

    create() {
        this.scene.start('mainMenu')
    }

}