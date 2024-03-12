export class creditos extends Phaser.Scene {
    constructor() {
        super({key: 'creditos'})
        
    }

    create() {

        this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height / 2, 'bgMainMenu').setScale(0.6).setScrollFactor(0)
        this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height * 0.15, 'creditos').setScale(.7)


        var button = this.add.sprite(this.sys.game.config.width * 0.9, this.sys.game.config.height * 0.9, 'teclasOutras', 4).setScale(0.25).setInteractive()
        button.on('pointerdown', function (event) {
            this.scene.start('settings')
        }, this)

        button.on('pointerover', () => {
            this.game.canvas.style.cursor = 'pointer'
        })

        button.on('pointerout', () => {
            this.game.canvas.style.cursor = 'default'
        })

        var carol = this.add.image(this.sys.game.config.width * 0.3, this.sys.game.config.height * 0.4, 'credCarol').setScale(0.18)
        var daniel = this.add.image(this.sys.game.config.width * 0.7, this.sys.game.config.height * 0.4, 'credDaniel').setScale(0.11)
        var igor = this.add.image(this.sys.game.config.width * 0.3, this.sys.game.config.height * 0.55, 'credIgor').setScale(0.08)
        var joao = this.add.image(this.sys.game.config.width * 0.7, this.sys.game.config.height * 0.55, 'credJoao').setScale(0.08)
        var luiza = this.add.image(this.sys.game.config.width * 0.3, this.sys.game.config.height * 0.7, 'credLuiza').setScale(0.1)
        var thalyta =  this.add.image(this.sys.game.config.width * 0.7, this.sys.game.config.height * 0.7, 'credThalyta').setScale(0.15)
        var vitor =  this.add.image(this.sys.game.config.width * 0.5, this.sys.game.config.height * 0.85, 'credVitor').setScale(0.1)


        this.abrirLink(carol, 'https://www.linkedin.com/in/carolina-pascarelli-55a6a4282/')
        this.abrirLink(daniel, 'https://www.linkedin.com/in/daniel-dias-977572289/')
        this.abrirLink(igor, 'https://www.linkedin.com/in/igor-sguissardi-a37270244/')
        this.abrirLink(joao, 'https://www.linkedin.com/in/joao-carbone-58b9b72b7/')
        this.abrirLink(luiza, 'https://www.linkedin.com/in/luizapetenazzi')
        this.abrirLink(thalyta, 'www.linkedin.com/in/thalyta-da-silva-viana-4a41a4239')
        this.abrirLink(vitor, 'https://www.linkedin.com/in/vitor-balbo/')

        
    }

   abrirLink(image, url) {
        image.setInteractive();
        image.on('pointerdown', () => {
            window.open(url, '_blank')
        })
        image.on('pointerover', () => {
            this.sys.canvas.style.cursor = 'pointer'
        })
        image.on('pointerout', () => {
            this.sys.canvas.style.cursor = 'default'
        })
    }

    upload() {

    }
    
}