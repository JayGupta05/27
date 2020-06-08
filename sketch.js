var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,roof,bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	roof = new Roof(400,100,300,20);
	bobObject1 = new Bob(300,300);
	bobObject2 = new Bob(350,300);
	bobObject3 = new Bob(400,300);
	bobObject4 = new Bob(450,300);
	bobObject5 = new Bob(500,300);
	rope1 = new Rope(bobObject1.body,roof.body,-50*2,0);
	rope2 = new Rope(bobObject2.body,roof.body,-50,0);
	rope3 = new Rope(bobObject3.body,roof.body,0,0);
	rope4 = new Rope(bobObject4.body,roof.body,50,0);
	rope5 = new Rope(bobObject5.body,roof.body,50*2,0);

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);

  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		console.log("here");
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-80,y:-80});
	}
}

