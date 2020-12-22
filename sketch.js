const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var g
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10
var builds=[];

function setup() {
  createCanvas(1200,500);

  engine = Engine.create();
  world =engine.world;

  g = new Ground(600,490,1200,20)

  for(var i=300;i<=height;i=i-50){
  builds.push(new Building(900,i)); 
}
  Engine.run(engine);
}

function draw() {
  background(220);

  for(var i=0;i<builds.length;i++){
    builds[i].display(); 
  }
  g.display();
}