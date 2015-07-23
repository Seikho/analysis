var curry = require("./curry");
var isNumber = require("./isNumber");
var max = require("./max");
var min = require("./min");
var objectToArray = require("./objectToArray");
var range = require("./range");
var round = require("./round");
var sum = require("./sum");
var validateArray = require("./validateArray");
var api = {
    min: min,
    max: max,
    range: range,
    round: round,
    validateArray: validateArray,
    objectToArray: objectToArray,
    sum: sum,
    isNumber: isNumber,
    curry: curry
};
module.exports = api;
//# sourceMappingURL=api.js.map