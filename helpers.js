const extraRotation = 30
function hexagon(posX, posY, radius) {
  const rotationAngle = 360 / SIDES
  beginShape()
  for (let i = 0; i < 6; i++) {
    const thisVertex = pointOnCircle(
      posX,
      posY,
      radius,
      i * rotationAngle + extraRotation
    )
    vertex(thisVertex.x, thisVertex.y)
  }
  endShape(CLOSE)
}

function pointOnCircle(posX, posY, radius, angle) {
  const x = posX + radius * cos(angle)
  const y = posY + radius * sin(angle)
  return createVector(x, y)
}

function coinFlip() {
  return random(1) < 0.5
}

function randomColor() {
  return PALETTE[floor(random(0, PALETTE.length))]
}

function randomWeight() {
  return coinFlip() ? 3 : 6
}
