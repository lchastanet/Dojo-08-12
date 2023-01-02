/*
Implement a function `uniq` which takes as input a sequence and returns a sequence in which all duplicate elements following each other have been reduced to one instance.
Example:
* ['a','a','b','b','c','a','b','c'] --> ['a','b','c','a','b','c']
Don't mutate the parameter.
Bonus : do not use a loop
*/

// TODO add your code here

// function uniq(arr) {
//   return arr
//     .map((item, index) =>
//       arr[index + 1] !== item || item === undefined ? item : null
//     )
//     .filter((item) => item !== null);
// }

function uniq(array) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== array[i + 1] || array[i] === undefined) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

// function uniq(array) {
//   if (array.length === 0) {
//     return [];
//   }
//   const result = [array[0]];
//   array.reduce((prev, curr) => {
//     if (prev !== curr) {
//       result.push(curr);
//     }

//     return curr;
//   });
//   return result;
// }

// const uniq = (arr) =>
//   arr.reduce(
//     (acc, curr, i) =>
//       curr !== arr[i + 1] || curr === undefined ? [...acc, curr] : acc,
//     []
//   );

module.exports = uniq;
