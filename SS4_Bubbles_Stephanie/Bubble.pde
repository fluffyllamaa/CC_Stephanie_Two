class Bubble {
  //global variables
  float x, y, dx, dy, radius, mradius, start1, start2; 
  int state;

  //setup & initialized variables
  //constructor
  Bubble() {
    x=random(width);
    y=random(height);
    dx=random(-3, 3);
    dy=random(-3, 3);
    radius=100;
    stroke(174, 244, 250, 75);
    fill(174, 244, 250, 75);
    state=MOVING;
  }
  Bubble(float start1, float start2) {
    x= start1;
    y= start2;
    dy= random(-2, -1);
    radius=100;
    stroke(174, 244, 250, 75);
    fill(174, 244, 250, 75);
  }

  //methods
  void display() { //draw bubble
    stroke(174, 244, 250);
    fill(174, 244, 250, 75);
    ellipse(x, y, radius, radius);
  }

  void move() { //make bubble move up 
    x=x+dx;
    y=y+dy;
  }

  void bounce() { //make bubbles bounce against borders
    if (x >= width-radius || x <= radius) {
      dx = -dx;
    } 
    if (y >= height - radius || y <= radius) {
      dy = -dy;
    }
  }

  void process() { 
    if (state==MOVING) { 
      move();
    } 
    if (state==DEAD) {
      radius=0;
    }
  }
/*
  void checkPop(ArrayList <Bubble> BubbleList) { //check to see if bubbles pop or not
    for (int i=0; i < BubbleList.size (); i ++) {
      if ( state == MOVING && isTouching(BubbleList.get(i))) {
        state = DEAD;
      }
    }
  }

  boolean isTouching(Bubble other) {
    if (dist(start1, start2, other.x, other.y) == 0) {
      return true;
    } else {
      return false;
    }
  } */
} //end class