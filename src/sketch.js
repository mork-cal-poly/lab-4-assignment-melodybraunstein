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


