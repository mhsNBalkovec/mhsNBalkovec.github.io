function setup() {
  // put setup code here
  createCanvas(1000,800)
  background(59,103,140)
}

function draw() {
  // put drawing code here

  //draw window in top left
  let x = width/4;
  let y = width/4;
  windowPane(x,y);

  //draw window in top right
  x = 3*width/4;
  windowPane(x,y);

  //draw window in bottom left
  x = width/4;
  y = 3*height/4;
  windowPane(x,y);

  //draw window in bottom right
  x = 3*width/4;
  y = 3*height/4;
  windowPane(x,y);
}

function windowPane(newX,newY) {
fill(255);
strokeWeight(15);
stroke(38)
rectMode(CENTER)
rect(newX,newY,200,200);
line(newX,newY,newX+100,newY+100)
}
