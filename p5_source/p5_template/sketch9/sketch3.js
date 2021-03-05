
var hr;
 var ftemp,weather;

let sun;
let moon;

function preload() {
  sun = loadImage('sun.png');
  moon = loadImage('moon.png');
}

function setup() {
  background(200);
  //noLoop();
  var url = 'http://api.openweathermap.org/data/2.5/weather?lat=35.6762'+'&lon=139.650'+'&APPID=c08260f7bbef64cc3d13888acb0aa404';  // put your app id here
  loadJSON(url, updateWeather);
  console.log("loading data");
 colorMode(HSB,100);
 noStroke();
}

function draw() {
  let hr = hour();

  createCanvas(windowWidth, windowHeight);
  push();
  colorMode(RGB);
  background(161, 107, 255);
  pop();

  push();
  colorMode(RGB);
  scale(.5);
  translate(width/2 + 370, height/2 - 200);
  if(hr <= 12){
  background(255, 248, 153);
  image(sun,0,0);
} else if (hr > 12) {
  image(moon, 0,0);
  }
  pop();

  push();
  translate(width/2 - 40, height/2 + 100);
  scale(3.0);
  fill(0);
  let h = hour();
  let m = minute();
  text(h + ":"+ m, 0,0);
  pop();

  push();
  noStroke();
  fill(ftemp,255,255);
  rect(width/2 - 130 ,height/2 + 115, 300,50);
  pop();

  push();
  translate(width/2 - 100, height/2 + 150);
    scale(3.0);
    if (!ftemp == 0) {
    fill(255);
    text(weather.name + ": " + ftemp +"°" ,0,0);
   pop();


  }
  for (var i = 70; i < 100; i++) {
    fill(i,255,255);
    rect((i*3)+400,height/2 + 200,100,50);
  }

}

function updateWeather(w) {
  // get the temperture value out of the loaded JSON
  // then convert it as its kelvin (!) back to Farenheit scale
  weather = w;
  console.log(weather);
  ftemp = round((int(weather.main.temp) * (9/5)) + -459.67);
  console.log(ftemp);

}



















// var blob;

// var akey = "22fae7b67e2948ba87a87e7e4154e78c";
// var keywords = "baby";
// var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

// url += '?' + "api-key=" + akey + "&q=" + keywords + "&begin_date=" + "20160101" + "&sort=" + "newest";



// function preload() {

//   blob = loadJSON(url);
//   // this shows the completed url as its sent out
//   // you can use this to put into any json formatter/viewer
//   console.log(url);
// }

// function setup() {

//    createCanvas(800,800);

//     // this shows the whole blob json data package

//     console.log(blob.response.docs);


//    for (var i =0; i < blob.response.docs.length; i++ )  {
//     fill(0,0,200);
//     textSize(16);
//     var headln = blob.response.docs[i].headline.main;
//     text("--->" + headln,50,i*90+12,700,300);
//     ellipse(30,i*90+80,5,5);
//     text("------------------------------------------",50,i*90+80,500,200);
//     fill(20);
//     textSize(13);
//     var lead = blob.response.docs[i].lead_paragraph;
//     var tw = textWidth(lead);
//     //console.log(tw);
//     text(lead,50,i*90+40,600,(tw/600)*300);

//    }



// }



// function draw() {
//   // draw stuff here
// }
