var font;
var points = [];
var text1 = "and the hard";
var text2 = "falls";
var string = "rain";
var fontsize = 100;
var newPoints = [];

function preload() {
  font = loadFont("assets/SportingGrotesque-Bold.otf");
}

function setup() {
  createCanvas(500, 500, WEBGL);
  stroke(255);
  strokeWeight(0.99);
  ortho();

  points = font.textToPoints(string, -width / 4, -height / 4, fontsize, {
    sampleFactor: 3,
    simplifyTreshold: 0
  });

  newPoints = randomizeDepth(points);
}

function draw() {
  background(0);
  push();
  noStroke();
  fill(255, 255, 255, 20);
  textFont(font);
  textSize(fontsize / 4);
  text(text1, -width / 2 + 45, -height / 2 + 37);
  text(text2, -width / 2 + width * 0.8, -height / 4);
  pop();

  rotateX((cos(frameCount / 60) * PI) / 2 - PI / 2);

  for (var i = 0; i < newPoints.length; i++) {
    var p = newPoints[i];
    point(p.x, p.y, p.z);
  }
}

function randomizeDepth(points) {
  var newPoints = [];
  for (var i = 0; i < points.length; i++) {
    var p = { x: points[i].x, y: points[i].y, z: random(0, 2000) };
    newPoints[i] = p;
  }
  return newPoints;
}
