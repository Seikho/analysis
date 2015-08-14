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

},{"../errors":34}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
var isNum = require("./isNumber");
var errors = require("../errors");
var isWhole = require("./isWhole");
function factorial(n) {
    if (!isNum(n))
        throw new TypeError(errors.MustBeNumber);
    if (n < 0)
        throw new TypeError(errors.MustBeAtLeastZero);
    if (!isWhole(n))
        throw new TypeError(errors.MustBeWhole);
    if (n === 1 || n === 0)
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

},{"../errors":34,"./isNumber":6,"./isWhole":7}],5:[function(require,module,exports){
var isNumber = require("./isNumber");
var errors = require("../errors");
function isEven(value) {
    if (!isNumber(value))
        throw new TypeError(errors.MustBeNumber);
    return value % 2 === 0;
}
module.exports = isEven;

},{"../errors":34,"./isNumber":6}],6:[function(require,module,exports){
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

},{"../errors":34,"./isNumber":6}],8:[function(require,module,exports){
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

},{"../errors":34,"./validateArray":16}],16:[function(require,module,exports){
var isNumber = require("./isNumber");
var errors = require("../errors");
function validate(data) {
    var isValid = data.every(isNumber);
    if (isValid)
        return data.slice();
    throw new TypeError(errors.AllMustBeNumbers);
}
module.exports = validate;

},{"../errors":34,"./isNumber":6}],17:[function(require,module,exports){
var box = require("./box");
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
    box: box,
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

},{"./box":18,"./firstQuartile":19,"./interQuartileRange":20,"./mean":21,"./median":22,"./mode":23,"./stdDev":24,"./thirdQuartile":25,"./variance":26,"./zScore":27}],18:[function(require,module,exports){
var firstQuartile = require("./firstQuartile");
var thirdQuartile = require("./thirdQuartile");
var mean = require("./mean");
var median = require("./median");
var mode = require("./mode");
var range = require("../common/range");
var toArray = require("../common/toArray");
function box(data) {
    var dataset = toArray(data);
    return {
        mean: mean(dataset),
        mode: mode(dataset),
        median: median(dataset),
        range: range(dataset),
        lowerQuartile: firstQuartile(dataset),
        upperQuartile: thirdQuartile(dataset)
    };
}
module.exports = box;

},{"../common/range":10,"../common/toArray":15,"./firstQuartile":19,"./mean":21,"./median":22,"./mode":23,"./thirdQuartile":25}],19:[function(require,module,exports){
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

},{"../common/isWhole":7,"../common/sortAsc":12,"../common/toArray":15,"../errors":34}],20:[function(require,module,exports){
var firstQuartile = require("./firstQuartile");
var thirdQuartile = require("./thirdQuartile");
function range(data) {
    var first = firstQuartile(data);
    var third = thirdQuartile(data);
    return third - first;
}
module.exports = range;

},{"./firstQuartile":19,"./thirdQuartile":25}],21:[function(require,module,exports){
var toArray = require("../common/toArray");
var sum = require("../common/sum");
function mean(data) {
    var dataset = toArray(data);
    return sum(dataset) / dataset.length;
}
module.exports = mean;

},{"../common/sum":14,"../common/toArray":15}],22:[function(require,module,exports){
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

},{"../common/isEven":5,"../common/toArray":15}],23:[function(require,module,exports){
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

},{"../common/max":8,"../frequency/table":39}],24:[function(require,module,exports){
var variance = require("./variance");
function stdDev(data) {
    var populationVariance = variance(data);
    return Math.sqrt(populationVariance);
}
module.exports = stdDev;

},{"./variance":26}],25:[function(require,module,exports){
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

},{"../common/isWhole":7,"../common/sortAsc":12,"../common/toArray":15,"../errors":34}],26:[function(require,module,exports){
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

},{"../common/sum":14,"../common/toArray":15,"./mean":21}],27:[function(require,module,exports){
var stdDev = require("./stdDev");
var mean = require("./mean");
function zScore(data, value) {
    return (value - mean(data)) / stdDev(data);
}
module.exports = zScore;

},{"./mean":21,"./stdDev":24}],28:[function(require,module,exports){
var chiSquare = require("./chiSquare");
var poisson = require("./poisson");
var binomial = require("./binomial/index");
var api = {
    chiSquare: chiSquare,
    poisson: poisson,
    binomial: binomial
};
module.exports = api;

},{"./binomial/index":30,"./chiSquare":32,"./poisson":33}],29:[function(require,module,exports){
var factorial = require("../../common/factorial");
var isWhole = require("../../common/isWhole");
var errors = require("../../errors");
function probability(events, x) {
    if (typeof x !== "number" || typeof events !== "number")
        throw new TypeError(errors.MustBeNumber);
    if (!isWhole(events) || !isWhole(x))
        throw new TypeError(errors.MustBeWhole);
    if (events < 1)
        throw new TypeError(errors.EventsMustBeAtLeastOne);
    if (x < 0)
        throw new TypeError(errors.RandomVariableMustBeAtLeastZero);
    var first = factorial(events);
    var second = factorial(x);
    var third = factorial(events - x);
    var possibilities = Math.pow(2, events);
    return (first / (second * third));
}
module.exports = probability;

},{"../../common/factorial":4,"../../common/isWhole":7,"../../errors":34}],30:[function(require,module,exports){
var coefficient = require("./coefficient");
var table = require("./table");
module.exports = {
    coefficient: coefficient,
    table: table
};

},{"./coefficient":29,"./table":31}],31:[function(require,module,exports){
var errors = require("../../errors");
var coefficient = require("./coefficient");
var isWhole = require("../../common/isWhole");
function table(events) {
    if (typeof events !== "number")
        throw new TypeError(errors.MustBeNumber);
    if (!isWhole(events))
        throw new TypeError(errors.MustBeWhole);
    if (events < 1)
        throw new TypeError(errors.MustBeAtLeastOne);
    var result = {};
    var possibilities = Math.pow(2, events);
    for (var x = 0; x <= events; x++) {
        result[x] = coefficient(events, x) / possibilities;
    }
    return result;
}
module.exports = table;

},{"../../common/isWhole":7,"../../errors":34,"./coefficient":29}],32:[function(require,module,exports){
var errors = require("../errors");
var isNum = require("../common/isNumber");
function chiSquare(observedFrequency, expectedFrequency) {
    if (!isNum(observedFrequency) || !isNum(expectedFrequency))
        throw new TypeError(errors.AllMustBeNumbers);
    var top = Math.pow(observedFrequency - expectedFrequency, 2);
    return top / expectedFrequency;
}
module.exports = chiSquare;

},{"../common/isNumber":6,"../errors":34}],33:[function(require,module,exports){
var factorial = require("../common/factorial");
var e = 2.71828;
function poisson(x, avgSuccessRate) {
    var first = Math.pow(e, -avgSuccessRate);
    var second = Math.pow(avgSuccessRate, x);
    var third = factorial(x);
    return first * second / third;
}
module.exports = poisson;

},{"../common/factorial":4}],34:[function(require,module,exports){
var errors = {
    MustBeNumber: "Input must be a number",
    AllMustBeNumbers: "All values must be numbers",
    MustBeArrayOrObject: "Input must be array or object",
    HistogramOneOption: "Must provide either binSize or binCount, but not both",
    InsufficientValues: "Not enough inputs supplied",
    MustBeAtLeastZero: "Input must at least zero (0)",
    MustBeAtLeastOne: "Input must at least one (1)",
    MustBeWhole: "Input must be a whole number",
    AllMustBeFunctions: "All inputs must be functions",
    AllFuncsMustBeUnary: "All functions except the right-most must have unary arity (take 1 argument)",
    EventsMustBeAtLeastOne: "Number of events must be at least one (1)",
    RandomVariableMustBeAtLeastZero: "Random variable (x) must be at least zero (0)"
};
module.exports = errors;

},{}],35:[function(require,module,exports){
var histogram = require("./histogram");
var relative = require("./relative");
var table = require("./table");
var api = {
    table: table,
    histogram: histogram,
    relative: relative
};
module.exports = api;

},{"./histogram":37,"./relative":38,"./table":39}],36:[function(require,module,exports){
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

},{"../common/isNumber":6,"../common/range":10,"../errors":34}],37:[function(require,module,exports){
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

},{"../common/isEven":5,"../common/toArray":15,"./binSettings":36}],38:[function(require,module,exports){
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

},{"../common/sum":14,"../common/toArray":15,"./table":39}],39:[function(require,module,exports){
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

},{"../common/api":1}],40:[function(require,module,exports){
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
if (typeof window === "object")
    window.Analysis = Analysis;
module.exports = Analysis;

},{"./common/api":1,"./descriptive/api":17,"./distribution/api":28,"./frequency/api":35,"./set/api":41}],41:[function(require,module,exports){
var distinct = require("./distinct");
var intersect = require("./intersect");
var union = require("./union");
var set = {
    distinct: distinct,
    intersect: intersect,
    union: union
};
module.exports = set;

},{"./distinct":42,"./intersect":43,"./union":44}],42:[function(require,module,exports){
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

},{"../common/toArray":15}],43:[function(require,module,exports){
var curry = require("../common/curry");
var distinct = require("./distinct");
function intersect(left, right) {
    var leftData = distinct(left);
    var rightData = distinct(right);
    var isIn = function (value) { return leftData.some(function (v) { return value === v; }); };
    var push = curry(function (array, value) { return isIn(value) ? array.concat([value]) : array; });
    var result = rightData.reduce(push, []);
    return result;
}
module.exports = intersect;

},{"../common/curry":3,"./distinct":42}],44:[function(require,module,exports){
var distinct = require("./distinct");
function union(left, right) {
    var allValues = distinct(left)
        .concat(distinct(right));
    return distinct(allValues);
}
module.exports = union;

},{"./distinct":42}]},{},[40]);
