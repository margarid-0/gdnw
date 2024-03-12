export class gameOver extends Phaser.Scene {
    constructor() {
        super({ key: 'gameOver' })
        this.selectedItemIndex = 0
        this.arrowKeysEnabled = true
    }


    create() {
        this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height / 2, 'bgGameOver').setScale(0.6)
        this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height * 0.33, 'gameOver').setScale(0.3)

        this.menuItemsPositions = [
            {x: this.sys.game.config.width * 0.5, y: this.sys.game.config.height * 0.8},
            {x: this.sys.game.config.width * 0.5, y: this.sys.game.config.height * 0.9}
        ]


        this.menuItems = [
            this.add.image(this.menuItemsPositions[0].x, this.menuItemsPositions[0].y, 'reiniciar').setScale(0.16),
            this.add.image(this.menuItemsPositions[1].x, this.menuItemsPositions[1].y, 'menu').setScale(0.2),
        ]

        this.arrow = this.add.image(this.menuItemsPositions[0].x - 250, this.menuItemsPositions[0].y, 'playMain').setScale(0.02)
        this.cursors = this.input.keyboard.createCursorKeys()
        this.enterKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER)
        
    }

    update(time) {
        if (this.arrowKeysEnabled == true) {
            if (this.cursors.up.isDown && this.selectedItemIndex > 0) {
                this.selectedItemIndex--;
                this.moveArrowToSelectedItem();
                this.disableArrowKeysTemporarily(time);
            } else if (this.cursors.down.isDown && this.selectedItemIndex < this.menuItems.length - 1) {
                this.selectedItemIndex++;
                this.moveArrowToSelectedItem();
                this.disableArrowKeysTemporarily(time);
            }
        }


        if (this.selectedItemIndex === 0 && this.enterKey.isDown) {
            this.scene.start('fase1')
        } else if (this.selectedItemIndex === 1 && this.enterKey.isDown) {
            this.scene.start('mainMenu')
        }
    }

    moveArrowToSelectedItem() {
        let selectedItemPosition = this.menuItemsPositions[this.selectedItemIndex];
        this.arrow.x = selectedItemPosition.x - 250; 
        this.arrow.y = selectedItemPosition.y;
    }

    disableArrowKeysTemporarily() {
        this.arrowKeysEnabled = false;
        this.time.delayedCall(150, () => {
            this.arrowKeysEnabled = true;
        }, [], this);
    }

    
}