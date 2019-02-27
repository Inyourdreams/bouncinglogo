let x;
let y;

let xSpeed;
let ySpeed;

function setup() {
  createCanvas(800, 600);
  x = 400;
  y = 300;
  xSpeed = 5;
  ySpeed = 5;
}

function draw() {
  background(0);
  rect(x, y, 80, 60);
  x += xSpeed;
  y += ySpeed;

  if (x + 80 == width || x == 0) {
    xSpeed *= -1;
  }
  if (y + 60 == height || y == 0) {
    ySpeed *= -1;
  }
}
