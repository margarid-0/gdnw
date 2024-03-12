export class pause extends Phaser.Scene {
    constructor() {
        super({key: 'pause'})
        this.somAtivo = true

        
    }
    
     create() {
        this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height / 2, 'fundoPause').setScale(0.6)
        this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height * 0.25, 'configs').setScale(.5)
        this.add.image(this.sys.game.config.width * 0.45, this.sys.game.config.height * 0.45, 'som').setScale(.28)
        this.som = this.add.sprite(this.sys.game.config.width * 0.58, this.sys.game.config.height * 0.45, 'spriteSom', 2).setScale(0.3).setInteractive()

        var button = this.add.sprite(this.sys.game.config.width * 0.9, this.sys.game.config.height * 0.9, 'teclasOutras', 4).setScale(0.25).setInteractive()
        button.on('pointerdown', function (event) {
            this.scene.resume('fase1')
            this.scene.stop()
        }, this)

        button.on('pointerover', () => {
            this.game.canvas.style.cursor = 'pointer'
        })

        button.on('pointerout', () => {
            this.game.canvas.style.cursor = 'default'
        })

        this.som.on('pointerover', () => {
            this.som.setFrame(this.somAtivo ? 3:5)
            this.game.canvas.style.cursor = 'pointer'
        })

        this.som.on('pointerout', () => {
            this.som.setFrame(this.somAtivo ? 2:4)
            this.game.canvas.style.cursor = 'default'

        })

        this.som.on('pointerdown', () => {
            this.somAtivo = !this.somAtivo
            if(this.somAtivo) {
                this.sound.resumeAll()
            } else {
                this.sound.pauseAll()
            }
            this.som.setFrame(this.somAtivo ? 3:5)
        })

        this.reiniciar = this.add.image(this.sys.game.config.width * 0.5, this.sys.game.config.height * 0.6, 'reiniciar').setScale(.16).setInteractive()
        



        this.reiniciar.on('pointerover', () => {
            this.game.canvas.style.cursor = 'pointer'
        })

        this.reiniciar.on('pointerout', () => {
            this.game.canvas.style.cursor = 'default'

        })

        this.reiniciar.on('pointerdown', () => {
            this.scene.start('fase1')
        })



        this.esc = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC)
        this.esc.on('down', () => {
            this.scene.resume('fase1')
            this.scene.stop()
        })


        this.menu = this.add.image(this.sys.game.config.width * 0.5, this.sys.game.config.height * 0.75, 'menu').setScale(0.2).setInteractive()

        this.menu.on('pointerdown', () => {
            window.location.reload()
        }, this)

        this.menu.on('pointerover', () => {
            this.game.canvas.style.cursor = 'pointer'
        }, this)

        this.menu.on('pointerout', () => {
            this.game.canvas.style.cursor = 'default'

        }, this)
     }





     update() {

    }
}