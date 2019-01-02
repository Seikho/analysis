import common = require('./common/api')
import descriptive = require('./descriptive/api')
import frequency = require('./frequency/api')
import distribution = require('./distribution/api')
import set = require('./set/api')

var Analysis = {
  common: common,
  descriptive: descriptive,
  distribution: distribution,
  frequency: frequency,
  set: set
}

export = Analysis
