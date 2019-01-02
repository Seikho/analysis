import Analysis = require('../../index')
import binSettings = require('./binSettings')
import toArray = require('../common/toArray')
import isEven = require('../common/isEven')
export = histogram

function histogram(
  data: number[] | {},
  binOptions?: Analysis.BinSettings
): Analysis.Dataset {
  var dataset = toArray(data)
  binOptions = binSettings(dataset, binOptions)
  var result = getEmptyHistogram(binOptions.binCount || 10)

  var roughBin = (val: number) =>
    (val - binOptions!.minimum!) / binOptions!.binSize!
  var realBin = (val: number) => Math.floor(roughBin(val)) + 1

  var adjustBin = (val: number) =>
    isEven(binOptions!.binSize || 0) ? val - 1 : val

  dataset.forEach(value => {
    let binNumber = adjustBin(realBin(value))
    result[binNumber]++
  })

  return result
}

function getEmptyHistogram(binCount: number): Analysis.Dataset {
  var emptyHistogram: any = {}

  for (let x = 1; x <= binCount; x++) {
    emptyHistogram[x] = 0
  }

  return emptyHistogram
}
