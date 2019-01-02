import isNumber = require('./isNumber')
import errors = require('../errors')
export = validate

function validate(data: number[]): number[] {
  var isValid = data.every(isNumber)
  if (isValid) return data.slice()

  throw new TypeError(errors.AllMustBeNumbers)
}
