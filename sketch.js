var MouseRect;
var FixedRect;


function setup() {
  createCanvas(800,400);
  
 FixedRect = createSprite(400, 200, 80, 50);
 FixedRect.shapeColor = "green";
 MouseRect = createSprite(500,200,50,80);
 MouseRect.shapeColor = "red";
 MouseRect.debug=true;
 FixedRect.debug=true;
}

function draw() {
  background("blue");  
  MouseRect.x = World.mouseX;
  MouseRect.y = World.mouseY;

  if((MouseRect.x-FixedRect.x<MouseRect.width/2+FixedRect.width/2)
  &&(FixedRect.x-MouseRect.x<MouseRect.width/2+FixedRect.width/2)
  &&(MouseRect.y-FixedRect.y<MouseRect.height/2+FixedRect.height/2)
  &&(FixedRect.y-MouseRect.y<MouseRect.height/2+FixedRect.height/2))
  {
  
    MouseRect.shapeColor = "purple";
    FixedRect.shapeColor = "purple";
  }
  else{
    MouseRect.shapeColor = "red";
    FixedRect.shapeColor = "green";
  }
  drawSprites();
  console.log(MouseRect.x-FixedRect.x)
  
}