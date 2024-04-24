// created by Ray Wang and Hengyang Ye

class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 400;
        this.bodyY = 300;

        // smile
        this.smileX = this.bodyX;
        this.smileY = this.bodyY + 50;

        // arm
        this.leftHandX = this.bodyX - 90;
        this.lefthandY = this.bodyY + 35;

        this.rightHandX = this.bodyX + 90;
        this.righthandY = this.bodyY + 35;

        // leg
        this.leftLegX = this.bodyX - 70;
        this.leftlegY = this.bodyY + 120;

        this.rightLegX = this.bodyX + 70;
        this.rightlegY = this.bodyY + 120;

        // horn
        this.leftHornX = this.bodyX - 75;
        this.lefthornY = this.bodyY - 80;

        this.rightHornX = this.bodyX + 75;
        this.righthornY = this.bodyY - 80;

        // eye
        this.eyeX = this.bodyX;
        this.eyeY = this.bodyY - 20;

        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");

        this.load.image("body", "body_blueA.png");
        this.load.image("mouth", "mouth_closed_sad.png");
        this.load.image("smile", "mouth_closed_happy.png");
        this.load.image("fang", "mouth_closed_fangs.png");
        this.load.image("eye", "eye_cute_dark.png");
        this.load.image("horn", "detail_blue_horn_small.png");
        this.load.image("arm", "arm_blueB.png");
        this.load.image("leg", "leg_blueD.png");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "body");

        my.sprite.mouth = this.add.sprite(this.smileX, this.smileY, "mouth");
        my.sprite.smile = this.add.sprite(this.smileX, this.smileY, "smile");
        my.sprite.smile.visible = false;
        my.sprite.fang = this.add.sprite(this.smileX, this.smileY, "fang");
        my.sprite.fang.visible = false;

        my.sprite.eye = this.add.sprite(this.eyeX, this.eyeY, "eye");

        my.sprite.leftHand = this.add.sprite(this.leftHandX, this.lefthandY, "arm");
        my.sprite.leftHand.flipX = true;
        my.sprite.rightHand = this.add.sprite(this.rightHandX, this.righthandY, "arm");

        my.sprite.leftLeg = this.add.sprite(this.leftLegX, this.leftlegY, "leg");
        my.sprite.leftLeg.flipX = true;
        my.sprite.rightLeg = this.add.sprite(this.rightLegX, this.rightlegY, "leg");

        my.sprite.leftHorn = this.add.sprite(this.leftHornX, this.lefthornY, "horn");
        my.sprite.leftHorn.flipX = true;
        my.sprite.rightHorn = this.add.sprite(this.rightHornX, this.righthornY, "horn");

        this.keys = {
            mouth: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M),
            smile: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),
            fangs: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F),
            left: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
            right: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
        };
        
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability


        if (this.keys.smile.isDown) {
            this.my.sprite.smile.visible = true;
            this.my.sprite.fang.visible = false;
            this.my.sprite.mouth.visible = false;
        } else if (this.keys.fangs.isDown) {
            this.my.sprite.fang.visible = true;
            this.my.sprite.smile.visible = false;
            this.my.sprite.mouth.visible = false;
        } else if (this.keys.mouth.isDown) {
            this.my.sprite.mouth.visible = true;
            this.my.sprite.fang.visible = false;
            this.my.sprite.smile.visible = false;
        }

        if (this.keys.left.isDown) {
            this.my.sprite.body.x -= 1;
            this.my.sprite.eye.x -= 1;
            this.my.sprite.mouth.x -= 1;
            this.my.sprite.smile.x -= 1;
            this.my.sprite.fang.x -= 1;
            this.my.sprite.leftHand.x -= 1;
            this.my.sprite.rightHand.x -= 1;
            this.my.sprite.leftLeg.x -= 1;
            this.my.sprite.rightLeg.x -= 1;
            this.my.sprite.leftHorn.x -= 1;
            this.my.sprite.rightHorn.x -= 1;
        } else if (this.keys.right.isDown) {
            this.my.sprite.body.x += 1;
            this.my.sprite.eye.x += 1;
            this.my.sprite.mouth.x += 1;
            this.my.sprite.smile.x += 1;
            this.my.sprite.fang.x += 1;
            this.my.sprite.leftHand.x += 1;
            this.my.sprite.rightHand.x += 1;
            this.my.sprite.leftLeg.x += 1;
            this.my.sprite.rightLeg.x += 1;
            this.my.sprite.leftHorn.x += 1;
            this.my.sprite.rightHorn.x += 1;
        }

       
    }

}