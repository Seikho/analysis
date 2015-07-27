var Curry = (function () {
    var fn = curry;
    fn.gap = { "@@analysis/placeholder": true };
    return fn;
})();
function curry(fn) {
    var fnArgs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        fnArgs[_i - 1] = arguments[_i];
    }
    while (fnArgs.length < fn.length) {
        fnArgs[fnArgs.length] = Curry.gap;
    }
    return function () {
        var innerArgs = Array.prototype.slice.call(arguments, 0);
        var mergedArgs = mergeArgs(fnArgs, innerArgs);
        if (mergedArgs.some(isGap))
            return curry.apply(curry, [fn].concat(mergedArgs));
        return fn.apply(this, mergedArgs);
    };
}
function getFirstEmpty(args) {
    for (var x = 0; x < args.length; x++) {
        if (isGap(args[x]))
            return x;
    }
    return null;
}
function mergeArgs(left, right) {
    var merged = left.slice();
    right.forEach(function (value) {
        var next = getFirstEmpty(merged);
        if (next == null)
            return;
        merged[next] = value;
    });
    return merged;
}
function isGap(value) {
    return value["@@analysis/placeholder"] === true;
}
module.exports = Curry;
//# sourceMappingURL=curry.js.map