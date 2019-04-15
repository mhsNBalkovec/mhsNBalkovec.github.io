//global variables
let x = 100;
let y = 100;

let xSpeed = 5;
let ySpeed = 5;

let size = 100

function setup() {
  //put setup code here
  createCanvas(800, 640);
}

function draw() {
  //put drawing code here
  fill(247);
  noStroke();
  rect(0,0,width,height);

  fill(250,254,74);
  stroke(110,80,96)
  strokeWeight(4);
  rect(x,y,size,size)
  x = x + xSpeed;
  y = y + ySpeed;

  if (y+size>=height) {
    ySpeed = ySpeed*(-1);
  }

  if (x+size>=width) {
    xSpeed = xSpeed*(-1);
  }

  if (y<=0) {
    ySpeed = ySpeed*(-1);
  }

  if (x<=0) {
    xSpeed = xSpeed*(-1);
  }
}
