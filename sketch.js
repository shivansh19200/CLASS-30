const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var gameState = "attach";
var score = 0;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 505, 350, 200);

    box1 = new Box(800,520,70,70);
    box2 = new Box(1020,520,70,70);
    pig1 = new Pig(910,550);
    log1 = new Log(910,460,300, PI/2);

    box3 = new Box(800,440,70,70);
    box4 = new Box(1020,440,70,70);
    pig3 = new Pig(910, 420);

    log3 =  new Log(910,380,300, PI/2);

    box5 = new Box(910,360,70,70);
    log4 = new Log(860,320,150, PI/7);
    log5 = new Log(970,320,150, -PI/7);

    bird = new Bird(230,300);
    bird2 = new Bird(150,370);
    bird3 = new Bird(100,370);
    bird4 = new Bird(50,370);

    sling = new Slingshot(bird.body, {x: 220 , y: 240});

     

}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig1.score();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    pig3.score();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    bird2.display();
    bird3.display();
    bird4.display();
    platform.display();
    sling.display();

    push();
    textSize(32);
    stroke("black");
    strokeWeight(3);
    text("Score: "+ score, 348 , 41);
    pop();
    //console.log(mouseY);
}

function mouseDragged(){
    if(gameState == "attach"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY})
    }
}

function mouseReleased(){
    sling.fly();
    gameState = "fly";
}
function keyPressed(){
    if(bird.body.x > 280 && keyCode == 32){
        Matter.Body.setPosition(bird1.body , {x: 150 , y: 300});
        sling.attach(bird1.body);
        gameState = "attach";
        World.remove(world, bird);
    }
}
