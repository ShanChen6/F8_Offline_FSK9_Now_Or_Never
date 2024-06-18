var a = 1;
var b = 4;
var a = b + (b = a) - b;
// var b = a + (a = b) - b;

console.log(a);
console.log(b);