var fixedrect,movingrect;

function setup() {
  createCanvas(800,400);
 fixedrect = createSprite(100, 200, 80, 50);
 fixedrect.shapeColor = "red";
 fixedrect.velocityX=2;
movingrect = createSprite(500,200,50,80);
movingrect.shapeColor = "red";
movingrect.velocityX = -2;
}

function draw() {
  background(0);  
//movingrect.x = mouseX;
//movingrect.y = mouseY;

if(movingrect.x-fixedrect.x < fixedrect.width/2+movingrect.width/2 && 
  fixedrect.x-movingrect.x< fixedrect.width/2+movingrect.width/2 ){

movingrect.velocityX= movingrect.velocityX*(-1);
fixedrect.velocityX= fixedrect.velocityX*(-1);
}
if(fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2 &&
  movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2){

movingrect.velocityY= movingrect.velocityY*(-1);
fixedrect.velocityY= fixedrect.velocityY*(-1);
}
 
  drawSprites();
}