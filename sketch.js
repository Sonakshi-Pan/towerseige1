const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,ground1,ground2;
var box1,box2,box3,box4,box5,box6,box7,box6,box8,box9,box10,box11,box12,box13,box14,box15,box15,box16,box17,box18;
var polygon;

function preload(){

}

function setup(){
createCanvas(800,400);
engine = Engine.create();
	world = engine.world;
  ground = new Ground(400,390,1200,20 );
  ground1 = new Ground(390,350,160,10);
  ground2 = new Ground(600,200,160,10);
 polygon = new Polygon(100,200,20)

  box1 = new block(330,235,30,40);
  box2 = new block(360,235,30,40);
  box3 = new block(390,235,30,40);
  box4 = new block( 420,235,30,40);
  box5 = new block(450,235,30,40);
  //LEVEL THREE
  box6 = new block(360,195,30,40);
  box7 = new block(390,195,30,40);
  box8 = new block(420,195,30,40);
  box9 = new block(390,155,30,40);
 
  box10 = new block(600,90,30,40);
  box11 = new block(570,135,30,40);
  
  box12 = new block(600,135,30,40);
  
  box13 = new block(630,135,30,40);
  box14 = new block(660,175,30,40);
  
  box15 = new block(600,175,30,40);
  box16 = new block(630,175,30,40);

  box17 = new block(570,175,30,40);

  box18 = new block(540,175,30,40);


 slingShot= new SlingShot(polygon.body,{x:130,y:250});
  
}



function draw(){
background(0)
Engine.update(engine); 

ground.display();
ground1.display();
ground2.display();

polygon.display();

box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();

slingShot.display();

}
function mouseDragged(){
	Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY}) 
  }
  
  function mouseReleased(){
	slingShot.fly();
  }
