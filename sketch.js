
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var ball;
var paperObject;
var groundObject;
var dustbin1;

function preload()
{
	
}

function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	groundObject = new Ground(width/2,670,width,20);
	paperObject = new Paper(200,450,40);
	dustbin1 = new Dustbin(1200,650);

	var render = Render.create({ element: document.body, engine: engine, options: 
		{ width: 1200, height: 700, wireframes: false } }); 
		Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);

 
  dustbin1.display();
  paperObject.display();
  groundObject.display();
}

function MousePressed () {

	if (KeyCode === UP_ARROW) {

		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
	
}



