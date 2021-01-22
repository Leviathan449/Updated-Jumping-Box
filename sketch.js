var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces



    //create box sprite and give velocity
    box = createSprite(200,40,20,20);
    box.shapeColor="white";
    box.velocityX = -4;
    box.velocityY = -4;
    surface1 = createSprite(50,570,200,20);
    surface1.shapeColor="blue";
    surface2 = createSprite(250,570,200,20);
    surface2.shapeColor="red";
    surface3 = createSprite(450,570,200,20);
    surface3.shapeColor="purple";
    surface4 = createSprite(650,570,200,20);
    surface4.shapeColor="violet";

    edges = createEdgeSprites();
}

function draw() {
    background("black");
    //create edgeSprite
   box.bounceOff(edges);
 if(isTouching(box,surface1) ){
  box.shapeColor="blue";
  box.bounceOff(surface1);
 }
 if(isTouching(box,surface2) ){
   box.shapeColor="red";
   box.bounceOff(surface2);
}
if(isTouching(box,surface3)){
   box.shapeColor="purple";
   box.bounceOff(surface3);
}
if(isTouching(box,surface4) ){
   box.shapeColor="violet";
   box.bounceOff(surface4);
}
    //add condition to check if box touching surface and make it box
    drawSprites()
}

function isTouching(object1,object2){

    if(object1.x-object2.x < object1.width/2 + object2.width/2 && 
      object2.x-object1.x < object2.width/2 + object1.width/2 && 
      object1.y-object2.y < object1.height/2 + object2.height/2 &&
      object2.y-object1.y < object2.height/2 + object1.height/2) {
      
        return true
    }
    else{
      
      return false
    }
  
  }
  
  