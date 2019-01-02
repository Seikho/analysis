import variance = require('./variance')
export = stdDev

function stdDev(data: number[] | {}) {
  var populationVariance = variance(data)
  return Math.sqrt(populationVariance)
}
