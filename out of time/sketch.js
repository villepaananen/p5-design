var fontsize = 100;
var points;
var bounds;
var string1 = "we're";
var string2 = "out";
var string3 = "of";
var string4 = "time";

function preload() {
  font = loadFont("assets/DarkerGrotesque-Black.ttf");
}

function setup() {
  createCanvas(500, 500);

  stroke(255);
  fill(255);
  textAlign(CENTER, CENTER);

  points = font.textToPoints(string1, random(-100, 100), 0, fontsize, {
    sampleFactor: 0.2,
    simplifyThreshold: 0
  });
  bounds = font.textBounds(" " + string1 + " ", random(-100, 100), 0, fontsize);

  points2 = font.textToPoints(string2, random(-100, 100), 75, fontsize, {
    sampleFactor: 0.2,
    simplifyThreshold: 0
  });
  bounds2 = font.textBounds(
    " " + string2 + " ",
    random(-100, 100),
    75,
    fontsize
  );

  points3 = font.textToPoints(string3, random(-100, 100), 150, fontsize, {
    sampleFactor: 0.2,
    simplifyThreshold: 0
  });
  bounds3 = font.textBounds(
    " " + string3 + " ",
    random(-100, 100),
    150,
    fontsize
  );

  points4 = font.textToPoints(string4, random(-100, 100), 225, fontsize, {
    sampleFactor: 0.2,
    simplifyThreshold: 0
  });
  bounds4 = font.textBounds(
    " " + string4 + " ",
    random(-100, 100),
    225,
    fontsize
  );
}

function draw() {
  background(0);
  translate(width / 4, height / 4);

  var offset = (width * 0.5 - sin(millis() / 5000) * 1000) / 100;
  beginShape();
  for (let i = 0; i < points.length; i++) {
    let p = points[i];
    point(p.x - i * offset, p.y);
    //vertex(p.x-i*offset, p.y - i*offset);
  }

  for (let i = 0; i < points2.length; i++) {
    let p2 = points2[i];
    point(p2.x - i * offset, p2.y);
    //vertex(p.x-i*offset, p.y - i*offset);
  }

  for (let i = 0; i < points3.length; i++) {
    let p3 = points3[i];
    point(p3.x - i * offset, p3.y);
    //vertex(p.x-i*offset, p.y - i*offset);
  }

  for (let i = 0; i < points4.length; i++) {
    let p4 = points4[i];
    point(p4.x - i * offset, p4.y);
    //vertex(p.x-i*offset, p.y - i*offset);
  }
  endShape();
}
