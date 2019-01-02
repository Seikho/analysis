import curry = require('../common/curry')
import distinct = require('./distinct')
export = intersect

function intersect(left: number[] | {}, right: number[] | {}): number[] {
  var leftData = distinct(left)
  var rightData = distinct(right)

  var isIn = (value: any) => leftData.some(v => value === v)
  var push = curry((array: any[], value: any) =>
    isIn(value) ? array.concat([value]) : array
  )

  var result = rightData.reduce(push, [])

  return result
}
