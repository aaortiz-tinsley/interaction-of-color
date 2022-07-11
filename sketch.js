var midnight;
var paper;

function setup() {
  midnight= color(13, 13, 13);
  paper = color(242, 242, 242);
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(paper);
  strokeWeight(3);
  stroke(midnight);
  noFill();
  gridLines();
  
  strokeWeight(2);
  stroke(50);
  fill(midnight);
  gridSquares();
  
}

function gridLines () {
  for(let lineY = 0; lineY < windowHeight; lineY += 63) {
    line(0, lineY, windowWidth, lineY);
  }
}

function gridSquares () {
  for(let rectX = 0; rectX < windowWidth; rectX += 34) {
    for(let rectY = 0; rectY < windowHeight; rectY+= 9) {
      //rect(x, y, w, [h]);
      rect(rectX * 2.4 + rectY - 60, rectY * 7, 45, 60);
    }
  }
}

