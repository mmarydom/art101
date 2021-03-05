   var gridarr =
   [
       [0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0],
       [0,0,0,0,0,1,1,1,2,3,3,2,1,1,1,0,0,0,0,0],
       [0,0,0,0,1,1,3,4,4,4,4,4,4,3,1,1,0,0,0,0],
       [0,0,0,1,1,5,4,4,4,4,4,4,4,4,4,2,1,0,0,0],
       [0,0,0,1,3,4,4,4,4,2,3,4,2,3,4,4,1,0,0,0],
       [0,0,1,1,4,4,4,4,4,6,2,4,6,2,4,4,2,1,0,0],
       [0,1,1,3,4,4,4,4,4,2,1,4,2,1,4,4,3,1,0,0],
       [0,1,3,4,4,4,4,4,4,3,1,4,3,1,4,4,4,1,1,0],
       [1,2,4,4,4,4,4,7,7,5,1,4,5,1,7,4,4,4,2,1],
       [1,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,1],
       [1,5,4,4,5,4,4,4,4,4,4,4,2,4,4,4,4,5,5,1],
       [1,2,5,5,5,5,4,4,4,4,4,4,4,4,4,4,3,3,2,1],
       [0,1,1,2,3,5,5,4,4,4,4,4,4,4,4,4,2,2,1,0],
       [0,0,1,8,8,3,5,5,5,4,4,4,5,5,5,8,8,1,0,0],
       [0,1,7,6,7,7,7,3,5,5,5,5,5,5,8,7,7,7,1,0],
       [1,2,7,7,7,7,7,2,3,5,5,5,3,2,8,7,7,7,2,1],
       [1,2,8,8,8,8,8,2,2,1,1,2,2,2,8,8,8,8,2,1],
       [0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0]
     ];

     var wordarr =
       [
         ["zero","zero","zero","zero","zero","zero","zero","meta","meta","meta","meta","meta","meta","zero","zero","zero","zero","zero","zero","zero"],
         ["zero","zero","zero","zero","zero","meta","meta","meta","hands","kracko","kracko","hands","meta","meta","meta","zero","zero","zero","zero","zero"],
         ["zero","zero","zero","zero","meta","meta","kracko","kracko","kirby","kirby","kirby","kirby","kirby","dedede","meta","meta","zero","zero","zero","zero"],
         ["zero","zero","zero","meta","meta","kracko","kirby","kirby","kirby","kirby","kirby","kirby","kirby","kirby","dedede","meta","meta","zero","zero","zero"],
         ["zero","zero","zero","meta","kracko,kirby","kirby","kirby","kirby","hands","ufo","kirby","hands","ufo","kirby","kirby","meta","zero","zero","zero"],
         ["zero","zero","meta","meta","kirby,kirby","kirby","kirby","kirby","waddledee","dedede","kirby","waddledee","dedede","kirby","kirby","hands","meta","zero","zero"],
         ["zero","meta","meta","kracko","kirby,kirby","kirby","kirby","kirby","hands","meta","kirby","hands","meta","kirby","kirby","kirby","meta","meta","zero"],
         ["zero","meta","meta","kracko","kirby,kracko","kracko","kirby","kirby","ufo","meta","kirby","ufo","meta","kirby","kirby","kirby","meta","meta","zero"],
         ["meta","dedede","kirby","dedede","dedede","dedede","dedede","dedede","ufo","ufo","kirby","meta","kirby","kirby","meta","ufo","dedede","dedede","dedede","meta"],
         ["meta","kirby","hands","dedede","parasol","waddledee","parasol","dedede","kirby","kirby","kirby","kirby","kirby","kirby","kirby","dedede","parasol","parasol","parasol","meta"],
         ["meta","kracko","dedede","parasol","parasol","parasol","parasol","dedede","kirby","kirby","kirby","kirby","kracko","kirby","kirby","dedede","parasol","parasol","parasol","meta"],
         ["meta","hands","dedede","parasol","parasol","parasol","parasol","parasol","kirby","kirby","kirby","kirby","kirby","kirby","kirby","dedede","parasol","parasol","parasol","meta"],
         ["zero","meta","meta","parasol","parasol","parasol","parasol","parasol","dedede","kirby","kirby","kirby","kirby","kirby","dedede","parasol","parasol","parasol","parasol","meta"],
         ["zero","zero","meta","dedede","parasol","parasol","parasol","parasol","dedede","kirby","kirby","kirby","kirby","dedede","parasol","parasol","parasol","parasol","meta","zero"],
         ["zero","zero","zero","meta","dedede","parasol","parasol","dedede","meta","kirby","kirby","kirby","kirby","kirby","meta","parasol","parasol","parasol","meta","zero"],
         ["zero","zero","zero","zero","meta","meta","meta","meta","meta","meta","meta","meta","meta","meta","meta","meta","meta","meta","zero","zero"]
       ];

  function setup()
  {
    createCanvas(800, 800);
    background(3, 252, 211);

    push();
    translate (0,50)
    scale(1.6);
    noStroke();
    drawArray();
    pop();

    push();
    translate (370,750)
    rotate(radians(180));
    scale(1.6);
    colorMode(HSB);
    noStroke();
    drawArray();
    pop();

     push();
     translate (750,50)
     scale(-1.6,1.6);
    colorMode(HSB);
     noStroke();
     drawWordArr();
     pop();

     push();
     translate (370,750)
     rotate(radians(180));
     scale(-1.6,1.6);
     noStroke();
     drawWordArr();
     pop();



  }

  function drawArray() {
    for (var i = 0; i < 18; i++)
    {
      for (var j = 0; j < 20; j++)
      {
        a = gridarr[i][j];
        if (a === 1)
        {
          fill(33, 31, 29);
        }

        else if (a==2)
        {
          fill(180, 2, 44);
        }

        else if (a==3)
        {
          fill(220, 74, 116);
        }

        else if (a==4)
        {
          fill(252, 162, 221);
        }

        else if (a==5)
        {
          fill(224, 114, 164);
        }

        else if (a==6)
        {
          fill(255);
        }

        else if (a==7)
        {
          fill(255, 20, 145);
        }

        else if (a==8)
        {
          fill(212, 2, 82);
        }
        else
        {
          fill(48, 48, 69, 0);
        }
         rect((j * 10) + 15, (i * 10) + 15, 10, 10);
      }
    }
  }


  function drawWordArr() {
    for (var i = 0; i < 16; i++)
    {
      for (var j = 0; j < 20; j++)
      {
        b = wordarr[i][j];
        if (b == "meta")
        {
          fill(33, 31, 29);
          text(b, (j * 11), (i * 11), 2);
        }

         else if (b == "dedede")
        {
          fill(53,82,0);
                    text(b, (j * 11), (i * 11), 2);
        }

        else if (b == "hands")
        {
          fill(83,128,0);
                    text(b, (j * 11), (i * 11), 2);
        }

        else if (b=="kirby")
        {
          fill(150,230,0);
                    text(b, (j * 11), (i * 11), 2);
        }

        else if (b=="kracko")
        {
          fill(109,145,43);
                    text(b, (j * 11), (i * 11), 2);
        }

        else if (b=="waddledee")
        {
          fill(255);
                    text(b, (j * 11), (i * 11), 2);
        }

        else if (b=="ufo")
        {
          fill(112,173,0);
                    text(b, (j * 11), (i * 11), 2);
        }

        else if (b=="parasol")
        {
          fill(45,92,1);
                    text(b, (j * 11), (i * 11), 2);
        }

        else
        {
          fill(48, 48, 69, 0);
                    text(b, (j * 11), (i * 11), 2);
        }
    //    rect((j * 10) + 15, (i * 10) + 15, 10, 10);
      }
    }
}
