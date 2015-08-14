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
//# sourceMappingURL=index.js.map