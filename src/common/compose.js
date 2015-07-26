var errors = require("../errors");
function compose() {
    var functions = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        functions[_i - 0] = arguments[_i];
    }
    var isEnoughArgs = functions.length > 1;
    if (!isEnoughArgs)
        throw new TypeError(errors.InsufficientValues);
    var isAllFuncs = functions.every(function (fn) { return fn instanceof Function; });
    if (!isAllFuncs)
        throw new TypeError(errors.AllMustBeFunctions);
    var isAllEqual = functions.every(function (fn, index) { return index === 0 || fn.length === 1; });
    if (!isAllEqual)
        throw new TypeError(errors.AllFuncsMustBeUnary);
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        return functions.reduceRight(function (prev, fn) {
            if (prev === undefined)
                prev = fn(args);
            else
                prev = fn(prev);
            return prev;
        }, undefined);
    };
}
module.exports = compose;
//# sourceMappingURL=compose.js.map