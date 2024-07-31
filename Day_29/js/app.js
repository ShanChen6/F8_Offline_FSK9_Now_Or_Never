var list = document.querySelector(".slider .list");
var items = document.querySelectorAll(".slider .list .item");
var dots = document.querySelectorAll(".slider .dots li");
var prev = document.getElementById("prev");
var next = document.getElementById("next");

var active = 0;
var lengthItem = items.length - 1;
var startX = 0;
var isDragging = false;
var threshold = 100;

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

// Handle drag events
list.addEventListener("mousedown", (e) => {
  startX = e.pageX;
  isDragging = true;
  list.style.transition = "none";
  clearInterval(refreshSlider);
});

list.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  const diffX = e.pageX - startX;
  list.style.left = -items[active].offsetLeft + diffX + "px";
});

list.addEventListener("mouseup", (e) => {
  if (!isDragging) return;
  isDragging = false;
  const diffX = e.pageX - startX;

  if (diffX > 100 && active > 0) {
    active--;
  } else if (diffX < -100 && active < lengthItem) {
    active++;
  }

  reloadSlider();
  list.style.transition = "1s";
});

list.addEventListener("mouseleave", () => {
  if (!isDragging) return;
  isDragging = false;
  reloadSlider();
  list.style.transition = "1s";
});
