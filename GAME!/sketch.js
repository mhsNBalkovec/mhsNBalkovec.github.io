//global variables
let x1 = 150;
let y1 = 500;
let x2 = 650;
let y2 = 500;
let x = 400;
let y = 150;
let size = 70
let xSpeed = 5;
let ySpeed = 5;

function setup() {
  // put setup code here
  createCanvas(800,600);
}

function draw() {
  // put drawing code here
  noStroke();
  fill(255);
  rect(0,0,width*2,height*2);
  player1();
  player2();
  net();
  ellipseMode(CORNER);
  fill(0);
  ellipse(x,y,size,size);
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

  if (keyIsDown(87)) {
    y1 = y1 - 5
  }

  if (keyIsDown(65)) {
    x1 = x1 - 5
  }

  if (keyIsDown(83)) {
    y1 = y1 + 5
  }

  if (keyIsDown(68)) {
    x1 = x1 + 5
  }

  if (keyIsDown(38)) {
    y2 = y2 - 5
  }

  if (keyIsDown(37)) {
    x2 = x2 - 5
  }

  if (keyIsDown(40)) {
    y2 = y2 + 5
  }

  if (keyIsDown(39)) {
    x2 = x2 + 5
  }
}
function player1() {
  rectMode(CENTER);
  fill(0,0,255);
  rect(x1,y1,50,50);
}

function player2() {
  fill(0,255,0);
  rect(x2,y2,50,50);
}

function net() {
  fill(0);
  rect(width/2,height,30,height);
}
