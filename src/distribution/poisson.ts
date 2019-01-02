import factorial = require('../common/factorial')
export = poisson

var e = 2.71828

function poisson(x: number, avgSuccessRate: number) {
  var first = Math.pow(e, -avgSuccessRate)
  var second = Math.pow(avgSuccessRate, x)
  var third = factorial(x)

  return (first * second) / third
}
