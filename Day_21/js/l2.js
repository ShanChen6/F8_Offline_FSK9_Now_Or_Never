var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];

function newArr(array) {
  var result = [];

  function flat(element) {
    if (Array.isArray(element)) {
      for (var i = 0; i < element.length; i++) {
        flat(element[i]);
      }
    } else {
      result.push(element);
    }
  }

  flat(array);
  return result;
}

var flattenedArr = newArr(arr);
console.log(flattenedArr);
