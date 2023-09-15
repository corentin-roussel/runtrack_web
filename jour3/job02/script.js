const array = [1,2,3,4,5,6]
let concatArray = [].concat(0, array, 7)
let spliceArray = array.slice(1,7)

console.log(array)

console.log(concatArray)

console.log(spliceArray)
console.log(array[array.length - 1]);