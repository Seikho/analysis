var common = require("./common/api");
var descriptive = require("./descriptive/api");
var frequency = require("./frequency/api");
var distribution = require("./distribution/api");
var Analysis = {
    common: common,
    descriptive: descriptive,
    frequency: frequency,
    distribution: distribution
};
if (window)
    window.Analysis = Analysis;
module.exports = Analysis;
//# sourceMappingURL=index.js.map