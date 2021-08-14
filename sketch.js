var box;
var input1;
var input2;

var button;
function setup()
{

  createCanvas(1510,720);
  input = createInput("background color");
  input.position(785,360);
  input2 = createInput("Box color");
  input2.position(605,360);
  box = createSprite(200,200);

}



function draw()
{

  background(input.value());
  box.shapeColor = input2.value();

  if(keyIsDown(UP_ARROW))
  {
    background("#e52b50");
    box.shapeColor = "#deb887";

  }
 
  

  if(keyIsDown(DOWN_ARROW))
  {
    background("#deb887");
    box.shapeColor = "#6082b6";

  }
  if(keyIsDown(RIGHT_ARROW))
  {
    background("#6082b6");
    box.shapeColor = "#4d5d53";
  }
  if(keyIsDown(LEFT_ARROW))
  {
    background("#4d5d53");
    box.shapeColor = "#e52b50";
  }

  box.y = World.mouseY;
  box.x = World.mouseX;
  
    drawSprites();
}
