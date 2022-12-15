/*
Create a function `pow` which given two arguments, base and exponent, returns the base to the exponent power, as in base^exponent.
The base and exponent will only have positive values (you don't need to check this).
If an argument is not a number, return NaN.
* pow(2, 0) -> 1
* pow(2, 1) -> 2
* pow(2, 2) -> 4
* pow(3, 3) -> 27
* pow("tacos", 2) -> NaN
* pow(42) -> NaN
You can't use Math.pow(), the goal is to recreate this function!
*/

// TODO add your code here
function pow(base, exponent) {
  return base ** exponent;
}

module.exports = pow;
