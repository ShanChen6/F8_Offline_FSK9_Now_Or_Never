Number.prototype.getCurrency = function (currency) {
  return this.toLocaleString() + " " + currency;
};

String.prototype.getCurrency = function (currency) {
  var number = parseFloat(this);
  if (isNaN(number)) {
    return "Error: Invalid number";
  }
  return number.toLocaleString() + " " + currency;
};

var price1 = 12000;
console.log(price1.getCurrency("đ"));

var price2 = "12000000";
console.log(price2.getCurrency("đ"));

var str = "abc";
console.log(str.getCurrency("đ"));
