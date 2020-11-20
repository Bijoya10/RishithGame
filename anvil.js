class Anvil {
    constructor(x,y) {
        var options = {
            restitution : 0.01,
            density : 50,
            friction : 5,
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,80,100,options);
        World.add(world,this.body);
        this.image = loadImage("images/anvilNew.png");
        this.width = 80;
        this.height = 100;
    }

    display() {
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}