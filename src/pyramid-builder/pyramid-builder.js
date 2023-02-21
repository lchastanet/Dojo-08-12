/*
Create a function `build` which returns a pyramid of `n` floors, from top to bottom, stored in a string array.
Example :
n = 5 :
[
    "    *    ",
    "   ***   ",
    "  *****  ",
    " ******* ",
    "*********"
]
If `n` is zero or negative, throw a RangeError.
If `n` is null or not a number, throw a TypeError.
*/

// TODO add your code here
function build(n) {
  let arr = [];

  if (n === 0 || n < 0) {
    throw RangeError("true");
  }

  if (typeof n !== "number") {
    throw TypeError("true");
  }

  for (let i = 1; i <= n; i++) {
    let str = " ".repeat(n - i);
    let str2 = "*".repeat(i * 2 - 1);

    arr.push(str + str2 + str);
  }
  return arr;
}

module.exports = build;
