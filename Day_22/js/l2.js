function result(nums1, nums2) {
  var merged = nums1.concat(nums2);
  function compare(a, b) {
    // console.log(merged);
    return a - b;
  }
  merged.sort(compare);
  var n = merged.length;
  //   console.log(n);
  if (n % 2 === 0) {
    var mid1 = merged[n / 2 - 1];
    var mid2 = merged[n / 2];
    // console.log((mid1 + mid2) / 2);
    return (mid1 + mid2) / 2;
  } else {
    // console.log(merged[Math.floor(n / 2)]);
    return merged[Math.floor(n / 2)];
  }
}

const nums1 = [1, 3];
const nums2 = [2];
const median = result(nums1, nums2);
console.log(`Trung vị của hai mảng là: ${median}`);
