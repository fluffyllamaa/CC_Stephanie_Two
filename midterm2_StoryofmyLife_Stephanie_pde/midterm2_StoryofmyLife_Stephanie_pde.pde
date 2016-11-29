PImage lockscreen;
PImage homescreen;
float state; 
int time = 0;
int current;
int mx1 = 15;
int my1 = 100;
int x1 = 10;
int y1 = 75;
int h1 = 30;
int textHeight = 740;
boolean userOption1;
boolean userOption2; 
boolean userOption3;
boolean userOption4;
boolean userOption5;
boolean userOption6;
boolean userOption7;
boolean userOption8;
boolean userOption9;
boolean userOption10;
boolean userOption11;
boolean userOption12;
boolean userOption13;
boolean userOption14;
boolean userOption15;
boolean userOption16;
boolean userOption17;

void reset() {
  state = 0; 
  userOption1 = false; 
  userOption2=false;
  userOption3=false; 
  userOption4=false;
  userOption5=false;
  userOption6=false;
  userOption7=false;
  userOption8=false;
  userOption9=false;
  userOption10=false;
  userOption11=false;
  userOption12=false;
  userOption13=false;
  userOption14=false;
  userOption15=false;
  userOption16=false;
  userOption17=false;
  println(state);
}


void setup() {
  size(500, 800);
}

