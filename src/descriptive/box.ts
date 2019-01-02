import Analysis = require('../../index')
import firstQuartile = require('./firstQuartile')
import thirdQuartile = require('./thirdQuartile')
import mean = require('./mean')
import median = require('./median')
import mode = require('./mode')
import range = require('../common/range')
import toArray = require('../common/toArray')
export = box

function box(data: number[] | {}): Analysis.BoxData {
  var dataset = toArray(data)

  return {
    mean: mean(dataset),
    mode: mode(dataset),
    median: median(dataset),
    range: range(dataset),
    lowerQuartile: firstQuartile(dataset)!,
    upperQuartile: thirdQuartile(dataset)!
  }
}
