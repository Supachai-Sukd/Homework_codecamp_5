function f() {
  console.log("Hello!");
}

Function.prototype.defer = function (ms) {
  setTimeout((ms) => {
    f();
  }, ms);
};

f.defer(10000);
