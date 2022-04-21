const CRYSTAL_SIZE = 800
const RADIUS = CRYSTAL_SIZE / 2
const SIDES = 6
let PALETTE = []

function setup() {
  createCanvas(1000, 1000)

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
  dots()
}

function renderShapes() {
  let randomNum = random(1)
  if (randomNum > 0.7) circles()
  randomNum = random(1)
  if (randomNum > 0.2) simpleLines()
  randomNum = random(1)
  if (randomNum > 0.1) outlineShape()
  randomNum = random(1)
  if (randomNum > 0.5) ringOfShapes()
}

function outlineShape() {
  stroke(randomColor())
  strokeWeight(randomWeight())
  noFill()

  push()
  translate(width / 2, height / 2)
  coinFlip() ? ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE) : hexagon(0, 0, RADIUS)
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
  // const numberOfShapes = coinFlip() ? SIDES : SIDES * 2
  const numberOfShapes = SIDES
  const angle = 360 / numberOfShapes
  const sizeOfShape = RADIUS * 0.93
  const position = RADIUS - sizeOfShape / 2

  stroke(randomColor())
  // strokeWeight(randomWeight())
  strokeWeight(randomWeight() * 1.5)
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
  const sizeOfShape = RADIUS * random(0.6)
  const position = RADIUS - random(sizeOfShape * 2)
  const color = randomColor()
  stroke(color)
  // strokeWeight(randomWeight())
  // strokeWeight(randomWeight() * 2)
  fill(color)

  push()
  translate(width / 2, height / 2)
  for (let i = 0; i < numberOfShapes; i++) {
    rect(0, position, sizeOfShape, sizeOfShape)
    rotate(angle)
  }
  pop()
}

function myTriangle(center, radius, direction) {
  if (direction) {
    beginShape()
    vertex(center + radius * cos(0), radius * sin(0))
    vertex(center + radius * cos(120), radius * sin(120))
    vertex(center + radius * cos(240), radius * sin(240))
    endShape(CLOSE)
  } else {
    beginShape()
    vertex(center + radius * cos(180), radius * sin(180))
    vertex(center + radius * cos(300), radius * sin(300))
    vertex(center + radius * cos(60), radius * sin(60))
    endShape(CLOSE)
  }
}

function ringOfShapes() {
  const stepsOut = 8
  const steps = floor(random(1, stepsOut))
  const thinStroke = 1
  const thickStroke = 3
  const layerColor = randomColor()
  const fillColor = coinFlip() ? layerColor : color(0, 1)
  const weight = coinFlip() ? thinStroke : thickStroke
  const singleStep = CRYSTAL_SIZE / 2 / stepsOut
  const numberOfShapes = SIDES
  const randomShape = random(1)
  const center = steps * singleStep
  const direction = coinFlip()
  const angle = 360 / numberOfShapes

  let radius

  if (steps < stepsOut / 2) {
    radius = floor(random(1, steps)) * singleStep
  } else if (steps > stepsOut / 2) {
    radius = floor(random(1, stepsOut - steps)) * singleStep
  } else {
    radius = floor(random(1, stepsOut / 2 + 1)) * singleStep
  }

  stroke(layerColor)
  fill(fillColor)
  strokeWeight(weight)
  push()
  translate(width / 2, height / 2)
  for (let i = 0; i < numberOfShapes; i++) {
    if (randomShape < 0.33) {
      ellipse(0, center, radius, radius)
    } else if (randomShape >= 0.33 && randomShape < 0.66) {
      rect(0, center, radius, radius)
    } else if (randomShape >= 0.66) {
      myTriangle(center, radius, direction)
    }
    rotate(angle)
  }
  pop()
}

function dots() {
  const numberOfShapes = coinFlip() ? SIDES : SIDES * 2
  const angle = 360 / numberOfShapes
  const sizeOfShape = 3
  const stepsOut = 8
  const singleStep = CRYSTAL_SIZE / 2 / stepsOut
  const centerOffset = singleStep

  fill(randomColor())
  noStroke()
  push()
  translate(width / 2, height / 2)
  for (let i = 0; i <= numberOfShapes; i++) {
    for (let x = centerOffset; x < CRYSTAL_SIZE / 2; x += singleStep) {
      rect(x, 0, sizeOfShape, sizeOfShape)
    }
    rotate(angle)
  }
  pop()
}
