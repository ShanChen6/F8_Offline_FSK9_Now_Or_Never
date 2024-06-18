var a = 10;
var b = 20;
var c = 15;

if (a > b) {
    var temp = a;
    a = b;
    b = temp;
}
if (b > c) {
    var temp = b;
    b = c;
    c = temp;
}
if (a > b) {
    var temp = a;
    a = b;
    b = temp;
}

console.log(a, b, c); 
