function fibonacci(n, a = 0, b = 1, count = 1) {
  if (count <= n) {
    console.log(a);
    fibonacci(n, b, a + b, count + 1);
  }
}
var n = 10;
fibonacci(n);
