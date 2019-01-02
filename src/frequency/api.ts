import Analysis = require('../../index')
import histogram = require('./histogram')
import relative = require('./relative')
import table = require('./table')

var api: Analysis.Frequency = {
  table: table,
  histogram: histogram,
  relative: relative
}

export = api
