import Analysis = require('../../index')
import chiSquare = require('./chiSquare')
import poisson = require('./poisson')
import binomial = require('./binomial/index')

var api: Analysis.Distribution = {
  chiSquare: chiSquare,
  poisson: poisson,
  binomial: binomial
}

export = api
