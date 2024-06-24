var x = 5;
var currentNumber = 1;
var result = "";

for (var i = 1; i <= x; i++) {
  for (var j = 1; j <= i; j++) {
    result += currentNumber + " ";
    currentNumber++;
  }
  result += "\n";
}
console.log(result);
