var numbers = [1, 2, 4, 5, 7, 39, 9, 15];
var max = numbers[0];
var min = numbers[0];

for (var index in numbers) {
  if (max < numbers[index]) {
    max = numbers[index];
  }
}

for (var index in numbers) {
  if (min > numbers[index]) {
    min = numbers[index];
  }
}
console.log(max);
console.log(`Thứ tự của ${max} trong mảng là ${numbers.indexOf(max)}`);
console.log(min);
console.log(`Thứ tự của ${min} trong mảng là ${numbers.indexOf(min)}`);
