var a = 10;
var b = 50;
var c = 30;
var max;
if  (a >= b && a >= c) {
    max = a;
} else if  (b >= a && b >= c) {
    max = b;
} else {
    max = c;
}

console.log(max);