var fixedRect, movingRect;
var object1
var object2
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
object1 = createSprite(200,150,100,50)
object1.shapeColor = "orange"
object1.velocityY = 2

movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
 
  object2 = createSprite(200,450,200,150)
object2.shapeColor = "orange"
object2.velocityY = -2
}

function draw() {
  background(0,0,0);  

bounceOff(object1,object2);
  drawSprites();
}
function bounceOff(obje1,obje2) {
  if (obje1.x - obje2.x < obje1.width/2 + obje2.width/2 
    && obje2.x - obje1.x < obje1.width/2 + obje2.width/2 ) {
    obje1.velocityX = obje1.velocityX * (-1) 
   obje2.velocityX = obje2.velocityX * (-1)
    }
    if (obje1.y - obje2.y < obje1.height/2 + obje2.height/2 
      && obje2.y - obje1.y < obje1.height/2 + obje2.height/2 ) {
      obje1.velocityY = obje1.velocityY * (-1) 
     obje2.velocityY = obje2.velocityY * (-1)
      }
   
} 