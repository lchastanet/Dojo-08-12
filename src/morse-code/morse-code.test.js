const assert = require("assert");
const decode = require("./morse-code.js");

test("morse-code", () => {
  assert.strictEqual(typeof decode, "function");
  assert.strictEqual(decode.length, 1);
  assert.strictEqual(decode(".-- .. .-.. -.."), "WILD");
  assert.strictEqual(decode("- .- -.-. --- ..."), "TACOS");
  assert.strictEqual(decode(".-- .. .-.. -..   -.-. --- -.. ."), "WILD CODE");
});
