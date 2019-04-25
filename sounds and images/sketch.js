var mySound;
var meme2;

function preload() {
  // Loads the sound file into the variable
  soundFormats('mp3', 'ogg');
  mySound = loadSound('rickrollcut.mp3');
  meme2 = loadImage('rick.png');
}

function setup() {
  createCanvas(1021, 768);
  mySound.setVolume(0.1);
  mySound.play();
  image(meme2,0,0);
}
