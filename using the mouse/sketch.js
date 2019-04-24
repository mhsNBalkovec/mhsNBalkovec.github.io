function setup() {
  // put setup code here
  createCanvas(800,600)
}

function draw() {
  // put drawing code here
  rectMode(CENTER);
  noStroke();
  rect(mouseX, mouseY, 20, 20); // Draw a circle
  if (mouseIsPressed) {
    fill(random(255), random(255), random(255));
    rect(mouseX, mouseY, random(100), random(100));
  }
}

function mouseReleased() {
  fill(255);
}
