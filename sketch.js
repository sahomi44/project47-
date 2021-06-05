var bg,bg2,bg3,bg4,bg5;
var form,system,code,security;
var score=0;

function preload() {
 
  
  bg= loadImage("1.jpg")
  //load image for the treasure background
  bg2= loadImage("2.jpg")
  bg3= loadImage("3.jpg")
  bg4= loadImage("4.jpg")
  bg5= loadImage("5.jpg")
}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();
    
  
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 0, 0);
// add code for changing the background to the treasure background
  

  if(score === 1) {
    clear()
    security.display();
    background(bg2)
    fill("black")
    textSize(40);
    text("Left Track",250, 200);
  }

  if(score === 2) {
    clear()
    security.display();
    background(bg3)
    fill("black")
    textSize(40);
    text("River cross",250, 200);
  }

  if(score === 3) {
    clear()
    security.display();
    background(bg4)
    fill("white")
    textSize(40);
    text("Straight Track",400, 250);
  }

  if(score === 4) {
    clear()
    security.display();
    background(bg5)
    fill("white")
    textSize(40);
    text("Your House",400, 250);
  }

  drawSprites()
}