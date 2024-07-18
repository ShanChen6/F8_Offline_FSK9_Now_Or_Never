Number.prototype.getCurrency = function (currency, locale = "en-EN") {
  return this.toLocaleString(locale) + " " + currency;
};

String.prototype.getCurrency = function (currency, locale = "en-EN") {
  var number = parseFloat(this);
  if (isNaN(number)) {
    return "Error: Invalid number";
  }
  return number.toLocaleString(locale) + " " + currency;
};

var price1 = 12000;
console.log(price1.getCurrency("đ"));

var price2 = "12000000";
console.log(price2.getCurrency("đ"));

var str = "abc";
console.log(str.getCurrency("đ"));
