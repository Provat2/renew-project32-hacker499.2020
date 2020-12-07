
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



var engine, world;
var holder,ball,ground;
var stand1,stand2, stand3, stand4;
var ball;
var slingShot;
var backgroundImage, polygon_img;
var score = 0;

function preload(){
 // backgroundImage = loadImage("bg.jpg");
  polygon_img=loadImage("polygon.png");

  getBackgroundImage();
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  
  
  ground = new Ground();
  
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
  stand3 = new Stand(260, 230, 10, 80);
  stand4 = new Stand(600, 130, 10, 80);
 
  //level one
  block1 = new Block(300,275,30,40);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  //set 2 for second stand
  //level one
  blocks1 = new Block(640,175,30,40);
  blocks2 = new Block(670,175,30,40);
  blocks3 = new Block(700,175,30,40);
  blocks4 = new Block(730,175,30,40);
  blocks5 = new Block(760,175,30,40);

  //level two
  blocks6 = new Block(670,135,30,40);
  blocks7 = new Block(700,135,30,40);
  blocks8 = new Block(730,135,30,40);
  
  //level 3 or top
  blocks9 = new Block(700,95,30,40);

 
  ball = Bodies.circle(100,210,20);
  World.add(world,ball);

  slingShot = new Slingshot(this.ball,{x:100,y:200});

}
function draw() {
  if (backgroundImage){
    background(backgroundImage);
  }
 
  textSize(20);
  fill("black");
  text("Drag and realease the hexagon to destroy the blocks!",300,30);

  textSize(15);
  text("Press Space to get a second Chance to Play!!",250 ,360);
  
  textSize(20);
  text("Score: " + score, 30, 20);

  ground.display();
  stand1.display();
  stand2.display();
  stand3.display();
  stand4.display();
  strokeWeight(2);
  stroke(15);
  fill("skyblue");


//level1
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");



  //Level 2
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");



//Level 3
  block13.display();
  block14.display();
  block15.display();
  fill("lightgreen");


//Level 4 or top of the same section
  block16.display();
  fill("skyblue");



  //Set 2 blocks
  //Level 1
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  fill("turquoise");


//Level 2
  blocks6.display();
  blocks7.display();
  blocks8.display();
  fill("pink")


  //Level 3 or top of the same section
  blocks9.display();
  fill("gold");


  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,40,40);

  slingShot.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();

  blocks1.score();
  blocks2.score();
  blocks3.score();
  blocks4.score();
  blocks5.score();
  blocks6.score();
  blocks7.score();
  blocks8.score();
  blocks9.score();

  
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
   ball = Bodies.circle(100,210,20);
   World.add(world,ball);
   slingShot.attach(this.ball);
  }
}

async function getBackgroundImage(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11, 13); 
  console.log(hour);
  var bg;
  if (hour >= 06 && hour <= 19){
    bg = "bg.jpg";
  }
  else{
    bg = "bg2.jpg";
  }
  backgroundImage = loadImage(bg);
}