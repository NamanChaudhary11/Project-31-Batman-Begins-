const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body =    Matter.Body;

var engine, world;
var drops = [];
var maxDrops = 100;
var umbrella;
var rand;
var Thunder, thunder1,thunder2,thunder3,thunder4;
var wImg,walkingImg;
var thunderCreatedFrame = 0;


function preload(){
   thunder1 = loadImage("1.png");
   thunder2 = loadImage("2.png");
   thunder3 = loadImage("3.png");
   thunder4 = loadImage("4.png");


   walkingImg = loadAnimation("walking_01.png","walking_02/walking_02.png","walking_03.png","walking_04.png","walking_05.png","walking_06.png","walking_07.png","walking_08.png");
}

function setup(){
   var canvas = createCanvas(500, 700);
  

   engine = Engine.create();
   world = engine.world;

   umbrella= new Umbrella(250,400);
   
   
   
   p5.prototype.animation=function(anim,x,y){
        walkingImg.draw(250,400)
   };

  
    
   for(var i = 0; i < maxDrops; i++){
      drops.push(new createDrops(random(0,424), random(0,424)));
   }
}

function draw(){
    background("black");
   
   Engine.update(engine);
   
  
    rand = Math.round(random(1,4));
    if(frameCount%80 === 0){
        thunderCreatedFrame = frameCount;
        Thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
            case 1: Thunder.addImage(thunder1);
            break;
            case 2: Thunder.addImage(thunder2);
            break; 
            case 3: Thunder.addImage(thunder3);
            break;
            case 4: Thunder.addImage(thunder4);
            break;
            default: break;
        }
        Thunder.scale = 0.7;
    }

    if(thunderCreatedFrame + 10 === frameCount && Thunder){
        Thunder.destroy();
    }




   for(var i = 0; i < maxDrops; i++){
      drops[i].display();
      drops[i].update();
  }

  imageMode(CENTER);
  walkingImg.draw(250,524);
 

   drawSprites();
}   

