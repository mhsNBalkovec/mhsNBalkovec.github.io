//global variables
//let x = 100

function setup() {
  // put setup code here
  createCanvas(800,600);
  background(127);
}

function draw() {
  // put drawing code here
  /*
  fill(255,0,255)
  rect(x,100,200,200);
  x=x+5;
  fill(255);
  ellipse(300,300,100,100);
  */
  //draw target in top left corner
  let x = width/4;
  let y = height/4;
  drawTarget(x,y);

  //draw target in top right corner
  x = 3*width/4;
  drawTarget(x,y);

  //draw target in bottom left corner
  x = width/4;
  y = 3*height/4;
  drawTarget(x,y);

  //draw target in bottom right corner
  x = 3*width/4;
  y = 3*height/4;
  drawTarget(x,y);

  //draw target in centre
  drawTarget(width/2,height/2);
}
function drawTarget(newX,newY) {
  fill(0);
  noStroke();
  ellipse(newX,newY,200,200);
  fill(255);
  ellipse(newX,newY,100,100);
  fill(0);
  ellipse(newX,newY,50,50);
  fill(255);
  ellipse(newX,newY,25,25);
}
