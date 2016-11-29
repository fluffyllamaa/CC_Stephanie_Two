//Stephanie Cen 
//Pokemon Data
//
//pokemon csv file found on https://www.kaggle.com/abcsds/pokemon

var table;
var type1 = [];
var Num = [];
var HP = [];
var Attack = [];
var Defense = [];
var SpAttack = [];
var SpDefense = [];
var Speed = [];

//////////////////////////////////////////////////////////////
var type1Pos = 0; //creating global variable to track position in type1 array
//////////////////////////////////////////////////////////////


/*
var HP = []; 
var Attack = []; 
var Defense = []; 
var SpAttack = []; 
var SpDefense = []; 
var Speed = []; 
*/
function preload() {
  //csv file since table is comma separated & has a header
  table = loadTable("Pokemon.csv", "header");
}

function setup() {
  createCanvas(1000, 800);
  //sets up arrayList for the pokemon data. 
  //for (var i = 0; i < table.getRowCount(); i++) {
  for (var i = 0; i < 400; i++) {
    type1[i] = table.getString(i, "Type 1");
    Num[i] = table.getNum(i, "#");
    HP[i] = table.getNum(i, "HP");
    Attack[i] = table.getNum(i, "Attack");
    Defense[i] = table.getNum(i, "Defense");
    SpAttack[i] = table.getNum(i, "Sp. Atk");
    SpDefense[i] = table.getNum(i, "Sp. Def");
    Speed[i] = table.getNum(i, "Speed");
  }

  /*
    
    HP[i] = table.getNum(i, "HP");
    Attack[i] = table.getNum(i, "Attack");
    Defense[i] = table.getNum(i, "Defense");
    SpAttack[i] = table.getNum(i, "Sp. Atk");
    SpDefense[i] = table.getNum(i, "Sp. Def");
    Speed[i] = table.getNum(i, "Speed");
    */

  //console.log(type1);

}

function draw() {
  // var x = Num[i];
  //var y =
    //ellipse(x, y, 50, 50);

  for (var i = 0; i < Num.length; i++) {
      var x = Attack[type1Pos] * 5 + 100 ;
      var y = Defense[type1Pos] * 5 + random(0,100);
  }
  ellipse(x, y, 50, 50);


  /////////////////////////////////////////////////////////////////////////////////
  //removed for loop and replaced local variable "i" with global variable "type1Pos"
  /////////////////////////////////////////////////////////////////////////////////
  if (type1[type1Pos] == "Grass") {
    stroke(0, 255, 0);
    fill(0, 255, 0);
    // ellipse(x, y, 50, 50);
  } else if (type1[type1Pos] == "Fire") {
    stroke(255, 0, 0);
    fill(255, 0, 0);
    // ellipse(x, y, 50, 50);
  } else if (type1[type1Pos] == "Water") {
    stroke(0, 0, 255);
    fill(0, 0, 255);
    // ellipse(x, y, 50, 50);
  } else if (type1[type1Pos] == "Bug") {
    stroke(217, 250, 10);
    fill(217, 250, 10);
    // ellipse(x, y, 50, 50);
  } else if (type1[type1Pos] == "Normal") {
    stroke(227, 227, 227);
    fill(227, 227, 227);
    //  ellipse(x, y, 50, 50);
  } else if (type1[type1Pos] == "Poison") {
    stroke(206, 0, 229);
    fill(206, 0, 229);
    //  ellipse(x, y, 50, 50);
  } else if (type1[type1Pos] == "Electric") {
    stroke(249, 255, 77);
    fill(249, 255, 77);
    // ellipse(x, y, 50, 50);
  } else if (type1[type1Pos] == "Ground") {
    stroke(188, 123, 0);
    fill(188, 123, 0);
    //   ellipse(x, y, 50, 50);
  } else if (type1[type1Pos] == "Fairy") {
    stroke(255, 214, 243);
    fill(255, 214, 243);
    //  ellipse(x, y, 50, 50);
  } else if (type1[type1Pos] == "Fighting") {
    stroke(255, 102, 0);
    fill(255, 102, 0);
    //   ellipse(x, y, 50, 50);
  } else if (type1[type1Pos] == "Physic") {
    stroke(255, 0, 192);
    fill(255, 0, 192);
    // ellipse(x, y, 50, 50);
  } else if (type1[type1Pos] == "Rock") {
    stroke(211, 177, 2);
    fill(211, 177, 2);
    // ellipse(x, y, 50, 50);
  } else if (type1[type1Pos] == "Ghost") {
    stroke(165, 2, 247);
    fill(165, 2, 247);
    //   ellipse(x, y, 50, 50);
  } else if (type1[type1Pos] == "Ice") {
    stroke(183, 252, 255);
    fill(183, 252, 255);
    //    ellipse(x, y, 50, 50);
  } else if (type1[type1Pos] == "Dragon") {
    stroke(202, 70, 255);
    fill(202, 70, 255);
    //    ellipse(x, y, 50, 50);
  } else if (type1[type1Pos] == "Dark") {
    stroke(0);
    fill(0);
    //    ellipse(x, y, 50, 50);
  } else if (type1[type1Pos] == "Steel") {
    stroke(209, 209, 209);
    fill(209, 209, 209);
    //   ellipse(x, y, 50, 50);
  } else if (type1[type1Pos] == "Flying") {
    stroke(191, 255, 255);
    fill(191, 255, 255);
    //   ellipse(x, y, 50, 50);
  }
  //////////////////////////////////////////////////////
  if (type1Pos < type1.length) { //if position has not reached the end of the array
    type1Pos++; //increment the array position for every loop through draw

  }

  //////////////////////////////////////////////////////


}