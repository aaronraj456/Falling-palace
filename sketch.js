const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var world;
var engine;
var body;
var bodies1;
var bodies2;
var ground1;
var bodies3;
var bodies4;
var bodies5;
var bodies6;

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
  bodies1 = new Bastion(400,100,200,200,1);
  ground1 = new ground(400,400,800,20);
  bodies2 = new Bastion(400,50,50,100,1);
  bodies3 = new Bastion(50,50,50,150,1);
  bodies4 = new Bastion(750,50,50,150,1);
  bodies5 = new Bastion(200,50,220,90,1);
  bodies6 = new Bastion(600,50,220,90,1);

}

function draw() {
  background("orange");
  Engine.update(engine); 
  bodies1.display();
  ground1.display();
  bodies2.display();
  bodies3.display();
  bodies4.display();
  bodies5.display();
  bodies6.display()

  drawSprites();
}
