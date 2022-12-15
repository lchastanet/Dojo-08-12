/*
A soccer match took place between 2 teams. You are given the list of goals scored in a table of numbers: each number represents a goal of one of the teams:
- 1 for a team 1 goal
- 2 for a team 2 goal

Create a function `getScore` which returns the string of the current scores and the winning team.
Example:
* points: [1, 1, 1], result: "3-0: team 1 wins the game"
* points: [2, 1, 2, 2], result: "1-3: team 2 wins the game"
* points: [1, 2, 1, 2], result: "2-2: draw"
* points: [], result: "0-0: draw"

If the argument is null, return "Illegal argument".

If a value of the argument is not 1 or 2, return "Illegal argument".
*/
// TODO add your code here

function getScore(arr) {
  if (arr === null) return "Illegal argument";
  if (arr.length === 0) return "0-0 : draw";

  let teamOneScore = 0;
  let teamTwoScore = 0;

  for (let num of arr) {
    if ((num !== 1 && num !== 2) || typeof num !== "number")
      return "Illegal argument";

    num === 1 ? teamOneScore++ : teamTwoScore++;
  }

  if (teamOneScore === teamTwoScore)
    return `${teamOneScore}-${teamTwoScore} : draw`;

  const winner = teamOneScore > teamTwoScore ? 1 : 2;

  return `${teamOneScore}-${teamTwoScore} : team ${winner} wins the game`;
}

module.exports = getScore;
