
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Tree;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    Tree = new tree(600,400,20,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Tree.display();
  
  drawSprites();
 
}



