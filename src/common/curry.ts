import Analysis = require('../../index')

var Curry: Analysis.Curry = (() => {
  var fn: any = curry
  fn.gap = { '@@analysis/placeholder': true }
  return fn
})()

function curry(fn: Function, ...fnArgs: any[]): (...args: any[]) => any {
  while (fnArgs.length < fn.length) {
    fnArgs[fnArgs.length] = Curry.gap
  }

  return function(this: any) {
    let innerArgs = Array.prototype.slice.call(arguments, 0)

    var mergedArgs = mergeArgs(fnArgs, innerArgs)
    if (mergedArgs.some(isGap))
      return curry.apply(curry, [fn].concat(mergedArgs) as any)

    return fn.apply(this, mergedArgs)
  }
}

function getFirstEmpty(args: any[]) {
  for (let x = 0; x < args.length; x++) {
    if (isGap(args[x])) return x
  }

  return null
}

function mergeArgs(left: any[], right: any[]) {
  var merged = left.slice()
  right.forEach(value => {
    let next = getFirstEmpty(merged)
    if (next == null) return
    merged[next] = value
  })

  return merged
}

function isGap(value: any) {
  return value['@@analysis/placeholder'] === true
}

export = Curry
