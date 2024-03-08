let clicked = false;
let sBird = 1/2;
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
  drawBird();
  if (clicked) {
    sBird = sBird + .01;
  }
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

  //translate(100,200);
  //angleMode(DEGREES);    
  //rotate(PI/4);
  
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

function drawBird() {
  push();
     
      translate(100,250);
      scale(sBird);
    
      //tail
      fill(255,0,0);
      stroke(87,176,242);
      strokeWeight(2);
      triangle(-20,20,-20,-20,-160,0); // clockwise rotation
    
      //small tail
      fill(47,226,250);
      stroke(255,255,255);
      strokeWeight(1.5);
      triangle(-20,15,-20,-15,-70,0);
    
      //head
      fill(255,0,0);
      stroke(243,91,35);
      strokeWeight(2);
      ellipse(40,0,60,40);
    
      //face
      fill(250,243,220);
      stroke(0,0,0);
      strokeWeight(1.5);
      ellipse(55,0,30,30);
    
      //eyes
      fill (0,0,0);
      stroke(0,0,0);
      strokeWeight(1);
      ellipse(52,-5,5,5);
    
      //stomach
      fill(0,100,155);
      stroke(0,100,155);
      strokeWeight(1);   
      rect(-20,-15,30); // the values confuse me, is the -20 the left side of square and -15 the right side? is it centerd around 0,0 
    
      //lower wing
      fill(0,100,155);
      stroke(50,100,250);
      strokeWeight(2);
      triangle(30,20,0,150,-50,20); // 30 to right, 20 above
    
      //upper wing
      fill(0,100,155);
      stroke(50,100,250);
      strokeWeight(2);
      triangle(0,-150,30,-20,-50,-20);
    
      //lower (upper) feather
      fill(0,100,155);
      stroke(50,100,250);
      strokeWeight(2);
      triangle(-40,-40,-45,-30,-50,-80); //  POS IS RIGHT NEG IS LEFT
    
      //upper (upper) feather
      fill(0,100,155);
      stroke(50,100,250);
      strokeWeight(2);
      triangle(-35,-120,-35,-60,-25,-90);
    
      //lower (upper) feather
      fill(0,100,155);
      stroke(50,100,250);
      strokeWeight(2);
      triangle(-40,40,-45,30,-50,80);
    
      //lower (lower) feather
      fill(0,100,155);
      stroke(50,100,250);
      strokeWeight(2);
      triangle(-35,120,-35,60,-25,90);
    
      //beak
      fill(250,243,220);
      stroke(0,0,0);
      strokeWeight(2);
      triangle(60,15,50,50,50,20);
    
      //small beak
      fill(0,0,0);
      stroke(0,0,0);
      strokeWeight(1);
      triangle(35,20,40,35,45,20);
    
      //yellow wing
      fill(250,243,73);
      stroke(23,255,0);
      strokeWeight(2);
      arc(-8,-20,75,130,PI,0);
      arc(-8,20,-75,130,0,PI);
    
      //light blue wing
      fill(47,226,250);
      stroke(0,100,155);
      strokeWeight(2);
      arc(-9,-20,80,90,PI,0);
      arc(-9,20,-80,90,0,PI);
    
      //red wing
      fill(255,0,0);
      stroke(250,243,73);
      strokeWeight(2);
      arc(-10,-20,80,50,PI,0);
      arc(-10,20,-80,50,0,PI);
    
      //stomach line
      stroke(250,243,73);
      strokeWeight(1);
      line(-5,-20,-5,20);
  
    pop();
  ellipse(0, 0, 50);
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

function mouseClicked() {
   clicked = true;
   sBird = sBird + .01;
}