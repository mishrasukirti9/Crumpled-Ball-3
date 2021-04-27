
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render= Matter.Render
var paper1;

function preload(){
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	paper1 = new Paper(100,400,40);
	
	ground = new Ground(400,680);
	dustbin=new Dustbin(800,660)
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });
	
	Engine.run(engine);
	
	
}


function draw() {
  background("blue");
  Engine.update(engine)
  
  paper1.display();
  ground.display();
  dustbin.display();
 
  

 
 
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85})
	}
}


