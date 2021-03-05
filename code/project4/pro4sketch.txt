//for idk

var mgr;

var google;

var blob;

let mySound;
let myMusic;
let song;

let lock;
let home;
let calender;
let camera;
let clock;
let browser;
let insta;
let music;
let phone;
let twit;
let notes;
let gallery;

let helpscreen;

let app1; // home
let app2; // lockbutton
let app3; // calender
let app4; // camera
let app5; // clock
let app6; // google
let app7; // instagram
let app8; // music
let app9; // phone
let app10; // twitter
let app11; // note
let app12; // gallery
let app13; // text

let font,
fontsize = 40;

var clickhome;
var clicklock;
var clickcal;
var clickcam;
var clickclock;
var clickgoogle;
var clickinsta;
var clickmusic;
var clickphone;
var clicktwit;
var clicknote;
var clickgal;
var clicktext;

var text1;
var text2part1;
var text2part2;
var text3;
var text4part1;
var text4part2;
var text5;
var text6;
var text7;
var text8;
var text9part1;
var text9part2;
var text10;
var text11;
var text12;
var text13part1;
var text13part2;
var text14;

var click;
var click1;

let cursor;

function preload() {
     blob = loadJSON("blob.json");

    myMusic = loadSound("sound/maintheme.mp3");
    mySound = loadSound("sound/tap.wav");
    song = loadSound("sound/ZombieHarem.mp3");


     helpscreen  = loadImage('image/help.png');

     lock = loadImage('image/lock.png');
     home = loadImage('image/home.png');
     calender = loadImage('image/calender.png');
     camera = loadImage('image/camera.png');
     clock = loadImage('image/clock.png');
     browser = loadImage('image/google2.png');
     insta = loadImage('image/instagram.png');
     music = loadImage('image/music.png');
     phone = loadImage('image/phone.png');
     twit = loadImage('image/twitter.png');
     notes = loadImage('image/notes.png');
     gallery = loadImage('image/gallery.png');

     app1 = loadImage('image/icons/home.png') // home
     app2 = loadImage('image/icons/lockbutton.png'); // lockbutton
     app3 = loadImage('image/icons/calender.png'); // calender
     app4 = loadImage('image/icons/camera.png'); // camera
     app5 = loadImage('image/icons/clock.png'); // clock
     app6 = loadImage('image/icons/browser.png'); // google
     app7 = loadImage('image/icons/instagram.png'); // instagram
     app8 = loadImage('image/icons/music.png'); // music
     app9 = loadImage('image/icons/phone.png'); // phone
     app10 = loadImage('image/icons/twitter.png'); // twitter
     app11 = loadImage('image/icons/notes.png'); // note
     app12 = loadImage('image/icons/gallery.png'); // gallery
     app13 = loadImage('image/icons/text.png'); // text

     text1 = loadImage('image/text/text1.png');
     text2part1 = loadImage('image/text/text2part1.png');
     text2part2 = loadImage('image/text/text2part2.png');
     text3 = loadImage('image/text/text3.png');
     text4part1 = loadImage('image/text/text4part1.png');
     text4part2 = loadImage('image/text/text4part2.png');
     text5 = loadImage('image/text/text5.png');
     text6 = loadImage('image/text/text6.png');
     text7 = loadImage('image/text/text7.png');
     text8 = loadImage('image/text/text8.png');
     text9part1 = loadImage('image/text/text9part1.png');
     text9part2 = loadImage('image/text/text9part2.png');
     text10 = loadImage('image/text/text10.png');
     text11 = loadImage('image/text/text11.png');
     text12 = loadImage('image/text/text12.png');
     text13part1 = loadImage('image/text/text13part1.png');
     text13part2 = loadImage('image/text/text13part2.png');
     text14 = loadImage('image/text/text14.png');

     cursor = loadImage('image/finger.png');

}

