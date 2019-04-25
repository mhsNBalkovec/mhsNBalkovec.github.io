var meme;
var meme2;

function preload() {
  // Loads the sound file into the variable
  soundFormats('mp3', 'ogg');
  meme = loadSound('rickrollcut.mp3');
  meme2 = loadImage('rick.png');
}

function setup() {
  createCanvas(1021, 768);
  //shows image on canvas
  image(meme2,0,0);
  if (keyIsPressed(32)) {
    //plays sound
    mySound.setVolume(0.1);
    mySound.play();
  }
}
