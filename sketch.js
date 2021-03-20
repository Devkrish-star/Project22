var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, boxlog1, boxlog2, boxlog3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	boxlog1Sprite = createSprite(width/2, 650, 200, 20);
	boxlog1Sprite.shapeColor = "red";

	boxlog2Sprite = createSprite(310, 600, 20, 100);
	boxlog2Sprite.shapeColor = "red";

	boxlog3Sprite = createSprite(490, 600, 20, 100);
	boxlog3Sprite.shapeColor = "red";

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {isStatic:true});
	World.add(world, packageBody);

    boxlog1 = Bodies.rectangle(width/2, 650, 200, 20, {isStatic:true} );
	World.add(world, boxlog1);

	boxlog2 = Bodies.rectangle(310, 600, 20, 100, {isStatic:true} );
	World.add(world, boxlog2);

	boxlog3 = Bodies.rectangle(490, 600, 20, 100, {isStatic:true} );
	World.add(world, boxlog3);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y; 
  drawSprites();

}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
  }
}