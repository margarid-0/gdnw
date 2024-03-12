export class dicionario extends Phaser.Scene {
    constructor() {
        super({key: 'dicionario'})
    }



    create() {
        this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height / 2, 'fundoPause').setScale(0.6).setScrollFactor(0)
        this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height, 'pergaminhoDicionario').setScale(0.5)
        this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height * 0.45, 'dicionarioPergaminho').setScale(0.35)
        this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height * 0.64, 'unileverPergaminho').setScale(0.3)

        this.cameras.main.setBounds(0, 0, this.sys.game.config.width, 1250)
        this.physics.world.setBounds(0, 0, this.sys.game.config.width, 1250)

        var button = this.add.sprite(this.sys.game.config.width * 0.93, this.sys.game.config.height * 0.9, 'teclasOutras', 4).setScale(0.25).setInteractive().setScrollFactor(0)
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

        this.esc = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC)
        this.esc.on('down', () => {
            this.scene.resume('fase1')
            this.scene.stop()
        })

        this.x = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X)
        this.x.on('down', () => {
            this.scene.resume('fase1')
            this.scene.stop()
        })

        this.input.on('wheel', (pointer, gameObjects, deltaX, deltaY) => {
            this.cameras.main.scrollY += deltaY * 0.5;
        });

    }

    update() {

    }
}