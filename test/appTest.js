const assert = require("chai").assert;
const app = require("../app");

describe("App", function () {
  describe("hello", function () {
    it("hello should return hello", function () {
      let result = app.hello();
      assert.equal(result, "hello");
    });

    it("hello should return type string", function () {
      let result = app.hello();
      assert.typeOf(result, "string");
    });
  });

  describe("greet", function () {
    it("greet should return This is a greeting", function () {
      let result = app.greet();
      assert.equal(result, "This is a greeting");
    });

    it("greet should return type string", function () {
      let result = app.greet();
      assert.typeOf(result, "string");
    });
  });

  describe("time", function () {
    it("time should return current time", function () {
      let result = app.time();
      tnow = Date.now();
      assert.equal(result, tnow);
    });

    it("time should return type number", function () {
      let result = app.time();
      assert.typeOf(result, "number");
    });
  });
});
