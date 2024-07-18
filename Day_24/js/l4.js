Array.prototype.reduce2 = function (callback, initialValue) {
  // var accumulator = initialValue ? initialValue : this[0];
  // var startPosititon = initialValue ? 0 : 1;
  var accumulator = initialValue;
  for (var i = 0; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }
  return accumulator;
};

var numbers = [1, 2, 3, 4];
var sum = numbers.reduce2((acc, curr) => acc + curr, 0);
console.log(sum);
