function numberToWords(num) {
  if (num < 0 || num > 9999) {
    return "Số nằm ngoài phạm vi cho phép";
  }

  const units = [
    "không",
    "một",
    "hai",
    "ba",
    "bốn",
    "năm",
    "sáu",
    "bảy",
    "tám",
    "chín",
  ];

  function getUnit(number) {
    return units[number];
  }

  function convert(num) {
    var result = "";

    if (num === 0) {
      return getUnit(num);
    }

    var thousand = Math.floor(num / 1000);
    num %= 1000;
    if (thousand > 0) {
      result += getUnit(thousand) + " ngàn ";
    }

    var hundred = Math.floor(num / 100);
    num %= 100;
    if (hundred > 0 || thousand > 0) {
      result += getUnit(hundred) + " trăm ";
    }

    var ten = Math.floor(num / 10);
    var unit = num % 10;

    if (ten > 1) {
      result += getUnit(ten) + " mươi ";
      if (unit > 0) {
        result += getUnit(unit);
      }
    } else if (ten === 1) {
      result += "mười ";
      if (unit > 0) {
        result += getUnit(unit);
      }
    } else if (unit > 0) {
      result += getUnit(unit);
    }

    return result.trim();
  }

  return convert(num);
}

console.log(numberToWords(4298));
