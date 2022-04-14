const CRYSTAL_SIZE = 500
const SIDES = 6
let ANGLE
let PALETTE = []

function setup() {
  createCanvas(1000, 1000, SVG)

  PALETTE = [
    color(255, 52, 154), //pink
    color(4, 0, 152), //blue
  ]

  noLoop()
  angleMode(DEGREES)
  rectMode(CENTER)
}

function draw() {
  testLines()
}

function testLines() {
  let numberOfShapes = coinFlip() ? SIDES : SIDES * 2

  noFill()
  push()
    translate(width / 2, height / 2)
    stroke(PALETTE[0])
    ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE)

    stroke(randomColor())
    ANGLE = 360 / numberOfShapes
    for (let i = 0; i < numberOfShapes; i++) {
      line(0, 0, 0, CRYSTAL_SIZE / 2)
      rotate(ANGLE)
    }
  pop()
}

function coinFlip() {
  return random(1) < 0.5
}

function randomColor() {
  return PALETTE[floor(random(0, PALETTE.length))]
}
