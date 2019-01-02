import distinct = require('./distinct')
export = union

function union(left: number[] | {}, right: number[] | {}): number[] {
  var allValues = distinct(left).concat(distinct(right))

  return distinct(allValues)
}
