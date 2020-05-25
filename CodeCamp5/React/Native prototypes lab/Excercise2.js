Function.prototype.defer = function (ms) {
  let f = this;
  return function (...arg) {
    setTimeout(() => f.apply(this, arg), ms);
  };
};

function f(a, b) {
  console.log(a + b);
}

f.defer(10000)(1, 2);
