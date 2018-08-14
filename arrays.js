var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

<<<<<<< HEAD
function addElementToBeginningOfArray(array, element) {
    array = ["foo", ...array]
  return array
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift("foo")
  return array
}

function addElementToEndOfArray(array, element) {
  array = [...array, "foo"]
  return array
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push("foo")
  return array
}

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array, index) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array){
  array = array.slice(1)
  return array
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  array = array.slice(0, array.length -1)
  return array
}







=======
function addElementToBeginningOfArray() {
  var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
  chocolateBars = ["hersheys", ...chocolateBars]
  return chocolateBars
}

function 
>>>>>>> 49406624497409639c022180f38ab908eefe67d8
