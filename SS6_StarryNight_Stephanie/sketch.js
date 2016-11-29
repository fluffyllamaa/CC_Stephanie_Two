//Stephanie
//Starry Night 
//Click to make stars appear 
//original function = not built in function 

var img;
var img2;
var star;

function preload() { //load star image
  img = loadImage("star.png");
  img2 = loadImage("starrynight.jpg");
}

function reset() {
  setup();
}

function setup() {
  createCanvas(800, 800);
  image(img2, 0, 0, width, height);
  fill(255);
  textSize(25);
  text("Press any key to restart",10,50);
}

function draw() {
 
}

function mousePressed() { //make stars when mouse pressed
  image(img, mouseX - 80, mouseY - 80, width / 5, height / 5);
}

function keyPressed() {
    reset();
}