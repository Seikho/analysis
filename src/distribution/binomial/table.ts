import Types = require('../../../index')
import errors = require('../../errors')
import coefficient = require('./coefficient')
import isWhole = require('../../common/isWhole')
export = table

function table(events: number): Types.Dataset {
  if (typeof events !== 'number') throw new TypeError(errors.MustBeNumber)
  if (!isWhole(events)) throw new TypeError(errors.MustBeWhole)
  if (events < 1) throw new TypeError(errors.MustBeAtLeastOne)

  var result: Types.Dataset = {}
  var possibilities = Math.pow(2, events)

  for (let x = 0; x <= events; x++) {
    result[x] = coefficient(events, x) / possibilities
  }

  return result
}
