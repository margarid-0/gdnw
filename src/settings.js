export class settings extends Phaser.Scene {
    constructor() {
        super({key: 'settings'})
        this.somAtivo = true
        
    }

    create() {
        this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height / 2, 'bgMainMenu').setScale(0.6)
        this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height * 0.15, 'configs').setScale(.5)
        
        this.cameras.main.setBounds(0, 0, this.sys.game.config.width, 1200)
        this.physics.world.setBounds(0, 0, this.sys.game.config.width, 1200)

        var button = this.add.sprite(this.sys.game.config.width * 0.9, this.sys.game.config.height * 0.9, 'teclasOutras', 4).setScale(0.25).setInteractive()
        button.on('pointerdown', function (event) {
            this.scene.start('mainMenu')
        }, this)

        button.on('pointerover', () => {
            this.game.canvas.style.cursor = 'pointer'
        })

        button.on('pointerout', () => {
            this.game.canvas.style.cursor = 'default'
        })

        this.cursors = this.input.keyboard.createCursorKeys()
        this.esc = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC)
        this.enter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER)


        this.add.image(this.sys.game.config.width * 0.45, this.sys.game.config.height * 0.44, 'som').setScale(.25)
        this.som = this.add.sprite(this.sys.game.config.width * 0.58, this.sys.game.config.height * 0.44, 'spriteSom', 2).setScale(0.3).setInteractive()

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

        this.add.image(this.sys.game.config.width * 0.32, this.sys.game.config.height * 0.58, 'idioma').setScale(.25)

        var brasil = this.add.sprite(this.sys.game.config.width * 0.5, this.sys.game.config.height * 0.58, 'brFlag', 0).setScale(0.08).setInteractive()

        brasil.on('pointerover', () => {
            brasil.setFrame(1)
            this.game.canvas.style.cursor = 'pointer'
        })

        brasil.on('pointerout', () => {
            brasil.setFrame(0)
            this.game.canvas.style.cursor = 'default'

        })

        var spain = this.add.sprite(this.sys.game.config.width * 0.6, this.sys.game.config.height * 0.58, 'spainFlag', 0).setScale(0.08).setInteractive()

        spain.on('pointerover', () => {
            spain.setFrame(1)
            this.game.canvas.style.cursor = 'pointer'

        })

        spain.on('pointerout', () => {
            spain.setFrame(0)
            this.game.canvas.style.cursor = 'default'

        })

        var usa = this.add.sprite(this.sys.game.config.width * 0.7, this.sys.game.config.height * 0.58, 'usFlag', 0).setScale(0.08).setInteractive()

        usa.on('pointerover', () => {
            usa.setFrame(1)
            this.game.canvas.style.cursor = 'pointer'
        })

        usa.on('pointerout', () => {
            usa.setFrame(0)
            this.game.canvas.style.cursor = 'default'
        })


        this.controles = this.add.image(this.sys.game.config.width * 0.5, this.sys.game.config.height * 0.7, 'controles').setScale(.25).setInteractive()

        this.controles.on('pointerover', () => {
            this.game.canvas.style.cursor = 'pointer'
        })

        this.controles.on('pointerout', () => {
            this.game.canvas.style.cursor = 'default'
        })

        this.controles.on('pointerdown', () => {
            this.scene.start('controls')
        })

        this.creditos = this.add.image(this.sys.game.config.width * 0.5, this.sys.game.config.height * 0.8, 'creditos').setScale(.25).setInteractive()

        this.creditos.on('pointerover', () => {
            this.game.canvas.style.cursor = 'pointer'
        })

        this.creditos.on('pointerout', () => {
            this.game.canvas.style.cursor = 'default'

        })

        // this.creditos.on('pointerdown', () => {
        //     this.scene.start('creditos')
        // })

    }


    update() {
        if (this.esc.isDown || this.enter.isDown) {
            this.scene.start('mainMenu')
        }
    }
}