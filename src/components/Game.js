let knightPosition
let observers = []
function emitChange() {
  observers.forEach(o => o && o(knightPosition))
}
export function observe(o) {
  observers.push(o)
  emitChange()
  return () => {
    observers = observers.filter(t => t !== o)
  }
}
export function canMoveKnight(toX, toY) {
  const [x, y] = knightPosition
  const dx = toX - x
  const dy = toY - y
  return (
    (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
    (Math.abs(dx) === 1 && Math.abs(dy) === 2)
  )
}
export function moveKnight(toX, toY, circleClass) {

    var precision = 1;
    var n = Math.floor(Math.random() * (10-(-10)) + (-10))
    var randomnum = Math.floor(Math.random() * (15 * precision - 7 * precision) + 7 * precision) / (1*precision);
  knightPosition = [toX-randomnum, toY-randomnum, circleClass]
  console.log(knightPosition)
  emitChange()
//   console.log(knightPosition)
  return knightPosition
}


let value = false
let observersTwo = []
function emitChangeTwo() {
  observersTwo.forEach(o => o && o(value))
}

export function observeTwo(o) {
    observersTwo.push(o)
    emitChangeTwo()
    return () => {
      observersTwo = observersTwo.filter(t => t !== o)
    }
  }

export function moveDropped(hasDropped) {
  value = hasDropped
  emitChangeTwo()
  return value
}

let valueID = ''
let observersThree = []
function emitChangeThree() {
  observersThree.forEach(o => o && o(valueID))
//   console.log(observersThree)
}

export function observeThree(o) {
    observersThree.push(o)
    emitChangeThree()
    return () => {
      observersThree = observersThree.filter(t => t !== o)
    //   console.log(observersThree)
    }
  }

export function newDropped(newID) {
  valueID = newID
//   console.log(newID)
  emitChangeThree()
  return valueID
}


let latestID = ''
let observersFour = []
function emitChangeFour() {
  observersFour.forEach(o => o && o(latestID))
//   console.log(observersThree)
}

export function observeFour(o) {
    observersFour.push(o)
    emitChangeFour()
    return () => {
      observersFour = observersFour.filter(t => t !== o)
    //   console.log(observersThree)
    }
  }

export function newIDLog(newID) {
  latestID = newID
//   console.log(newID)
  emitChangeFour()
  return latestID
}



let latestDel = ''
let observersFive = []
function emitChangeFive() {
  observersFive.forEach(o => o && o(latestDel))
//   console.log(observersThree)
}

export function observeFive(o) {
    observersFive.push(o)
    emitChangeFive()
    return () => {
      observersFive = observersFive.filter(t => t !== o)
    //   console.log(observersThree)
    }
  }

export function newDelLog(newDel) {
  latestDel = newDel
  console.log(newDel)
  emitChangeFive()
  return latestDel
}