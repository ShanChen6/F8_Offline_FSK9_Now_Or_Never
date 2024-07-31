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

prev.onclick = function () {
  if ((active = 1 < 0)) {
    active = lengthItem;
  } else {
    active = active - 1;
  }
  reloadSlider();
};

var refreshSlider = setInterval(() => {
  next.click();
}, 5000);

function reloadSlider() {
  var checkLeft = items[active].offsetLeft;
  list.style.left = -checkLeft + "px";

  var lastActiveDot = document.querySelector(".slider .dots li.active");
  lastActiveDot.classList.remove("active");
  dots[active].classList.add("active");
  clearInterval(refreshSlider);
  refreshSlider = setInterval(() => {
    next.click();
  }, 5000);
}

dots.forEach((li, key) => {
  li.addEventListener("click", function () {
    active = key;
    reloadSlider();
  });
});
