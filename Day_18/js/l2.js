function reverseInteger(number) {
  var reversed = 0;
  while (number !== 0) {
    var digit = number % 10;
    reversed = reversed * 10 + digit;
    number = (number / 10) | 0;
  }
  return reversed;
}

// Ví dụ sử dụng:
var inputNumber = 123456;
var reversedNumber = reverseInteger(inputNumber);
console.log(`Số ${inputNumber} sau khi đảo ngược là: ${reversedNumber}`);
