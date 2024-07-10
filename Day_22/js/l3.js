function findNumber(number) {
  function compare(a, b) {
    return a - b;
  }
  number.sort(compare);

  return number.reduce((acc, curr) => {
    if (curr === acc) {
      return acc + 1;
    }
    return acc;
  }, 1);
}

var numbers = [3, 4, -1, 1];
var missNumber = findNumber(numbers);
console.log(missNumber);
