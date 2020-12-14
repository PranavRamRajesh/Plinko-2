const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var plinkos = [];
var particles = [];
var divisions = [];

var divisionHeight = 300;

function setup() {

  createCanvas(480,800);

  

  engine = Engine.create();
    world = engine.world;

    ground = new Ground(240,790,480,20)

    for(var k = 0; k<=width; k = k+80){
      divisions.push(new Ground(k, height-divisionHeight/2, 10, divisionHeight));
    }

    for(var j = 40; j<=width; j=j+50){
      plinkos.push(new Plinko(j,75,15));
    }

    for(var j = 15; j<=width-10; j=j+50){
      plinkos.push(new Plinko(j,175,15));
    }

    for(var j = 40; j<=width-10; j=j+50){
      plinkos.push(new Plinko(j,275,15));
    }

    for(var j = 15; j<=width-10; j=j+50){
      plinkos.push(new Plinko(j,375,15));
    }



  
}

function draw() {
  background(0);  

  Engine.update(engine);

  ground.display();

  for(var i in divisions){
    divisions[i].display();
    
  }

  for(var i in plinkos){
    plinkos[i].display();
  }

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10, width/2+10),10,10));
  }

  for(var i in particles){
    particles[i].display();
  }


  
  
}