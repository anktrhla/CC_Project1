
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
  fill(18, 6, 0);
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
  ellipse(725, 450, 125, 290);
  ellipse(775, 450, 125, 290);

  //MAKE PUMPKIN STEM


  //MAKE EYES FOR THE JACK-O-LANTERN
  
  //fill(56, 19, 3);
  
  if (mouseIsPressed) {for (var i = 0; i <= 0; i++) {
  	fill(255);
  }} else {fill(56, 19, 3);}
  triangle(630, 425, 610, 375, 700, 425);
  triangle(865, 425, 885, 375, 795, 425);

  //MAKE SCARY PUMPKIN LAUGH

  //fill(56, 19, 3);
  beginShape(TRIANGLES);

vertex(650, 550);
vertex(610, 450);
vertex(700, 525);

vertex(660, 535);
vertex(670, 465);
vertex(700, 560);

vertex(680, 525);
vertex(700, 485);
vertex(725, 560);

vertex(725, 560);
vertex(700, 485);
vertex(740, 550);

vertex(725, 530);
vertex(740, 485);
vertex(740, 550);

vertex(740, 550);
vertex(740, 485);
vertex(760, 570);

vertex(760, 570);
vertex(740, 510);
vertex(780, 495);

vertex(760, 570);
vertex(760, 510);
vertex(810, 500);

vertex(780, 570);
vertex(760, 510);
vertex(810, 500);

vertex(780, 570);
vertex(810, 500);
vertex(830, 550);

vertex(810, 500);
vertex(840, 465);
vertex(830, 550);

vertex(825, 520);
vertex(840, 465);
vertex(850, 550);

vertex(825, 520);
vertex(885, 435);
vertex(850, 550);
endShape();
  
 
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

  function flicker() {

  	if (keyIsPressed) {
  		fill(255);
  	} else {
  		fill(56, 19, 3);
  	}
  	

  }
}
