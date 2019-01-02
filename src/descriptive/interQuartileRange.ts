import firstQuartile = require('./firstQuartile')
import thirdQuartile = require('./thirdQuartile')
export = range

function range(data: number[] | {}): number {
  var first = firstQuartile(data)!
  var third = thirdQuartile(data)!

  return third - first
}
