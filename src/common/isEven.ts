import isNumber = require('./isNumber')
import errors = require('../errors')
export = isEven

function isEven(value: number): boolean {
  if (!isNumber(value)) throw new TypeError(errors.MustBeNumber)
  return value % 2 === 0
}
