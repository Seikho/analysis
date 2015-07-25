function add(left, mid, right) {
    return left + mid + right;
}
console.log(curry(add, NaN, NaN, 3)(1)(2));
function curry(fn) {
    var fnArgs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        fnArgs[_i - 1] = arguments[_i];
    }
    while (fnArgs.length < fn.length) {
        fnArgs[fnArgs.length] = NaN;
    }
    return function () {
        var innerArgs = Array.prototype.slice.call(arguments, 0);
        fnArgs = mergeArgs(fnArgs, innerArgs);
        console.log(fnArgs);
        if (fnArgs.some(isGap))
            return curry.apply(curry, [fn].concat(fnArgs));
        return fn.apply(this, fnArgs);
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
    right.forEach(function (value) {
        var next = getFirstEmpty(left);
        if (next == null)
            return;
        left[next] = value;
    });
    return left;
}
function isGap(value) {
    return isNaN(value) && value.toString() === "NaN";
}
module.exports = curry;
//# sourceMappingURL=curry.js.map