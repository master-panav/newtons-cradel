
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint = Matter.Constraint
var bob1,bob2,bob3,bob4,bob5;
var engine,world
var roof1
var rope1

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bob1 = new Bob(470,400,40);
	bob2 = new Bob(430,400,40);
	bob3 = new Bob(390,400,40);
	bob4 = new Bob(350,400,40);
	bob5 = new Bob(310,400,40);

roof1 = new roof (width/2,height/4,width/4,20);

	Engine.run(engine);
  
	rope1 = new rope(bob1.body,roof1.body,80,0)
	rope2 = new rope(bob2.body,roof1.body,40,0)
	rope3 = new rope(bob3.body,roof1.body,0,0)
	rope4 = new rope(bob4.body,roof1.body,-40,0)
	rope5 = new rope(bob5.body,roof1.body,-80,0)

}

function draw() {
  rectMode(CENTER);
  background(200);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}

function keyPressed(){

if(keyCode === UP_ARROW){
Matter.Body.applyForce(bob5.body,bob5.body.position,{x:-50,y:-35})


}

}

