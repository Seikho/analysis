import toArray = require('./toArray')
export = sum

function sum(data: number[] | {}) {
  var dataset: number[] = toArray(data)
  var add = (left: number, right: number) => left + right

  return dataset.reduce(add, 0)
}
