var arr = [
  ["a", 1, true],
  ["b", 2, false],
];

function newArr(array) {
  var strings = [];
  var numbers = [];
  var booleans = [];

  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].length; j++) {
      var element = array[i][j];
      if (typeof element === "string") {
        strings.push(element);
      } else if (typeof element === "number") {
        numbers.push(element);
      } else if (typeof element === "boolean") {
        booleans.push(element);
      }
    }
  }

  return [strings, numbers, booleans];
}

var separatedArr = newArr(arr);
console.log(separatedArr);
