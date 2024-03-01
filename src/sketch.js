function setup() {
  // These lines are fitting our canvas
  // where we want in the DOM
  // so that we can manipulate its style
  // easier
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("canvas-parent");
}

function draw() {
  background(220);
  drawBackground();
  drawFish();
  drawButterfly(10, 10, 0.05);
}

function drawBackground() {
  background(194,229,255);
  //clouds
  ellipse(50,50,150,70);
  fill(255);
  stroke(255);
  
  ellipse(320,200,150,50);
  fill(255);
  stroke(255);
  
  ellipse(300,50,120,50);
  fill(255);
  stroke(255);
  
  ellipse(50,200,130,50);
  fill(255);
  stroke(255);
  
  ellipse(50,300,80,40);
  fill(255);
  stroke(255);
  
  ellipse(350,300,150,50);
  fill(255);
  stroke(255);
  
  ellipse(270,130,60,30);
  fill(255);
  stroke(255);
  
  ellipse(100,150,60,30);
  fill(255);
  stroke(255);
  
  ellipse(320,390,80,60);
  fill(255);
  stroke(255);
  
  ellipse(70,370,50,30);
  fill(255);
  stroke(255);
}

function drawFish() {
  push();

  translate(100,200);
  
  scale(25);
  stroke(0);
  strokeWeight(1/25);
  line(0,0, 4,-2.5);
  fill(255,179,1);
  beginShape();
  vertex(4,-2.5);
  vertex(3,-2);
  vertex(5,-1);
  vertex(7,-1);
  vertex(9,-2);
  vertex(10,-3); // tail point
  vertex(9,-4);
  vertex(7,-5);
  vertex(5,-5);
  vertex(3,-4);
 // vertex()
  endShape(CLOSE)
 
  // tail
  fill(255,179,1);
  triangle(10,-3, 13, -5, 13,-1);
 
   // eye
  fill(0,255,0);
  stroke(255);
  strokeWeight(3/25);
  circle(4.5,-3.5,.7);
  
  pop();

}

function drawButterfly(x, y, s) {
  // butterfly
  push();
  translate(x, y);
  scale(s);

  // --------- BACK WING ----------
  fill(9, 40, 153);
  beginShape();
  curveVertex(-300, -90); // guide
  curveVertex(-250, -100); // left top bump
  curveVertex(-175, -95); // valley
  curveVertex(-90, -125); // top right
  //curveVertex(-50, -55);
  curveVertex(0, 0); // origin
  curveVertex(-100, 3); // bottom
  curveVertex(-250, -100); // left again
  curveVertex(-255, -200); // guide
  endShape();

  fill(34, 150, 230, 100); // purple
  ellipse(-100, -50, 80, 80);
  ellipse(-100, -50, 100, 100);

  // --------- FRONT WING ----------
  fill(34, 150, 230); // light blue
  stroke(14, 96, 153); // darker blue green
  //strokeWeight(10);
  beginShape();
  curveVertex(-75, -145); // guide
  curveVertex(0, -140); // careful which start point
  curveVertex(75, -145); // top right bump
  curveVertex(0, 0); // bottom point
  curveVertex(-75, -145); // left top bump
  curveVertex(0, -140); // valley
  curveVertex(75, -145); // guide
  endShape();

  fill(107, 0, 230, 100); // purple
  ellipse(0, -30, 30, 55);
  ellipse(0, -40, 40, 75);

  // --------- HEAD ----------
  push();
  translate(100, -35);
  rotate(PI / 3);
  fill(107, 0, 230, 100); // purple
  noStroke();
  // head
  ellipse(0, 0, 20, 40);
  ellipse(0, 0, 30, 50);
  stroke(107, 0, 230, 100);
  strokeWeight(10);
  line(0, 60, 0, 210);
  noStroke();
  // chest
  translate(0, 60);
  ellipse(0, 0, 20, 50);
  // back
  translate(0, 150);
  ellipse(0, 0, 20, 40);
  pop();

  pop();
}
