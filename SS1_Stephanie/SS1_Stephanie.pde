//Short Study #1 
//Three of a Kind, Stephanie Cen 
//testing 

//setup
size(1080,720); 
background(255);
//fill(#E5FFF6);
fill(#C1FFDC);
//fill(#C4FFDE);
rect(0,150,425,900);
fill(#E3FEFF);
rect(425,150,350,900);
fill(#FFE5FB);
rect(775,150,350,900);
//title
textSize(100);
fill(0);
text("Three of a Kind",180,150);


//duck
strokeWeight(2);
//duck feet 
fill(#FF962C);
quad(175,600,190,600,225,675,125,675);
quad(275,600,290,600,350,675,250,675);
//duck arms 
fill(#F7FF29);
arc(150,525,125,175,0,PI+QUARTER_PI,CLOSE);
arc(350,525,125,175,0-QUARTER_PI,PI,CLOSE);
//duck bottom 
fill(#F7FF29);
ellipse(250,500,300,275);
//duck top
fill(#F7FF29);
ellipse(250,350,250,200);
//duck nose 
fill(#FF962C);
triangle(175,400,250,475,325,400); 
//duck eyes 
fill(0);
ellipse(200,350,50,50);
ellipse(300,350,50,50);
fill(0);
ellipse(200,350,40,40);
ellipse(300,350,40,40);
fill(255);
ellipse(205,350,15,15);
ellipse(305,350,15,15);
//duck feet lines 
strokeWeight(1.5);
line(170,650,160,675);
line(190,650,200,675);
line(280,650,270,675);
line(300,650,315,675);

//bird
strokeWeight(2.5);
//bird feet
stroke(0);
line(575,600,575,650);
line(575,650,550,675);
line(575,650,595,675);
stroke(0); 
line(625,600,625,650);
line(625,650,605,675);
line(625,650,650,675);
strokeWeight(2);
//bird bottom 
fill(#A7FFB8);
ellipse(600,500,250,250);
//bird top 
fill(#A7FFB8);
ellipse(600,350,200,200);
//bird arms 
fill(#A7FFB8);
arc(516,525,100,170,0,PI+QUARTER_PI,OPEN);
arc(685,525,100,170,0-QUARTER_PI,PI,OPEN);
//bird eyes 
fill(0);
ellipse(650,350,50,50);
ellipse(550,350,50,50);
fill(0);
ellipse(550,350,40,40);
ellipse(650,350,40,40);
fill(255);
ellipse(550,350,15,15);
ellipse(650,350,15,15);
//bird nose 
fill(#FDFF81);
triangle(575,380,600,415,625,380); 

//penguin
//penguin feet 
fill(#FF962C);
quad(875,600,900,600,925,675,850,675);
quad(950,600,975,600,1005,675,930,675);
//penguin body 
fill(#D5AFFF);
ellipse(925,450,225,350);
fill(255);
ellipse(925,475,150,250);
//penguin eyes 
fill(0);
ellipse(890,350,50,50);
ellipse(970,350,50,50);
fill(0);
ellipse(890,350,40,40);
ellipse(970,350,40,40);
fill(255);
ellipse(890,350,15,15);
ellipse(970,350,15,15);
//penguin nose 
fill(#FF8A31);
triangle(900,380,925,415,950,380); 
//penguin arms 
fill(#D5AFFF);
arc(829,500,45,180,0,PI+QUARTER_PI,OPEN);
arc(1022,500,45,180,0-QUARTER_PI,PI,OPEN);