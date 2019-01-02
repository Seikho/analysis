import factorial = require('../../common/factorial')
import isWhole = require('../../common/isWhole')
import errors = require('../../errors')

export = probability

function probability(events: number, x: number) {
  if (typeof x !== 'number' || typeof events !== 'number')
    throw new TypeError(errors.MustBeNumber)
  if (!isWhole(events) || !isWhole(x)) throw new TypeError(errors.MustBeWhole)
  if (events < 1) throw new TypeError(errors.EventsMustBeAtLeastOne)
  if (x < 0) throw new TypeError(errors.RandomVariableMustBeAtLeastZero)

  var first = factorial(events)
  var second = factorial(x)
  var third = factorial(events - x)

  return first / (second * third)
}
