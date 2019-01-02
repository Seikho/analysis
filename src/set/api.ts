import Analysis = require('../../index')
import distinct = require('./distinct')
import intersect = require('./intersect')
import union = require('./union')

var set: Analysis.Set = {
  distinct: distinct,
  intersect: intersect,
  union: union
}

export = set
