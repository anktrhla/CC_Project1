/*
Since it's Halloween time right around the corner, I picked up the adjective "SCARY"!

It will be making a typical Halloween landscape with an interactive Jack-o-Lantern, with bats and ghosts roaming around in the background
There will also be background halloween theme music.
*/

//global variables

var Y_AXIS = 1;
var X_AXIS = 2;
var b1, b2;
var batX;
var batY;
var audioDracula;
var audioWitch;
var bat = [];


function setup() {
  createCanvas(windowWidth, windowHeight);

  // Define colors to set the background
  // gradient for the night sky
  b1 = color(0, 4, 50); //midnight blue
  b2 = color(0); //black
  bat.push(new bats(batX, batY));


// Load sound into the sketch
  // audioDracula = loadSound("dracula_theme.mp3", loadedDracula);
  // audioWitch = loadSound("witches_potion.mp3", loadedWitch);
  
}

function draw() {
  // call background gradient function
  setGradient(0, 0, width, height, b2, b1, Y_AXIS);
  fill(18, 6, 0); // brown color for ground
  rect(0, 500, windowWidth, 250); //ground


// Create bats moving in a sine wave pattern 
 //  	batX += 5;
	// batY += 5;

	// bats(batX, batY);

	for (var i = 0; i < bat.length; i++) { //initiate a for loop to display bats and move them

		bat[i].move();
		bat[i].display();

	}

  //MAKE A JACK-O-LANTERN
  noStroke();
  fill(125, 61, 6); //pumpkin layer 1; dark orange
  ellipse(575, 450, 100, 200);
  ellipse(925, 450, 100, 200);

  fill(184, 90, 9); //pumpkin layer 2; mildly dark orange
  ellipse(610, 450, 100, 250);
  ellipse(890, 450, 100, 250);

  fill(207, 101, 10); //pumpkin layer 3; orange
  ellipse(640, 450, 100, 275);
  ellipse(860, 450, 100, 275);

  fill(219, 108, 11); //pumpkin layer 4; lighter orange
  ellipse(670, 450, 100, 285);
  ellipse(830, 450, 100, 285);

  fill(232, 114, 12); //pumpkin layer 5; even lighter orange
  ellipse(725, 450, 125, 290);
  ellipse(775, 450, 125, 290);

  //MAKE EYE SLOTS FOR THE JACK-O-LANTERN
  
  fill(56, 19, 3); //set color for eyes and laugh; really dark orange

  if (mouseIsPressed) { // candle flickering
  						// in the eye slots and the evil laugh when the mouse button or a key is pressed
  	fill(255, 176, 13); // color: Yellow

  }

  if (keyIsPressed) { // candle flickering
  						// in the eye slots and the evil laugh when the mouse button or a key is pressed
  	fill(255, 135, 13); // color: Light Orange

  }

  triangle(630, 425, 610, 375, 700, 425); // left eye
  triangle(865, 425, 885, 375, 795, 425); // right eye

  //MAKE SCARY PUMPKIN LAUGH

// make triangles for creating the evil laugh
// which can be known as a single shape to fill in
// the candle flicker.

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


// Create gradient function to generate the background

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
      var c = lerpColor(c1, c2, inter); // using linear interpolation
      stroke(c);
      line(i, y, i, y+h);
    }
  }
}

// make a function to load sound in the backgound (NOT WORKING; TO DO: FIX IT!!!)

// fucntion loadedDracula () {

// 	audioDracula.loop(); //loop the song through the entire time the sketch is being played.
// }


// make bats function to invoke bats on the background

function bats(x, y) {

	this.x = sin(x);
	this.y = y;

	this.display = function () {
		fill(51);	
		noStroke();
		ellipse(this.x, this.y, 20, 40);
	}

	this.move = function () {

		this.x = this.x + 50;
		this.y = this.y + 50;
	}
}

