Array.prototype.push2 = function (...elements) {
  // Lấy độ dài hiện tại của mảng
  var length = this.length;

  // Thêm từng phần tử vào cuối mảng
  for (var i = 0; i < elements.length; i++) {
    this[length] = elements[i];
    length++;
  }
  this.length = length;
  return length;
};

// Sử dụng hàm push2
var arr = [1, 2, 3];
var newLength = arr.push2(4, 5);
console.log(arr);
console.log(newLength);
