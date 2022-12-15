/*
Your goal here will be to build a virtual chessboard which must look like this :
[
  ["a - 1", "a - 2", "a - 3", "a - 4", "a - 5", "a - 6", "a - 7", "a - 8"],
  ["b - 1", "b - 2", "b - 3", "b - 4", "b - 5", "b - 6", "b - 7", "b - 8"],
  ["c - 1", "c - 2", "c - 3", "c - 4", "c - 5", "c - 6", "c - 7", "c - 8"],
  ["d - 1", "d - 2", "d - 3", "d - 4", "d - 5", "d - 6", "d - 7", "d - 8"],
  ["e - 1", "e - 2", "e - 3", "e - 4", "e - 5", "e - 6", "e - 7", "e - 8"],
  ["f - 1", "f - 2", "f - 3", "f - 4", "f - 5", "f - 6", "f - 7", "f - 8"],
  ["g - 1", "g - 2", "g - 3", "g - 4", "g - 5", "g - 6", "g - 7", "g - 8"],
  ["h - 1", "h - 2", "h - 3", "h - 4", "h - 5", "h - 6", "h - 7", "h - 8"],
]
*/
// TODO add your code here
function chessboard() {
  const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
  //const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  const chessboard = [];

  for (let i = 0; i < letters.length; i++) {
    const line = [];
    for (let j = 0; j < letters.length; j++) {
      const caser = `${letters[i]} - ${j + 1}`;
      line.push(caser);
    }
    chessboard.push(line);
  }

  return chessboard;
}

// function chessboard2() {
//   const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
//   const chess = letters.map((letter) => {
//     return [
//       `${letter} - 1`,
//       `${letter} - 2`,
//       `${letter} - 3`,
//       `${letter} - 4`,
//       `${letter} - 5`,
//       `${letter} - 6`,
//       `${letter} - 7`,
//       `${letter} - 8`,
//     ];
//   });
//   return chess;
// }

// function chessboard() {
//   const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
//   const chess = letters.map((letter) => {
//     const line = [];
//     for (let i = 1; i <= 8; i++) {
//       line.push(`${letter} - ${i}`);
//     }
//     return line;
//   });
//   return chess;
// }

function chessboard() {
  const chessboard = [];

  for (let i = 0; i < 8; i++) {
    chessboard.push(String.fromCharCode(i + 97));
  }

  return chessboard.map((letter) => {
    const line = [];

    for (let i = 1; i <= 8; i++) {
      line.push(`${letter} - ${i}`);
    }

    return line;
  });
}

console.log(chessboard());

module.exports = chessboard;
