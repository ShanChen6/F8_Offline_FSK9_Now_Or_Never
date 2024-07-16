function sum() {
  var numbers = Array.prototype.slice.call(arguments);

  for (var i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] !== "number") {
      return "Error: All arguments must be numbers";
    }
  }

  var total = numbers.reduce(function (total, num) {
    return total + num;
  }, 0);

  return total;
}

console.log(sum(1, 2, 3, 4));
console.log(sum(1, "2", 3));
