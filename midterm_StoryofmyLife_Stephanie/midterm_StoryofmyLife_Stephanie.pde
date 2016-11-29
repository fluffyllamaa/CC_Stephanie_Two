//Stephanie Cen
//Story of my Life

/*
Notes to Self: Figure out how to make text/textboxes appear after a few seconds and remain on screen and how to use an array list.
Add features to the homescreen. Figure out the "bad" ending scenes. Check time, why does it display 00 without the first digit.
Figure out how to count characters in a string. Add lockscreen/homebutton keys in textmessages screen.
*/

PImage lockscreen;
PImage homescreen;
float state; 

void setup() {
  size(500, 800);
}

void draw() {
  if (state == 0) { 
    lockScreen();
  } 
  if (state == 0.5){
    homeScreen();
  }
  if (state == 1) {
    messagesScreen();
    time(250, 15, 0, 15);
    fill(0); 
    // sub int y as height varaible in text so that you can make it move up and offscreen :D 
    textbox( 15, 75, 100, 30); 
    textbox( 15, 125, 200, 30); 
    fill(0);
    textAlign(BOTTOM);
    textSize(20); 
    text("Blocked Number", 175, 40);
    textSize(25); 
    text("Hello!", 25, 100);
    text("Anyone there?", 25, 150); 
    textOptions(0, 715, width, 30);
    textOptions(0, 755, width, 30);
    textAlign(CENTER);
    fill(0);
    text("Hello!", width/2, 740); 
    text("Who are you?", width/2, 780);
    } 
  if (state == 2) {
    textSize(25);
    textAlign(BOTTOM);
    //user
    textboxUser( 375, 150, 100, 30);
    fill(#EBECED); 
    rect(0, 700, width, 150);
    fill(255);
    text("Hello!", 390, 175); 
    //MC
    textbox( 15, 200, 75, 30);
    fill(0);
    text("Oh!", 25, 225); 
    textbox( 15, 250, 400, 30);
    fill(0);
    text("I'm so glad someone answered.", 25, 275); 
    textbox( 15, 300, 225, 30);
    fill(0);
    text("Can you help me?", 25, 325); 
    textOptions(0, 715, width, 30);
    textOptions(0, 755, width, 30);
    textAlign(CENTER);
    fill(0);
    text("Nah.", width/2, 740); 
    text("Sure, what do you need help with?", width/2, 780);
  } 
  if (state == 2.5) {
    textSize(25);
    textAlign(BOTTOM);
    //user
    textboxUser( 310, 150, 180, 30);
    fill(#EBECED); 
    rect(0, 700, width, 150);
    fill(255);
    text("Who are you?", 325, 175);
    textbox( 15, 200, 480, 125);
    fill(0);
    text("Oh, I'm a 20 year old woman who has \na big decision to make, but I need \nyour help in making it.", 25, 225); 
    textOptions(0, 715, width, 30);
    textOptions(0, 755, width, 30);
    textAlign(CENTER);
    fill(0);
    text("Okay, I'll help.", width/2, 740); 
    text("What is the decision you need to make?", width/2, 780);
  }
  if (state == 3) {
    background(random(255), random(255), random(255));
    textSize(30);
    text("Why did you choose to not help?", width/2, height/2); 
    text("Click here to start over.", width/2, 450);
  }
  if (state == 3.1) { //from stage 2
    textSize(25);
    textAlign(BOTTOM);
    //user
    textboxUser( 65, 350, 430, 30);
    fill(#EBECED); 
    rect(0, 700, width, 150);
    fill(255);
    text("Sure, what do you need help with?", 75, 375); 
    //MC
    textbox( 15, 400, 450, 125);
    fill(0);
    text("So, I just got proposed to. \nBut, I only know him for a week. \nShould I take the risk and say yes?", 25, 425); 
    //user
    textOptions(0, 715, width, 30);
    textOptions(0, 755, width, 30);
    textAlign(CENTER);
    fill(0);
    text("You should give it a try, you never know.", width/2, 740); 
    text("No, don't do it.", width/2, 780);
  }
  if (state == 3.2) { //from stage 2.5: okay
    textSize(25);
    textAlign(BOTTOM);
    //user
    textboxUser( 65, 350, 430, 30);
    fill(#EBECED); 
    rect(0, 700, width, 150);
    fill(255);
    text("Okay, I'll help.", 75, 375); 
    //MC
    textbox( 15, 400, 450, 125);
    fill(0);
    text("So, I just got proposed to. \nBut, I only know him for a week. \nShould I take the risk and say yes?", 25, 425); 
    //user
    textOptions(0, 715, width, 30);
    textOptions(0, 755, width, 30);
    textAlign(CENTER);
    fill(0);
    text("You should give it a try, you never know.", width/2, 740); 
    text("No, don't do it.", width/2, 780);
  }
  if (state == 3.3) { //from stage 2.5:what is it 
    textSize(25);
    textAlign(BOTTOM);
    //user
    textboxUser( 65, 350, 430, 70);
    fill(#EBECED); 
    rect(0, 700, width, 150);
    fill(255);
    text("What is the decision you need to \nmake?", 75, 375); 
    //MC
    textbox( 15, 450, 450, 125);
    fill(0);
    text("So, I just got proposed to. \nBut, I only know him for a week. \nShould I take the risk and say yes?", 25, 475); 
    //user
    textOptions(0, 715, width, 30);
    textOptions(0, 755, width, 30);
    textAlign(CENTER);
    fill(0);
    text("You should give it a try, you never know.", width/2, 740); 
    text("No, don't do it.", width/2, 780);
  }
  if (state == 3.4) { //give a try
    background(255); 
    textSize(30);
    text("End of Day 1.", width/2, height/2); 
    text("To be Continued.",width/2,500);
    //text("Click here to go to home screen.",width/2,500);
  }
  if (state == 3.5) { //don't do it
  textAlign(BOTTOM);
  background(0); 
  fill(255);
  textSize(25);
  text("Game Over.\nNormal Ending: The 20 year old\ncontinued on with her life,\nmaking a career for herself.\nEventually, she met a nice guy and\nmarried after a few years.\nShe now lives happily with her family\nin Venezuela.",25,height/2);
  text("Click here to start over.", 50, 750);
  }
  //print(state);
}

void time(int w, int hei, int c, int size) {
  int h = hour();
  int min = minute(); 
  fill(c);
  textSize(size);
  text(h + ":" + min, w, hei); //hours:minutes
}

void lockScreen() {
  lockscreen = loadImage("background.jpg"); // background 
  image(lockscreen, 0, 0, 500, 800);
  // time display
  int d = day();
  int m = month();
  int y = year();
  int h = hour();
  int min = minute(); 
  String day = String.valueOf(d);
  String month = String.valueOf(m);
  fill(255);
  textAlign(BOTTOM);
  textSize(100);
  text(h + ":" + min, width/5, height/2); //hours:minutes
  textSize(30);
  text(month + "/" + day + "/" + y, 150, 435);
  int timer; 
  timer = millis(); 
  // intro textbok 
  if (timer >= 4000) {
    stroke(255, 255, 255, 50);
    fill(255, 255, 255, 50);
    rect(100, 500, 300, 100, 10);
    textSize(20);
    fill(255); 
    text("You have a new message", 125, 550);
    text("Click to open", 190, 575);
  }
}

void messagesScreen() {
  fill(#EBECED); 
  rect(0, 0, width, 50); 
  fill(255); 
  rect(0, 50, 500, 800); 
  fill(#EBECED); 
  rect(0, 700, width, 150);
}

void textOptions(int x, int y, int w, int h) {
  stroke(0, 25);
  fill(0, 25);
  rect( x, y, w, h);
}

void Options() {
} 

void textbox(int x, int y, int w, int h) {
  stroke(#EBECED, 50);
  fill(#EBECED, 50);
  rect( x, y, w, h, 10);
}

void textboxUser(int x, int y, int w, int h) {
  stroke(#7987FF, 50);
  fill(#7987FF, 50);
  rect( x, y, w, h, 10);
}

void homeScreen() {
  homescreen = loadImage("homescreen.png");
  image(lockscreen, 0, 0, 500, 800);
  image(homescreen, 0, 0, 500, 800);
}

void mouseClicked() {
  if (state == 0) {
    if (mouseX >= 100 && mouseX < 400 && mouseY >= 500 && mouseY < 600) {
      state = 1;
    }
  } else if (state == 1) {
    if (mouseY <= 745 && mouseY >= 715) {
      state = 2;
    } else if (mouseY <= 785 && mouseY >= 755) {
      state = 2.5;
    }
  } else if (state == 2) {
    if (mouseY <= 745 && mouseY >= 715) {
      state = 3;
    } else if (mouseY <= 785 && mouseY >= 755) {
      state = 3.1;
    }
  } else if (state == 2.5) {
    if (mouseY <= 745 && mouseY >= 715) {
      state = 3.2;
    } else if (mouseY <= 785 && mouseY >= 755) {
      state = 3.3;
    }
  } else if ( state == 3) {
    if (mouseY <=480 && mouseY >= 400) {
      state = 0;
    }
  } else if (state == 3.1 || state == 3.2 || state == 3.3) {
    if (mouseY <= 745 && mouseY >= 715) {
      state = 3.4;
    } else if (mouseY <= 785 && mouseY >= 755) {
      state = 3.5;
    }
  } else if (state == 3.4) {
    if (mouseY <= 530 && mouseY >= 490) {
    state = 0;
    }
  }
  else if (state == 3.5){
    if (mouseY <= 800 && mouseY > 700) {
    state = 0; 
    }
  }
}