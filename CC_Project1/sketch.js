// //global variables
// var xAxis = 1;
// var yAxis = 2;
// var blue, black;

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   // background(0, 6, 36);
//   blue = color(0 ,4, 28);
//   black = color(0);

// }

// function draw() {
// 	fill(25, 8, 1);
// 	rect(0, 500, windowWidth, 250);

// 	setGradient(0, 0, width, height, blue, black, yAxis);

  
// }

// function gradient (x, y w, h, blue, black, axis) {

// nofill();

// if (axis == yAxis) {

// for (var i = y; i <= y+h, i++) {

// 	var inter = map(i, y, y+h, 0, 1);
// 	var c = lerpColor(blue, black, inter);
// 	stroke(c);
// 	line(x, i, x+w, i);
// 		}
// 	}

// else if (axis == xAxis) {

// for (var i = x; i<= x+w; i++) {

// 	var inter = map(i, x, x+w, 0, 1);
// 	var c = lerpColor(blue, black, inter);
// 	stroke(c);
// 	line(i, y, i, y+h);
// 		}
// 	}


// }
var Y_AXIS = 1;
var X_AXIS = 2;
var b1, b2, c1, c2;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Define colors
  b1 = color(0, 4, 50);
  b2 = color(0);
  c1 = color(204, 102, 0);
  c2 = color(0, 102, 153);

  noLoop();
}

function draw() {
  // Background
  setGradient(0, 0, width, height, b2, b1, Y_AXIS);
  // setGradient(width/2, 0, width/2, height, b2, b1, X_AXIS);
  // Foreground
  // setGradient(50, 90, 540, 80, c1, c2, Y_AXIS);
  // setGradient(50, 190, 540, 80, c2, c1, X_AXIS);
  fill(25, 8, 1);
  rect(0, 500, windowWidth, 250);

  //MAKE A JACK-O-LANTERN
  noStroke();
  fill(125, 61, 6); //pumpkin layer 1
  ellipse(575, 450, 100, 200);
  ellipse(925, 450, 100, 200);

  fill(184, 90, 9); //pumpkin layer 2
  ellipse(610, 450, 100, 250);
  ellipse(890, 450, 100, 250);

  fill(207, 101, 10); //pumpkin layer 3
  ellipse(640, 450, 100, 275);
  ellipse(860, 450, 100, 275);

  fill(219, 108, 11); //pumpkin layer 3
  ellipse(670, 450, 100, 285);
  ellipse(830, 450, 100, 285);

  fill(232, 114, 12); //pumpkin layer 3
  ellipse(750, 450, 225, 300);

  //MAKE EYES FOR THE JACK-O-LANTERN
  
  fill(0);
  curve(650,550,635,577,645,608,570,598);
}

function setGradient(x, y, w, h, c1, c2, axis) {

  noFill();

  if (axis == Y_AXIS) {  // Top to bottom gradient
    for (var i = y; i <= y+h; i++) {
      var inter = map(i, y, y+h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x+w, i);
    }
  }  
  else if (axis == X_AXIS) {  // Left to right gradient
    for (var i = x; i <= x+w; i++) {
      var inter = map(i, x, x+w, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y+h);
    }
  }
}