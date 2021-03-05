var mgr;

var mofu;

let mySound;
  var glitch;

let img;

function preload() {
  mySound = loadSound('sound/zap.mp3');
  music = loadSound('sound/yoshi.mp3');
}

function setup()
{
    createCanvas(windowWidth, windowHeight);
    img = loadImage('image/kirb.png')
    mgr = new SceneManager();

    mofu = createSprite(0, 0);
    mofu.addAnimation("normal", "image/sit1.png",  "image/sit2.png", "image/sit3.png", "image/sit4.png");
    mofu.addAnimation("stand", "image/stand1.png",  "image/stand2.png");
    mofu.addAnimation("random", "image/shinji.png");
    mofu.addAnimation("random1", "image/ramiel.png");

    // Preload scenes. Preloading is normally optional
    // ... but needed if showNextScene() is used.
    mgr.addScene ( Animation1 );
    mgr.addScene ( Animation2 );
    mgr.addScene ( Animation3 );
    mgr.addScene ( Animation4 );
    mgr.showNextScene();
}

function draw()
{
    mgr.draw();
}

function mousePressed(){
var s = createSprite(mouseX, mouseY, 30, 30);
s.velocity.x = random(-5, 5);
s.velocity.y = random(-5, 5);
mySound.play();
}

function keyPressed()
{
    // You can optionaly handle the key press at global level...
    switch(key)
    {
        case '1':
            mgr.showScene( Animation1 );
            break;
        case '2':
            mgr.showScene( Animation2 );
            break;
        case '3':
            mgr.showScene( Animation3 );
            break;
        case '4':
            mgr.showScene( Animation4 );
            break;
    }

    // ... then dispatch via the SceneManager.
    mgr.handleEvent("keyPressed");
}