void draw() {
  if (state == 0) { 
    lockScreen();
  } 
  if (state == 1) {
    messagesScreen();
    textSize(20); 
    text("Blocked Number", 175, 40);
    //textboxes and text have a difference of 50 in height
    checkText("Hello?", mx1, my1, x1, y1, h1); // MC
    checkText("Anyone there?", mx1, my1 + 50, x1, y1 + 50, h1); //MC
    //user options
    textOptions("Hi.", 0, 715, width, 30, textHeight); // user option 1 
    textOptions("Who are you?", 0, 755, width, 30, textHeight + 40); //user option 2
    if (userOption1 == true) { //user option 1
      textOptionsReset(); //erasing the options at the bottom. 
      checkTextUser("Hi.", mx1, my1 + 100, x1, y1 + 100, h1); //user option 
      checkText("I'm so glad someone finally        answered me.", mx1, my1 +150, x1, y1 + 125, h1); //MC texts 
      checkText("I need you to help me.", mx1, my1 + 235, x1, y1 + 235, h1); //MC texts
      checkText("I know you may be wondering why you should help me and what kind of game this is, but your questions will be answered!", mx1, my1 +285, x1, y1 + 285, h1);
      checkText("So will you help me or not?", mx1, my1 + 460, x1, y1 + 460, h1);
      //user options
      textOptions("I'll help.", 0, 715, width, 30, textHeight); // user option 3 
      textOptions("No, thank you. This is boring.", 0, 755, width, 30, textHeight + 40); //user option 4
      state = 2; // change to the second state
    } else if (userOption2 == true) { //user option 2 
      textOptionsReset(); //erasing the options at the bottom.
      checkTextUser("Who are you?", mx1, my1 + 100, x1, y1 + 100, h1); //user option 
      checkText("You asked a very good question, so let me break the fourth wall a bit.", mx1, my1 +150, x1, y1 + 125, h1); // MC
      checkText("As the creator of this game, this is just a basic and simple version of something that I want to further work on.", mx1, my1 +230, x1, y1 + 230, h1);
      checkText("This game may not seem like much, but it is only because it is still in the works!", mx1, my1 +400, x1, y1 + 400, h1);
      checkText("So will you continue or not?", mx1, my1 + 525, x1, y1 + 525, h1);
      //user options
      textOptions("Yeah, I will.", 0, 715, width, 30, textHeight); // user option 5
      textOptions("Nope, this is lame.", 0, 755, width, 30, textHeight + 40); //user option 6
      state = 3; //change to third state
    }
  }
  if (state == 2) {
    if (userOption3 == true) {
      messagesScreenReset();
      checkTextUser("I'll help.", mx1, my1, x1, y1, h1);
      checkText("So, I'm happily married with four kids. My husband goes back and forth  between Puerto Rico and NYC.", mx1, my1 + 50, x1, y1 + 50, h1);
      checkText("He's asking if I want to go with   him, should I?", mx1, my1 + 175, x1, y1 + 150, h1);
      //user options
      textOptions("You should stay in NYC.", 0, 715, width, 30, textHeight); // user option 7
      textOptions("You should go with him to PR.", 0, 755, width, 30, textHeight + 40); //user option 8
      state = 4; //change to fourth state
    } else if (userOption4 == true) {
      textOptionsReset();
      messagesScreenReset();
      textSize(25);
      fill(0);
      checkText("Well, thank you for at least trying this game.", mx1, my1, x1, y1 - 25, h1 );
      checkText("Click here to restart.", mx1, my1 + 100, x1, y1 + 100, h1);
    }
  }
  if (state == 3) {
    if (userOption5 == true) {
      textOptionsReset();
      messagesScreenReset();
      checkTextUser("Yeah, I will.", mx1, my1, x1, y1, h1);
      checkText("So, I'm happily married with four kids. My husband goes back and forth  between Puerto Rico and NYC.", mx1, my1 + 50, x1, y1 + 50, h1);
      checkText("He's asking if I want to go with   him, should I?", mx1, my1 + 175, x1, y1 + 150, h1);
      //user options
      textOptions("You should stay in NYC.", 0, 715, width, 30, textHeight); // user option 7
      textOptions("You should go with him to PR.", 0, 755, width, 30, textHeight + 40); //user option 8
      state = 4; //change to fourth state
    } else if (userOption6 == true) {
      textOptionsReset();
      messagesScreenReset();
      textSize(25);
      fill(0);
      checkText("Well, thank you for at least trying this game.", mx1, my1, x1, y1 - 25, h1 );
      checkText("Click here to restart.", mx1, my1 + 100, x1, y1 + 100, h1);
    }
  }
  if (state == 4) {
    if (userOption7 == true) {
      textOptionsReset();
      messagesScreenReset();
      checkTextUser("I'll help.", mx1, my1, x1, y1, h1);
      checkText("So, I'm happily married with four kids. My husband goes back and forth  between Puerto Rico and NYC.", mx1, my1 + 50, x1, y1 + 50, h1);
      checkText("He's asking if I want to go with   him, should I?", mx1, my1 + 175, x1, y1 + 150, h1);
      checkTextUser("You should stay in NYC.", mx1, my1 + 250, x1, y1 + 250, h1); 
      checkText("I'm glad I stayed, I don't have to uproot my entire life again. But, everytime my hubby comes back from PR, we end up arguing.", mx1, my1 + 300, x1, y1 + 300, h1); 
      checkText("EVERY SINGLE TIME.", mx1, my1 + 475, x1, y1 + 475, h1); 
      checkText("Do you think things will get better?", mx1, my1 + 525, x1, y1 + 525, h1); 
      textOptions("No, stand up and say something!", 0, 715, width, 30, textHeight); // user option 9
      textOptions("Of course, wait it out a bit more.", 0, 755, width, 30, textHeight + 40); //user option 10
      state = 5; //change to fifth state
    }
    if (userOption8 == true) {
      messagesScreenReset();
      checkTextUser("I'll help.", mx1, my1, x1, y1, h1);
      checkText("So, I'm happily married with four kids. My husband goes back and forth  between Puerto Rico and NYC.", mx1, my1 + 50, x1, y1 + 50, h1);
      checkText("He's asking if I want to go with   him, should I?", mx1, my1 + 175, x1, y1 + 150, h1);
      checkTextUser("You should go with him to PR.", mx1, my1 + 250, x1, y1 + 250, h1);
      checkText("So, I went to PR with my kids. My hubby and I still argue, but it's     nothing major.", mx1, my1 + 300, x1, y1 + 300, h1);
      checkText("But, I'm not happy working in the  family restaurant forever...", mx1, my1 + 425, x1, y1 + 400, h1);
      //user options
      textOptions("Stay!", 0, 715, width, 30, textHeight); // user option 11
      textOptions("Leave!", 0, 755, width, 30, textHeight + 40); //user option 12
      state = 8; //chane to 8th state
    }
  }
  if (state == 5) {
    if (userOption9 == true) {
      textOptionsReset();
      messagesScreenReset();
      checkTextUser("No, stand up and say something!", mx1, my1, x1, y1, h1); // user option 9
      checkText("I decided to ask for a divorce...  but, he doesn't want it.", mx1, my1 + 50, x1, y1 + 25, h1); 
      //user options
      textOptions("Don't divorce.", 0, 715, width, 30, textHeight); // user option 11
      textOptions("Get a divorce!", 0, 755, width, 30, textHeight + 40); //user option 12
      state = 6; //change to 6th state
    }
    if (userOption10 == true) {
      textOptionsReset();
      messagesScreenReset();
      checkTextUser("Of course, wait it out a bit more.", mx1, my1, x1, y1, h1); //user option 10
      checkText("We're still arguing whenever he    comes back.", mx1, my1 + 50, x1, y1 + 25, h1); 
      checkText("He's even hitting them...what do I do?", mx1, my1 + 125, x1, y1 + 125, h1); 
      //user options
      textOptions("DIVORCE GIRL!", 0, 715, width, 30, textHeight); // user option 13
      textOptions("WAIT! Talk to him!", 0, 755, width, 30, textHeight + 40); //user option 14
      state = 7; //change to 7th state
    }
  }
  if (state == 6) {
    if (userOption11 == true) {
      textOptionsReset();
      messagesScreenReset();
      checkTextUser("No, stand up and say something!", mx1, my1, x1, y1, h1); // user option 9
      checkText("I decided to ask for a divorce...  but, he doesn't want it.", mx1, my1 + 50, x1, y1 + 25, h1); 
      checkTextUser("Don't divorce.", mx1, my1 + 150, x1, y1 + 150, h1);  //user option 13
      checkText("Well, things got better. We're stilltogether with our kids and we're    happy. My hubby changed for us. (:", mx1, my1 + 200, x1, y1 + 200, h1); // ending
      textOptions("Click here.", 0, 735, width, 30, textHeight + 20);
    }
    if (userOption12 == true) {
      textOptionsReset();
      messagesScreenReset();
      checkTextUser("No, stand up and say something!", mx1, my1, x1, y1, h1); // user option 9
      checkText("I decided to ask for a divorce...  but, he doesn't want it.", mx1, my1 + 50, x1, y1 + 25, h1); 
      checkTextUser("Get a divorce!", mx1, my1 + 150, x1, y1 + 150, h1); //user option 12
      checkText("So, after the divorce, I was able  to move in with a family friend.", mx1, my1 + 200, x1, y1 + 175, h1); 
      checkText("I'm living with my kids at their    place. Things definitely got better and I'm happy living my life with my kids.", mx1, my1 + 275, x1, y1 + 275, h1); //ending
      textOptions("Click here.", 0, 735, width, 30, textHeight + 20);
    }
  }
  if (state == 7) {
    if (userOption13 == true) {
      textOptionsReset();
      messagesScreenReset();
      checkTextUser("Of course, wait it out a bit more.", mx1, my1, x1, y1, h1); //user option 10
      checkText("We're still arguing whenever he    comes back.", mx1, my1 + 50, x1, y1 + 25, h1); 
      checkText("He's even hitting them...what do I do?", mx1, my1 + 125, x1, y1 + 125, h1); 
      checkTextUser("DIVORCE GIRL!", mx1, my1 + 175, x1, y1 + 175, h1);  //user option 13
      checkText("I did, I took this to court. I      have custody over the kids now.But, now I don't know what to do next.", mx1, my1 + 225, x1, y1 + 225, h1); // ending
      textOptions("Click here.", 0, 735, width, 30, textHeight + 20);
    }
    if (userOption14 == true) {
      textOptionsReset();
      messagesScreenReset();
      checkTextUser("Of course, wait it out a bit more.", mx1, my1, x1, y1, h1); //user option 10
      checkText("We're still arguing whenever he    comes back.", mx1, my1 + 50, x1, y1 + 25, h1); 
      checkText("He's even hitting them...what do I do?", mx1, my1 + 125, x1, y1 + 125, h1); 
      checkTextUser("WAIT! Talk to him!", mx1, my1 + 175, x1, y1 + 175, h1); //user option 14
      checkText("Well, I DID talk to him. But, guess what?", mx1, my1 + 225, x1, y1 + 225, h1); 
      checkText("His family kicked me out. And,      ironically, I now live on the       second floor of my ex's     house.", mx1, my1 + 275, x1, y1 + 275, h1);  // ending
      textOptions("Click here.", 0, 735, width, 30, textHeight + 20);
    }
  }
  if (state == 8) {
    if (userOption15 == true) {
      messagesScreenReset();
      textOptionsReset();
      checkTextUser("I'll help.", mx1, my1, x1, y1, h1);
      checkText("So, I'm happily married with four kids. My husband goes back and forth  between Puerto Rico and NYC.", mx1, my1 + 50, x1, y1 + 50, h1);
      checkText("He's asking if I want to go with   him, should I?", mx1, my1 + 175, x1, y1 + 150, h1);
      checkTextUser("You should go with him to PR.", mx1, my1 + 250, x1, y1 + 250, h1);
      checkText("So, I went to PR with my kids. My hubby and I still argue, but it's     nothing major.", mx1, my1 + 300, x1, y1 + 300, h1);
      checkText("But, I'm not happy working in the  family restaurant forever...", mx1, my1 + 425, x1, y1 + 400, h1);
      checkTextUser("Stay!", mx1, my1 + 500, x1, y1 + 500, h1);  //user option 11
      checkText("You're right. I should be content  with my life right now.", mx1, my1 + 550, x1, y1 + 525, h1); // ending
      textOptions("Click here.", 0, 735, width, 30, textHeight + 20);
    }
    if (userOption16 == true) {
      messagesScreenReset();
      textOptionsReset();
      checkTextUser("I'll help.", mx1, my1, x1, y1, h1);
      checkText("So, I'm happily married with four kids. My husband goes back and forth  between Puerto Rico and NYC.", mx1, my1 + 50, x1, y1 + 50, h1);
      checkText("He's asking if I want to go with   him, should I?", mx1, my1 + 175, x1, y1 + 150, h1);
      checkTextUser("You should go with him to PR.", mx1, my1 + 250, x1, y1 + 250, h1);
      checkText("So, I went to PR with my kids. My hubby and I still argue, but it's     nothing major.", mx1, my1 + 300, x1, y1 + 300, h1);
      checkText("But, I'm not happy working in the  family restaurant forever...", mx1, my1 + 425, x1, y1 + 400, h1);
      checkTextUser("Leave!", mx1, my1 + 500, x1, y1 + 500, h1); //user option 14
      checkText("I left and went back to my hometown in Venezuela with my kids. (:", mx1, my1 + 550, x1, y1 + 525, h1); //ending
      textOptions("Click here.", 0, 735, width, 30, textHeight + 20);
    }
  } 
  if (state == 9) { //ending sequence 
    messagesScreenReset(); 
    textOptionsReset();
    checkText("So, you completed just ONE of the possible endings. That wasn't so bad  right?", mx1, my1, x1, y1, h1); 
    checkText("But, are you interested in the other endings that you missed out on?", mx1, my1 + 125, x1, y1 + 100, h1);
    checkText("Then, click the button below.     It'll randomly bring you to another   ending.", mx1, my1 + 225, x1, y1 + 225, h1);
    checkText("Then press R to restart the game.", mx1, my1 + 350, x1, y1 + 350, h1); 
    textOptions("Click here.", 0, 715, width, 30, textHeight);
  }
  println(state);
}

