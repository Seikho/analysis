import Analysis = require('../../index')
import Descriptive = Analysis.Descriptive

import box = require('./box')
import mean = require('./mean')
import mode = require('./mode')
import median = require('./median')
import stdDev = require('./stdDev')
import variance = require('./variance')
import zScore = require('./zScore')
import firstQuartile = require('./firstQuartile')
import thirdQuartile = require('./thirdQuartile')
import interQuartileRange = require('./interQuartileRange')

var api: Descriptive = {
  box,
  mean,
  mode,
  median,
  stdDev,
  variance,
  zScore,
  firstQuartile,
  thirdQuartile,
  interQuartileRange
}

export = api
