
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var ground,tree,treeImg,boy, boyImg
var stone

function preload()
{
	treeImg=loadImage("tree.png")
	boyImg=loadImage("boy.png")
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	mango1=new Mango(1200,350,40)
	
  mango2=new Mango(890,370,40);
	mango3=new Mango(910,370,40);
	mango4=new Mango(850,330,40);
	mango5=new Mango(1250,370,40);
	mango6=new Mango(1250,230,40);
	mango7=new Mango(970,230,40);
	mango8=new Mango(1140,150,40);
	mango9=new Mango(1100,340,40);
	mango10=new Mango(900,220,40);
	mango11=new Mango(1120,100,40);
	mango12=new Mango(1040,120,40);
	ground=new Ground(width/2,600,width,20);
	tree=createSprite(1050,360)
	tree.addImage(treeImg)
	tree.scale=0.4

	boy=createSprite(200,540)
	boy.addImage(boyImg)
	boy.scale=0.1

	stone=new Stone(150,480,30)

	slingShot=new Slingshot(stone.body,{x:150,y:480})

	
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  slingShot.display()

  ground.display()
  tree.display()
  stone.display()
  mango1.display()
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display()
  mango6.display();
 mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display()

  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);
  detectollision(stone,mango8);
  detectollision(stone,mango9);
  detectollision(stone,mango10);
  detectollision(stone,mango11);
  detectollision(stone,mango12);

  
  
  drawSprites();
 
}
function mouseDragged()
{
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}) 
}
function mouseReleased()
{
	slingShot.fly();
    
}


function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x:150, y:480}) 
	  Slingshot.attach(stone.body);
	}
  }

  function detectollision(lstone,lmango){
	
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  
  	if(distance<=lmango.radius+lstone.radius)
    {
      
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }


