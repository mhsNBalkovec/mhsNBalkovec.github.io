// moose will allow mouse to control when circles will be created
function setup() {
  // put setup code here
  createCanvas(800,600)
  background(0);
  button = createButton('Create a night sky');
  button.position(width/2-80, height-50);
  button.mousePressed(constellation);
}

function draw() {
  // put drawing code here
}

function constellation() {
  background(0);
  for (let i = 0; i < 450; i++) {
    push();
    fill(random(210,255),random(210,255),random(210,255));
    ellipse(random(width),random(height),5,5);
    pop();
  }
}
