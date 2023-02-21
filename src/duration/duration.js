/*
Create a function `convertTime` which converts a time formatted as "hh:mm" in a duration in minuts.
If the argument is not correctly formatted, return null.
* "02:30" -> 150
* "01:45" -> 105
* "01h45m" -> null
Add you own tests.
*/

// TODO add your code here

// const timeRegex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;

// const timeBis = time.match(timeRegex);
//     // console.log(timeBis);
//     if (!timeBis || time.length !== 5) {
//         return null;

function duration(hour) {
  const arr = hour.split(":");

  if (arr.length !== 2) return null;

  if (
    isNaN(arr[0]) ||
    parseInt(arr[0], 10) > 23 ||
    isNaN(arr[1]) ||
    parseInt(arr[1], 10) > 59
  )
    return null;

  return parseInt(arr[0], 10) * 60 + parseInt(arr[1], 10);
}

module.exports = duration;
