var mean = require("./mean");
var mode = require("./mode");
var median = require("./median");
var stdDev = require("./stdDev");
var variance = require("./variance");
var zScore = require("./zScore");
var firstQuartile = require("./firstQuartile");
var api = {
    mean: mean,
    mode: mode,
    median: median,
    stdDev: stdDev,
    variance: variance,
    zScore: zScore,
    firstQuartile: firstQuartile,
    thirdQuartile: null,
    quartileRange: null
};
module.exports = api;
//# sourceMappingURL=api.js.map