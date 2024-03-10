export class settings extends Phaser.Scene {
    constructor() {
        super({key: 'settings'})
        
    }

    create() {
        this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height / 2, 'bgMainMenu').setScale(0.6).setScrollFactor(0)
        this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height * 0.15, 'configs').setScale(.5)
        
        this.cameras.main.setBounds(0, 0, this.sys.game.config.width, 1200)
        this.physics.world.setBounds(0, 0, this.sys.game.config.width, 1200)

        var button = this.add.sprite(this.sys.game.config.width * 0.9, this.sys.game.config.height * 0.9, 'teclasOutras', 4).setScale(0.25).setInteractive().setScrollFactor(0)
        button.on('pointerdown', function (event) {
            this.scene.start('mainMenu')
        }, this)

        this.cursors = this.input.keyboard.createCursorKeys()
        this.esc = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC)
        this.enter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER)
    }


    update() {
        if (this.esc.isDown || this.enter.isDown) {
            this.scene.start('mainMenu')
        }
    }
}