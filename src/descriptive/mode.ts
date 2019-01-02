import max = require('../common/max')
import frequencyTable = require('../frequency/table')
export = mode

function mode(data: number[] | {}) {
  var table = frequencyTable(data)
  var maximum = max(table)
  var isMax = (key: any) => table[key] === maximum
  var toNum = (key: any) => Number(key)

  return Object.keys(table)
    .filter(isMax)
    .map(toNum)
}
