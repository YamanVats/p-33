var engine, world,snowBall;
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var snowArray = [];


function preload(){
bg = loadImage ("snow1.jpg");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  ground=new Ground (400,400,800,10)
}

function draw() {
  background(bg);  
  Engine.update(engine);
  if (frameCount%50===0){
    snowArray.push(new Snow(random(100,700),0,40)) 
  }
  for(var i = 0;i<snowArray.length;i++){
    snowArray[i].display();
  }
  drawSprites();
}

function mouseClicked(){
  snowArray.push(new Snow(mouseX,0,40))
}