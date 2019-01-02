import errors = require('../errors')
import isNum = require('./isNumber')
export = isWhole

function isWhole(value: number): boolean {
  if (!isNum(value)) throw new TypeError(errors.MustBeNumber)

  return value % 1 === 0
}
