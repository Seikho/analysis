import toArray = require('./toArray')
export = min

/**
 * @return Number Returns the lowest value in a dataset/array
 */
function min(data: number[] | {}): number | null {
  var dataset = toArray(data)
  if (dataset.length === 0) return null
  return dataset.reduce(getMin, Infinity)
}

function getMin(left: number, right: number) {
  return left > right ? right : left
}
