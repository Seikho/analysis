import toArray = require('./toArray')
export = max

/**
 * @return Number Returns the highest value in a dataset/array
 */
function max(data: number[] | {}): number | null {
  var dataset = toArray(data)
  if (dataset.length === 0) return null
  return dataset.reduce(getMax, -Infinity)
}

function getMax(left: number, right: number): number {
  return left > right ? left : right
}
