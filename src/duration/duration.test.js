const duration = require("./duration");

test("convertTime function exists", () => {
  expect(typeof duration).toBe("function");
});

test("convertTime as one parameter", () => {
  expect(duration.length).toBe(1);
});

test("first test", () => {
  expect(duration("02:30")).toBe(150);
});

test("first test", () => {
  expect(duration("01:45")).toBe(105);
});

test("first test", () => {
  expect(duration("01h45m")).toBe(null);
});

// TODO add your tests here
