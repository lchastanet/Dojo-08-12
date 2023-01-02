const pow = require("./math-pow.js");

const assert = require("assert");

assert.strictEqual(typeof pow, "function");
assert.strictEqual(pow.length, 2);
assert.strictEqual(pow(2, 0), 1);
assert.strictEqual(pow(2, 1), 2);
assert.strictEqual(pow(2, 2), 4);
assert.strictEqual(pow(3, 3), 27);
assert.strictEqual(pow("tacos", 2), NaN);
assert.strictEqual(pow(42), NaN);
