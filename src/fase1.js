export class fase1 extends Phaser.Scene { // Exportação de classe que estende Phaser.Scene
    constructor() {
        super({key: 'fase1'}) // Chave da cena para referência futura
        // Inicialização de propriedades da cena
        this.teclas = null
        this.imagemFundo = null
        this.personagem = null
        this.pontuacao = 0
        this.texto = null
    }
    
    create() {
        // Criação e configuração da cena
        this.add.image(500, 320, 'bg')   
        this.imagemFundo = this.add.image(1664, 320, 'bg')   
        this.physics.world.setBounds(0, 0, 3328, 640)
        
        // Criação e configuração do personagem
        const map = this.make.tilemap({key: 'map'})
        const tileSetGrass = map.addTilesetImage('grass', 'ground')
        var ground = map.createLayer('ground', tileSetGrass, 0, 0)
        ground.setCollisionByExclusion([-1], true)
        this.personagem = this.physics.add.sprite(3000, 700, 'personagem').play('idle')
        this.personagem.setCollideWorldBounds(true).setScale(1.2)
        this.physics.add.collider(this.personagem, ground)
    
        // Animações do personagem
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
            e: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E)
        })  
    
        this.cameras.main.setBounds(0, 0, 3328, 640)
        this.cameras.main.startFollow(this.personagem)

        // Criação do array de moedas
        this.moedas = []
        this.moedas.push(this.createMoeda(200, 450))
        this.moedas.push(this.createMoeda(1120, 480))
        this.moedas.push(this.createMoeda(1520, 230))
        this.moedas.push(this.createMoeda(2220, 100))

        // Criação da imagem de tecla E para avanço de tela no fim do jogo
        this.letraE = this.add.image(3150, 400, 'letraE').setScale(0.6).setVisible(false)

        // Texto das moedas
        this.texto = this.add.text(50, 50, 'Moedas: 0', {
            fontSize: '50px',
            fill: '#252525'
        }) 

        // Fazer o texto seguir a câmera
        this.texto.setScrollFactor(0)

        this.add.sprite(this.sys.game.config.width * 0.93, this.sys.game.config.height * 0.1, 'teclasOutras', 0).setScale(0.2).setScrollFactor(0)
    }

    
    update() {
        
        // Movimentação do jogador
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

        // Fazer a imagem da tecla E aparecer ao chegar a uma distância específica
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

        
    }
    // Método para criar as moedas na cena
    createMoeda(x, y) {
        var moeda = this.physics.add.sprite(x, y, 'moeda').play('moedaGirando').setScale(0.8)
        moeda.body.setAllowGravity(false)
        moeda.setCollideWorldBounds(true)
        this.physics.add.collider(moeda, this.ground)
        this.physics.add.overlap(this.personagem, moeda, (personagem, moeda) => {
            moeda.disableBody(true, true),
            this.pontuacao += 1
            this.texto.setText('Moedas: ' + this.pontuacao)

        }, null, this)

        return moeda;
    }

    
}
