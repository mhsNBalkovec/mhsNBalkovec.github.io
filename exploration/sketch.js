function setup() {
  createCanvas(800, 800, WEBGL);
}

function draw() {
  background(60,76,67);
  rotateX(frameCount * 0.1);
  rotateY(frameCount * 0.01);
  stroke(65,119,214);
  fill(10,12,157);
  strokeWeight(5);
  torus(183,139);
}
