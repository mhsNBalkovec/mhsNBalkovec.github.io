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
  //plays sound
  meme.setVolume(0.15);
  meme.play(1);
  //loads image onto canvas
  image(meme2,0,0);
}
