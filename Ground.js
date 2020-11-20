class Ground {
    constructor(x,y) {
        var options = {
            isStatic : true,
            friction : 100
        }
        this.body = Bodies.rectangle(x,y,1000,60,options);
        this.width = 1000;
        this.height = 60;
        this.image = loadImage("images/ground2.jpg");
        World.add(world,this.body);
    }

    display() {
        var pos = this.body.position;
        push();
        fill("red");
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
        pop();
    }
}