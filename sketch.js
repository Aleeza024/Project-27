
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var wedge;
var angle = 60;
var poly;
var boxes = [];
var r, g, b
var circleball = []

function setup() {
  createCanvas(400, 400);

  engine = Engine.create();
  world = engine.world;
  var option = {
    isStatic: true,
  };
  ground = Bodies.rectangle(100, 300, 400, 20, option);
  World.add(world, ground);
  //box1 = new Box(200,100,50,50);


  rectMode(CENTER);
  ellipseMode(RADIUS);
}
function mousePressed() {
  var n = Math.round(random(1, 2))
  switch (n) {
    case 1: boxes.push(new Box(mouseX, mouseY, 20, 20))
      break;
    case 2: circleball.push(new Circle(mouseX, mouseY, 10))
      break;
    default: break
  }
  Colours()
}

function draw() {
  background(51);
  Engine.update(engine);
  rect(ground.position.x, ground.position.y, 400, 10);
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].show();
  }
  for (var i = 0; i < circleball.length; i++) {
    circleball[i].show();
  }


}
function Colours() {
  r = random(0, 255)
  g = random(0.200)
  b = random(0, 255)
}

