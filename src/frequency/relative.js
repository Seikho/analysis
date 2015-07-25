var toArray = require("../common/toArray");
var sum = require("../common/sum");
var table = require("./table");
function relative(data) {
    var dataset = table(toArray(data));
    var total = sum(dataset);
    var percent = function (val) { return dataset[val] / total; };
    var reducer = function (obj, prop) {
        obj[Number(prop)] = percent(prop);
        return obj;
    };
    return Object
        .keys(dataset)
        .reduce(percent, {});
}
module.exports = relative;
//# sourceMappingURL=relative.js.map