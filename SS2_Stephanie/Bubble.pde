class Bubble {
  //global variables
  float x, y, dy, radius, start1, start2; 
  int state;

  //setup & initialized variables
  //constructor
  Bubble() {
    x=random(width);
    y=random(height);
    dy=random(-2, -1);
    radius=100;
    stroke(174,244,250,75);
    fill(174,244,250,75);
    state=MOVING;
  }
  Bubble(float start1, float start2) {
    x= start1;
    y= start2;
    dy= random(-2,-1);
    radius=100;
    stroke(174,244,250,75);
    fill(174,244,250,75);
  }
  
  //functions
  void display() { 
    stroke(174,244,250);
    fill(174,244,250,75);
    ellipse(x, y, radius, radius);
  }
  
  void move() { 
    y=y+dy;
  }
  
  void process() { 
    if (state==MOVING) { 
      move();
    } 
    if (state==DEAD) {
      radius=0;
    }
  }
  
} //end class