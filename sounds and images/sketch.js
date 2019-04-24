var meme;
var meme2;

function preload() {
  // Loads the sound file into the variable
  meme = loadSound('rickroll.mp3');
  meme2 = loadImage('rick.png');
}

function setup() {
  createCanvas(1021, 768);
  meme.setVolume(0.15);
  meme.play();
  image(meme2,0,0);
}
