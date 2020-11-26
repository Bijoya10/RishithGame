const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var player, back, boxArray = [];
var flagToReset = "start",flag1=0, flagBox = "start",flag=0;
var anvilArray = [];
var ground;
var sc;

function preload() {
    back = loadImage("images/minecraftB.jpg");
}

function setup(){
    var canvas = createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;

    player = new Player(200,200);
    player.isSensor=true
    for (var i=50; i<1000; i = i+100) {
        anvilArray.push(new Anvil(i,50));

    }
    ground = new Ground(500,600);
    sc = second();
    boxCreate();
}

function draw(){
    if (back) {
        background(back);
    }
    Engine.update(engine);

    if(second()%15===0){
        sc = second();
    }

    move();


    //displaying everuything
    for (var i=0; i<boxArray.length; i++) {
        boxArray[i].display();
    }
    for (var i=0; i<anvilArray.length; i++) {
        anvilArray[i].display();
        anvilArray[i].isSensor=true
    }
    ground.display();


    //anvil drop && reset
    if ((sc + 5)%60 === second()&& flagToReset==="start") {
        anvilDrop();
        flagToReset="dropped";
       
    }
    if(sc+10%60===second() && flagToReset==="dropped"){
        anvilReset();
        boxReset();
        for (var i=0; i<anvilArray.length; i++) {  
        }
        flagToReset="start";
    }
   
    
    console.log(player.isSensor)

}

function move() {
    if (keyIsDown(RIGHT_ARROW)) {
        Matter.Body.setPosition(player.body,{
            x : player.body.position.x + 3,
            y : player.body.position.y
        })
        flag1=1;
    } else if (keyIsDown(LEFT_ARROW)) {
        Matter.Body.setPosition(player.body,{
            x : player.body.position.x - 3,
            y : player.body.position.y
        })
        flag1=2
    } else if(keyIsDown(UP_ARROW)) {
        flag1=3;
    }

    if(flag1===1){
        player.displayRight();
    }else if(flag1===2){
        player.displayLeft();
    }else{
        player.displayFront();
    }
} 


function boxCreate() {
    boxArray.push(new Block(random(50,450),300));
    boxArray.push(new Block(random(550,950),300)); 
}
function boxReset(){
    Matter.Body.setPosition(boxArray[0].body,{x:random(50,450),y:300})
    Matter.Body.setPosition(boxArray[1].body,{x:random(550,950),y:300})
}

function anvilDrop() {
    for (var i = 0; i<anvilArray.length; i++) {
        Matter.Body.setStatic(anvilArray[i].body,false);
    }
}

function anvilReset(){
    for (var i=0; i<anvilArray.length; i++) {
       Matter.Body.setPosition(anvilArray[i].body,{x:i * 100,y:50})
       Matter.Body.setStatic(anvilArray[i].body,true);    
    }  
}


