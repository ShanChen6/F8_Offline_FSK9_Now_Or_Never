// Sử dụng hàm bubbleSort để sắp xếp mảng ban đầu.
// Sử dụng hàm insertAndSort để chèn số mới vào đúng vị trí trong mảng đã sắp xếp.

var numbers = [5, 1, 9, 8, 10];
function bubbleSort(arr) {
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // Đổi chỗ hai phần tử
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

function insertAndSort(arr, num) {
  var i;
  for (i = arr.length - 1; i >= 0 && arr[i] > num; i--) {
    arr[i + 1] = arr[i]; // Dịch chuyển các phần tử lớn hơn num lên một vị trí
  }
  arr[i + 1] = num;
  return arr;
}

bubbleSort(numbers);

var newNumber = 7;
var sortedNumbersWithNew = insertAndSort(numbers, newNumber);

console.log(sortedNumbersWithNew); // [1, 5, 7, 8, 9, 10]
