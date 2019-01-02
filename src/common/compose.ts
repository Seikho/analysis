import Analysis = require('../../index')
import ComposeFunction = Analysis.ComposeFunction
import errors = require('../errors')
export = compose

function compose<T>(
  ...functions: Array<ComposeFunction<T>>
): ComposeFunction<T> {
  let isEnoughArgs = functions.length > 1
  if (!isEnoughArgs) throw new TypeError(errors.InsufficientValues)

  let isAllFuncs = functions.every(fn => fn instanceof Function)
  if (!isAllFuncs) throw new TypeError(errors.AllMustBeFunctions)

  let isCorrectArity = functions.every(
    (fn, index) => index === functions.length - 1 || fn.length === 1
  )
  if (!isCorrectArity) throw new TypeError(errors.AllFuncsMustBeUnary)

  return function(...args: any[]) {
    return functions.reduceRight<T>(
      (prev, fn) => {
        if (prev === undefined) prev = fn.apply(fn, args)
        else prev = fn(prev)

        return prev
      },
      undefined as any
    )
  }
}
