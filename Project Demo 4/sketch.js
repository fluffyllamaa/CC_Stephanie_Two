var judge, execution, murder, party, main, larrow, rarrow, uarrow, person;
var scene;

function preload() { //load images
  judge = loadImage("Judge.png");
  execution = loadImage("Execution.png");
  murder = loadImage("Murder.png");
  party = loadImage("party.png");
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
  if (scene == 0) {
    murder_scene();
  } else if (scene == 1) {
    prologue();
  } else if (scene == 2) {
    execution_scene();
  } else if (scene == 3) {
    white_flash();
  } else if (scene == 4) {
    party_scene();
  } else if (scene == 5) {
    main_screen();
  } else if (scene == 6) {
    party_hall();
  }


}

function murder_scene() {
  image(murder, 0, 0, width, height);
  fill(0, 0, 0, 75);
  rect(0, 500, width, 100);
  fill(255);
  textSize(25);
  text("What happened? I didn't kill anyone...but, there's someone there...", 10, 550);
  text("*YOU ARE UNDER ARREST!*", 10, 575);
  textSize(20);
  text("Next", 900, 575);
}

function prologue() {
  image(judge, 0, 0, 1200, height);
  fill(0, 0, 0, 75);
  rect(0, 500, width, 100);
  fill(255);
  textSize(25);
  text("You are charged for the murder of Antoniette. Take him to execution.", 10, 550);
  textSize(20);
  text("Next", 900, 575);
  /*if (mouseIsPressed && mouseX >= 900 && mouseX <= width && mouseX >= 575) {
    fill(0, 0, 0, 50);
    rect(0, 500, width, 100);
    fill(255);
    textSize(25);
    text("Take him to execution.", 0, 525);
  }*/
}

function execution_scene() {
  image(execution, 0, 0, width, height);
  fill(0, 0, 0, 75);
  rect(0, 500, width, 100);
  fill(255);
  textSize(25);
  text("NOOOOOO!", 10, 550);
  textSize(20);
  text("Next", 900, 575);
}

function white_flash() {
  fill(255, 255, 255, 50);
  rect(0, 0, width, height);
  fill(0);
  textSize(20);
  text("Next", 900, 575);
}

function party_scene() {
  image(party, 0, 0, width + 100, 500);
  fill(0, 0, 0, 50);
  rect(0, 500, width, 200);
  fill(255);
  textSize(25);
  text("What...where am I? Why am I at a party? Could the real murderer be here?", 10, 550);
  textSize(20);
  text("Next", 900, 575);
}

function main_screen() {
  image(main, 0, 0, width, height);
  fill(0, 0, 0);
  rect(0, 500, width, 200);
  fill(255);
  textSize(25);
  text("If the murderer is here, then I should investigate...where should I go first?", 10, 550);
  image(larrow, 150, height / 2 - 100, 100, 100);
  image(uarrow, width / 2 - 50, 100, 100, 100);
  image(rarrow, 750, height / 2 - 100, 100, 100);
}

function party_hall() {
  background(255);
  image(person, 0, 0, 300, 600);
  fill(0, 0, 0);
  rect(0, 500, width, 200);
  fill(255);
  textSize(25);
  text("Who are you to Antoniette?", 10, 550);
  text("I'm her best friend.", 10, 550);
  textSize(20);
  text("Next", 900, 575);
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

  if (mouseX >= 900 && mouseX <= width && mouseX >= 575) {
    if (scene == 0) {
      scene = 1;
    } else if (scene == 1) {
      scene = 2;
    } else if (scene == 2) {
      scene = 3;
    } else if (scene == 3) {
      scene = 4;
    } else if (scene == 4) {
      scene = 5;
    }
  } else if (scene == 5 && mouseX >= 150 && mouseX <= 250 && mouseY >= 200 && mouseY <= 300) {
    scene = 6;
  }


}