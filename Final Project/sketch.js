var judge, execution, murder, party, main, larrow, rarrow, uarrow, person, host, butler;
var scene;
var txt;
var main_hall = false;
// make text a variable in order to change it when mouse is pressed. 
// add music - bgm to create atmosphere. 
// add some animations 
// add home screen 

function preload() { //load images
  judge = loadImage("Judge.png");
  execution = loadImage("Execution.png");
  murder = loadImage("Murder.png");
  party = loadImage("party.png");
  main = loadImage("Main.png");
  larrow = loadImage("leftarrow.png");
  rarrow = loadImage("rightarrow.png");
  uarrow = loadImage("uparrow.png");
  person = loadImage("unfinished person-01.png");
  host = loadImage("party host.png");
  butler = loadImage("butler-01.png");
}

function setup() {
  createCanvas(1000, 600);
  scene = 0;
}

function draw() {
  if (scene == 0) {
    murder_scene();
  } else if (scene == 0.1) {
    murder_scene_two();
  } else if (scene == 1) {
    prologue();
  } else if (scene == 1.1) {
    prologue_two();
  } else if (scene == 2) {
    execution_scene();
  } else if (scene == 3) {
    party_scene();
  } else if (scene == 4) {
    main_screen();
  } else if (scene == 4.1) {
    main_screen_one();
  } else if (scene == 4.2) {
    main_screen_two();
  } else if (scene == 5) {
    party_hall();
  } else if (scene == 5.1) {
    party_hall_two();
  } else if (scene == 5.2) {
    party_hall_three();
  } else if (scene == 5.3) {
    party_hall_four();
  } else if (scene == 5.4) {
    party_hall_five();
  } else if (scene == 5.5) {
    party_hall_six();
  } else if (scene == 5.6) {
    party_hall_seven();
  } else if (scene == 5.7) {
    party_hall_eight();
  } else if (scene == 5.8) {
    party_hall_nine();
  } else if (scene == 5.9) {
    party_hall_tenone();
  } else if (scene == 5.91) {
    party_hall_choice_one();
  } else if (scene == 5.92) {
    party_hall_tentwo();
  } else if (scene == 5.921) {
    party_hall_choice_two();
  } else if (scene == 6) {
    kitchen();
  } else if (scene == 6.1) {
    kitchen_one();
  } else if (scene == 6.2) {
    kitchen_two();
  } else if (scene == 6.3) {
    kitchen_three();
  } else if (scene == 6.4) {
    kitchen_four();
  } else if (scene == 6.5) {
    kitchen_five();
  } else if (scene == 6.6) {
    kitchen_six();
  } else if (scene == 6.61) {
    kitchen_choice_one();
  } else if (scene == 6.7) {
    kitchen_seven();
  } else if (scene == 6.71) {
    kitchen_choice_two();
  } else if (scene == 7) {
    upstairs();
  } else if (scene == 7.1) {
    upstairs_one();
  } else if (scene == 7.2) {
    upstairs_two();
  } else if (scene == 7.3) {
    upstairs_three();
  } else if (scene == 7.4) {
    upstairs_four();
  } else if (scene == 7.5) {
    upstairs_five();
  } else if (scene == 7.6) {
    upstairs_six();
  } else if (scene == 7.7) {
    upstairs_seven();
  } else if (scene == 7.8) {
    upstairs_eight();
  } else if (scene == 7.81) {
    upstairs_choice_one();
  } else if (scene == 7.9) {
    upstairs_nine();
  } else if (scene == 7.91) {
    upstairs_choice_two();
  } else if (scene == 11) {
    bad_ending();
  } else if (scene == 12) {
    good_ending();
  }
  console.log(scene);
}

function murder_scene() {
  image(murder, 0, 0, width, height);
  fill(0, 0, 0, 75);
  rect(0, 500, width, 100);
  fill(255);
  textSize(25);
  text("What happened? I didn't kill anyone...but, there's someone there...", 10, 550);
  textSize(20);
  text("Next", 900, 575);
}

