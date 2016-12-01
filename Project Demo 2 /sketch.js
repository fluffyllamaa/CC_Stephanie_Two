var video1, video2, video3;
var mouse_clicked = false;
var video1_playing = false;
var video2_playing = false;
var video3_playing = false;

//hide video and create image onto canvas 

function setup() {
  canvas = createCanvas(1000, 800);

  video1 = createVideo("nicole.MOV"); //sets up video1 
  video1.size(1000, 800);
  //video1.loop();
  video1.hide();

  video2 = createVideo("mags.MOV"); //sets up video2
  video2.size(1000, 800);
  //video2.loop();
  video2.hide();

  video3 = createVideo("lily.MOV"); //sets up video3 
  video3.size(1000, 800);
  //video3.loop();
  video3.hide();
}

function draw() {
  background(0);
  if (mouse_clicked == false) {
    video1.loop(); 
    image(video1, 0, 0);
    fill(244, 55, 0);
    rect(500, 300, 100, 100);
  } else if (mouse_clicked && video1_playing) {
    video1.pause();
    video1.hide();
    video2.loop(); 
    image(video2, 0, 0);
  } else if (mouse_clicked && video2_playing) {
    video2.pause();
    video2.hide();
    video3.loop();
    image(video3, 0, 0);
  }

}

function mousePressed() {
  if (mouse_clicked == false) {
    video1.play();
    mouse_clicked = true;
    video1_playing = true;
  } else if (mouse_clicked && video1_playing) {
    //video2.play(); 
    mouse_clicked = false;
    video1_playing = false;
    video2_playing = true;
    mouse_clicked = true;
  } else if (mouse_clicked && video2_playing) {
    //video2.pause();
    //video2.hide();
    //video3.play(); 
    mouse_clicked = false;
    video2_playing = false;
    video3_playing = true;
  }

}