function setup()
{
      masterVolume(0.05);
     myMusic.play();
    createCanvas(windowWidth, windowHeight);

    mgr = new SceneManager();

    google = createSprite(0, 0);
    google.addAnimation("on", "image/google1.png","image/google1.png",
    "image/google1.png","image/google1.png","image/google2.png",
    "image/google2.png","image/google2.png","image/google2.png");


    // Preload scenes. Preloading is normally optional
    // ... but needed if showNextScene() is used.
    mgr.addScene ( help );
    mgr.addScene ( part1 );
    mgr.addScene ( part2 );
    mgr.addScene ( part3 );
    mgr.addScene ( part4 );
    mgr.addScene ( part5 );
    mgr.addScene ( part6 );
    mgr.addScene ( part7 );
    mgr.addScene ( part8 );
    mgr.addScene ( part9 );
    mgr.addScene ( part10 );
    mgr.addScene ( part11 );
    mgr.addScene ( part12 );

    mgr.addScene ( help );

    mgr.addScene ( scene1 );
    mgr.addScene ( scene2part1 );
     mgr.addScene ( scene2part2 );
    mgr.addScene ( scene3 );
    mgr.addScene ( scene4part1 );
    mgr.addScene ( scene4part2 );
    mgr.addScene ( scene5 );
    mgr.addScene ( scene6 );
    mgr.addScene ( scene7 );
    mgr.addScene ( scene8 );
    mgr.addScene ( scene9part1 );
    mgr.addScene ( scene9part2 );
    mgr.addScene ( scene10 );
    mgr.addScene ( scene11 );
    mgr.addScene ( scene12 );
    mgr.addScene ( scene13part1 );
    mgr.addScene ( scene13part2 );
    mgr.addScene ( scene14 );
    mgr.showNextScene();



      noCursor();


}

function draw()
{
    mgr.draw();
    updateToon(blob.toons[0]);  // Natasha
    updateToon(blob.toons[1]);  // Boris
    updateToon(blob.toons[2]);
    updateToon(blob.toons[3]);  // Natasha
    updateToon(blob.toons[4]);  // Boris
    updateToon(blob.toons[5]); // Natasha
    image(cursor, mouseX, mouseY, 200, 200);


}

function mousePressed(){
mySound.play();
mgr.mousePressed();
}

function updateToon(obj) {

      push();

      if ( int(random(10)) > 8) {
       obj.nextX = int(random(obj.moveX.length));
       obj.nextY = int(random(obj.moveY.length));
      }

      obj.posX += obj.moveX[obj.nextX];
      obj.posY += obj.moveY[obj.nextY];


      // console.log(obj.posX);

       if (obj.posX > width) {
         obj.posX = 0;
       }

       if (obj.posX < 0) {
         obj.posX = width;
       }

       if (obj.posY > height) {
         obj.posY = 0;
       }

       if (obj.posY < 0) {
         obj.posY = height;
       }

       drawToon(obj);

      pop();


}



function drawToon( obj) {

    //  console.log(obj.posX[s]);

    push();
    translate(obj.posX, obj.posY);
        for (var i = 0; i < obj.shape.length; i++)
        {
                for (var j = 0; j < obj.shape.length; j++)
                {
                  a = obj.shape[i][j];
                      if (a === 1) {
                        fill(255, 120, 201);
                      }else if (a === 2){ //0
                        fill(38, 215, 255);
                      }else if (a === 3){ //0
                        fill(255, 25, 25);
                      }else if (a === 4){ //0
                        fill(252, 244, 3);
                      }else {
                        fill(48, 48, 69, 0);
                       }
          noStroke();
          rect((j * 8) + 15, (i * 8) - 15, 10, 10);
          }
      }
      pop();

      push();
        translate(obj.posX , obj.posY);
      pop();

}



function keyPressed()
{
    // You can optionaly handle the key press at global level...
    switch(key)
    {
        case '1':
            mgr.showScene( help );
            break;
    }

    // ... then dispatch via the SceneManager.
    mgr.keyPressed();
}
