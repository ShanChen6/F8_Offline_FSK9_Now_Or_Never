function buildNestedArray(arr) {
  // Tạo một đối tượng để lưu trữ các phần tử theo id
  var map = {};
  var result = [];

  // Khởi tạo các phần tử trong map
  arr.forEach(function (item) {
    map[item.id] = item;
    item.children = [];
  });

  // Xây dựng cấu trúc cây
  arr.forEach(function (item) {
    if (item.parent !== 0) {
      // Nếu item có parent, thêm nó vào mảng children của parent
      map[item.parent].children.push(item);
    } else {
      // Nếu item không có parent, thêm nó vào mảng kết quả
      result.push(item);
    }
  });

  // Loại bỏ các mảng children rỗng
  function removeEmptyChildren(node) {
    if (node.children.length === 0) {
      delete node.children;
    } else {
      node.children.forEach(removeEmptyChildren);
    }
  }

  result.forEach(removeEmptyChildren);

  return result;
}

function buildSelectOptions(data, prefix = "") {
  let options = "";
  data.forEach(function (item) {
    options += `<option value="${item.id}">${prefix}${item.name}</option>`;
    if (item.children && item.children.length > 0) {
      options += buildSelectOptions(item.children, prefix + "--|");
    }
  });
  return options;
}

// Ví dụ sử dụng
var flatArray = [
  {
    id: 1,
    name: "Chuyên mục 1",
    parent: 0,
  },
  {
    id: 2,
    name: "Chuyên mục 2",
    parent: 0,
  },
  {
    id: 3,
    name: "Chuyên mục 3",
    parent: 0,
  },
  {
    id: 4,
    name: "Chuyên mục 2.1",
    parent: 2,
  },
  {
    id: 5,
    name: "Chuyên mục 2.2",
    parent: 2,
  },
  {
    id: 6,
    name: "Chuyên mục 2.3",
    parent: 2,
  },
  {
    id: 7,
    name: "Chuyên mục 3.1",
    parent: 3,
  },
  {
    id: 8,
    name: "Chuyên mục 3.2",
    parent: 3,
  },
  {
    id: 9,
    name: "Chuyên mục 3.3",
    parent: 3,
  },
  {
    id: 10,
    name: "Chuyên mục 2.2.1",
    parent: 5,
  },
  {
    id: 11,
    name: "Chuyên mục 2.2.2",
    parent: 5,
  },
];

// var nestedArray = buildNestedArray(flatArray);
// console.log(JSON.stringify(nestedArray, null, 2));

var nestedArray = buildNestedArray(flatArray);
var options = buildSelectOptions(nestedArray);
document.getElementById("nestedSelect").innerHTML = options;
