var font;
var fontsize = 100;
var points1 = [];
var points2 = [];
var newPoints1 = [];
var newPoints2 = [];
var text1 = "look";
var text2 = "new";

function preload() {
  font = loadFont("assets/SportingGrotesque-Bold.otf");
}

function setup() {
  createCanvas(500, 500, WEBGL);
  stroke(255);
  strokeWeight(0.99);
  ortho();

  points1 = font.textToPoints(text1, -50, 0, fontsize, {
    sampleFactor: 1,
    simplifyTreshold: 0
  });

  points2 = font.textToPoints(text2, -50, 0, fontsize, {
    sampleFactor: 1,
    simplifyTreshold: 0
  });

  newPoints1 = randomizeDepth(points1);
  newPoints2 = randomizeDepth(points2);
}

function draw() {
  background(0);

  fade = -sin(frameCount / 60);
  push();
  textFont(font, fontsize);

  fill(255, 255, 255, 10 - fade * 20);
  noStroke();
  text("a", -150, 0);
  pop();

  rotateY((fade * PI) / 8 - PI / 8);

  for (var i = 0; i < newPoints1.length; i++) {
    var p = newPoints1[i];
    point(p.x, p.y, p.z);
  }

  rotateY(PI / 4);

  for (var i = 0; i < newPoints2.length; i++) {
    var p = newPoints2[i];
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
