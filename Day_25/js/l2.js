Array.prototype.filter2 = function (callback) {
  var result = [];

  for (var i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

// Sử dụng hàm filter2
var numbers = [1, 2, 3, 4, 5, 6];
var evenNumbers = numbers.filter2(function (number) {
  return number % 2 === 0;
});
console.log(evenNumbers);
