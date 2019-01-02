import stdDev = require('./stdDev')
import mean = require('./mean')
export = zScore

function zScore(data: number[] | {}, value: number) {
  return (value - mean(data)) / stdDev(data)
}
