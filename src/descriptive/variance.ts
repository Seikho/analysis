import toArray = require('../common/toArray')
import sum = require('../common/sum')
import mean = require('./mean')
export = variance

/**
 * Variance in a population
 * Averaged squared deviation from the mean
 */
function variance(data: number[] | {}): number {
  var dataset = toArray(data)
  var dataMean = mean(data)

  var calcVariance = (val: number) => squared(val - dataMean)
  var squared = (val: number) => Math.pow(val, 2)

  var variances = dataset.map(calcVariance)

  return sum(variances) / dataset.length
}
