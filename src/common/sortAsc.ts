import toArray = require('./toArray')
export = sort

function sort(data: number[] | {}) {
  var dataset = toArray(data)

  return dataset.sort((l, r) => l - r)
}
