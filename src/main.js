var cenaInicial = new Phaser.Scene('Jogo') 

var config = {
    type: Phaser.AUTO,
    width: 1024,
    height: 640,
    scene: cenaInicial,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 600},
            debug: false
        }
    }
    
}

var jogo = new Phaser.Game(config)
var imagemFundo
var personagem
var piso
var teclas


cenaInicial.preload = function() {

    this.load.image('ground', 'assets/mapa/Tilemap_-sheet.png')
    this.load.tilemapTiledJSON('map', 'assets/mapa/grass.json')
    this.load.image('bg', '/src/assets/backgroundSi-sheet.png')

    this.load.spritesheet('personagem', '/src/assets/Idle(32x32)-sheet.png', {
        frameWidth: 64,
        frameHeight: 64
    })
    this.load.spritesheet('correndo', '/src/assets/Run(32x32)-sheet.png', {
        frameWidth: 64,
        frameHeight: 64
    })
    this.load.image('pulando', '/src/assets/Jump(32x32)-sheet.png')
    this.load.image('caindo', '/src/assets/Fall(32x32)-sheet.png')

    
}

cenaInicial.create = function() {

    imagemFundo = this.add.image(320, 180, 'bg').setScale(1.5)    
    
    const map = this.make.tilemap({key: 'map'})
    const tileSetGrass = map.addTilesetImage('grass', 'ground')
    const ground = map.createLayer('ground', tileSetGrass, 0, 0)
    ground.setCollisionByExclusion([-1], true);

    personagem = this.physics.add.sprite(100, 200, 'personagem').play('idle')
    personagem.setCollideWorldBounds(true).setScale(1.2)
    this.physics.add.collider(personagem, ground)

    this.anims.create({
        key: 'idle', 
        frames: this.anims.generateFrameNumbers('personagem', { start: 0, end: 10 }),
        frameRate: 15, 
        repeat: -1 
    });


    this.anims.create({
        key: 'run',
        frames: this.anims.generateFrameNumbers('correndo', { start: 0, end: 10}),
        frameRate: 15,
        repeat: -1
    })

    teclas = this.input.keyboard.addKeys({
        up: 'W',
        left: 'A',
        down: 'S',
        right: 'D'
    })




}

cenaInicial.update = function() {

    if (teclas.left.isDown && personagem.y >= 280) {
        personagem.setVelocityX(-150)
        personagem.setFlip(true, false)
        personagem.anims.play('run', true)

    } else if (teclas.right.isDown && personagem.y >= 280) {
        personagem.setVelocityX(150)
        personagem.setFlip(false, false)
        personagem.anims.play('run', true)

    } else {
        personagem.setVelocityX(0)
        personagem.anims.play('idle', true)
    }

    if (teclas.up.isDown && personagem.y >= 500) {
        personagem.setVelocityY(-150)
        personagem.setTexture('pulando')
    
    } 
}