class playScene extends Phaser.Scene {
    constructor() {
        super('playScene')
    }

    preload() {
        this.load.image('ground', 'assets/mapa/Tilemap_-sheet.png')

    }

    create() {

    }
}


export default playScene