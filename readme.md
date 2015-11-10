### Analysis.js
An statistics library for the behavioural sciences written in TypeScript.  

[![NPM version](http://img.shields.io/npm/v/analysis.svg?style=flat)](https://www.npmjs.org/package/analysis)
[![Travis build status](http://img.shields.io/travis/Seikho/analysis/master.svg?style=flat)](https://travis-ci.org/Seikho/analysis)  
** Under construction **    

#### Dependencies

#### Installation
```
npm install --save analysis
```

#### Sample usage
All samples use ES6/TypeScript syntax.

Using Node.JS:
```javascript
import * as Analysis from 'analysis'

/** 
 * TODO ...
 */
```

In the browser with webpack or browserify:
```javascript
// app.js with jQuery
var stats = require('analysis');

$.get('/api/data')
    .then(data => stats.descriptive.mode(data));
```

#### API

```
TODO
```

#### Testing

Clone the project and install the dependencies:
```
git clone https://github.com/seikho/analysis
cd analysis && npm install
```

Run the unit tests:
```
npm run test
```