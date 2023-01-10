/*
Create a function `compare` which returns the number of identical characters at same position, from two String of same length.
If the two arguments doesn't have the same length or at least one is null, return -1 instead.
Example:
  string1  string2     result
* "a"      "a"         1
* "a"      "b"         0
* "aa"     "ba"        1
* "cassis" "castor"    3
* "tacos"  "poulpe"   -1
* null     "a"        -1
Add you own tests.
*/

// TODO add your code here

function compare(string1, string2) {
  let result = 0;
  if (
    string1 === null ||
    string2 === null ||
    string1.length !== string2.length
  ) {
    return -1;
  }
  for (let i = 0; i < string1.length; i++) {
    if (string1[i] === string2[i]) {
      result++;
    }
  }
  return result;
}

module.exports = compare;
