var ship, sea;
function preload(){
ship_bouncing=loadAnimation("ship-1.png");
seaImage=loadImage("sea.png")
}

function setup(){
createCanvas(400,400)
edges=createEdgeSprites()
//create the ship
sea=createSprite(200,200,400,400);
sea.addImage("sea1",seaImage);
sea.scale=0.2
ship=createSprite(200,290,50,100);
ship.addAnimation("bouncing",ship_bouncing);

ship.scale=0.1;
line1=createSprite(200,250,400,5);
line2=createSprite(200,350,400,5);
line1.visible=false
line2.visible=false
sea.x=sea.width/2
 sea.velocityX=-3
 ship.velocityY=0.5
}

function draw() {
    
background("sea.png");
drawSprites();

 if (sea.x<0){
    sea.x=200
  }


ship.bounceOff(line1);
ship.bounceOff(line2);
}