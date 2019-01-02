import toArray = require('../common/toArray')
import sum = require('../common/sum')
export = mean

function mean(data: number[] | {}) {
  var dataset: number[] = toArray(data)
  return sum(dataset) / dataset.length
}
