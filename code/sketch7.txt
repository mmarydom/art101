//the two new functions are: sphear() and WEBGL
var counter = -45;
var counter1 = 45;
function setup() {
  createCanvas(650,650,WEBGL);
  rectMode(CENTER);
  background(20);
  stroke(45, 255, 38);
}

function draw() {
//background(0);
dots();
rotateX(frameCount * 0.07);
rotateY(frameCount * 0.05);
//rabit head
// push();
// translate(width/2, height/2);
// rotate(radians(counter));
// scale(.30);
// ear(50,0);
// ear(-50,0);
// head();
// nose(0, 40);
// eyes(50,-20,true);
// innerear(50,0);
// eyes(-50,-20,false);
// innerear(-50,0);
// pop();

// //bear 1
// push();
//  translate(width/2 + 200, height/2 + 200);
//  rotate(radians(counter1));
//  scale(.20);
//  bearEar(60,0);
//  bearEar(-60,0);
//  bearHead();
//  bearNose(0, 10);
//  bearEyes(50,-20);
//  bearEyes(-50,-20);
//  pop();
//  //bear 2
//  push();
//  translate(width/2 + -200, height/2 + -200);
//  rotate(radians(counter1));
//  scale(.20);
//  bearEar(60,0);
//  bearEar(-60,0);
//  bearHead();
//  bearNose(0, 10);
//  bearEyes(50,-20);
//  bearEyes(-50,-20);
//  pop();
//  //bear 3
//  push();
//  translate(width/2 - 200, height/2 + 200);
//  rotate(radians(counter1));
//  scale(.20);
//  bearEar(60,0);
//  bearEar(-60,0);
//  bearHead();
//  bearNose(0, 10);
//  bearEyes(50,-20);
//  bearEyes(-50,-20);
//  pop();
//  //bear 4
//  push();
//  translate(width/2 + 200, height/2 - 200);
//  rotate(radians(counter1));
//  scale(.20);
//  bearEar(60,0);
//  bearEar(-60,0);
//  bearHead();
//  bearNose(0, 10);
//  bearEyes(50,-20);
//  bearEyes(-50,-20);
//  pop();
  //middle cross
  push();
  translate(width/2, height/2);
  rotate(radians(counter1));
  scale(1.0);
  fill(237, 34, 93);
  sphere(40);
  pop();
  // bottom right cross
  push();
  translate(width/2 + 200 , height/2 + 200);
  rotate(radians(counter));
  scale(.60);
  fill(237, 34, 93);
  rect(0, 0, 70, 20, 5);
  translate(0, 0);
  fill(237, 34, 93);
  rect(0, 0, 20, 70, 5);
  pop();
  //top left cross
  push();
  translate(width/2 - 200 , height/2 - 200);
  rotate(radians(counter));
  scale(.60);
  fill(237, 34, 93);
  rect(0, 0, 70, 20, 5);
  translate(0, 0);
  fill(237, 34, 93);
  rect(0, 0, 20, 70, 5);
  pop();
  //top right corss
  push();
  translate(width/2 + 200 , height/2 - 200);
  rotate(radians(counter));
  scale(.60);
  fill(237, 34, 93);
  rect(0, 0, 70, 20, 5);
  translate(0, 0);
  fill(237, 34, 93);
  rect(0, 0, 20, 70, 5);
  pop();
  //bottom left cross
  push();
  translate(width/2 - 200 , height/2 + 200);
  rotate(radians(counter));
  scale(.60);
  fill(237, 34, 93);
  rect(0, 0, 70, 20, 5);
  translate(0, 0);
  fill(237, 34, 93);
  rect(0, 0, 20, 70, 5);
  pop();
}

// function eyes(var xpos, var ypos, boolean kol ) {
//   if (kol) {
//     fill(0, 255, 255);
//   } else {
//      fill(255, 0,0);
//   }
//   rect(width/2+xpos,height/2 + ypos,30,80);
//   }
//
// function ear(var xpos,var ypos) {
//   fill(255);
//   rect(width/2 + xpos, height/2+ -140 + ypos, 70,150);
// }
//
// function innerear(var xpos,var ypos) {
//   fill(255, 43, 121);
//   rect(width/2+xpos,height/2 - 140 + ypos,27,80);
// }
//
// function nose(var xpos, var ypos){
//   fill(255, 43, 121);
//   rect(width/2 + xpos, height/2 + ypos, 40, 20);
// }
//
// function head(){
// fill(255);
// rect(width/2, height/2, 200,200);
// }
//
// function bearEyes(var xpos, var ypos) {
// fill(255, 0,0);
// ellipse(width/2+xpos,height/2 + ypos,30,30);
// }
//
// function bearEar(var xpos,var ypos) {
//   fill(0);
//   ellipse(width/2 + xpos, height/2+ -100 + ypos, 70,70);
// }
//
// function bearNose(var xpos, var ypos){
//   fill(255, 43, 121);
//   ellipse(width/2 + xpos, height/2 + ypos, 40, 20);
// }
//
//
// function bearHead(){
// fill(0);
// ellipse(width/2, height/2, 200,200);
// }
//
 function dots() {
   var r = random(100);
   for (i = 0; i < r; i++) {
    fill(random(255), random(255), random(255));
    ellipse(random(width), random(height), r+10, r+10);
 }
}
