var paperImg, dustbinIMG;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	paperIMG=loadImage("paperimg.png")
	dustbinIMG=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1600, 700);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("green")

	var x = 10;

	side1Sprite=createSprite(width/2+500, height-50, 200, 20);
	side1Sprite.shapeColor=color("black");

	side2Sprite=createSprite((width/2)+400, height-170, 20, 260);
	side2Sprite.shapeColor=color("black");

	side3Sprite=createSprite((width/2)+600, height-170, 20, 260);
	side3Sprite.shapeColor=color("black");

	trashSprite=createSprite(width/2+500, height-170,200, 20);
	trashSprite.addImage(dustbinIMG);
	trashSprite.scale=0.75;

	paperSprite = createSprite(10, 80, 40, 40);
	paperSprite.addImage(paperIMG);
	paperSprite.scale=0.3;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	var options = {
		restitution: 0.3,
		friction: 0.5,
		density: 1.2
	}

	paperObject = Bodies.circle(width/2, 200, 5, options);
	World.add(world, paperObject);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  paperSprite.x = paperObject.position.x;
  paperSprite.y = paperObject.position.y;

  drawSprites();
 // keyPressed();

}

function keyPressed() {

	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperObject, paperObject.position, {x:2,y:-5});
	}

}


