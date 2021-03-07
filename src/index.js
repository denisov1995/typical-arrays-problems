
exports.min = function min(array) {
  if ( array === undefined || array.length === 0) {
    return 0
  }
  let a = array[0]
  for (let i = 0; i < array.length; i++) {
    if (a > array[i]) {
      a = array[i]
    }
  }
  return (a)
}

exports.max = function max(array) {
  if ( array === undefined || array.length === 0) {
    return 0
  }
  let a = array[0]
  for (let i = 0; i < array.length; i++) {
    if (a < array[i]) {
      a = array[i]
    }
  }
  return (a)
}

exports.avg = function avg(array) {
  if ( array === undefined || array.length === 0) {
    return 0
  }
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    sum += array[i]
  }
  return (sum / array.length)
}
