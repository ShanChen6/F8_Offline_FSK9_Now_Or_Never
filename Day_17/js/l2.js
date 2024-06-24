var x = 70; // Số điện
var price_1 = 1678;
var price_2 = 1734;
var price_3 = 2014;
var price_4 = 2536;
var price_5 = 2834;
var price_6 = 2927;

var total = 0;

if (x < 0) {
  console.log(`status: 'fail'; message: x is not valid,`);
} else if (x <= 50) {
  total = x * price_1;
} else if (x <= 100) {
  total = 50 * price_1 + (x - 50) * price_2;
} else if (x <= 200) {
  total = 50 * price_1 + 50 * price_2 + (x - 100) * price_3;
} else if (x <= 300) {
  total = 50 * price_1 + 50 * price_2 + 100 * price_3 + (x - 200) * price_4;
} else if (x <= 400) {
  total =
    50 * price_1 +
    50 * price_2 +
    100 * price_3 +
    100 * price_4 +
    (x - 300) * price_5;
} else {
  50 * price_1 +
    50 * price_2 +
    100 * price_3 +
    100 * price_4 +
    100 * price_5 +
    (x - 400) * price_6;
}

console.log(`Tổng số tiền phải trả cho ${x}kWh điện là ${total}vnđ`);
