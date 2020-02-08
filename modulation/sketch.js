var yOffset = 3;

function setup() {
  createCanvas(600, 600);
  stroke(255);

}

function draw() {
  background(0);
  translate(width/2, 0);
  var lines = height;

  for (var i = 0; i < lines; i++) { 
    var xWidth = map(sin(i/(mouseX/100)-PI/2), -1, 1, 0, 100);
    line(-xWidth, 0, xWidth, 0);
    translate(0, yOffset);
  }
}