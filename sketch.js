const CRYSTAL_SIZE = 500
const RADIUS = CRYSTAL_SIZE / 2
const SIDES = 6
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
  // simpleLines()
  outlineShape()
  circle()
}

function outlineShape() {
  stroke(randomColor())
  strokeWeight(randomWeight())
  push()
  translate(width / 2, height / 2)
  coinFlip() ? ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE) : hexagon(0, 0, RADIUS)
  pop()
}

function simpleLines() {
  const stepsOut = 8
  const numOfSteps = coinFlip() ? stepsOut : floor(stepsOut * 1.25)
  const step = RADIUS / numOfSteps
  const start = floor(random(0, numOfSteps))
  const stop = floor(random(start, numOfSteps + 1))

  const numberOfShapes = coinFlip() ? SIDES : SIDES * 2
  const angle = 360 / numberOfShapes

  noFill()

  push()
  translate(width / 2, height / 2)
  stroke(randomColor())
  strokeWeight(randomWeight())

  for (let i = 0; i < numberOfShapes; i++) {
    line(start * step, 0, stop * step, 0)
    rotate(angle)
  }
  pop()
}

function circle() {
  const numberOfShapes = coinFlip() ? SIDES : SIDES * 2
  const angle = 360 / numberOfShapes
  const sizeOfShape = RADIUS * 0.93
  const position = RADIUS - sizeOfShape / 2

  stroke(randomColor())
  strokeWeight(randomWeight())
  noFill()

  push()
  translate(width / 2, height / 2)
  for (let i = 0; i < numberOfShapes; i++) {
    ellipse(position, 0, sizeOfShape, sizeOfShape)
    rotate(angle)
  }
  pop()
}