void time(int w, int hei, int c, int size) { // display time
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
  noStroke();
  fill(#EBECED); 
  rect(0, 0, width, 50); 
  fill(255); 
  rect(0, 50, 500, 800); 
  fill(#EBECED); 
  rect(0, 700, width, 150);
  textSize(20); // back button 
  textAlign(BOTTOM);
  fill(#7987FF);
  text("<Back", 15, 35);
  time(230, 15, 0, 15); //displays time
}

void messagesScreenReset() {
  fill(255); 
  rect(0, 50, 500, 800);
  fill(#EBECED); 
  rect(0, 700, width, 150);
}  

void textOptionsReset() { //clear options at bottom screen
  noStroke();
  fill(#EBECED); 
  rect(0, 700, width, 150);
}

void textOptions(String option, int x, int y, int w, int h, int textHeight) { // user choice boxes
  stroke(0, 25);
  fill(0, 25);
  rect( x, y, w, h);
  textAlign(CENTER);
  textSize(25);
  fill(0); 
  text(option, width/2, textHeight);
}

void textbox(int x, int y, int w, int h) {
  stroke(#EBECED, 50);
  fill(#EBECED, 50);
  rect( x, y, w, h, 10);
}

void textboxUser(int x, int y, int w, int h) { // draws user textbox
  stroke(#7987FF, 50);
  fill(#7987FF, 50);
  rect( x, y, w, h, 10);
}

//checks and adds message every few seconds (doesn't work in state,
//must figure out how to reset the time in state 1)
//checks message length and adjusts textbox accordidngly.
void checkText(String str, int mx, int my, int x, int y, int h) {
  textAlign(BOTTOM);
  textSize(25);
  fill(0);
  current = millis();
  //while (current > time) {
  //if (current > time + 500) {
  if (textWidth(str) > width) {
    if ((str.length() > 100) && (str.length() < 200)) {
      str = str.substring(0, 36) + "\n" + str.substring(36, 72) + "\n" + str.substring(72, 100) + "\n" + str.substring(100, str.length());
      y+=0;
      h+=125;
      text(str, mx, my); 
      textbox(x, y, int(textWidth(str)), h);
      //  time = 0;
    } 
    if ((str.length() > 70) && (str.length() <= 100)) {
      str = str.substring(0, 34) + "\n" + str.substring(34, 72) + "\n" + str.substring(72, str.length());
      y+=0;
      h+=75;
      text(str, mx, my); 
      textbox(x, y, int(textWidth(str)), h);
      //time = 0;
    } else if (str.length() > 35 && str.length() <= 70) {
      str = str.substring(0, 35) + "\n" + str.substring(35, str.length());
      y+=25;
      h+=35;
      text(str, mx, my); 
      textbox(x, y, int(textWidth(str))+10, h);
      //time = 0;
    }
  } else {
    text(str, mx, my); 
    textbox(x, y, int(textWidth(str))+10, h);
    //time = 0;
  }
  //time = millis();
  //println(current, time+500);
}

// check blue textboxes 
void checkTextUser(String str, int mx, int my, int x, int y, int h) {
  textAlign(BOTTOM);
  textSize(25);
  fill(0);
  current = millis();
  //while (current > time) {
  //if (current > time + 500) {
  if (textWidth(str) > width) {
    if (str.length() > 70) {
      str = str.substring(0, 36) + "\n" + str.substring(36, 72) + "\n" + str.substring(73, 108) + "\n" + str.substring(109, str.length());
      y+=0;
      h+=125;
      text(str, mx, my); 
      textboxUser(x, y, int(textWidth(str)), h);
    } else if (str.length() > 35) {
      str = str.substring(0, 36) + "\n" + str.substring(37, str.length());
      y+=25;
      h+=35;
      text(str, mx, my); 
      textboxUser(x, y, int(textWidth(str))+10, h);
      // time = 0;
    }
  } else {
    text(str, mx, my); 
    textboxUser(x, y, int(textWidth(str))+10, h);
    time = 0;
  }
  //time = millis();
  //println(current, time+500);
  //}
  //}
}

void mouseClicked() {
  if (state == 0) { //lockscreen
    if (mouseX >= 100 && mouseX < 400 && mouseY >= 500 && mouseY < 600) {
      state = 1; //change to messages screen
    }
  } else if (state == 1) {
    if (mouseY <= 745 && mouseY >= 715) { //user option 1
      userOption1 = true;
      // userOption3 = true;
    } else if (mouseY <= 785 && mouseY >= 755) { //user option 2 
      userOption2 = true;
      // userOption6 = true;
    }
  } else if (state == 2) {
    if (mouseY <= 745 && mouseY >= 715) { //user option 3
      userOption3 = true;
    } else if (mouseY <= 785 && mouseY >= 755) { //user option 4
      userOption4 = true;
    } else if (mouseY > 175 && mouseY < 230) {
      reset();
    }
  } else if (state == 3) {
    if (mouseY <= 745 && mouseY >= 715) { //user option 5
      userOption5 = true;
    } else if (mouseY <= 785 && mouseY >= 755) { //user option 6
      userOption6 = true;
    } else if (mouseY > 175 && mouseY < 230) {
      reset();
    }
  } else if (state == 4) {
    if (mouseY <= 745 && mouseY >= 715) { //user option 7
      userOption7 = true;
    } else if (mouseY <= 785 && mouseY >= 755) { //user option 8
      userOption8 = true;
    }
  } else if (state == 5) {
    if (mouseY <= 745 && mouseY >= 715) { //user option 9
      userOption9 = true;
    } else if (mouseY <= 785 && mouseY >= 755) { //user option 10
      userOption10 = true;
    }
  } else if (state == 6) {
    if (mouseY <= 745 && mouseY >= 715) { //user option 9
      userOption11 = true;
    } else if (mouseY <= 785 && mouseY >= 755) { //user option 10
      userOption12 = true;
    } else if (mouseY > 745 && mouseY < 755 && (userOption11 == true || userOption12 == true)) {
      state = 9;
    }
  } else if (state == 7) {
    if (mouseY <= 745 && mouseY >= 715) { //user option 9
      userOption13 = true;
    } else if (mouseY <= 785 && mouseY >= 755) { //user option 10
      userOption14 = true;
    } else if (mouseY > 745 && mouseY < 755 && (userOption13 == true || userOption14 == true)) {
      state = 9;
    }
  } else if (state == 8) {
    if (mouseY <= 745 && mouseY >= 715) { //user option 9
      userOption15 = true;
    } else if (mouseY <= 785 && mouseY >= 755) { //user option 10
      userOption16 = true;
    } else if (mouseY > 745 && mouseY < 755 && (userOption15 == true || userOption16 == true)) {
      state = 9;
    }
  } else if (state == 9) {
    if (mouseY < 745 && mouseY >= 715) { //random ending generator
      boolean[] options = new boolean[6];
      options[0] = userOption11;
      options[1] = userOption12;
      options[2] = userOption13;
      options[3] = userOption14;
      options[4] = userOption15;
      options[5] = userOption16;
      int s = int(random(1, 3));
      int num = int(random(1, 2));
      if (s == 1) {
        messagesScreenReset();
        textOptionsReset();
        state =  6;
        options[0] = true;
      } else if (num == 2) {
        options[1] = true;
      } else if (s == 2) {
        messagesScreenReset();
        textOptionsReset();
        state = 7;
        if (num == 1) {
          textOptions("Click again.", 0, 715, width, 30, textHeight);
          options[2] = true;
        } else if (num == 2) {
          textOptions("Click again.", 0, 715, width, 30, textHeight);
          options[3] = true;
        }
      } else if (s == 3) {
        messagesScreenReset();
        textOptionsReset();
        state = 8;
        if (num == 1) {
          textOptions("Click again.", 0, 715, width, 30, textHeight);
          options[4] = true;
        } else if (num == 2) {
          textOptions("Click again.", 0, 715, width, 30, textHeight);
          options[5] = true;
        }
      }
    }
  }
}



void keyPressed() {
  if (keyPressed) {
    if (key == 'R' || key == 'r') {
      reset();
    }
  }
}