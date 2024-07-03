function removeDuplicates(arr) {
  var uniqueArray = [];

  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;

    for (let j = 0; j < uniqueArray.length; j++) {
      if (arr[i] === uniqueArray[j]) {
        isDuplicate = true;
        break;
      }
    }

    if (!isDuplicate) {
      uniqueArray.push(arr[i]);
    }
  }

  return uniqueArray;
}

var myArray = [1, 2, 2, 3, 4, 4, 5, 5, 5];
var result = removeDuplicates(myArray);
console.log(result);
