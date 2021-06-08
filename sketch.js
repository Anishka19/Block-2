const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var stand1,stand2;
var ball;
var launcher;
var polygon_img;

function preload(){
  polygon_img = loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ground = new Ground();

  //first
  stand1 = new Stand(390,300,250,10);
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

  //second
  stand2 = new Stand(700,200,200,10);
  //level one
  block17 = new Block(640,175,30,40);
  block18 = new Block(670,175,30,40);
  block19 = new Block(700,175,30,40);
  block20 = new Block(730,175,30,40);
  block21 = new Block(760,175,30,40);
  //level two
  block22 = new Block(670,135,30,40);
  block23 = new Block(700,135,30,40);
  block24 = new Block(730,135,30,40);
  //level three
  block25 = new Block(700,95,30,40);

  ball = Bodies.circle(50,200,20);
  World.add(world, ball);

  launcher = new Launcher(this.ball, {x:100,y:200});
}
function draw() {
  background("#D242FF"); 

  textSize(20);
  fill('#3C0233');
  text("Drag the hexagon and release it to launch it toward the blocks", 170, 45);
  textSize(17);
  text("Press space to play again", 650, 350);
  ground.display();
  stand1.display();
  stand2.display();

 // strokeWeight(2);
  //stroke('#EDC9FC');

  //fill("#2B1E25");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  //fill("#613B62");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  //fill("#AE58AF");
  block13.display();
  block14.display();
  block15.display();

  //fill("#AF6FAB");
  block16.display();

  //strokeWeight(2);
  //stroke('#FFAED7');

  //fill('#FF0080');
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  //fill('#FF48A5');
  block22.display();
  block23.display();
  block24.display();

  //fill('#FF78BD');
  block25.display();

  imageMode(CENTER);
  image(polygon_img, ball.position.x, ball.position.y,40,40);

  launcher.display();
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball, {x : mouseX, y: mouseY});
}

function mouseReleased(){
  launcher.fly();
}

function keyPressed() {
  if(keyCode === 32) {
    launcher.attach(this.ball);
  }
}