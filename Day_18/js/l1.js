function fibonacci(n, a = 0, b = 1, count = 1) {
  if (n < 0) {
    console.log("Vui lòng nhập số nguyên dương.");
    return;
  }
  if (count <= n) {
    console.log(a);
    fibonacci(n, b, a + b, count + 1);
  }
}
var n = 10;
fibonacci(n);
