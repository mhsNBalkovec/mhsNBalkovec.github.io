let x1 = 70;
let x2 = 600;
let y = 320;
let size = 50;

let x1Speed = 5;
let x2Speed = -5;
//assume that objects have not hit
let hit = false


function setup() {
  // put setup code here
  createCanvas(800,640);
}

function draw() {
  hit = collideRectRect(x1,y,size,size,x2,y,size,size);
  background(255);
  //output statement to console
  x1+=x1Speed;
  x2+=x2Speed;

  if (hit) {
    background(255,127,127);
  }

  else {
  print(hit)
  fill (38)
	rect(x1,y,size,size);
	rect(x2,y,size,size);
}

  if (x1+size>=width) {
    x1Speed = x1Speed*(-1);
  }

  if (x1<=0) {
    x1Speed = x1Speed*(-1);
  }

  if (x2+size>=width) {
    x2Speed = x2Speed*(-1);
  }

  if (x2<=0) {
    x2Speed = x2Speed*(-1);
  }
}
