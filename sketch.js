
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var b1,b2,b3,b4,b5, roofObject
var r1,r2,r3,r4;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

	roofObject = new Roof(600, height/4, 500, 20);
     b1 = new Bob(720,375,50)
	 b2 = new Bob(760,375,50)
     b3 = new Bob(800,375,50)
     b4 = new Bob(840,375,50)
     b5 = new Bob(880,375,50)

     r1 = new Rope(b1.body,roofObject.body,-80,0)
	 r2 = new Rope(b2.body,roofObject.body,-40,0)
	 r3 = new Rope(b3.body,roofObject.body,0,0)
	 r4 = new Rope(b4.body,roofObject.body,40,0)
	 r5 = new Rope(b5.body,roofObject.body,80,0)
	 
	Engine.run(engine);
	
}
function draw() {

	background(230);
	rectMode(CENTER);
	roofObject.display();
    b1.display();
	b2.display();
	b3.display();
	b4.display();
	b5.display();
      
	r1.display();
	r2.display();
	r3.display();
	r4.display();
	r5.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(b1.body,b1.body.position,{x:-50,y:-45});

	}
}