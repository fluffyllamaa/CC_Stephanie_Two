//Stephanie 
//Stephanie_SS3
//Colors and Shapes

void setup() {
  size(1000,600);
}
  
void draw() {
  
  noStroke();
  if ((mouseX >= 500) && (mouseX < 625)) {
    background(219,255,237);
    tab2();
    stroke(255);
    line(500,0, 500,height);
    //circle pattern
    fill(random(255),random(255),random(255));
     ellipse(random(width/2),random(height),25,25);
  }  else if ((mouseX >= 625) && (mouseX < 750)) {
    background(209,255,227);
    tab3();
    stroke(255);
    line(500, 0, 500, height); 
    textSize(35); 
    fill(0); 
    text("Click to change color",575,100);
    //sqaure pattern
     for (int i=0; i<=width/2; i=i+50){
     for (int h=0; h<=height; h=h+50){
       if (mousePressed == true){
       fill(255,random(255),random(255));
     } else if (mousePressed==false) { 
        fill(random(255),255,random(255));
     } 
      rect(i,h,50,50);
       }
     } 
  }  else if ((mouseX >= 750) && (mouseX < 875)) {
    background(199,255,217);
    tab4();
    stroke(255);
    line(500,0, 500,height);
    //circle pattern 
      //background(0);
      int r=10;
       while (r<=500){
      fill(random(255),random(255),255);
      r=r+5;
    ellipse(random(width/2),random(height),25,25); 
   }
  }  else if ((mouseX>=875) && (mouseX <1000)) {
    background(189,255,207); 
    tab5();
    stroke(255);
    line(500,0,500,height); 
    textSize(30); 
    fill(0); 
    text("Press any key to change color",530,100);
    //square 
    for (int s=500;s>=0;s=s-25){
      if (keyPressed==true){
      fill(255,random(255),255); 
    } else if (keyPressed==false){
      fill(255,255,random(255));
    } 
    rectMode(CENTER);
     rect(250,height/2,s,s);
    } 
  } else {
    background(229,255,249);
    tab1();
    stroke(255);
    line(500, 0, 500, height);
  }
}

void tab1() {
  //display text
  textSize(50);
  text("Rollover each tab",20,300);
  //tab 2
  fill(219,255,237);
  rect(width-500,0,125,height); 
  //tab 3 
  fill(209,255,227); 
  rect(width-375,0,125,height);
  //tab 4
  fill(199,255,217);
  rect(width-250,0,125,height);
  //tab 5 
  fill(189,255,207);
  rect(width-125,0,125,height);
}

void tab2() {
  //tab 3 
  fill(209,255,227); 
  rect(width-375,0,125,height);
  //tab 4
  fill(199,255,217);
  rect(width-250,0,125,height);
  //tab 5 
  fill(189,255,207);
  rect(width-125,0,125,height);
}

void tab3() {
  //tab 4
  fill(199,255,217);
  rect(width-250,0,125,height);
  //tab 5 
  fill(189,255,207);
  rect(width-125,0,125,height);
}

void tab4() {
  //tab 5 
  fill(189,255,207);
  rect(width-125,0,125,height);
}

void tab5() {
  fill(189,255,207);
  rect(width-125,0,125,height);
} 