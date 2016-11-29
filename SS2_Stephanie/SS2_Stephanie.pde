//SS2_Stephanie Cen 
//Bubbles
//Click the screen to start, click to make bubbles, press any key to reset

//global variables
Bubble b1;
ArrayList <Bubble> BubbleList;
int x, y, radius, mode, state;
int DEAD=1;
int MOVING=2;

void setup() { 
  size(1000, 800);
  background(227,254,255);
  BubbleList= new ArrayList<Bubble>();
  for (int g=0; g < 50; g=g+1) { 
    BubbleList.add ( new Bubble() );
  }
}

void draw() {
  background(227,254,255);
    if (mode==0){
      fill(0);
      textSize(75);
      text("Click to Play",300,400);
      }
   if (mode==1){
      background(227,254,255);
      fill(0);
      textSize(20);
      text("Press any button to reset", 750,780); 
      for (int i=0; i < BubbleList.size (); i=i+1) {
      BubbleList.get(i).display();
      BubbleList.get(i).process();
      }
   }
}

//make new bubbles 
void mouseClicked(){
   b1=new Bubble(mouseX,mouseY);
   BubbleList.add(b1);
   b1.state=MOVING;
   b1.display();
   b1.process();
}

//click to start 
void mousePressed() { 
 mode=1;
}

//reset
void keyPressed(){
  background(227,254,255);
  for (int i=0; i < BubbleList.size (); i=i+1) {
    BubbleList.get(i).state=DEAD;
  }
}