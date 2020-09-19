
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree=new Tree(500,650,50,50);
//	ground=new Ground(400,700,800,10);
	stone=new Stone(300,300,30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);


  tree.display();
 //ground.display();
  
  drawSprites();
 
}



