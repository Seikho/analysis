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
    var isAllEqual = functions.every(function (fn) { return fn.length === functions[0].length; });
    if (!isAllEqual)
        throw new TypeError(errors.AllArgsSameLength);
    return function composition() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        return functions.reduceRight(function (fn) { return fn(args); });
    };
}
module.exports = compose;
//# sourceMappingURL=compose.js.map