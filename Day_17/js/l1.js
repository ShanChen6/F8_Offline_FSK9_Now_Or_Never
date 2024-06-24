var x = 121; // x là số km
var price_1 = 15000; // <= 1km
var price_2 = 13500; // 1 < x <= 5
var price_3 = 11000; // x > 5
var total = 0; // Tổng số tiền phải trả

if (x <= 0) {
  console.log(`status: 'fail'; message: x is not valid,`);
} else if (x <= 1) {
  total = x * price_1;
} else if (x <= 5) {
  total = price_1 + (x - 1) * price_2;
} else {
  total = price_1 + price_2 * 4 + (x - 5) * 11000;
}

if (x > 120) {
  total = total * (1 - 10 / 100);
}
console.log(`Tiền cước taxi cho ${x}km là: ${total} vnđ`);
