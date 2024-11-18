function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(135, 206, 235);
  fill (34, 189, 34);
  rect (0, height -50, width, 50);
  
  fill (255, 204, 0);
  noStroke();
  ellipse (500, 100, 100, 100);
  
  fill (139, 69, 19);
  triangle (100, height -50, 250, 150, 400, height -50);
  triangle (300, height -50, 450, 100, 600, height -50);
  
  fill (139, 90, 19);
  rect (150, height -100, 20, 50);
  fill (0, 128, 0);
  ellipse (160, height -120, 60, 60);
  ellipse (140, height -140, 60, 60);
  ellipse (180, height -140, 60, 60);
  
  fill (139, 69, 19);
  rect (50, 310, 20, 40);
  fill (34, 139, 34);
  triangle (30, 315, 60, 120, 90, 315);
}