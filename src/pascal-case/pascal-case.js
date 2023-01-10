/*
Create a function `pascalCase` which convert a sentence into upper case Camel Case, also known as Pascal Case.
Example:
* "this is sparta" > "ThisIsSparta"
* "sO rAdicAL DuDe" > "SoRadicalDude"
You can't use a loop!
Don't mutate the parameter.
*/

// TODO add your code here

function pascalCase(str) {
  //if (str.length === 0) return str;

  return str
    .split(" ")
    .map((element) => {
      return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
    })
    .join("");
}

module.exports = pascalCase;