function murder_scene_two() {
  image(murder, 0, 0, width, height);
  fill(0, 0, 0, 75);
  rect(0, 500, width, 100);
  fill(255);
  textSize(25);
  text("*YOU ARE UNDER ARREST!*", 10, 550);
  textSize(20);
  text("Next", 900, 575);
}

function prologue() {
  image(judge, 0, 0, 1200, height);
  fill(0, 0, 0, 75);
  rect(0, 500, width, 100);
  fill(255);
  textSize(25);
  text("You are charged for the murder of Antoniette.", 10, 550);
  textSize(20);
  text("Next", 900, 575);
}

function prologue_two() {
  image(judge, 0, 0, 1200, height);
  fill(0, 0, 0, 75);
  rect(0, 500, width, 100);
  fill(255);
  textSize(25);
  text("Take him to execution.", 10, 550);
  textSize(20);
  text("Next", 900, 575);
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

function party_scene() {
  tint(255, 126);
  image(party, 0, 0, width + 100, 500);
  fill(0, 0, 0, 50);
  rect(0, 500, width, 200);
  fill(255);
  textSize(25);
  text("What...where am I? Why am I at a party? Could the real murderer be here?", 10, 550);
  textSize(20);
  text("Next", 900, 575);
  noTint();
}

function main_screen() {
  image(main, 0, 0, width, height);
  fill(0, 0, 0, 75);
  rect(0, 500, width, 200);
  fill(255);
  textSize(25);
  text("If the murderer is here, then I should investigate...I should go to the party hall first", 10, 550);
  image(larrow, 150, height / 2 - 100, 100, 100);
  fill(0);
  text("party hall", 160, height / 2 - 50);
  image(uarrow, width / 2 - 50, 100, 100, 100);
  text("upper level", width / 2 - 50, 150);
  image(rarrow, 750, height / 2 - 100, 100, 100);
  text("kitchen", 750, height / 2 - 50);
}

function main_screen_one() {
  image(main, 0, 0, width, height);
  fill(0, 0, 0, 75);
  rect(0, 500, width, 200);
  fill(255);
  textSize(25);
  image(larrow, 150, height / 2 - 100, 100, 100);
  fill(0);
  text("party hall", 160, height / 2 - 50);
  image(uarrow, width / 2 - 50, 100, 100, 100);
  text("upper level", width / 2 - 50, 150);
  image(rarrow, 750, height / 2 - 100, 100, 100);
  text("kitchen", 750, height / 2 - 50);
}

function main_screen_two() { //scene 4.2 
  image(main, 0, 0, width, height);
  fill(0, 0, 0, 75);
  rect(0, 500, width, 200);
  fill(255);
  textSize(25);
  text("Okay...someone is lying. One of them has to be the culprit.", 10, 550);
  image(larrow, 150, height / 2 - 100, 100, 100);
  fill(0);
  text("party hall", 160, height / 2 - 50);
  image(uarrow, width / 2 - 50, 100, 100, 100);
  text("upper level", width / 2 - 50, 150);
  image(rarrow, 750, height / 2 - 100, 100, 100);
  text("kitchen", 750, height / 2 - 50);
}

function party_hall() {
  //background(255);
  image(party, 0, 0, width + 100, 500);
  fill(0, 0, 0, 50);
  rect(0, 0, width, height);
  image(person, 0, 0, 350, 600);
  fill(0);
  rect(0, 500, width, 200);
  fill(255);
  textSize(25);
  text("Who are you to Antoniette?", 10, 550);
  textSize(20);
  text("Next", 900, 575);
}

function party_hall_two() { //scene 5.1
  //background(255);
  image(party, 0, 0, width + 100, 500);
  fill(0, 0, 0, 50);
  rect(0, 0, width, height);
  image(person, 0, 0, 350, 600);
  fill(0);
  rect(0, 500, width, 200);
  fill(255);
  textSize(25);
  fill(162, 236, 255);
  text("I'm her best friend.", 10, 550);
  textSize(20);
  text("Next", 900, 575);
}

function party_hall_three() { //scene 5.2
  //background(255);
  image(party, 0, 0, width + 100, 500);
  fill(0, 0, 0, 50);
  rect(0, 0, width, height);
  image(person, 0, 0, 350, 600);
  fill(0);
  rect(0, 500, width, 200);
  fill(255);
  textSize(25);
  text("So, where were you when Antoniette was murdered?", 10, 550);
  textSize(20);
  text("Next", 900, 575);
}

function party_hall_four() { //scene 5.3
  //background(255);
  image(party, 0, 0, width + 100, 500);
  fill(0, 0, 0, 50);
  rect(0, 0, width, height);
  image(person, 0, 0, 350, 600);
  fill(0);
  rect(0, 500, width, 200);
  fill(255);
  textSize(25);
  fill(162, 236, 255);
  text("I was having some drinks with her until she stepped out.", 10, 550);
  textSize(20);
  text("Next", 900, 575);
}

function party_hall_five() { //scene 5.4
  //background(255);
  image(party, 0, 0, width + 100, 500);
  fill(0, 0, 0, 50);
  rect(0, 0, width, height);
  image(person, 0, 0, 350, 600);
  fill(0);
  rect(0, 500, width, 200);
  fill(255);
  textSize(25);
  text("Why did she step out?", 10, 550);
  textSize(20);
  text("Next", 900, 575);
}

function party_hall_six() { //scene 5.5
  //background(255);
  image(party, 0, 0, width + 100, 500);
  fill(0, 0, 0, 50);
  rect(0, 0, width, height);
  image(person, 0, 0, 350, 600);
  fill(0);
  rect(0, 500, width, 200);
  fill(255);
  textSize(25);
  fill(162, 236, 255);
  text("I'm not sure. Just know she went to the kitchen.", 10, 550);
  textSize(20);
  text("Back", 900, 575);
}

function party_hall_seven() { //scene 5.6
  //background(255);
  image(party, 0, 0, width + 100, 500);
  fill(0, 0, 0, 50);
  rect(0, 0, width, height);
  image(person, 0, 0, 350, 600);
  fill(0);
  rect(0, 500, width, 200);
  fill(255);
  textSize(25);
  text("You lied. Your the one who murdered Antoniette.", 10, 550);
  textSize(20);
  text("Next", 900, 575);
}

function party_hall_eight() { //scene 5.7
  //background(255);
  image(party, 0, 0, width + 100, 500);
  fill(0, 0, 0, 50);
  rect(0, 0, width, height);
  image(person, 0, 0, 350, 600);
  fill(0);
  rect(0, 500, width, 200);
  fill(255);
  textSize(25);
  fill(162, 236, 255);
  text("And what makes you say that?", 10, 550);
  textSize(20);
  text("Next", 900, 575);

}

function party_hall_nine() { //scene 5.8
  //background(255);
  image(party, 0, 0, width + 100, 500);
  fill(0, 0, 0, 50);
  rect(0, 0, width, height);
  image(person, 0, 0, 350, 600);
  fill(0);
  rect(0, 500, width, 200);
  fill(255);
  textSize(25);
  text("You two weren't having drinks...", 10, 550);
  textSize(20);
  text("Next", 900, 575);
  fill(255);
  rect(500, 75, 350, 25);
  rect(500, 125, 300, 25);
  fill(0);
  text("She went to the kitchen for one", 500, 100);
  text("She was never with you.", 500, 150);

}

function party_hall_tenone() { //scene 5.9
  image(party, 0, 0, width + 100, 500);
  fill(0, 0, 0, 50);
  rect(0, 0, width, height);
  image(person, 0, 0, 350, 600);
  fill(0);
  rect(0, 500, width, 200);
  fill(255);
  textSize(25);
  text("She went to the kitchen for one and when she came back you assaulted her.", 10, 550);
  textSize(20);
  text("Next", 900, 575);
}

function party_hall_choice_one() { //scene 5.91
  image(party, 0, 0, width + 100, 500);
  fill(0, 0, 0, 50);
  rect(0, 0, width, height);
  image(person, 0, 0, 350, 600);
  fill(0);
  rect(0, 500, width, 200);
  fill(255);
  textSize(25);
  fill(162, 236, 255);
  text("I already told you, she never came back. She probably went to just get a drink.", 10, 550);
  textSize(20);
  text("Next", 900, 575);
}

function party_hall_tentwo() { //scene 5.92 
  image(party, 0, 0, width + 100, 500);
  fill(0, 0, 0, 50);
  rect(0, 0, width, height);
  image(person, 0, 0, 350, 600);
  fill(0);
  rect(0, 500, width, 200);
  fill(255);
  textSize(25);
  text("She was never with you. You probably went to her when she was alone and then\nassaulted her.", 10, 550);
  textSize(20);
  text("Next", 900, 575);
}

function party_hall_choice_two() { //scene 5.921
  image(party, 0, 0, width + 100, 500);
  fill(0, 0, 0, 50);
  rect(0, 0, width, height);
  image(person, 0, 0, 350, 600);
  fill(0);
  rect(0, 500, width, 200);
  fill(255);
  textSize(25);
  fill(162, 236, 255);
  text("And what if you were right?", 10, 550);
  textSize(20);
  text("Next", 900, 575);
}


function kitchen() { //scene 6 
  fill(252, 255, 178);
  rect(0, 0, width, height);
  image(butler, 0, 0, 350, 600);
  fill(0);
  rect(0, 500, width, 200);
  fill(255);
  textSize(25);
  text("Hi, I was told Antoniette passed by here earlier.", 10, 550);
  textSize(20);
  text("Next", 900, 575);
}

function kitchen_one() { //scene 6.1
  fill(252, 255, 178);
  rect(0, 0, width, height);
  image(butler, 0, 0, 350, 600);
  fill(0);
  rect(0, 500, width, 200);
  fill(255);
  textSize(25);
  fill(162, 236, 255);
  text("Ah, yes. She stopped by to get a drink.", 10, 550);
  textSize(20);
  text("Next", 900, 575);
}

function kitchen_two() { //scene 6.2
  fill(252, 255, 178);
  rect(0, 0, width, height);
  image(butler, 0, 0, 350, 600);
  fill(0);
  rect(0, 500, width, 200);
  fill(255);
  textSize(25);
  text("Well...did you notice anything suspicious about her?.", 10, 550);
  textSize(20);
  text("Next", 900, 575);
}

function kitchen_three() { //scene 6.3
  fill(252, 255, 178);
  rect(0, 0, width, height);
  image(butler, 0, 0, 350, 600);
  fill(0);
  rect(0, 500, width, 200);
  fill(255);
  textSize(25);
  fill(162, 236, 255);
  text("No, I didn't. But, the host may know something. She's upstairs.", 10, 550);
  textSize(20);
  text("Back", 900, 575);
}

function kitchen_four() { //scene 6.4
  fill(252, 255, 178);
  rect(0, 0, width, height);
  image(butler, 0, 0, 350, 600);
  fill(0);
  rect(0, 500, width, 200);
  fill(255);
  textSize(25);
  text("You lied. Your the one who murdered Antoniette.", 10, 550);
  textSize(20);
  text("Next", 900, 575);
}

function kitchen_five() { //scene 6.5
  fill(252, 255, 178);
  rect(0, 0, width, height);
  image(butler, 0, 0, 350, 600);
  fill(0);
  rect(0, 500, width, 200);
  fill(255);
  textSize(25);
  fill(162, 236, 255);
  text("And what makes you say that?", 10, 550);
  textSize(20);
  text("Next", 900, 575);
  fill(255);
  rect(500, 75, 400, 25);
  rect(500, 125, 400, 25);
  fill(0);
  text("You drugged her drink and then killed her.", 500, 100);
  text("You were just trying to blame the host.", 500, 150);
}

function kitchen_six() { //scene 6.6
  fill(252, 255, 178);
  rect(0, 0, width, height);
  image(butler, 0, 0, 350, 600);
  fill(0);
  rect(0, 500, width, 200);
  fill(255);
  textSize(25);
  text("You drugged her drink and then killed her.", 10, 550);
  textSize(20);
  text("Next", 900, 575);
}

function kitchen_choice_one() { //scene 6.61
  fill(252, 255, 178);
  rect(0, 0, width, height);
  image(butler, 0, 0, 350, 600);
  fill(0);
  rect(0, 500, width, 200);
  fill(255);
  textSize(25);
  fill(162, 236, 255);
  text("Yes...I did...but I had a reason.", 10, 550);
  textSize(20);
  text("Next", 900, 575);
}

function kitchen_seven() { //scene 6.7
  fill(252, 255, 178);
  rect(0, 0, width, height);
  image(butler, 0, 0, 350, 600);
  fill(0);
  rect(0, 500, width, 200);
  fill(255);
  textSize(25);
  text("You were just trying to blame the host..", 10, 550);
  textSize(20);
  text("Next", 900, 575);
}

function kitchen_choice_two() { //scene 6.71
  fill(252, 255, 178);
  rect(0, 0, width, height);
  image(butler, 0, 0, 350, 600);
  fill(0);
  rect(0, 500, width, 200);
  fill(255);
  textSize(25);
  fill(162, 236, 255);
  text("No, the host was acting really suspicious.", 10, 550);
  textSize(20);
  text("Next", 900, 575);
}

function upstairs() { //scene 7
  fill(0, 41, 237);
  rect(0, 0, width, height);
  image(host, 0, 0, 300, 700);
  fill(0);
  rect(0, 500, width, 200);
  fill(255);
  textSize(25);
  text("Hello, I was told that you might have noticed something about Antoniette.", 10, 550);
  textSize(20);
  text("Next", 900, 575);
}

function upstairs_one() { //scene 7.1
  fill(0, 41, 237);
  rect(0, 0, width, height);
  image(host, 0, 0, 300, 700);
  fill(0);
  rect(0, 500, width, 200);
  fill(255);
  fill(162, 236, 255);
  textSize(25);
  text("Yes...she was very distressed about a threat.", 10, 550);
  textSize(20);
  text("Next", 900, 575);
}

function upstairs_two() { //scene 7.2
  fill(0, 41, 237);
  rect(0, 0, width, height);
  image(host, 0, 0, 300, 700);
  fill(0);
  rect(0, 500, width, 200);
  fill(255);
  textSize(25);
  text("And what do you think the threat was?", 10, 550);
  textSize(20);
  text("Next", 900, 575);
}

function upstairs_three() { //scene 7.3
  fill(0, 41, 237);
  rect(0, 0, width, height);
  image(host, 0, 0, 300, 700);
  fill(0);
  rect(0, 500, width, 200);
  fill(255);
  fill(162, 236, 255);
  textSize(25);
  text("I'm not sure...but, she said someone wanted her dead.", 10, 550);
  textSize(20);
  text("Next", 900, 575);
}

function upstairs_four() { //scene 7.4
  fill(0, 41, 237);
  rect(0, 0, width, height);
  image(host, 0, 0, 300, 700);
  fill(0);
  rect(0, 500, width, 200);
  fill(255);
  textSize(25);
  text("Do you suspect anyone that could've done it?", 10, 550);
  textSize(20);
  text("Next", 900, 575);
}

function upstairs_five() { //scene 7.5
  fill(0, 41, 237);
  rect(0, 0, width, height);
  image(host, 0, 0, 300, 700);
  fill(0);
  rect(0, 500, width, 200);
  fill(255);
  fill(162, 236, 255);
  textSize(25);
  text("That, I don't know about.", 10, 550);
  textSize(20);
  text("Back", 900, 575);
}

function upstairs_six() { //scene 7.6
  fill(0, 41, 237);
  rect(0, 0, width, height);
  image(host, 0, 0, 300, 700);
  fill(0);
  rect(0, 500, width, 200);
  fill(255);
  textSize(25);
  text("You lied. Your the one who murdered Antoniette.", 10, 550);
  textSize(20);
  text("Next", 900, 575);
}

function upstairs_seven() { //scene 7.7
  fill(0, 41, 237);
  rect(0, 0, width, height);
  image(host, 0, 0, 300, 700);
  fill(0);
  rect(0, 500, width, 200);
  fill(255);
  fill(162, 236, 255);
  textSize(25);
  text("And what makes you say that?", 10, 550);
  textSize(20);
  text("Next", 900, 575);
  fill(255);
  rect(500, 75, 475, 25);
  rect(500, 125, 325, 25);
  fill(0);
  text("You were bothered by the threat she told you about..", 500, 100);
  text("You were jealous of her popularity.", 500, 150);
}

function upstairs_eight() { //scene 7.8
  fill(0, 41, 237);
  rect(0, 0, width, height);
  image(host, 0, 0, 300, 700);
  fill(0);
  rect(0, 500, width, 200);
  fill(255);
  textSize(25);
  text("You were bothered by the threat she told you about...", 10, 550);
  textSize(20);
  text("Next", 900, 575);
}

function upstairs_choice_one() { //scene 7.81
  fill(0, 41, 237);
  rect(0, 0, width, height);
  image(host, 0, 0, 300, 700);
  fill(0);
  rect(0, 500, width, 200);
  fill(255);
  fill(162, 236, 255);
  textSize(25);
  text("I wasn't bothered by the threat she told me. I needed to protect her somehow.", 10, 550);
  textSize(20);
  text("Back", 900, 575);
}



function upstairs_nine() { //scene 7.9
  fill(0, 41, 237);
  rect(0, 0, width, height);
  image(host, 0, 0, 300, 700);
  fill(0);
  rect(0, 500, width, 200);
  fill(255);
  textSize(25);
  text("You were jealous of her popularity.", 10, 550);
  textSize(20);
  text("Next", 900, 575);
}

function upstairs_choice_two() { //scene 7.91
  fill(0, 41, 237);
  rect(0, 0, width, height);
  image(host, 0, 0, 300, 700);
  fill(0);
  rect(0, 500, width, 200);
  fill(255);
  fill(162, 236, 255);
  textSize(25);
  text("But, I am the host. Shouldn't I be the popular one here tonight?", 10, 550);
  textSize(20);
  text("Next", 900, 575);
}


function good_ending() {
  background(0);
  fill(255);
  textSize(50);
  text("You were able to figure out who the murder was and was not executed.\nCongragulations.\nClick to reset", 100, height / 2);
}

function bad_ending() {
  execution_scene();
  fill(255, 0, 0);
  textSize(50);

  text("Game Over\nClick to Reset", 100, height / 2);
}

function reset() {
  setup();
}

function mouseClicked() {
  if (mouseX >= 900 && mouseX <= width && mouseX >= 575) {
    if (scene == 0) {
      scene = 0.1;
    } else if (scene == 0.1) {
      scene = 1;
    } else if (scene == 1) {
      scene = 1.1;
    } else if (scene == 1.1) {
      scene = 2;
    } else if (scene == 2) {
      scene = 3;
    } else if (scene == 3) {
      scene = 4;
    } else if (scene == 5) {
      scene = 5.1;
    } else if (scene == 5.1) {
      scene = 5.2;
    } else if (scene == 5.2) {
      scene = 5.3;
    } else if (scene == 5.3) {
      scene = 5.4;
    } else if (scene == 5.4) {
      scene = 5.5;
    } else if (scene == 5.5) {
      scene = 4.1;
    } else if (scene == 5.6) {
      scene = 5.7;
    } else if (scene == 5.7) {
      scene = 5.8;
    } else if (scene == 5.8) {} else if (scene == 6) {
      scene = 6.1;
    } else if (scene == 6.1) {
      scene = 6.2;
    } else if (scene == 6.2) {
      scene = 6.3;
    } else if (scene == 6.3) {
      scene = 4.1;
    } else if (scene == 6.4) {
      scene = 6.5;
    } else if (scene == 6.6) {
      scene = 6.61;
    } else if (scene == 6.7) {
      scene = 6.71;
    } else if (scene == 6.61) {
      scene = 12;
    } else if (scene == 6.71) {
      scene = 11;
    } else if (scene == 7) {
      scene = 7.1;
    } else if (scene == 7.1) {
      scene = 7.2;
    } else if (scene == 7.2) {
      scene = 7.3;
    } else if (scene == 7.3) {
      scene = 7.4;
    } else if (scene == 7.4) {
      scene = 7.5;
    } else if (scene == 7.5) {
      scene = 4.2;
    } else if (scene == 5.9) {
      scene = 5.91;
    } else if (scene == 5.92) {
      scene = 5.921;
    } else if (scene == 5.91) {
      scene = 11;
    } else if (scene == 5.921) {
      scene = 12;
    } else if (scene == 7.6) {
      scene = 7.7;
      }else if (scene == 7.8) {
      scene = 7.81;
    } else if (scene == 7.9) {
      scene = 7.91;
    } else if (scene == 7.81) {
      scene = 11;
    } else if (scene == 7.91) {
      scene = 12;
    }
  } else if (scene == 4 && mouseX >= 150 && mouseX <= 250 && mouseY >= 200 && mouseY <= 300) {
    scene = 5;
  } else if (scene == 4.1 && mouseX >= 150 && mouseX <= 250 && mouseY >= 200 && mouseY <= 300) {
    fill(0);
    rect(100, 100, 600, 500);
    textSize(25);
    text("You already investigated here.", 150, 150);
  } else if (scene == 4.1 && mouseX >= 750 && mouseX <= 850 && mouseY >= 200 && mouseY <= 300) {
    scene = 6;
  } else if (scene == 4.1 && mouseX >= 450 && mouseX <= 550 && mouseY >= 100 && mouseY <= 200) {
    scene = 7;
  } else if (scene == 4.2 && mouseX >= 150 && mouseX <= 250 && mouseY >= 200 && mouseY <= 300) { //best friend
    scene = 5.6;
  } else if (scene == 4.2 && mouseX >= 750 && mouseX <= 850 && mouseY >= 200 && mouseY <= 300) { //butler
    scene = 6.4;
  } else if (scene == 4.2 && mouseX >= 450 && mouseX <= 550 && mouseY >= 100 && mouseY <= 200) { //host
    scene = 7.6;
  } else if (scene == 5.8) {
    if (mouseX >= 500 && mouseX <= 850 && mouseY >= 75 && mouseY <= 100) {
      scene = 5.9;
    }
    if (mouseX >= 500 && mouseX <= 800 && mouseY >= 125 && mouseY <= 150) {
      scene = 5.92;
    }
  } else if (scene == 6.5) {
    if (mouseX >= 500 && mouseX <= 850 && mouseY >= 75 && mouseY <= 100) {
      scene = 6.6;
    }
    if (mouseX >= 500 && mouseX <= 800 && mouseY >= 125 && mouseY <= 150) {
      scene = 6.7;
    }
  } else if (scene == 7.7) {
    if (mouseX >= 500 && mouseX <= 850 && mouseY >= 75 && mouseY <= 100) {
      scene = 7.8;
    }
    if (mouseX >= 500 && mouseX <= 800 && mouseY >= 125 && mouseY <= 150) {
      scene = 7.9;
    }
  } else if (scene == 11 || scene == 12) {
    reset();
  }
}