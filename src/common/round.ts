export = round

function round(value: number, decimalPlaces?: number) {
  decimalPlaces = Math.round(decimalPlaces || 0)
  var noDecimalPlaces = decimalPlaces === 0

  if (noDecimalPlaces) return Math.round(value)

  var multiplier = Math.pow(10, decimalPlaces)

  return Math.round(value * multiplier) / multiplier
}
