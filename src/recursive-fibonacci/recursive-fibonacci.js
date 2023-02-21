const assert = require("assert");
const fibo = require("./recursive-fibonacci.js");

assert.strictEqual(typeof fibo, "function");
assert.strictEqual(fibo.length, 1);
assert.strictEqual(fibo.toString().includes("for "), false, "don't use a loop");
assert.strictEqual(
  fibo.toString().includes("while "),
  false,
  "don't use a loop"
);
assert.strictEqual(
  fibo.toString().includes("fibo("),
  true,
  "fibo must be recursive"
);

// TODO add your tests:
