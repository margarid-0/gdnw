export class fase1 extends Phaser.Scene { 
    constructor() {
        super({key: 'fase1'}) 

        this.teclas = null
        this.imagemFundo = null
        this.personagem = null
        this.pontuacao = 0
        this.texto = null
        this.volume = true
    }
    
    create() {

        this.add.image(500, 320, 'bg')   
        this.imagemFundo = this.add.image(1664, 320, 'bg')   
        this.physics.world.setBounds(0, 0, 3328, 640)
        



        const map = this.make.tilemap({key: 'map'})
        const tileSetGrass = map.addTilesetImage('grass', 'ground')
        var ground = map.createLayer('ground', tileSetGrass, 0, 0)
        ground.setCollisionByExclusion([-1], true)

        this.personagem = this.physics.add.sprite(200, 550, 'personagem').play('idle').setDepth(1)
        this.personagem.setCollideWorldBounds(true).setScale(1.2)
        this.physics.add.collider(this.personagem, ground)


        this.anims.create({
            key: 'bandeira',
            frames: this.anims.generateFrameNumbers('checkpoint', {start: 0, end: 9}),
            frameRate: 15,
            repeat: -1
        })
    



        this.anims.create({
            key: 'idle', 
            frames: this.anims.generateFrameNumbers('personagem', { start: 0, end: 10 }),
            frameRate: 15, 
            repeat: -1 
        });
    
    
        this.anims.create({
            key: 'run',
            frames: this.anims.generateFrameNumbers('correndo', { start: 0, end: 10}),
            frameRate: 25,
            repeat: -1
        })

        this.anims.create({
            key: 'moedaGirando',
            frames: this.anims.generateFrameNumbers('moeda', {start: 0, end: 6}),
            frameRate: 10,
            repeat: -1
        })
    
        this.teclas = this.input.keyboard.addKeys({
            up: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),
            upArrow: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP),
            left: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
            leftArrow: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT),
            down: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),
            downArrow: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN),
            right: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D),
            rightArrow: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT),
            space: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE),
            e: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E),
            esc: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC),
            x: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X),
            m: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M)
        })  
    
        this.cameras.main.setBounds(0, 0, 3328, 640)
        this.cameras.main.startFollow(this.personagem)


        this.moedas = []
        this.moedas.push(this.createMoeda(200, 450))
        this.moedas.push(this.createMoeda(1120, 480))
        this.moedas.push(this.createMoeda(1520, 230))
        this.moedas.push(this.createMoeda(2220, 100))


        this.letraE = this.add.image(3150, 400, 'letraE').setScale(0.6).setVisible(false)


        this.dicionario = this.add.sprite(this.sys.game.config.width * 0.93, this.sys.game.config.height * 0.1, 'dicionarioIconRoll', 0).setScale(0.04).setScrollFactor(0).setInteractive()

        this.dicionario.on('pointerover', () => {
            this.game.canvas.style.cursor = 'pointer'
        })

        this.dicionario.on('pointerout', () => {
            this.game.canvas.style.cursor = 'default'

        })

        this.dicionario.on('pointerdown', () => {
            this.scene.pause()
            this.scene.launch('dicionario')
        })

        this.add.sprite(this.sys.game.config.width * 0.1, this.sys.game.config.height * 0.1, 'moedaCount', 0).setScale(0.08).setScrollFactor(0)

        this.add.sprite(500, 480, 'checkpoint').play('bandeira').setDepth(0)

        this.pontuacao = 0
        this.texto = this.add.text(128, 45, '', {
            fontSize: '40px',
            fill: '#252525',
            fontFamily: 'pixel Font'
        }) 

        this.texto.setScrollFactor(0).setDepth(2)

        this.add.sprite(this.sys.game.config.width * 0.25, this.sys.game.config.height * 0.1, 'vidasCount', 0).setScale(0.08).setScrollFactor(0)

        this.add.sprite(this.sys.game.config.width * 0.3, this.sys.game.config.height * 0.1, 'vidasCount', 0).setScale(0.08).setScrollFactor(0)

        this.add.sprite(this.sys.game.config.width * 0.35, this.sys.game.config.height * 0.1, 'vidasCount', 0).setScale(0.08).setScrollFactor(0)


        this.teclas.esc.on('down', () => {
            this.scene.pause()
            this.scene.launch('pause')
        })


        // this.mute = this.add.sprite(this.sys.game.config.width * 0.5, this.sys.game.config.height * 0.5, 'spriteSom', 2).setScale(.4).setInteractive().setVisible(true).setScrollFactor(0)

        // this.teclas.m.on('down', () => {
        //     this.volume = !this.volume
        //     if(this.volume) {
        //         this.sound.resumeAll()
        //     } else {
        //         this.sound.pauseAll()
        //     }
        //     this.mute.setFrame(this.volume ? 2:4)
        // })
      
    }

    
    update() {
        

        if (this.teclas.left.isDown && this.personagem.y >= 280 || this.teclas.leftArrow.isDown) {
            this.personagem.setVelocityX(-150)
            this.personagem.setFlip(true, false)
            this.personagem.anims.play('run', true)
    
        } else if (this.teclas.right.isDown && this.personagem.y >= 280 || this.teclas.rightArrow.isDown) {
            this.personagem.setVelocityX(150)
            this.personagem.setFlip(false, false)
            this.personagem.anims.play('run', true)
    
        } else {
            this.personagem.setVelocityX(0)
            this.personagem.anims.play('idle', true)
        }
    
        if ((Phaser.Input.Keyboard.JustDown(this.teclas.up) || Phaser.Input.Keyboard.JustDown(this.teclas.upArrow)) && this.pulosRestantes > 0) {
            this.personagem.setVelocityY(-400)
            this.personagem.setTexture('pulando')
            this.pulosRestantes--
        }

        if(this.personagem.body.onFloor()) {
            this.pulosRestantes = 1
        }


        var distancia = Phaser.Math.Distance.Between(
            this.personagem.x, this.personagem.y,
            this.letraE.x, this.letraE.y
        );

        if (distancia < 300) {
            this.letraE.setVisible(true);
            if(this.teclas.e.isDown) {
                this.scene.start('gameOver')
            }
        } else {
            this.letraE.setVisible(false);
        }


        if (this.teclas.x.isDown) {
            this.scene.pause()
            this.scene.launch('dicionario')
        }

        
    }

    createMoeda(x, y) {
        var moeda = this.physics.add.sprite(x, y, 'moeda').play('moedaGirando').setScale(0.8)
        moeda.body.setAllowGravity(false)
        moeda.setCollideWorldBounds(true)
        this.physics.add.collider(moeda, this.ground)
        this.physics.add.overlap(this.personagem, moeda, (personagem, moeda) => {
            moeda.disableBody(true, true),
            this.pontuacao += 1
            this.texto.setText(this.pontuacao)
        }, null, this)

        return moeda;
    }

    
}
