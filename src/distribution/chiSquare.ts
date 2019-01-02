import errors = require('../errors')
import isNum = require('../common/isNumber')
export = chiSquare

function chiSquare(
  observedFrequency: number,
  expectedFrequency: number
): number {
  if (!isNum(observedFrequency) || !isNum(expectedFrequency))
    throw new TypeError(errors.AllMustBeNumbers)

  var top = Math.pow(observedFrequency - expectedFrequency, 2)
  return top / expectedFrequency
}
