function preload() {
  //loading heads and tails images
  img = loadImage('HEADS!.png');
  img2 = loadImage('TAILS!.jpg');
}

function setup() {
  createCanvas(800, 600);
  background(255);
  button = createButton('FLIP A COIN!');
  button.position(width/2-50, height/8);
  button.mousePressed(flip);
}

function draw() {
}

function flip() {
  let coin = random(100);
  background(255);
  if (coin < 50) {
    image(img, width/2-75, height/2-85, 150, 150);
    textSize(30);
    text('HEADS!',width/2-45,height/1.2);
    print('heads');
	} else {
		image(img2, width/2-75, height/2-85, 150, 150);
    textSize(30);
    text('TAILS!',width/2-45,height/1.2);
    print('tails');
	}
}
