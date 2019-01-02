import toArray = require('../common/toArray')
export = distinct

function distinct(data: number[] | {}): number[] {
  var dataset = toArray(data)

  var isIn = (array: any, value: any) => array.some((v: any) => value === v)
  var reducer = (array: any, value: any) => {
    if (!isIn(array, value)) array.push(value)
    return array
  }

  return dataset.reduce(reducer, [])
}
