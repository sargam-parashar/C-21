var fixedRect, movingRect;
var fixedRect1;
var fixedRect2;
function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 100, 50, 80);
  movingRect=createSprite(400,800, 80, 30);
  fixedRect1=createSprite(300, 100, 50, 80);
  fixedRect2=createSprite(200, 100, 50, 80);
}

function draw() {
  background(0);  
  movingRect.x=World.mouseX
  movingRect.y=World.mouseY
  console.log(movingRect.x-fixedRect.x);
  if (isTouching(movingRect, fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else if(isTouching(movingRect, fixedRect1)){
    movingRect.shapeColor = "white";
    fixedRect1.shapeColor = "white";
  }
  else if (isTouching(movingRect, fixedRect2)){
    movingRect.shapeColor = "blue";
    fixedRect2.shapeColor = "blue";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
    fixedRect1.shapeColor = "green";
    fixedRect2.shapeColor = "green";
  }
  drawSprites();
}
function isTouching(x,y){
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
  return true;
}
else{
  return false;
}
}
 