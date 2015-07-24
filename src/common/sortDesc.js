var toArray = require("./toArray");
function sort(data) {
    var dataset = toArray(data);
    return dataset.sort(function (l, r) { return r - l; });
}
module.exports = sort;
//# sourceMappingURL=sortDesc.js.map