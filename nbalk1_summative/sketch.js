/*
Polka Snake
Created By: Noah Balkovec
Created On: June 4, 2019
GAME UNFINISHED
*/

//global variables
//apple collision variables
let appleCollideColour;
let appleColour = [204,0,0,255]
let appleCollide = true;

//dot collision variables (unfinished)
let dotCollideColour;
let dotColour = [248,203,29,255]
let dotCollide = true;
// level variable
let level = 0; //puts game on start screen right away
let lose = false;
let score = 0;

//polka dot variables
let xSpeed = 5; //x-axis speed of polka dots
let ySpeed = 5; //y-axis speed of polka dots

//snake variables
let size = 10; //size of snake and food
let snakeXspeed = 0; //x-axis speed of the snake
let snakeYspeed = 0; //y-axis speed of the snake
let direction = 10; //speed increase
let snakeHeadX; //creates table for all x-values the snake has
let snakeHeadY; //creates table for all y-values the snake has

//apple variables
let appleX = 0; //places food at random x-coordinate on canvas
let appleY = 0; //places food at random y-coordinate on canvas

function setup() {
  // put setup code here
  createCanvas(700,700); //creates 700x700 pixel canvas
  frameRate(30); //plays 30 frames per second
  snakeHeadX = 40; //places the snake's head on an x-coordinate
  snakeHeadY = 40; //places the snake's head on a y-coordinate
  appleX = floor(random(60)+1)*10; //places food at random x-coordinate on canvas
  appleY = floor(random(60)+1)*10; //places food at random y-coordinate on canvas
}

function preload() {
  appleBite = loadSound('appleSound.mp3'); //loads sound effect for when snake eats apple
  deathSound = loadSound('deathSound.mp3'); //loads sound effect for when snake dies
}

function draw() {
  if (level === 0) {
    //black background
    background(0);
    fill(255);
    keyPressed();
    //makes text centered
    textAlign(CENTER, CENTER);
    textSize(64);
    text('POLKA SNAKE', width/2, height/2-70);
    textSize(24);
    text('INSTRUCTIONS:', width/2, height/2-5);
    textSize(16);
    text('Use the arrow keys to move the snake towards the apple, but be careful. \nIf you run into the flying polka dot, you die!', width/2, height/2+30);
    textSize(24);
    text('PRESS SPACE TO START!', width/2, height/2+120);
  }

  if (level === 1) {
    appleCollide = true;
    background(0);
    //allows polka dot to move on screen
    if (lose === true) {
      noLoop();
      level = 2; //puts end screen on when you lose
      deathSound.setVolume(0.1);
      deathSound.play();
        stop(2);
    }

    snakeHeadX+=snakeXspeed; //repositions head of snake
    snakeHeadY+=snakeYspeed; //repositions head of snake

    //game over is snake touches edges
    if (snakeHeadX<0 || snakeHeadX>width || snakeHeadY<0 || snakeHeadY>height) {
    lose=true;
    }

    //draws apple
    noStroke();
    fill(204,0,0);
    ellipse(appleX,appleY,size,size);

    appleCollideColour = get(snakeHeadX, snakeHeadY);
    print(appleCollideColour)
    //moves apple to new place when touched by cube, apple sound plays
    for (let i=0; i<4; i+=1){
      if (appleCollideColour[i]!=appleColour[i]){
        appleCollide = false;
        break;
      }
    }
    //moves apple to new location after being eaten
    print(appleCollide);
    if (appleCollide === true) {
      print("1 Point");
      appleX = floor(random(width/10-1)+1)*10;
      appleY = floor(random(height/10-1)+1)*10;
      stop(1);
      score+=1;
    }
    dotCollideColour = get(snakeHeadX,snakeHeadY);
    print(dotCollideColour);
    //checks to see if cube is touching dot
    for (let i=0; i<4; i+=1){
      if (dotCollideColour[i]!=dotColour[i]){
        dotCollide = false;
        break;
      }
    }
    //ends game if dot touches cube (unfinished)
    print(dotCollide)
    if (dotCollide === true) {
      deathSound.setVolume(0.1);
      deathSound.play();
      level = 2;
    }

    //draws cube
    rectMode(CENTER);
    noStroke();
    fill(255);
    rect(snakeHeadX,snakeHeadY,size,size);

    polkadot();
  }
  if (level === 2) {
    //end screen
    background(204,0,0);
    fill(255);
    textSize(80);
    text('GAME OVER', width/2, height/2-70);
    textSize(24);
    text('YOUR SCORE WAS:', width/2.1, height/2+10);
    text(score, width/1.45, height/2+10);
    text('PRESS ENTER TO PLAY AGAIN!', width/2, height/2+70);
  }
}

function polkadot() {
  x1 = random(0,700); //random x-coordinate for the dot
  y1 = random(0,700); //random y-coordinate for the dot
  dotradius = random(1,40); //dot can have a radius between 1 and 40 pixels
  fill(248,203,29); //dot will have yellow fill
  noStroke();

  //this creates four dots that will kill the snake if it touches them
  ellipse(x1,y1,dotradius,dotradius);

  //these allow the dots to move around
  x1 = x1 + xSpeed;

  //these bounce the dots back onto the screen when they hit the edge
    if (x1+dotradius>=width) {
    xSpeed = xSpeed*(-1);
    }

    else if (x1<=0) {
    xSpeed = xSpeed*(-1);
    }

    else if (y1+dotradius>=height) {
    ySpeed = ySpeed*(-1);
    }

    else if (y1<=0) {
    ySpeed = ySpeed*(-1);
    }
}
  function keyPressed() {
    if (keyCode === 32) {
      //when the user presses space, the game begins by going to gameplay (unfinished)
      clear();
      loop();
        lose = false;
        level = 1;
        score = 0;
    }

    if (keyCode === 13) {
      //pressing enter brings user back to start screen (unfinished)
      clear();
      loop();
        lose = false;
        level = 0;
        score = 0;
    }

    if (keyCode === 37) {
      //left arrow key sends snake left
      snakeXspeed = -direction;
      snakeYspeed = 0;
    }

    else if (keyCode === 39) {
      //right arrow key sends snake right
      snakeXspeed = direction;
      snakeYspeed = 0;
    }

    else if (keyCode === 38) {
      //up arrow key sends snake up
      snakeXspeed = 0;
      snakeYspeed = -direction;
    }

    else if (keyCode === 40) {
      //down arrow key sends snake down
      snakeXspeed = 0;
      snakeYspeed = direction;
    }
  }
