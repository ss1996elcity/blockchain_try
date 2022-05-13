//import { sum, difference, product, quotient } from './functions.js'
//import * as mathFunctions from './functions.js'
const mathFunctions = require('../functions');
const x = 10
const y = 5
document.getElementById('x').textContent = x
document.getElementById('y').textContent = y
document.getElementById('addition').textContent = mathFunctions.sum(x, y)
document.getElementById('subtraction').textContent = mathFunctions.difference(x, y)
document.getElementById('multiplication').textContent = mathFunctions.product(x, y)
document.getElementById('division').textContent = mathFunctions.quotient(x, y)