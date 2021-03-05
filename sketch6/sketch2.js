
let b;
let b2;
var value = 0;
var gSize = 70;
var tCounter = 0;
//let font;
// fontsize = 52;
function preload() {
  b = loadImage('image1.jpg');
  b2 = loadImage('image2.jpg');
//  font = loadFont("Stencil");
}

function setup() {
  createCanvas(800, 800);
  noStroke();

  //textFont(font);
//  fill(0, 255, 0);
//  textSize(fontsize);
  //textAlign(100, 100);
}

function draw() {
  background(255, 228, 23 - value);
  ellipse(mouseX, mouseY, 10, 10);
  fill(25,60,240);
  noCursor();


 fill(value);
 ellipse(width/2 + -200, height/2 +-200 , 150, 150);
 ellipse(width/2 + 200, height/2 +-200 , 150, 150);
 ellipse(width/2 + -200, height/2 +200 , 150, 150);
 ellipse(width/2 + 200, height/2 +200 , 150, 150);

 if (mouseIsPressed) {
   noTint();
   image(b, 0, 0, width/2, height/2);
   image(b2, width/2, height/2, width/2, height/2);
   filter(POSTERIZE, 3);
 } else {
   var checkCounter = 0;
    for ( var i = 0; i < height; i+= gSize) {
      checkCounter++;
     for ( var j = 0; j < width; j+=(gSize) ) {
       // mod operator  %
       if ( (checkCounter % 2) == 0 ) {
        image(b2, j, i, gSize, gSize);
        filter(POSTERIZE, 3);
        } else {
        tint(255, 40);  // Apply transparency without changing color
        image(b, j, i, gSize, gSize);
        filter(POSTERIZE, 3);
         }
         checkCounter++;
          }
           print(mouseIsPressed);
           }
         }

  //function keyPressed() {

  //if ( key == 'b' || key == 'B' ) {
    // example of toggle logic
  //  if (value == 0) {
  //    value = 255;
  //  } else {
  //    value = 0;
  //  }
//  }
  }
