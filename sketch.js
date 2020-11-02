
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var basket1sprite,basket2sprite,basket3sprite

function preload()
{
	paperIMG=loadImage("paper.png")
	binIMG=loadImage("bin.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	//basket1sprite.createSprite= (500,660,200,10);
	//basket2sprite.createSprite= (490,660,10,100);
	//basket3sprite.createSprite= (700,660,10,100);

	

	
   
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bin= Bodies.rectangle(500,660,200,10);
  bin.addimage(binIMG)
	World.add(world,bin)


	paper = Bodies.circle(100, 200, 70 , options );
	paper.addImage(paperIMG)

	
	var options = {
		isStatic:false,
		restitution:0.3,
		friction:0.5,
		density:1.2
	}

		Ground = Bodies.rectangle (width/2,650,800,10)
	World.add(world,Ground)


	

  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}



