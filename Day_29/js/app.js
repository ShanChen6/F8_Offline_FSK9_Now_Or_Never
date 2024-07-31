var list = document.querySelector(".slider .list");
var items = document.querySelectorAll(".slider .list .item");
var dots = document.querySelectorAll(".slider .dots li");
var prev = document.getElementById("prev");
var next = document.getElementById("next");

var active = 0;
var lengthItem = items.length - 1;

next.onclick = function () {
  if (active + 1 > lengthItem) {
    active = 0;
  } else {
    active = active + 1;
  }
  reloadSlider();
};
function reloadSlider() {
  var checkLeft = items[active].offsetLeft;
  list.style.left = -checkLeft + "px";
}
