const CRYSTAL_SIZE = 800
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
  // outlineShape()
  // circles()
  renderShapes()
}

function renderShapes() {
  let randomNum = random(1)
  if (randomNum > 0.5) squares()
  randomNum = random(1)
  if (randomNum > 0.2) simpleLines()
  randomNum = random(1)
  if (randomNum > 0.1) outlineShape()
  randomNum = random(1)
  if (randomNum > 0.2) circles()
}

function outlineShape() {
  stroke(randomColor())
  strokeWeight(randomWeight())
  noFill()

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

function circles() {
  const numberOfShapes = SIDES
  const angle = 360 / numberOfShapes
  const sizeOfShape = RADIUS * 0.93
  const position = RADIUS - sizeOfShape / 2

  stroke(randomColor())
  // strokeWeight(randomWeight())
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

function squares() {
  const numberOfShapes = SIDES
  const angle = 360 / numberOfShapes
  const sizeOfShape = RADIUS * random(0.8)
  const position = RADIUS - sizeOfShape / 2
  const color = randomColor()
  stroke(color)
  // strokeWeight(randomWeight())
  strokeWeight(randomWeight() * 2)
  fill(color)

  push()
  translate(width / 2, height / 2)
  for (let i = 0; i < numberOfShapes; i++) {
    rect(0, position, sizeOfShape, sizeOfShape)
    rotate(angle)
  }
  pop()
}
