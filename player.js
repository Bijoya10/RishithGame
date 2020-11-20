class Player {
    constructor(x, y) {
        var options = {
            restitution : 0,
            density : 1,
            friction : 5
        }
        this.body = Bodies.rectangle(x,y,85,150,options);
        this.width = 95;
        this.height = 150;
        this.imageFront = loadImage("SteveFront.png");
        this.imageRight1 = loadImage("steveImages/steve1.gif");
        this.imageRight2 = loadImage("steveImages/steve3.gif");
        this.imageRight3 = loadImage("steveImages/steve5.gif");
        this.imageRight4 = loadImage("steveImages/steve7.gif");
        this.imageLeft1 = loadImage("steveImagesR/steve1r.gif");
        this.imageLeft2 = loadImage("steveImagesR/steve3r.gif");
        this.imageLeft3 = loadImage("steveImagesR/steve5r.gif");
        this.imageLeft4 = loadImage("steveImagesR/steve7r.gif");
        World.add(world,this.body);
    }

    displayFront() {
        var pos = this.body.position
        push()
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.imageFront,0,0,this.width,this.height);
        pop()
    }

    displayRight() {
        var pos = this.body.position
        push()
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        imageMode(CENTER);

        if (second()%1.5===0) {
            image(this.imageRight1,0,0,105,this.height);
        } else if (second()%2===0) {
            image(this.imageRight2,0,0,105,this.height);
        } else if (second()%2.5===0) {
            image(this.imageRight3,0,0,105,this.height);
        } else {
            image(this.imageRight4,0,0,105,this.height);
        }
        pop();
    }

    displayLeft() {
        var pos = this.body.position
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        if (second()%1.5===0) {
            image(this.imageLeft1,0,0,105,this.height);
        } else if (second()%2===0) {
            image(this.imageLeft2,0,0,105,this.height);
        } else if (second()%2.5===0) {
            image(this.imageLeft3,0,0,105,this.height);
        } else {
            image(this.imageLeft4,0,0,105,this.height);
        }
        pop();
    }
}