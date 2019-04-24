function setup() {
  // put setup code here
  createCanvas(800,600)
}

function draw() {
  // put drawing code here
  rectMode(CENTER);
  noStroke();
  //places rectangles where mouse is when mouse is pressed
  rect(mouseX, mouseY, 20, 20);
  if (mouseIsPressed) {
    fill(random(255), random(255), random(255));
    rect(mouseX, mouseY, random(100), random(100));
  }
}
//allows user to erase or fine-tune work with small white squares
function mouseReleased() {
  fill(255);
}
