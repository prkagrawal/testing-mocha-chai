module.exports = {
  hello: function () {
    return "hello";
  },
  greet: function () {
    return "This is a greeting";
  },
  time: function () {
    let t = Date.now();
    return t;
  },
};
