//var scene = 1; //declaring the scene variable 
var scene = 0;
var string, mx, my;
var part_2_button_clicked = false;


function setup() {
  createCanvas(1000, 600); //set up canvas size 
  intro_button = createButton('Head to execution'); //set up button to change scenes 
  part_2_button = createButton('Click here'); //sets up button to change to prologue part 3 
  left_main_button = createButton('Click here to go left'); //sets up button to change to 
  straight_main_button = createButton('Click here to go straight'); //sets up button to change to 
  right_main_button = createButton('Click here to go right'); //sets up button to change to 
}

function draw() {
  //background(0);
  //rect(0, 450, width, 150);
  /*
  if (scene == 1) { //using states to transition between each scene 
    intro();
  } else if (scene == 2) {
    execution_scene();
  } else if (scene == 3) {
    mainScene();
  }*/
  if (scene == 3){
    mainMenu(); 
  }
  else if (scene == 4){
    left_screen();
  }
  switch (scene) {
    case 0:
      intro();
      break;
    case 1:
      execution_scene();
      break;
    case 2:
      mainScene();
      break;
    case 3:
      mainMenu();
      break;
    case 4:
      if (mouseX <= 50 && mouseX >= 0){
        left_screen();
      }
      /*else if ( mouseX >= 300 && mouseX <= 400){
        straight_screen();
      }*/
      break;
    default:
      intro();
      break;
  }
  



  //mainScene();
}

function intro() { //intro scene, prologue part 1 
  background(0);
  fill(255);
  textAlign(CENTER);
  textSize(50);
  text("You are guilty for murder.\nYou will now be executed.", width / 2, height / 2);
  intro_button.position((width / 2) - 50, height / 2 + 100);
  // intro_button.mousePressed(scene_change); //when clicked, change to execution scene 
}

function execution_scene() { //execution scene, prologue part 2 
  intro_button.remove();
  background(0);
  fill(255);
  textAlign(CENTER);
  textSize(50);
  text("No!", width / 2, height / 2);
  part_2_button.position((width / 2) - 30, height / 2 + 25);
  //part_2_button.mousePressed(scene_change); // when clicked, change to mainScene
  //part_2_button_clicked = true; 
}

function mainScene() { // start scene, prologue part 3 
  // will fade into this scene image
  intro_button.remove();
  part_2_button.remove();
  //part_2_button_clicked = false; 
  background(0);
  fill(255);
  rect(0, 450, width, 150);
  fill(0);
  //textAlign(BOTTOM);
  textSize(25);
  checkText("Wait...where am I? Why is there a dead person? Do I have to figure out who did this?", 475, 500);
  checkText("Let's see. 3 people are missing, one of them could've done it.", 345, 550);
  textSize(20);
  fill(0, 0, 255);
  checkText("Click here", 925, 575);

}

function mainMenu() {
  intro_button.remove();
  part_2_button.remove();
  background(0);
  fill(255);
  rect(0, 450, width, 150);
  left_main_button.position(50, height / 2);
  //left_main_button.mousePressed(scene_change);
  straight_main_button.position(width / 2 - 100, 100);
  right_main_button.position(850, height / 2);
}

function left_screen() { //might be a kitchen, living rooom, or somethign else
  intro_button.remove();
  part_2_button.remove();
  left_main_button.remove();
  straight_main_button.remove();
  right_main_button.remove(); 
  background(0); 
  fill(0, 255, 255);
  rect(50, 100, 100, 400);
  fill(255);
  rect(0, 450, width, 150);
  fill(0); 
  textSize(20);
   checkText("Person 1",100,150);
  textSize(25); 
  checkText("Where were you a few hours ago?",200,500);
  
}

function straight_screen(){
  intro_button.remove();
  part_2_button.remove();
  left_main_button.remove();
  straight_main_button.remove();
  right_main_button.remove();
  background(0);
  fill(255,0,255); 
  rect(300,100,100,400); 
   fill(255);
  rect(0, 450, width, 150);
}


function checkText(string, mx, my) {
  textAlign(BOTTOM);
  //textSize(25);
  //fill(0);
  if (textWidth(string) > width) {
    if (string.length() > 70) {
      string = string.substring(0, 36) + "\n" + string.substring(36, 72) + "\n" + string.substring(73, 108) + "\n" + string.substring(109, string.length());
      text(string, mx, my);
    } else if (string.length() > 35) {
      string = string.substring(0, 36) + "\n" + string.substring(37, string.length());
      text(string, mx, my);
    }
  } else {
    text(string, mx, my);
  }
}

function mousePressed() {
  scene++;
  if (scene > 10) {
    scene = 0 ;
  }
}

function scene_change() {
  /*
  if (scene == 1) {
    scene = 2;
  } else if (scene == 2 && part_2_button_clicked == true) {
    scene = 3;
  } */
  if (scene == 3) {
    scene = 4;
  }

}