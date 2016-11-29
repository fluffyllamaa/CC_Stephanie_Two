var video1, video2, video3;
var mouse_clicked = false; 
var video1_playing = false; 
var video2_playing = false; 
var video3_playing = false; 

function setup() {
  //createCanvas(1000,800);
  //volume(0.0);
  video1 = createVideo("nicole.MOV");
  video1.size(1000,800);
  //video2 = createVideo("mags.MOV");
  //video2.size(1000,800);
  //video3 = createVideo("lily.MOV");
  //video3.size(1000,800);
  //video1.loop();  
}

function draw() {
  //background(0); 

}

function mousePressed(){
  if (mouse_clicked == false){
    video1.play(); 
    mouse_clicked = true; 
    video1_playing = true; 
  }
  else if (mouse_clicked && video1_playing){
    video1.pause(); 
    video1.hide(); 
    video2 = createVideo("mags.MOV");
    video2.size(1000,800);
    video2.play(); 
    mouse_clicked = false; 
    video1_playing = false;
    video2_playing = true; 
    mouse_clicked = true; 
  }
  else if (mouse_clicked && video2_playing){
    video2.pause();
    video2.hide();
    video3 = createVideo("lily.MOV");
    video3.size(1000,800);
    video3.play();
    mouse_clicked = false; 
    video2_playing = false; 
    video3_playing = true; 
  }
  
}