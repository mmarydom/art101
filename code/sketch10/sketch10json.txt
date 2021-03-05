

// =============================================================
// =                         BEGIN SCENES                      =
// =============================================================

function Animation1()
{
  this.setup = function() {
    mofu.position.x++;
  }

  this.enter = function()
  {
    mofu.position.x = width/2;
    mofu.position.y = height/2;
    mofu.changeAnimation("random1");

    mofu.onMouseOver = function() {
      this.changeAnimation("random1");
      this.position.x = width/2;
      this.position.y = height/2;
    }

    mofu.onMouseOut = function() {
      this.changeAnimation("random1");
      this.position.x++ ;
      this.position.y++;

    }
  }

  this.draw = function()
  {
      background(145, 255, 147);

       drawSprites();

  }



this.keyPressed = function()
{

if ( !music.isPlaying() ) {
       music.play();
     }
}

this.mousePressed = function()
{
    this.sceneManager.showNextScene();
}
}



///////////////////////////////////////////////////



function Animation2()
{
  this.oAnim1 = null;
}

Animation2.prototype.setup = function()
{
  // access a different scene using the SceneManager
  oAnim1 = this.sceneManager.findScene( Animation2 );
}

Animation2.prototype.draw = function()
{
  background("lightblue");

  var r = sin( frameCount * 0.01 );

  fill("white");
  noStroke();
  image(img, width/2, height/2 - 300, map(r, 0, 1, 0, 500) );

  if ( oAnim1 != null )
  {
      fill("black");
      textAlign(LEFT);
      text( "Scene1 y: " + oAnim1.oScene.y, 10, height - 20);
  }
}

Animation2.prototype.mousePressed = function()
{
  this.sceneManager.showNextScene();
}


// When defining scenes, you can also
// put the setup, draw, etc. methods on prototype


///////////////////////////////////////////////////////////


function Animation3( )
{
  var textX;
  var textY;


  // enter() will be executed each time the SceneManager switches
  // to this animation
  // Note: Animation1() doesn't have setup() or draw()

  this.setup = function() {
    mofu.position.x++;
  }

  this.enter = function()
  {
    mofu.position.x = width/2;
    mofu.position.y = height/2;
    mofu.changeAnimation("normal");

    mofu.onMouseOver = function() {
      this.changeAnimation("stand");
      this.position.x = width/2;
      this.position.y = height/2;
    }

    mofu.onMouseOut = function() {

      console.log("out");
      this.changeAnimation("stand");
      this.position.x++ ;
      this.position.y++;
    }
  }


    this.draw = function()
    {
        background(255, 166, 181);

        drawSprites();

    }



  this.keyPressed = function()
  {
      text(keyCode, textX, textY += 10);
      if ( textY > height )
      {
          textX += 20;
          textY = 0;
      }
  if ( !music.isPlaying() ) {
         music.play();
       }
  }

  this.mousePressed = function()
  {
      this.sceneManager.showNextScene();
  }
}


///////////////////////////////////////////////////



function Animation4( )
{
  this.setup = function() {
    mofu.position.x++;
  }

  this.enter = function()
  {
    mofu.position.x = width/2;
    mofu.position.y = height/2;
    mofu.changeAnimation("random");

    mofu.onMouseOver = function() {
      this.changeAnimation("random");
      this.position.x = width/2;
      this.position.y = height/2;
      this.rotation -= 10;
    }

    mofu.onMouseOut = function() {
      this.changeAnimation("random");
      this.position.x++ ;
      this.position.y++;

    }
  }


    this.draw = function()
    {
        background(240, 255, 130);

        drawSprites();

    }



    this.keyPressed = function()
    {
        text(keyCode, textX, textY += 10);
        if ( textY > height )
        {
            textX += 20;
            textY = 0;
        }
    if ( !music.isPlaying() ) {
           music.play();
         }
    }


    this.mousePressed = function()
    {
        this.sceneManager.showNextScene();
    }
}
