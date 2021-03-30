const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg;
var cannon,b;
var crate1,crate2,crate3,crate4,crate5,crate6,crate7,crate8,crate9;
var img;
var cannonBall;
var play;
var playImg1,playImg2;
var gameState = 0;
var font;

function preload(){
  bg = loadImage("Assets/Images/background.png");
  img = loadImage("Assets/Images/Name.jpg");
  playImg1 = loadImage("Assets/Images/play2.png");
  playImg2 = loadImage("Assets/Images/play1.png");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  cannonBall = createSprite(100,100,30,30);
  cannonBall.addImage(img);
  cannonBall.scale = 0.2;

  play = createSprite(400,200,10,10);
  play.addImage(playImg1);

  cannon = new Cannon();
  stand = new Cannon2();
  zameen = new Ground(400,375,800,50);
  b = new ball(60,330,20);

  crate1 = new Crate(600,200,60,60);
  crate2 = new Crate(600,200,60,60);
  crate3 = new Crate(600,200,60,60);

  crate4 = new Crate(665,200,60,60);
  crate5 = new Crate(665,200,60,60);
  crate6 = new Crate(665,200,60,60);

  crate7 = new Crate(730,200,60,60);
  crate8 = new Crate(730,200,60,60);
  crate9 = new Crate(730,200,60,60);
}

function draw() {
  background(bg);
  Engine.update(engine);
  console.log(gameState);
  if(mouseIsOver(play)){
    play.addImage(playImg2);
  }else{
    play.addImage(playImg1);
  }

  if(mousePressedOver(play)){
    play.scale = 0.9;
    play.addImage(playImg1);
    gameState = "started";
  }else{
    play.scale = 1;
  }


  if(gameState === 0){
    cannonBall.visible = true;
    play.visible = true;
  }else{
    cannonBall.visible = false;
    play.visible = false;
  }

  if(gameState === "started"){
    textSize(32);
    textFont("Forte");
    text("Now, press space to be ready to shoot it",50,50);
  }

  if(gameState === "ballLoaded"){
    textSize(32);
    textFont("Forte");
    text("You're all set to shoot the ball",50,50);
    fill("blue");
    strokeWeight(3);
    text("Click anywhere to shoot",50,100);
  }

  if(gameState === "Shooted"){
    textFont("Forte");
    textSize(32);
    fill("green");
    text("Press space to reload the ball and shoot it again",0,100);
  }

  if(gameState === "ballLoaded" || gameState === "Shooted" ){
    play.x = 1000;
    play.y = 1000;
  }

  b.display();
  cannon.display();
  stand.display();
  zameen.display();
  crate1.display();
  crate2.display();
  crate3.display();
  crate4.display();
  crate5.display();
  crate6.display();
  crate7.display();
  crate8.display();
  crate9.display();
  drawSprites();
}

function keyPressed(){
  if(keyCode===32){
    gameState = "ballLoaded";
    b.a();
    b = new ball(60,330,20);
  }
}

function mouseReleased(){
    if(gameState==="ballLoaded"){  

      gameState = "Shooted";

      Matter.Body.applyForce(b.body, b.body.position, {
        x: mouseX-60,
        y: mouseY-60
      });
    }
}

