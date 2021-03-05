var hr;
var min;
var sec;

let alice;
let chesireday;
let chesirenight;
let rabbit;


let angle = 0;
var speed = 6;

function preload() {
  alice = loadImage('alice.png');
  chesireday = loadImage('chesireday.png');
  chesirenight = loadImage('chesirenight.png');
  rabbit = loadImage('rabbit.png');
}

function setup() {
createCanvas (800,600);
background(0, 128, 121);
//ellipseMode(CENTER);
rectMode(CENTER);
angleMode(DEGREES);

}

function draw() {
let hr = hour();
let min = minute();
let sec = second();

if(hr <= 12){
morning();
} else if (hr > 12) {
night();
}

push();
translate(-40,-40);
fill(255);
hr = map(hr, 0, 60,0, height);
image(rabbit, 60, hr, 200, 200);
pop();

push();
translate(width/2, height/2);
scale(4.50);
sec = map(sec, 0,150,0, 360); //mins
rotate(sec);
image(alice, 0, 0, 30, 55);  //
pop();

push();
fill(0);
min = map(min, 0, -150, 0, 360);
translate(width/2 + 315, height/2 + 175);
rotate(min);
ellipse(35, 10, 20,20);
pop();
}

function morning() {
  let hr = hour();
  let min = minute();
  let sec = second();

  push();
  colorMode(HSB,200);
  translate(width/2, height/2);
  rotate(angle);
  stroke(random(255, 50));
  strokeWeight(random(10));
  fill(sec,255,200,2,sec);
  ellipse(0,0,100,100);
  rect(0,0, 200, 200);
  rect(0,0, 400,400);
  rect(0,0, 600,600);
  rect(0,0, 800,800);
  angle = angle + 1/2;
  pop();

  push();
  translate(width/2, height/2);
  scale(2.25);
  rotate(-25);
  image(chesireday, 0, 0, width/2 - 100, height/2);
  pop();
}

function night() {
  let hr = hour();
  let min = minute();
  let sec = second();

  push();
  colorMode(HSB,200);
  translate(width/2, height/2);
  rotate(angle);
  stroke(random(0, 50));
  strokeWeight(random(10));
  fill(sec,255,200,2,sec);
  ellipse(0,0,100,100);
  rect(0,0, 200, 200);
  rect(0,0, 400,400);
  rect(0,0, 600,600);
  rect(0,0, 750,800);
  angle = angle + 1/2;
  pop();

  push();
  translate(width/2-55, height/2 + 30);
  scale(2.25);
  rotate(-25);
  image(chesirenight, 0, 0, width/2 - 90, height/2);
  pop();
}
