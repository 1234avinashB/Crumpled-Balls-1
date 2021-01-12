
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bin1, bin2, bin3, paperObject, ground1;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	bin1 = new Bin(1200, 690, 200, 20)
	bin2 = new Bin(1300, 670, 20, 100)
	bin3 = new Bin(1100, 670, 20, 100)
	paperObject = new Paper(200, 675)
	Engine.run(engine);
	ground1 = new Ground(800, 695, 1600, 5)
}


function draw() {
  Engine.update(engine);
  background(0);
  bin1.display();
  bin2.display();
  bin3.display();
  paperObject.display();
  ground1.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
  
	}
}



