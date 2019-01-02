import Analysis = require('../../index')
import toArray = require('../common/toArray')
import sum = require('../common/sum')
import table = require('./table')

export = relative

function relative(data: number[] | {}): Analysis.Dataset {
  var dataset = table(toArray(data))
  var total = sum(dataset)
  var percent = (val: number) => dataset[val] / total

  var reducer = (obj: any, prop: any) => {
    obj[prop] = percent(prop)
    return obj
  }

  return Object.keys(dataset).reduce(reducer, {})
}
