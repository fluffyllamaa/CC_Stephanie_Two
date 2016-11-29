//Moving Bubbles 
//Stephanie
//This sketch makes bubbles whenevver someone moves in front of the screen, although the movement must be drastic. 

import processing.video.*; //importing video library 
Bubble b1; 
ArrayList <Bubble> BubbleList;
Capture cam; //initializing capture object
PImage prevFrame;
float difference = 50;
int DEAD=1;
int MOVING=2;

void setup() {
  size (800, 800);
  BubbleList= new ArrayList<Bubble>(); 
  for (int g=0; g < 50; g=g+1) { 
    BubbleList.add ( new Bubble() );
  }
  cam = new Capture(this, width, height); 
  cam.start();
  prevFrame = createImage(cam.width, cam.height, RGB);
}

void captureEvent(Capture cam) {
  prevFrame.copy(cam, 0, 0, cam.width, cam.height, 0, 0, cam.width, cam.height);
  prevFrame.updatePixels();
  cam.read();
}

void draw() {
  background(0);
  image(cam, 0, 0); 
  cam.loadPixels();
  prevFrame.loadPixels();

  float tMotion = 0; 

  for (int i = 0; i < cam.pixels.length; i ++) {
    color curr = cam.pixels[i];
    color prev = prevFrame.pixels[i]; 
    float r1 = red(curr); 
    float g1 = green(curr); 
    float b1 = blue(curr); 
    float r2 = red(prev); 
    float g2 = green(prev); 
    float b2 = blue(prev); 

    float color_diff = dist(r1, g1, b1, r2, g2, b2); 
    tMotion += color_diff;
  }
  float avgM = tMotion / cam.pixels.length;
  float radius = avgM * 2; 
  if (avgM > 20) { //make bubbles appear when differnce in motion is > 20
    b1 = new Bubble(random(width), random(height), radius); 
    BubbleList.add(b1);
    b1.state=MOVING;
    b1.display();
    b1.process();
    b1.bounce();
  }
}