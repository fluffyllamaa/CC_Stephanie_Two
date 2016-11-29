//Adoption Center
//Stephanie
//User chooses the animal he/she wants to adopt and then start over to pick another one using
//the drop down menu. 

//initializing image variables
var center,bunny,cat,clownfish,goldfish,dogbed,fishbowl,retriever,husky,orangek,puppy,paraket,siamese,studio,woman,bubble;

function preload() { //loading images 
  //intro
  center = loadImage("adoption_center.jpg");
  woman = loadImage("woman.png");
  bubble = loadImage("speech_bubble.png");
  //bunny
  bunny = loadImage("bunny.png");
  //cats
  cat = loadImage("cat.png");
  orangek = loadImage("orangekitten.png");
  siamese = loadImage("siamese cat.png");
  //fish
  clownfish = loadImage("clownfish.png");
  goldfish = loadImage("goldfish.png");
  //dogs
  retriever = loadImage("golden retriever.png");
  husky = loadImage("husky.png");
  puppy = loadImage("puppy.png");
  //bird
  parakeet = loadImage("PARAKEET.png");
  //scene
  dogbed = loadImage("dogbed.png");
  fishbowl = loadImage("fishbowl.png");
  studio = loadImage("studio.jpeg");
}

function reset(){ //restart screen when user presses R 
  removeElements(); //removes everything in order to not leave a trace of the previous sketch 
  setup();
}

function setup() { 
  createCanvas(1000, 800);
  //set up intro scene 
  image(center, 0, 0, width, height);
  image(woman, width - 600, height - 500, 700, 700);
  image(bubble, width - 700, height - 700, 500, 300);
  fill(0);
  textSize(35);
  text("What animal do you want to\nadopt today?", width - 675, height - 600);
  //drop down menu setup
  menu = createSelect();
  menu.position(width - 600, height - 525);
  menu.option("bunny");
  menu.option("kitten");
  menu.option("orange kitten");
  menu.option("siamese cat");
  menu.option("clownfish");
  menu.option("goldfish");
  menu.option("husky");
  menu.option("golden retriever");
  menu.option("puppy");
  menu.option("parakeet");
  menu.changed(selectEvent);
}

function draw() {

}

function selectEvent() { //dropdown menu option events 
  var item = menu.value(); //create the item variable 
  menu.remove(); //removes menu list when an item is selected 
  image(studio, 0, 0, width, height); //setup scene 
  fill(255); //text setup 
  text("Enjoy living with your " + item + "!\nMake sure you take good care of it!", 10, height - 650);
  text("Press R to pick another animal!",10,height-550) //restart text
  //conditionals for when each item is selected
  if (item == "bunny") { 
    image(dogbed, width - 800, height - 200, 500, 300);
    image(bunny, width - 700, height - 250, 300, 200);
  } else if (item == "kitten") {
    image(dogbed, width - 800, height - 200, 500, 300);
    image(cat, width - 700, height - 350, 300, 300);
  } else if (item == "orange kitten") {
    image(dogbed, width - 800, height - 200, 500, 300);
    image(orangek, width - 700, height - 350, 200, 300);
  } else if (item == "siamese cat") {
    image(dogbed, width - 800, height - 200, 500, 300);
    image(siamese, width - 700, height - 350, 300, 300);
  } else if (item == "clownfish") {
    image(fishbowl, width - 800, height - 300, 400, 300);
    image(clownfish, width - 650, height - 250, 200, 300);
  } else if (item == "goldfish") {
    image(fishbowl, width - 800, height - 300, 400, 300);
    image(goldfish, width - 650, height - 250, 200, 200);
  } else if (item == "husky") {
    image(dogbed, width - 800, height - 200, 500, 300);
    image(husky, width - 675, height - 350, 200, 300);
  } else if (item == "golden retriever") {
    image(dogbed, width - 800, height - 200, 500, 300);
    image(retriever, width - 700, height - 350, 300, 300);
  } else if (item == "puppy") {
    //image(dogbed, width - 800, height - 200, 500, 300);
    image(puppy, width - 700, height - 350, 350, 300);
  } else if (item == "parakeet") {
    image(parakeet, width - 650, height - 300, 300, 200);
  }
}

function keyPressed(){ //restarts the sketch
  if (key == "R" || key == "r"){
    reset();
  }
}