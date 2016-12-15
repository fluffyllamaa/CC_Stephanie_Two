var judge, execution, murder, main, larrow, rarrow, uarrow, person;
var scene;

function preload() { //load images
  judge = loadImage("Judge.png");
  execution = loadImage("Execution.png");
  murder = loadImage("Murder.png");
  main = loadImage("Main.png");
  larrow = loadImage("leftarrow.png");
  rarrow = loadImage("rightarrow.png");
  uarrow = loadImage("uparrow.png");
  person = loadImage("unfinished person.png");
}

function setup() {
  createCanvas(1000, 600);
  scene = 0;
}

function draw() {
  if (scene == 0){
    murder_scene(); 
  }
  else if (scene == 1) {
    prologue();
  }
  else if (scene == 2){ 
    execution_scene(); 
  }


}
function murder_scene(){
  image(murder,0,0,width,height);
  fill(0, 0, 0, 75);
  rect(0, 500, width, 100);
  fill(255);
  textSize(25);
  text("What happened? I didn't kill anyone...", 10, 550);
  text("*YOU ARE UNDER ARREST!*", 10, 575);
  textSize(20);
  text("Next",900,575);
}

function prologue() {
  image(judge, 0, 0, 1200, height);
  fill(0, 0, 0, 75);
  rect(0, 500, width, 100);
  fill(255);
  textSize(25);
  text("You are charged for the murder of Antoniette. Take him to execution.", 10, 550);
  textSize(20);
  text("Next",900,575);
  /*if (mouseIsPressed && mouseX >= 900 && mouseX <= width && mouseX >= 575) {
    fill(0, 0, 0, 50);
    rect(0, 500, width, 100);
    fill(255);
    textSize(25);
    text("Take him to execution.", 0, 525);
  }*/ 
}

function execution_scene() { 
  image(execution,0,0,width,height);
  fill(0, 0, 0, 75);
  rect(0, 500, width, 100);
  fill(255);
  textSize(25);
  text("NOOOOOO!", 10, 550);
  textSize(20);
  text("Next",900,575);
}

function mouseClicked() {
  /*if (scene == 1 && mouseX >= 900 && mouseX <= width && mouseX >= 575){
    fill(0);
    rect(0, 500, width, 100);
    fill(0, 0, 0, 50);
    rect(0, 500, width, 100);
    fill(255);
    textSize(25);
    text("Take him to execution.", 0, 525);
  }*/ 
  if (scene == 0 && mouseX >= 900 && mouseX <= width && mouseX >= 575){
    scene = 1; 
  }
  
  if (scene == 1 && mouseX >= 900 && mouseX <= width && mouseX >= 575){
    scene = 2; 
  }
} 