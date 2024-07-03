var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 17, 23];
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function averageOfPrimes(arr) {
  var sum = 0;
  var count = 0;

  for (var i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      sum += arr[i];
      count++;
    }
  }

  if (count === 0) {
    return "Không có số nguyên tố";
  }

  var average = sum / count;
  return `Trung bình các số nguyên tố trong mảng là ${average}`;
}

console.log(averageOfPrimes(numbers));
