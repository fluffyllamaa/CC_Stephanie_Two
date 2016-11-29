
int state; 

void setup(){
  size(500,800);
  state=1;
}

void draw(){
  if (state==1){
  background(255);
  rect(100,700,300,100);
  ellipse(250,750,100,100);
  }
  if (state == 2){
    background(0);
    for (int y=50; y <= 400; y+=150){
      fill(255);
     rect(50, y, 300,100); 
     }
     fill(255);
     rect(100,600,300,75);
     fill(255,0,0);
     ellipse(200,650,50,50);
     fill(255);
     rect(100,700,300,75);
     fill(0,255,0);
     ellipse(200,750,50,50);
     
  } 
  if (state == 3){
    background(255);
    textAlign(CENTER);
    textSize(50);
    text("GAME OVER",width/2,height/2);
  }
  if (state == 4){
    background(0);
    for (int y=50; y <= 400; y+=150){
      fill(255);
     rect(50, y, 300,100); 
     }
     fill(255);
     rect(100,600,300,75);
     fill(0,0,255);
     ellipse(200,650,50,50);
     fill(255);
     rect(100,700,300,75);
     fill(255,0,255);
     ellipse(200,750,50,50);
  }
  print(state);
}



void mouseClicked(){
  if (state==1){
    state=2;
  } else if (state == 2 && mouseY <= 700 && mouseY>= 600){
    state=3;
  } else if (state ==2 && mouseY >=750 && mouseY <= height){
    state=4;
  }
}

void keyPressed(){
  fill(255);
  state=1;
}