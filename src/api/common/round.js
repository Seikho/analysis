function round(value, decimalPlaces) {
    decimalPlaces = Math.round(decimalPlaces) || 0;
    var noDecimalPlaces = decimalPlaces === 0;
    if (noDecimalPlaces)
        return Math.round(value);
    var multiplier = Math.pow(10, decimalPlaces);
    return Math.round(value * multiplier) / multiplier;
}
module.exports = round;
//# sourceMappingURL=round.js.map