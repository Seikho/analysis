import isNum = require('./isNumber')
import errors = require('../errors')
import isWhole = require('./isWhole')
export = factorial

function factorial(n: number): number {
  if (!isNum(n)) throw new TypeError(errors.MustBeNumber)
  if (n < 0) throw new TypeError(errors.MustBeAtLeastZero)
  if (!isWhole(n)) throw new TypeError(errors.MustBeWhole)

  if (n === 1 || n === 0) return 1
  if (n === 2) return 2

  var result = 2
  for (let x = 3; x <= n; x++) {
    result *= x
  }
  return result
}
