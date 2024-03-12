export class mainMenu extends Phaser.Scene {
    constructor() {
        super({key: 'mainMenu'})
        this.selectedItemIndex = 0
        this.arrowKeysEnabled = true
    }

    create() {
        this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height / 2, 'bgMainMenu').setScale(0.6)
        this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height / 4, 'uniWorld').setScale(0.45)
        
        this.menuItemsPositions = [
            {x: this.sys.game.config.width * 0.51, y: this.sys.game.config.height * 0.7},
            {x: this.sys.game.config.width / 2, y: this.sys.game.config.height * 0.78},
            {x: this.sys.game.config.width / 2, y: this.sys.game.config.height * 0.86}
        ]


        this.menuItems = [
            this.add.image(this.menuItemsPositions[0].x, this.menuItemsPositions[0].y, 'newGame').setScale(0.2),
            this.add.image(this.menuItemsPositions[1].x, this.menuItemsPositions[1].y, 'controles').setScale(0.2),
            this.add.image(this.menuItemsPositions[2].x, this.menuItemsPositions[2].y, 'configs').setScale(0.2),
        ]

        this.arrow = this.add.image(this.menuItemsPositions[0].x - 200, this.menuItemsPositions[0].y, 'playMain').setScale(0.018)
        this.cursors = this.input.keyboard.createCursorKeys()
        this.enterKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER)
        

        this.resetMenu()
    }

    update(time) {
        if (this.arrowKeysEnabled == true) {
            if (this.cursors.up.isDown && this.selectedItemIndex > 0) {
                this.selectedItemIndex--
                this.moveArrowToSelectedItem()
                this.disableArrowKeysTemporarily(time)
            } else if (this.cursors.down.isDown && this.selectedItemIndex < this.menuItems.length - 1) {
                this.selectedItemIndex++;
                this.moveArrowToSelectedItem()
                this.disableArrowKeysTemporarily(time)
            }
        }


        if (this.selectedItemIndex === 0 && this.enterKey.isDown) {
            this.scene.start('fase1')
        } else if (this.selectedItemIndex === 1 && this.enterKey.isDown) {
            this.scene.start('controls')
        } else if (this.selectedItemIndex === 2 && this.enterKey.isDown) {
            this.scene.start('settings')
        }
    }

    moveArrowToSelectedItem() {
        let selectedItemPosition = this.menuItemsPositions[this.selectedItemIndex]
        this.arrow.x = selectedItemPosition.x - 200
        this.arrow.y = selectedItemPosition.y
    }

    disableArrowKeysTemporarily() {
        this.arrowKeysEnabled = false;
        this.time.delayedCall(150, () => {
            this.arrowKeysEnabled = true;
        }, [], this);
    }

    resetMenu() {
        this.selectedItemIndex = 0
    }
}