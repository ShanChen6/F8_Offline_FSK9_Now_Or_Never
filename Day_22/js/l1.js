function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (var i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function reverseNumber(num) {
  let reversed = 0;
  while (num > 0) {
    reversed = reversed * 10 + (num % 10);
    num = (num / 10) | 0;
  }
  return reversed;
}

function findSymmetricPrime(n) {
  let currentNumber = n + 1;
  while (true) {
    if (
      isPrime(currentNumber) &&
      currentNumber === reverseNumber(currentNumber)
    ) {
      return currentNumber;
    }
    currentNumber++;
  }
}

const n = 13;
const result = findSymmetricPrime(n);
console.log(`Số nguyên tố đối xứng lớn hơn hoặc bằng ${n} là: ${result}`);
