(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var toArray = require("./toArray");
var curry = require("./curry");
var compose = require("./compose");
var isNumber = require("./isNumber");
var max = require("./max");
var min = require("./min");
var range = require("./range");
var round = require("./round");
var sum = require("./sum");
var validateArray = require("./validateArray");
var isEven = require("./isEven");
var sortAsc = require("./sortAsc");
var sortDesc = require("./sortDesc");
var isWhole = require("./isWhole");
var factorial = require("./factorial");
var api = {
    toArray: toArray,
    min: min,
    max: max,
    range: range,
    round: round,
    validateArray: validateArray,
    sum: sum,
    isNumber: isNumber,
    curry: curry,
    compose: compose,
    isEven: isEven,
    sortAsc: sortAsc,
    sortDesc: sortDesc,
    isWhole: isWhole,
    factorial: factorial
};
module.exports = api;

},{"./compose":2,"./curry":3,"./factorial":4,"./isEven":5,"./isNumber":6,"./isWhole":7,"./max":8,"./min":9,"./range":10,"./round":11,"./sortAsc":12,"./sortDesc":13,"./sum":14,"./toArray":15,"./validateArray":16}],2:[function(require,module,exports){
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
    var isCorrectArity = functions.every(function (fn, index) { return index === functions.length - 1 || fn.length === 1; });
    if (!isCorrectArity)
        throw new TypeError(errors.AllFuncsMustBeUnary);
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        return functions.reduceRight(function (prev, fn) {
            if (prev === undefined)
                prev = fn.apply(fn, args);
            else
                prev = fn(prev);
            return prev;
        }, undefined);
    };
}
module.exports = compose;

},{"../errors":30}],3:[function(require,module,exports){
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
        fnArgs[fnArgs.length] = NaN;
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
    return isNaN(value) && value.toString() === "NaN" && typeof value === "number";
}
module.exports = Curry;

},{}],4:[function(require,module,exports){
var isNum = require("./isNumber");
var errors = require("../errors");
var isWhole = require("./isWhole");
function factorial(n) {
    if (!isNum(n))
        throw new TypeError(errors.MustBeNumber);
    if (n < 1)
        throw new TypeError(errors.MustBeAtLeastOne);
    if (!isWhole(n))
        throw new TypeError(errors.MustBeWhole);
    if (n === 1)
        return 1;
    if (n === 2)
        return 2;
    var result = 2;
    for (var x = 3; x <= n; x++) {
        result *= x;
    }
    return result;
}
module.exports = factorial;

},{"../errors":30,"./isNumber":6,"./isWhole":7}],5:[function(require,module,exports){
var isNumber = require("./isNumber");
var errors = require("../errors");
function isEven(value) {
    if (!isNumber(value))
        throw new TypeError(errors.MustBeNumber);
    return value % 2 === 0;
}
module.exports = isEven;

},{"../errors":30,"./isNumber":6}],6:[function(require,module,exports){
function isNumber(value) {
    return !isNaN(value);
}
module.exports = isNumber;

},{}],7:[function(require,module,exports){
var errors = require("../errors");
var isNum = require("./isNumber");
function isWhole(value) {
    if (!isNum(value))
        throw new TypeError(errors.MustBeNumber);
    return value % 1 === 0;
}
module.exports = isWhole;

},{"../errors":30,"./isNumber":6}],8:[function(require,module,exports){
var toArray = require("./toArray");
/**
 * @return Number Returns the highest value in a dataset/array
 */
function max(data) {
    return toArray(data).reduce(getMax);
}
function getMax(left, right) {
    return left > right
        ? left
        : right;
}
module.exports = max;

},{"./toArray":15}],9:[function(require,module,exports){
var toArray = require("./toArray");
/**
 * @return Number Returns the lowest value in a dataset/array
 */
function min(data) {
    return toArray(data).reduce(getMin);
}
function getMin(left, right) {
    return left > right
        ? right
        : left;
}
module.exports = min;

},{"./toArray":15}],10:[function(require,module,exports){
var min = require("./min");
var max = require("./max");
function range(data) {
    var minimum = min(data);
    var maximum = max(data);
    var difference = maximum - minimum;
    var result = {
        minimum: minimum,
        maximum: maximum,
        difference: difference
    };
    return result;
}
module.exports = range;

},{"./max":8,"./min":9}],11:[function(require,module,exports){
function round(value, decimalPlaces) {
    decimalPlaces = Math.round(decimalPlaces) || 0;
    var noDecimalPlaces = decimalPlaces === 0;
    if (noDecimalPlaces)
        return Math.round(value);
    var multiplier = Math.pow(10, decimalPlaces);
    return Math.round(value * multiplier) / multiplier;
}
module.exports = round;

},{}],12:[function(require,module,exports){
var toArray = require("./toArray");
function sort(data) {
    var dataset = toArray(data);
    return dataset.sort(function (l, r) { return l - r; });
}
module.exports = sort;

},{"./toArray":15}],13:[function(require,module,exports){
var toArray = require("./toArray");
function sort(data) {
    var dataset = toArray(data);
    return dataset.sort(function (l, r) { return r - l; });
}
module.exports = sort;

},{"./toArray":15}],14:[function(require,module,exports){
var toArray = require("./toArray");
function sum(data) {
    var dataset = toArray(data);
    var add = function (left, right) { return left + right; };
    return dataset.reduce(add);
}
module.exports = sum;

},{"./toArray":15}],15:[function(require,module,exports){
var validateArray = require("./validateArray");
var errors = require("../errors");
function convert(data) {
    if (data instanceof Array)
        return validateArray(data);
    if (typeof data !== "object")
        throw new TypeError(errors.MustBeArrayOrObject);
    var dot = function (key) { return data[key]; };
    return validateArray(Object.keys(data).map(dot));
}
module.exports = convert;

},{"../errors":30,"./validateArray":16}],16:[function(require,module,exports){
var isNumber = require("./isNumber");
var errors = require("../errors");
function validate(data) {
    var isValid = data.every(isNumber);
    if (isValid)
        return data.slice();
    throw new TypeError(errors.AllMustBeNumbers);
}
module.exports = validate;

},{"../errors":30,"./isNumber":6}],17:[function(require,module,exports){
var mean = require("./mean");
var mode = require("./mode");
var median = require("./median");
var stdDev = require("./stdDev");
var variance = require("./variance");
var zScore = require("./zScore");
var firstQuartile = require("./firstQuartile");
var thirdQuartile = require("./thirdQuartile");
var interQuartileRange = require("./interQuartileRange");
var api = {
    mean: mean,
    mode: mode,
    median: median,
    stdDev: stdDev,
    variance: variance,
    zScore: zScore,
    firstQuartile: firstQuartile,
    thirdQuartile: thirdQuartile,
    interQuartileRange: interQuartileRange
};
module.exports = api;

},{"./firstQuartile":18,"./interQuartileRange":19,"./mean":20,"./median":21,"./mode":22,"./stdDev":23,"./thirdQuartile":24,"./variance":25,"./zScore":26}],18:[function(require,module,exports){
var toArray = require("../common/toArray");
var isWhole = require("../common/isWhole");
var sortAsc = require("../common/sortAsc");
var errors = require("../errors");
function firstQuartile(data) {
    var dataset = sortAsc(toArray(data));
    if (dataset.length < 4)
        throw new Error(errors.InsufficientValues);
    var offset = dataset.length * 0.25;
    var offsetFloored = Math.floor(offset);
    if (!isWhole(offset))
        return dataset[offsetFloored];
    var otherOffset = offsetFloored - 1;
    return (dataset[offsetFloored] + dataset[otherOffset]) / 2;
}
module.exports = firstQuartile;

},{"../common/isWhole":7,"../common/sortAsc":12,"../common/toArray":15,"../errors":30}],19:[function(require,module,exports){
var firstQuartile = require("./firstQuartile");
var thirdQuartile = require("./thirdQuartile");
function range(data) {
    var first = firstQuartile(data);
    var third = thirdQuartile(data);
    return third - first;
}
module.exports = range;

},{"./firstQuartile":18,"./thirdQuartile":24}],20:[function(require,module,exports){
var toArray = require("../common/toArray");
var sum = require("../common/sum");
function mean(data) {
    var dataset = toArray(data);
    return sum(dataset) / dataset.length;
}
module.exports = mean;

},{"../common/sum":14,"../common/toArray":15}],21:[function(require,module,exports){
var toArray = require("../common/toArray");
var isEven = require("../common/isEven");
function median(data) {
    var dataset = toArray(data);
    var sortedDataset = dataset.sort(function (left, right) { return left - right; });
    var middleIndex = sortedDataset.length / 2;
    if (!isEven(dataset.length)) {
        var index = Math.floor(middleIndex);
        return sortedDataset[index];
    }
    var lowerIndex = middleIndex - 1;
    return (sortedDataset[lowerIndex] + sortedDataset[middleIndex]) / 2;
}
module.exports = median;

},{"../common/isEven":5,"../common/toArray":15}],22:[function(require,module,exports){
var max = require("../common/max");
var frequencyTable = require("../frequency/table");
function mode(data) {
    var table = frequencyTable(data);
    var maximum = max(table);
    var isMax = function (key) { return table[key] === maximum; };
    var toNum = function (key) { return Number(key); };
    return Object
        .keys(table)
        .filter(isMax)
        .map(toNum);
}
module.exports = mode;

},{"../common/max":8,"../frequency/table":35}],23:[function(require,module,exports){
var variance = require("./variance");
function stdDev(data) {
    var populationVariance = variance(data);
    return Math.sqrt(populationVariance);
}
module.exports = stdDev;

},{"./variance":25}],24:[function(require,module,exports){
var toArray = require("../common/toArray");
var isWhole = require("../common/isWhole");
var sortAsc = require("../common/sortAsc");
var errors = require("../errors");
function thirdQuartile(data) {
    var dataset = sortAsc(toArray(data));
    if (dataset.length < 4)
        throw new Error(errors.InsufficientValues);
    var offset = dataset.length * 0.75;
    var offsetFloored = Math.floor(offset);
    if (!isWhole(offset))
        return dataset[offsetFloored];
    var otherOffset = offsetFloored - 1;
    return (dataset[offsetFloored] + dataset[otherOffset]) / 2;
}
module.exports = thirdQuartile;

},{"../common/isWhole":7,"../common/sortAsc":12,"../common/toArray":15,"../errors":30}],25:[function(require,module,exports){
var toArray = require("../common/toArray");
var sum = require("../common/sum");
var mean = require("./mean");
/**
 * Variance in a population
 * Averaged squared deviation from the mean
 */
function variance(data) {
    var dataset = toArray(data);
    var dataMean = mean(data);
    var calcVariance = function (val) { return squared(val - dataMean); };
    var squared = function (val) { return Math.pow(val, 2); };
    var variances = dataset.map(calcVariance);
    return sum(variances) / dataset.length;
}
module.exports = variance;

},{"../common/sum":14,"../common/toArray":15,"./mean":20}],26:[function(require,module,exports){
var stdDev = require("./stdDev");
var mean = require("./mean");
function zScore(data, value) {
    return (value - mean(data)) / stdDev(data);
}
module.exports = zScore;

},{"./mean":20,"./stdDev":23}],27:[function(require,module,exports){
var chiSquare = require("./chiSquare");
var poisson = require("./poisson");
var api = {
    chiSquare: chiSquare,
    poisson: poisson
};
module.exports = api;

},{"./chiSquare":28,"./poisson":29}],28:[function(require,module,exports){
var errors = require("../errors");
var isNum = require("../common/isNumber");
function chiSquare(observedFrequency, expectedFrequency) {
    if (!isNum(observedFrequency) || !isNum(expectedFrequency))
        throw new TypeError(errors.AllMustBeNumbers);
    var top = Math.pow(observedFrequency - expectedFrequency, 2);
    return top / expectedFrequency;
}
module.exports = chiSquare;

},{"../common/isNumber":6,"../errors":30}],29:[function(require,module,exports){
var factorial = require("../common/factorial");
var e = 2.71828;
function poisson(x, avgSuccessRate) {
    var first = Math.pow(e, -avgSuccessRate);
    var second = Math.pow(avgSuccessRate, x);
    var third = factorial(x);
    return first * second / third;
}
module.exports = poisson;

},{"../common/factorial":4}],30:[function(require,module,exports){
var errors = {
    MustBeNumber: "Input must be a number",
    AllMustBeNumbers: "All values must be numbers",
    MustBeArrayOrObject: "Input must be array or object",
    HistogramOneOption: "Must provide either binSize or binCount, but not both",
    InsufficientValues: "Not enough inputs supplied",
    MustBeAtLeastOne: "Input must at least 1",
    MustBeWhole: "Input must be a whole number",
    AllMustBeFunctions: "All inputs must be functions",
    AllFuncsMustBeUnary: "All functions except the right-most must have unary arity (take 1 argument)"
};
module.exports = errors;

},{}],31:[function(require,module,exports){
var histogram = require("./histogram");
var relative = require("./relative");
var table = require("./table");
var api = {
    table: table,
    histogram: histogram,
    relative: relative
};
module.exports = api;

},{"./histogram":33,"./relative":34,"./table":35}],32:[function(require,module,exports){
var isNum = require("../common/isNumber");
var range = require("../common/range");
var errors = require("../errors");
function binSettings(dataset, binOptions) {
    binOptions = binOptions || {
        binCount: 10,
        binSize: 0
    };
    if (!!binOptions.binCount && !!binOptions.binSize)
        throw new TypeError(errors.HistogramOneOption);
    if (!isNum(binOptions.minimum) || !isNum(binOptions.maximum)) {
        var dataRange = range(dataset);
        binOptions.maximum = dataRange.maximum;
        binOptions.minimum = dataRange.minimum;
    }
    binOptions.difference = binOptions.maximum - binOptions.minimum;
    var isValidBinCount = isNum(binOptions.binCount);
    var isValidBinSize = isNum(binOptions.binSize);
    if (!isValidBinCount) {
        binOptions.binCount = Math.ceil(binOptions.difference / binOptions.binSize);
        binOptions.binSize = binOptions.difference / binOptions.binCount;
        isValidBinSize = true;
    }
    if (!isValidBinSize) {
        binOptions.binSize = binOptions.difference / binOptions.binCount;
    }
    return binOptions;
}
module.exports = binSettings;

},{"../common/isNumber":6,"../common/range":10,"../errors":30}],33:[function(require,module,exports){
var binSettings = require("./binSettings");
var toArray = require("../common/toArray");
var isEven = require("../common/isEven");
function histogram(data, binOptions) {
    var dataset = toArray(data);
    binOptions = binSettings(dataset, binOptions);
    var result = getEmptyHistogram(binOptions.binCount);
    var roughBin = function (val) { return (val - binOptions.minimum) / binOptions.binSize; };
    var realBin = function (val) { return Math.floor(roughBin(val)) + 1; };
    var adjustBin = function (val) { return isEven(binOptions.binSize)
        ? val - 1
        : val; };
    dataset.forEach(function (value) {
        var binNumber = adjustBin(realBin(value));
        result[binNumber]++;
    });
    return result;
}
function getEmptyHistogram(binCount) {
    var emptyHistogram = {};
    for (var x = 1; x <= binCount; x++) {
        emptyHistogram[x] = 0;
    }
    return emptyHistogram;
}
module.exports = histogram;

},{"../common/isEven":5,"../common/toArray":15,"./binSettings":32}],34:[function(require,module,exports){
var toArray = require("../common/toArray");
var sum = require("../common/sum");
var table = require("./table");
function relative(data) {
    var dataset = table(toArray(data));
    var total = sum(dataset);
    var percent = function (val) { return dataset[val] / total; };
    var reducer = function (obj, prop) {
        obj[prop] = percent(prop);
        return obj;
    };
    return Object
        .keys(dataset)
        .reduce(reducer, {});
}
module.exports = relative;

},{"../common/sum":14,"../common/toArray":15,"./table":35}],35:[function(require,module,exports){
var common = require("../common/api");
function table(data) {
    var dataset = common.toArray(data);
    var addFreq = function (freqs, val) {
        freqs[val] = (freqs[val] || 0) + 1;
        return freqs;
    };
    return dataset.reduce(addFreq, {});
}
module.exports = table;

},{"../common/api":1}],36:[function(require,module,exports){
var common = require("./common/api");
var descriptive = require("./descriptive/api");
var frequency = require("./frequency/api");
var distribution = require("./distribution/api");
var set = require("./set/api");
var Analysis = {
    common: common,
    descriptive: descriptive,
    distribution: distribution,
    frequency: frequency,
    set: set
};
if (window)
    window.Analysis = Analysis;
module.exports = Analysis;

},{"./common/api":1,"./descriptive/api":17,"./distribution/api":27,"./frequency/api":31,"./set/api":37}],37:[function(require,module,exports){
var distinct = require("./distinct");
var intersect = require("./intersect");
var union = require("./union");
var set = {
    distinct: distinct,
    intersect: intersect,
    union: union
};
module.exports = set;

},{"./distinct":38,"./intersect":39,"./union":40}],38:[function(require,module,exports){
var toArray = require("../common/toArray");
function distinct(data) {
    var dataset = toArray(data);
    var isIn = function (array, value) { return array.some(function (v) { return value === v; }); };
    var reducer = function (array, value) {
        if (!isIn(array, value))
            array.push(value);
        return array;
    };
    return dataset.reduce(reducer, []);
}
module.exports = distinct;

},{"../common/toArray":15}],39:[function(require,module,exports){
var toArray = require("../common/toArray");
function intersect(left, right) {
    var leftData = toArray(left);
    var rightData = toArray(right);
    var isInArray = function (array, value) { return array.some(function (v) { return value === v; }); };
    var isInRight = function (value) { return rightData.some(function (v) { return value === v; }); };
    var reducer = function (array, value) {
        if (isInArray(array, value))
            return array;
        if (isInRight(value))
            array.push(value);
        return array;
    };
    return leftData.reduce(reducer, []);
}
module.exports = intersect;

},{"../common/toArray":15}],40:[function(require,module,exports){
var distinct = require("./distinct");
function union(left, right) {
    var allValues = distinct(left)
        .concat(distinct(right));
    return distinct(allValues);
}
module.exports = union;

},{"./distinct":38}]},{},[36]);
