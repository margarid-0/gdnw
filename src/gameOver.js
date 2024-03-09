export class gameOver extends Phaser.Scene {
    constructor() {
        super({ key: 'gameOver' })
    }


    create() {

        this.add.image(500, 320, 'gameOver')
        var button = this.add.sprite(500, 500, 'playButton', 0).setInteractive()
        button.on('pointerover', function (event) {
            this.setFrame(1)
        })
        button.on('pointerout', function (event) {
            this.setFrame(0)
        })

        button.on('pointerdown', function (event) {
            this.scene.start('start')
        }, this)

    }

    update() {

    }
}