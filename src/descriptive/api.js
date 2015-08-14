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
//# sourceMappingURL=api.js.map