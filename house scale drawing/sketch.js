/*
House (Scaling) Assignment
Created by Noah Balkovec
March 18, 2019
*/
function setup() {
  // put setup code here
  // Create the canvas
  createCanvas(1000,600);
  background(52,141,255);
}
function draw() {
  /*
  put drawing code here
  variables
  length and width of the house
  */
  let housewidth = 500;
  let househeight = 250
  //height + width of the chimney
  let chimneywidth = 50
  let chimneyheight = 100
  // x + y coordinates of points of the roof
  let x1 = 250;
  let x2 = 500;
  let x3 = 750;
  let y1 = 275;
  let y2 = 150;
  let y3 = 275;
  //changing this value scales entire scene
  let scale = 1

  //grass
  strokeWeight(7*scale)
  fill(4,209,6);
  rectMode(CORNER);
  rect(-4*scale,525*scale,2000*scale,3000*scale);

  //chimney
  rectMode(CENTER)
  fill(234,234,234);
  rect(x3/2.5*scale,height/2.5*scale,cwidth*scale,cheight*scale);

  //main part of house
  fill(234,234,234);
  rectMode(CENTER);
  rect(width/2*scale,height/1.5*scale,housewidth*scale,househeight*scale);

  //roof
  fill(73,73,73);
  triangle(x1*scale,y1*scale,x2*scale,y2*scale,x3*scale,y3*scale);

  //door
  fill(73,73,73);
  rect(width/2*scale,height/1.3*scale,y2/2*scale,y2/1.2*scale);

  //sun
  fill(237,229,61)
  ellipseMode(CENTER);
  ellipse(0*scale,0*scale,300*scale,300*scale)

  //window
  fill(255,255,255);
  rect(width/3*scale,height/1.7*scale,housewidth/5*scale,housewidth/5*scale);
  rect(width/1.5*scale,height/1.7*scale,housewidth/5*scale,housewidth/5*scale);
}
