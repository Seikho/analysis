import Analysis = require('../../index')
import min = require('./min')
import max = require('./max')
export = range

function range(data: number[] | {}): Analysis.RangeResult {
  var minimum = min(data)
  var maximum = max(data)
  var difference = maximum! - minimum!

  var result = {
    minimum: minimum!,
    maximum: maximum!,
    difference: difference
  }

  return result
}
