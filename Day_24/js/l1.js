function sum() {
  var numbers = Array.prototype.slice.call(arguments);
  var total = 0;

  for (var i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] !== "number" || isNaN(numbers[i])) {
      return "Error: All arguments must be valid numbers";
    }
    total += numbers[i];
  }

  return total;
}

console.log(sum(1, 2, 3, 4));
console.log(sum(1, "2", 3));
console.log(sum(1, NaN, 3));
