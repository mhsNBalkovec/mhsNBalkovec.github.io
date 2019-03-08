function setup() {
  // put setup code here
  createCanvas(400,400)
}

function draw() {
  // put drawing code here
  //ground
  background(135,191,255)
  rectMode(CENTER);
  fill(145,197,145);
  rect(200,380,500,100);
  //arms
  line(150,170,75,250);
  line(250,170,325,75);
  //bottom circle
  fill(255,255,255)
  ellipse(200,300,150,150);
  //middle circle
  ellipse(200,200,125,125);
  //top circle
  ellipse(200,110,100,100);
  //hat
  fill(0,0,0);
  rect(200,65,120,20);
  rect(200,30,80,60);
  //sun
  fill(255,235,0)
  ellipseMode(CENTER)
  ellipse(0,0,200,200);
}
