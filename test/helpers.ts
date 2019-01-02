import Analysis = require('../index')
import chai = require('chai')
var expect = chai.expect

export function arrayIsEqual(left: any[], right: any[]) {
  var isEqual = (value: any, index: number) =>
    expect(value).to.equal(right[index])

  expect(Array.isArray(left)).to.equal(Array.isArray(right))

  expect(left.length).to.equal(right.length)

  left.forEach(isEqual)
}

export function datasetIsEquiv(
  left: Analysis.Dataset,
  right: Analysis.Dataset
) {
  var rightHasKey = (key: any) => right[key] != null
  var isEqual = (key: any) => expect(left[key]).to.equal(right[key])

  var isTrue = Object.keys(left).every(rightHasKey)
  expect(isTrue).to.be.true

  Object.keys(left).forEach(isEqual)
}

export function double(value: number): number {
  return value * 2
}

export function halve(value: number): number {
  return value / 2
}
