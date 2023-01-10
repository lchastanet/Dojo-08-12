const duration = require("./duration");

test("convertTime function exists", () => {
  expect(typeof duration).toBe("function");
});

test("convertTime as one parameter", () => {
  expect(duration.length).toBe(1);
});

// TODO add your tests here
