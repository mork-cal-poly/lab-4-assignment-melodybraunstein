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

