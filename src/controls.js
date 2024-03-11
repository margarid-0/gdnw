export class controls extends Phaser.Scene {
    constructor() {
        super({key: 'controls'})
        
    }


    create() {
        this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height / 2, 'bgMainMenu').setScale(0.6).setScrollFactor(0)
        this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height * 0.15, 'controles').setScale(.6)
        
        this.cameras.main.setBounds(0, 0, this.sys.game.config.width, 1400)
        this.physics.world.setBounds(0, 0, this.sys.game.config.width, 1400)


        this.add.image(this.sys.game.config.width * 0.5, this.sys.game.config.height * 0.35, 'moveSet').setScale(0.25)

        var button = this.add.sprite(this.sys.game.config.width * 0.9, this.sys.game.config.height * 0.9, 'teclasOutras', 4).setScale(0.25).setInteractive().setScrollFactor(0)
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


        this.input.on('wheel', (pointer, gameObjects, deltaX, deltaY) => {
            this.cameras.main.scrollY += deltaY * 0.5;
        });


        this.add.image(this.sys.game.config.width * 0.5, this.sys.game.config.height * 0.7, 'dash').setScale(.25)
        this.add.image(this.sys.game.config.width * 0.5, this.sys.game.config.height, 'dicionario').setScale(0.25)
        this.add.image(this.sys.game.config.width * 0.5, this.sys.game.config.height * 1.33, 'configs').setScale(0.25)
        this.add.image(this.sys.game.config.width * 0.5, this.sys.game.config.height * 1.64, 'mute').setScale(0.25)
        this.add.image(this.sys.game.config.width * 0.5, this.sys.game.config.height * 1.92, 'interacoes').setScale(0.25)



        this.add.image(this.sys.game.config.width * 0.4, this.sys.game.config.height * 0.5, 'teclasWASD').setScale(.07)
        this.add.image(this.sys.game.config.width * 0.6, this.sys.game.config.height * 0.5, 'teclasSetas').setScale(.07)
        this.add.image(this.sys.game.config.width * 0.5, this.sys.game.config.height * 0.8, 'teclasSpace').setScale(.07)
        this.add.sprite(this.sys.game.config.width * 0.5, this.sys.game.config.height * 1.12, 'teclasOutras', 0).setScale(0.2)
        this.add.sprite(this.sys.game.config.width * 0.5, this.sys.game.config.height * 1.45, 'teclasOutras', 3).setScale(0.2)
        this.add.sprite(this.sys.game.config.width * 0.5, this.sys.game.config.height * 1.75, 'teclasOutras', 5).setScale(0.2)
        this.add.sprite(this.sys.game.config.width * 0.5, this.sys.game.config.height * 2.02, 'teclasOutras', 2).setScale(0.2)




    }

    update() {
        if (this.esc.isDown || this.enter.isDown) {
            this.scene.start('mainMenu')
        }
    }
    
}