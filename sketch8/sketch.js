var blob;

       /*
        // sample example
    var sampletoon = {
       "name":"Boris",
       "r":200,
       "g":160,
       "b":200,
       "head": 60,
       "torso": 33,
       "posX":50,
       "posY":90,
       "moveX":[5,-3,4,-6,-3,3,4,-2],
       "moveY":[2,4,4,6,-3,3,4,-2]
        }
        */


var a = 0;
var textTime = 0;
var t = 0;
var sx = 0;
var sy = 0;
var stars = [];


function preload() {
  blob = loadJSON("mary.json");
}

function setup() {
   createCanvas(600,600);
   background(0);
   rectMode(CENTER);

   for (var i = 0; i <200; i++) {
     stars[i] = new Star();
   }

     // this shows the whole blob json data package
   console.log(blob);
   noStroke();


}



function draw() {
  background(130, 0, 56);
  updateToon(blob.toons[0]);  // ladybug
  updateToon(blob.toons[1]);  // Earth

}

function updateToon(obj) {

      push();

      if ( int(random(15)) > 8) {
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


function drawToon(obj) {

    //  console.log(obj.posX[s]);
    for (var i = 0; i < stars.length; i++) {
  		stars[i].draw();
  	}


push();
translate(obj.posX, obj.posY);
    for (var i = 0; i < obj.shape.length; i++)
    {
            for (var j = 0; j < obj.shape.length; j++)
            {
              a = obj.shape[i][j];
                  if (a === 1) {
                    fill(255, 120, 201);
                  } else if (a === 2) {
                    fill(122, 144, 255);
                  } else if (a === 3) {
                    fill(0);
                  } else if (a === 4) {
                    fill(255, 205, 210);
                  } else if (a === 5) {
                    fill(233, 30, 98);
                  } else if (a === 6) {
                    fill(239, 154, 154);
                  } else { //0
                    fill(48, 48, 69, 0);
                   }
      noStroke();
      rect((j * 8) + 15, (i * 8) - 15, 10, 10);


    }
  }
    pop();

  push();
      translate(obj.posX, obj.posY);

scale(obj.size);

      fill(255);
      textSize(15);
       text(obj.language[t],-25,-30);
       if (millis() - textTime > 1550) {
           t++;
           textTime = millis();

           if (t > obj.language.length - 1){
             t = 0;
           }
         }

        // eyes
        noStroke();
        fill(20);
        ellipse(13,-2,2.5,2.5); //left eye
        ellipse(18,-2,2.5,2.5); //right eye

      // attackmode
      if (obj.attack == 10)   //attackearth
       {

         fill(obj.r-33,obj.g-112,obj.b-136,obj.glow); //138,60,28
         ellipse(23,30,obj.attack,obj.attack);

       }

       if (obj.attack == 30)   //attackladybug
        {

          fill(obj.r-43,obj.g+72,obj.b+19, obj.glow); //195,125,54
          ellipse(-10,-10,obj.attack,obj.attack);

        }

      //rotatename
        angleMode(DEGREES);
        rotate(obj.rotate);
       //name
        fill(255);
        textSize(10);
        text(obj.name,0,-20);

    pop();


}

class Star {
	constructor() {
		this.x = random(width);
		this.y = random(height);
		this.size = random(0.25, 3);
		this.t = random(TAU);
	}

	draw() {
		this.t += 0.8;
		var scale = this.size + sin(this.t) * 1;
		noStroke();
		ellipse(this.x, this.y, scale, scale);
	}

}
