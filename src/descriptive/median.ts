import toArray = require('../common/toArray')
import isEven = require('../common/isEven')
export = median

function median(data: number[] | {}) {
  var dataset: number[] = toArray(data)

  var sortedDataset = dataset.sort((left, right) => left - right)
  var middleIndex = sortedDataset.length / 2

  if (!isEven(dataset.length)) {
    let index = Math.floor(middleIndex)
    return sortedDataset[index]
  }

  var lowerIndex = middleIndex - 1
  return (sortedDataset[lowerIndex] + sortedDataset[middleIndex]) / 2
}
