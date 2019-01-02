var errors = {
  MustBeNumber: 'Input must be a number',
  AllMustBeNumbers: 'All values must be numbers',
  MustBeArrayOrObject: 'Input must be array or object',
  HistogramOneOption: 'Must provide either binSize or binCount, but not both',
  InsufficientValues: 'Not enough inputs supplied',
  MustBeAtLeastZero: 'Input must at least zero (0)',
  MustBeAtLeastOne: 'Input must at least one (1)',
  MustBeWhole: 'Input must be a whole number',
  AllMustBeFunctions: 'All inputs must be functions',
  AllFuncsMustBeUnary:
    'All functions except the right-most must have unary arity (take 1 argument)',
  EventsMustBeAtLeastOne: 'Number of events must be at least one (1)',
  RandomVariableMustBeAtLeastZero:
    'Random variable (x) must be at least zero (0)'
}

export = errors
