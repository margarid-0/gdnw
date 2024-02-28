import playScene from "./scenes/playScene.js"




var config = {
    type: Phaser.AUTO,
    width: 1000,
    height: 640,
    scene: [playScene],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 800},
            debug: true
        }
    }
    
}

var jogo = new Phaser.Game(config);

// cenaInicial.preload = function() {

//     // this.load.image('ground', 'assets/mapa/Tilemap_-sheet.png')
//     // this.load.tilemapTiledJSON('map', 'assets/mapa/grass.json')
//     // this.load.image('bg', '/src/assets/backgroundSi-sheet.png')

//     // this.load.spritesheet('personagem', '/src/assets/Idle(32x32)-sheet.png', {
//     //     frameWidth: 64,
//     //     frameHeight: 64
//     // })
//     // this.load.spritesheet('correndo', '/src/assets/Run(32x32)-sheet.png', {
//     //     frameWidth: 64,
//     //     frameHeight: 64
//     // })
//     // this.load.image('pulando', '/src/assets/Jump(32x32)-sheet.png')
//     // this.load.image('caindo', '/src/assets/Fall(32x32)-sheet.png')

    
// }

// cenaInicial.create = function() {

//     // imagemFundo = this.add.image(3072, 320, 'bg')   
//     // this.physics.world.setBounds(0, 0, 6144, 640)
    
//     // const map = this.make.tilemap({key: 'map'})
//     // const tileSetGrass = map.addTilesetImage('grass', 'ground')
//     // const ground = map.createLayer('ground', tileSetGrass, 0, 0)
//     // ground.setCollisionByExclusion([-1], true)


//     // personagem = this.physics.add.sprite(0, 500, 'personagem').play('idle')
//     // personagem.setCollideWorldBounds(true).setScale(1.2)
//     // this.physics.add.collider(personagem, ground)


//     // this.anims.create({
//     //     key: 'idle', 
//     //     frames: this.anims.generateFrameNumbers('personagem', { start: 0, end: 10 }),
//     //     frameRate: 15, 
//     //     repeat: -1 
//     // });


//     // this.anims.create({
//     //     key: 'run',
//     //     frames: this.anims.generateFrameNumbers('correndo', { start: 0, end: 10}),
//     //     frameRate: 25,
//     //     repeat: -1
//     // })

//     // teclas = this.input.keyboard.addKeys({
//     //     up: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),
//     //     upArrow: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP),
//     //     left: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
//     //     leftArrow: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT),
//     //     down: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),
//     //     downArrow: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN),
//     //     right: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D),
//     //     rightArrow: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT),
//     //     space: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
//     // })  

//     // this.cameras.main.setBounds(0, 0, 6144, 640)
//     // this.cameras.main.startFollow(personagem)

// }

// cenaInicial.update = function() {

//     // if (teclas.left.isDown && personagem.y >= 280 || teclas.leftArrow.isDown) {
//     //     personagem.setVelocityX(-150)
//     //     personagem.setFlip(true, false)
//     //     personagem.anims.play('run', true)

//     // } else if (teclas.right.isDown && personagem.y >= 280 || teclas.rightArrow.isDown) {
//     //     personagem.setVelocityX(150)
//     //     personagem.setFlip(false, false)
//     //     personagem.anims.play('run', true)

//     // } else {
//     //     personagem.setVelocityX(0)
//     //     personagem.anims.play('idle', true)
//     // }

//     // if (teclas.up.isDown && personagem.y >= 500 || teclas.upArrow.isDown && personagem.y >= 500 || teclas.space.isDown && personagem.y >= 500) {
//     //     personagem.setVelocityY(-150)
//     //     personagem.setTexture('pulando')
    
//     // } 
// }