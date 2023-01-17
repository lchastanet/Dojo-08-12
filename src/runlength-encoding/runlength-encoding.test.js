const assert = require("assert");
const encode = require("./runlength-encoding.js");

test("runlength", () => {
  assert.strictEqual(typeof encode, "function");
  assert.strictEqual(encode.length, 1);
  // TODO write your tests here
});
