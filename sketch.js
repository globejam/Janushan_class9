var box,boxImage;


function preload(){
  boxImage = loadImage('BOX.jpeg');
}
function setup() {
  createCanvas(1000,800);
  box = createSprite(400,400);
  box.addImage(boxImage);
}

function draw() 
{
  background(30);
drawSprites();
if(keyDown("left")){
  box.x = box.x - 5;
}else if(keyDown("right")){
  box.x = box.x + 5;
}

if(keyDown("up")){
  box.y = box.y - 5;
}else if(keyDown("down")){
  box.y = box.y + 5;
}
}




