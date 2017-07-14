
var array = []
function forLoop(array) {
    for (var i = 0; i < 26; i++) {
      if(i<1 || i>1) {array.push(`"I am ${i} strange loop${i === 0 ? '' : 's'}."`)}
    }
  return array
}

var number
function whileLoop(number) {
  while (number > 0) {
  console.log (number)
  number--
  }
  return 'done'
}

function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}

var logic
console.log(array)
function doWhileLoop(array) {
  do {array.pop()}
  while (logic = array.length > 0 && maybeTrue())
  return array
}
